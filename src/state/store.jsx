import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { buildInitialState, titleForLevel } from '../data/seed'

const STORAGE_KEY = 'daybreak_state_v1'
const StoreContext = createContext(null)

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return buildInitialState()
    const parsed = JSON.parse(raw)
    // shallow-merge with seed so newly added fields still exist for returning users
    return { ...buildInitialState(), ...parsed }
  } catch {
    return buildInitialState()
  }
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
  const finishWriting = useCallback(({ title, genre, body, isDailySession, replaceId }) => {
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

        const week = streak.week.map((d) => (d.status === 'today' ? { ...d, status: 'done' } : d))
        streak = { ...streak, current: streak.current + 1, best: Math.max(streak.best, streak.current + 1), week }
        sessionProgress = { step: 3, completedToday: true }

        // nudge the relevant skill up slightly, capped at 5
        const skillName = genre === 'poem' ? 'Line breaks' : 'Dialogue'
        skills = s.skills.map((sk) => (sk.name === skillName && sk.rating < 5 ? { ...sk, rating: sk.rating + 1 } : sk))
      }

      return { ...s, portfolio, profile, streak, sessionProgress, stats, skills }
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

  const startCourseLesson = useCallback((courseId, lessonId) => {
    setState((s) => {
      const courses = s.courses.map((c) => {
        if (c.id !== courseId) return c
        const lessons = c.lessons.map((l) => (l.id === lessonId ? { ...l, done: true } : l))
        const done = lessons.filter((l) => l.done).length
        return { ...c, lessons, done }
      })
      return { ...s, courses }
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
      startCourseLesson,
      wordsInText,
      linesInText,
    }),
    [state, completeOnboarding, setTodayGenre, setSessionStep, saveDraft, finishWriting, saveDraftPiece, startCourseLesson]
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
