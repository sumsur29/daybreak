import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { buildInitialState, titleForLevel } from '../data/seed'
import { buildSessionFromLesson, pickTodayLessonId, SESSION_ORDER, getLessonBlocks } from '../data/lessons'

const STORAGE_KEY = 'daybreak_state_v2'
const StoreContext = createContext(null)

// The "Daybreak day" rolls over at 06:00 Dubai time (GST, UTC+4), not local
// midnight. We compute it by shifting to UTC+4, then back by 6 hours, so any
// instant before 6am Dubai still counts as the previous day. Returns YYYY-MM-DD.
function todayKey() {
  const now = new Date()
  // shift to Dubai (UTC+4), then subtract 6h so the date flips at 6am not midnight
  const dubaiMinus6 = new Date(now.getTime() + (4 * 60 - 6 * 60) * 60 * 1000)
  return dubaiMinus6.toISOString().slice(0, 10)
}

// The set of lesson ids the user has completed (via Learn or a daily session).
function doneLessonIds(s) {
  const set = new Set()
  s.courses.forEach((c) => c.lessons.forEach((l) => l.done && set.add(l.id)))
  return set
}

// Flip a lesson to done and refresh its course's done-count. No XP side effects
// (used when a daily session completes, where session XP is handled separately).
function markLessonDone(courses, lessonId) {
  return courses.map((c) => {
    if (!c.lessons.some((l) => l.id === lessonId)) return c
    const lessons = c.lessons.map((l) => (l.id === lessonId ? { ...l, done: true } : l))
    return { ...c, lessons, done: lessons.filter((l) => l.done).length }
  })
}

// Today's session = the next uncompleted lesson in the genre's order. Once every
// lesson is done, rotate by the Daybreak day so replays still vary.
export function getTodaySession(s, genreArg) {
  const genre = genreArg || s.todayGenre
  const done = doneLessonIds(s)
  let id = pickTodayLessonId(done, genre)
  if (!id) {
    const order = SESSION_ORDER[genre] || SESSION_ORDER.poem
    const dayNum = Math.floor(Date.parse(todayKey()) / 86400000)
    id = order[dayNum % order.length]
  }
  return buildSessionFromLesson(id, genre)
}

// Advances the streak at most once per calendar day, whatever the activity
// (daily session OR completing a lesson). Idempotent: calling it twice in one
// day is a no-op. Returns the updated { streak, lastActiveDate } slice.
function markTodayActive(s) {
  const today = todayKey()
  if (s.lastActiveDate === today) {
    return { streak: s.streak, lastActiveDate: today } // already counted today
  }
  const week = s.streak.week
    ? s.streak.week.map((d) => (d.status === 'today' ? { ...d, status: 'done' } : d))
    : s.streak.week
  const current = s.streak.current + 1
  const streak = { ...s.streak, current, best: Math.max(s.streak.best, current), week }
  return { streak, lastActiveDate: today }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return buildInitialState()
    const parsed = JSON.parse(raw)
    // shallow-merge with seed so newly added fields still exist for returning users
    return rolloverIfNewDay({ ...buildInitialState(), ...parsed })
  } catch {
    return buildInitialState()
  }
}

// If the Daybreak day (6am Dubai boundary) has advanced since the last session,
// reset today's session so a fresh one is available. Also breaks the streak if
// more than one day was skipped.
function rolloverIfNewDay(s) {
  const today = todayKey()
  if (s.sessionDay === today) return s // still the same Daybreak day

  // fresh session for the new day
  const sessionProgress = { step: 0, completedToday: false, practiceDone: false, recap: null }

  // streak: if the last active day wasn't yesterday, the run is broken
  let streak = s.streak
  if (s.lastActiveDate) {
    const y = new Date()
    const yKey = new Date(y.getTime() + (4 * 60 - 6 * 60) * 60 * 1000 - 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10)
    if (s.lastActiveDate !== yKey && s.lastActiveDate !== today) {
      streak = { ...streak, current: 0 }
    }
  }

  return { ...s, sessionDay: today, sessionProgress, streak }
}

export function StoreProvider({ children }) {
  const [state, setState] = useState(loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // storage unavailable (private mode / quota) — fail silently, session still works
    }
  }, [state])

  // If the app is left open across the 6am Dubai rollover, refresh the session.
  useEffect(() => {
    const check = () => setState((s) => rolloverIfNewDay(s))
    const id = setInterval(check, 60 * 1000) // check each minute
    const onVisible = () => document.visibilityState === 'visible' && check()
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  const completeOnboarding = useCallback((name) => {
    setState((s) => ({
      ...s,
      onboarded: true,
      profile: { ...s.profile, name: name.trim() || 'Writer' },
    }))
  }, [])

  const setTodayGenre = useCallback((genre) => {
    setState((s) => ({ ...s, todayGenre: genre }))
  }, [])

  const setSessionStep = useCallback((step) => {
    setState((s) => ({ ...s, sessionProgress: { ...s.sessionProgress, step } }))
  }, [])

  const saveDraft = useCallback((key, text) => {
    setState((s) => ({
      ...s,
      drafts: { ...s.drafts, [key]: { text, updatedAt: new Date().toISOString() } },
    }))
  }, [])

  const wordsInText = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0)
  const linesInText = (text) => (text.trim() ? text.split('\n').filter((l) => l.trim().length > 0).length : 0)

  // Completes a piece of writing: saves it to the portfolio and (for the daily ritual) awards XP + streak.
  // If replaceId is set (resuming an existing draft), that draft entry is replaced rather than duplicated.
  const finishWriting = useCallback(({ title, genre, body, isDailySession, isTodayExtra, replaceId }) => {
    setState((s) => {
      let profile = s.profile
      let streak = s.streak
      let sessionProgress = s.sessionProgress
      let stats = s.stats
      let skills = s.skills

      const piece = {
        id: replaceId || `p-${Date.now()}`,
        title: title || 'Untitled',
        genre,
        status: 'finished',
        body,
        date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        updatedAt: new Date().toISOString(),
      }

      const portfolio = replaceId
        ? [piece, ...s.portfolio.filter((p) => p.id !== replaceId)]
        : [piece, ...s.portfolio]

      stats = {
        ...stats,
        pieces: replaceId ? stats.pieces : stats.pieces + 1,
        lessons: isDailySession ? stats.lessons + 1 : stats.lessons,
      }

      let courses = s.courses

      if (isDailySession) {
        let xp = profile.xp + sessionContentXp(s)
        let level = profile.level
        let xpToNext = profile.xpToNext
        if (xp >= xpToNext) {
          xp -= xpToNext
          level += 1
          xpToNext = Math.round(xpToNext * 1.15)
        }
        profile = { ...profile, xp, level, xpToNext, title: titleForLevel(level) }

        const marked = markTodayActive(s)
        streak = marked.streak
        s = { ...s, lastActiveDate: marked.lastActiveDate, sessionDay: todayKey() }
        sessionProgress = { step: 3, completedToday: true, practiceDone: false, recap: null }

        // mark the lesson today's session was drawn from as done, so tomorrow
        // advances to the next uncompleted lesson in order. Pin its recap so the
        // Today card can show it once the day's practice is also finished.
        const sess = getTodaySession(s, genre)
        if (sess && sess.lessonId) {
          courses = markLessonDone(courses, sess.lessonId)
          const rich = getLessonBlocks(sess.lessonId)
          const rc = rich && rich.blocks.find((b) => b.type === 'recap')
          if (rc) sessionProgress = { ...sessionProgress, recap: { title: sess.title, heading: rc.heading, points: rc.points } }
        }

        // nudge the relevant skill up slightly, capped at 5
        const skillName = genre === 'poem' ? 'Line breaks' : 'Dialogue'
        skills = s.skills.map((sk) => (sk.name === skillName && sk.rating < 5 ? { ...sk, rating: sk.rating + 1 } : sk))
      }

      // Extra prompt practice done from Today (after the day's session) — saves
      // the piece (handled above) and flips the day into its recap stage.
      if (isTodayExtra) {
        sessionProgress = { ...sessionProgress, practiceDone: true }
      }

      return { ...s, portfolio, profile, streak, sessionProgress, stats, skills, courses }
    })
  }, [])

  const saveDraftPiece = useCallback(({ title, genre, body, replaceId }) => {
    setState((s) => {
      const piece = {
        id: replaceId || `p-${Date.now()}`,
        title: title || 'Untitled',
        genre,
        status: 'draft',
        body,
        date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        updatedAt: new Date().toISOString(),
      }
      const portfolio = replaceId
        ? [piece, ...s.portfolio.filter((p) => p.id !== replaceId)]
        : [piece, ...s.portfolio]
      return { ...s, portfolio }
    })
  }, [])

  const markPracticeDone = useCallback(() => {
    setState((s) => ({ ...s, sessionProgress: { ...s.sessionProgress, practiceDone: true } }))
  }, [])

  const startCourseLesson = useCallback((courseId, lessonId, recap) => {
    setState((s) => {
      let alreadyDone = false
      const courses = s.courses.map((c) => {
        if (c.id !== courseId) return c
        const lessons = c.lessons.map((l) => {
          if (l.id === lessonId) {
            if (l.done) alreadyDone = true
            return { ...l, done: true }
          }
          return l
        })
        const done = lessons.filter((l) => l.done).length
        return { ...c, lessons, done }
      })

      // First completion of a lesson awards XP (and can level up).
      let profile = s.profile
      let stats = s.stats
      if (!alreadyDone) {
        const LESSON_XP = 20
        let xp = profile.xp + LESSON_XP
        let level = profile.level
        let xpToNext = profile.xpToNext
        if (xp >= xpToNext) {
          xp -= xpToNext
          level += 1
          xpToNext = Math.round(xpToNext * 1.15)
        }
        profile = { ...profile, xp, level, xpToNext, title: titleForLevel(level) }
        stats = { ...stats, lessons: stats.lessons + 1 }
      }

      // Doing anything today keeps the streak alive — the gesture counts,
      // whether it's a fresh lesson or a replay. Idempotent per calendar day.
      const marked = markTodayActive(s)

      // Save the lesson's recap so it can be revisited from the profile.
      // Keyed by lessonId so re-completing updates rather than duplicates.
      let savedRecaps = s.savedRecaps || []
      if (recap && recap.points && recap.points.length) {
        const entry = {
          lessonId,
          courseId,
          courseTitle: recap.courseTitle || '',
          lessonTitle: recap.lessonTitle || '',
          heading: recap.heading || 'Recap',
          points: recap.points,
          savedAt: new Date().toISOString(),
        }
        savedRecaps = [entry, ...savedRecaps.filter((r) => r.lessonId !== lessonId)]
      }

      return { ...s, courses, profile, stats, streak: marked.streak, lastActiveDate: marked.lastActiveDate, savedRecaps }
    })
  }, [])

  const value = useMemo(
    () => ({
      state,
      completeOnboarding,
      setTodayGenre,
      setSessionStep,
      saveDraft,
      finishWriting,
      saveDraftPiece,
      markPracticeDone,
      startCourseLesson,
      wordsInText,
      linesInText,
    }),
    [state, completeOnboarding, setTodayGenre, setSessionStep, saveDraft, finishWriting, saveDraftPiece, markPracticeDone, startCourseLesson]
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

function sessionContentXp(s) {
  // fixed at 50 per the design's "+50 XP" pill; kept as a function in case per-genre XP diverges later
  return 50
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within a StoreProvider')
  return ctx
}
