import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore } from '../state/store'
import { IconFlame, IconCheck, IconArrowRight, IconLock, IconMoon } from '../icons/Icons'
import { wordsOfTheDay } from '../data/lexicon'

// The Learn screen is a plate developing in a darkroom: each course carries a
// public-domain masterwork that emerges from the ink as you finish its lessons.
// Complete the course, complete the painting.

// Vendored locally under public/art/ so they load offline and don't depend on
// Wikimedia. All three are public-domain (Van Gogh d.1890, Hokusai d.1849).
const ART = {
  'poetry-foundations': { img: `${import.meta.env.BASE_URL}art/starry-night.jpg`, credit: 'Vincent van Gogh · The Starry Night · 1889' },
  'short-story-craft': { img: `${import.meta.env.BASE_URL}art/great-wave.jpg`, credit: 'Katsushika Hokusai · The Great Wave off Kanagawa · 1831' },
  'imagery-metaphor': { img: `${import.meta.env.BASE_URL}art/irises.jpg`, credit: 'Vincent van Gogh · Irises · 1889' },
  // TODO(vendor): download into public/art/nayika.jpg and switch to `${import.meta.env.BASE_URL}art/nayika.jpg` like the others.
  'ghazal-sher': { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brooklyn%20Museum%20-%20A%20Nayika%20Awaits%20Her%20Lover.jpg', credit: 'Indian miniature · A Nayika Awaits Her Lover · Brooklyn Museum' },
}
const SHORT = { 'poetry-foundations': 'Poetry', 'short-story-craft': 'Short Story', 'imagery-metaphor': 'Imagery', 'ghazal-sher': 'Ghazal', 'character-voice': 'Character' }

export default function Learn() {
  const navigate = useNavigate()
  const { state } = useStore()
  const { courses, profile, streak } = state
  const isLocked = (c) => !!c.unlockLevel && profile.level < c.unlockLevel

  const defaultId = useMemo(() => {
    const inProgress = courses.find((c) => c.lessons.length > 0 && c.done > 0 && c.done < c.total)
    if (inProgress) return inProgress.id
    const firstOpen = courses.find((c) => c.lessons.length > 0 && !isLocked(c))
    return (firstOpen || courses[0]).id
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [sel, setSel] = useState(defaultId)
  const [imgError, setImgError] = useState({})
  const course = courses.find((c) => c.id === sel) || courses[0]

  const total = course.total
  const d = course.done
  const p = total ? d / total : 0
  const complete = total > 0 && d >= total
  const remaining = total - d
  const art = ART[course.id]
  const hasLessons = course.lessons.length > 0
  const curIdx = course.lessons.findIndex((l) => !l.done)
  const status = complete
    ? 'the painting is finished'
    : remaining === 1 ? 'one lesson to finish the painting' : `${remaining} lessons to finish the painting`
  const inkTop = `calc(${((1 - p) * 100).toFixed(2)}% + 4px)`

  return (
    <Screen withTabBar>
      {/* word of the day → glossary */}
      <WordStrip navigate={navigate} pair={wordsOfTheDay(state.sessionDay || new Date().toISOString().slice(0, 10))} savedCount={Object.keys(state.glossary || {}).length} />

      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>Learn</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--accent)', fontWeight: 800, fontSize: 13 }}>
          <IconFlame size={17} /> {streak.current}
        </div>
      </div>

      {/* course tabs */}
      <div style={{ display: 'flex', gap: 18, overflowX: 'auto', padding: '16px 24px 0' }}>
        {courses.map((c) => {
          const locked = isLocked(c)
          const active = c.id === sel
          return (
            <button key={c.id} className="press" onClick={() => !locked && setSel(c.id)} style={{
              flex: 'none', background: 'none', border: 'none', padding: '0 0 8px', cursor: locked ? 'default' : 'pointer',
              fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: active ? 700 : 500,
              color: active ? 'var(--ink-strong)' : locked ? 'oklch(0.78 0.01 60)' : 'var(--muted)',
              borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              {locked && <IconLock size={12} strokeWidth={2} />}{SHORT[c.id] || c.title}
            </button>
          )
        })}
      </div>
      <div style={{ height: 1, background: 'var(--card-border)' }} />

      {isLocked(course) || !hasLessons ? (
        <div style={{ padding: '86px 30px', textAlign: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--muted)', lineHeight: 1.5 }}>
          The canvas for {course.title} is still blank.{course.unlockLevel ? ` It's unveiled at Level ${course.unlockLevel}.` : ''}
        </div>
      ) : (
        <>
          {/* status line */}
          <div style={{ padding: '16px 24px 10px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>{course.title}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, color: 'var(--ink-strong)', marginTop: 3 }}>{status}</div>
          </div>

          {/* the painting, developing out of the ink */}
          <div style={{ position: 'relative', margin: '0 24px', height: 208, borderRadius: 20, overflow: 'hidden', background: 'oklch(0.22 0.07 264)', boxShadow: '0 10px 30px oklch(0.3 0.06 260 / 0.22)' }}>
            {art && !imgError[course.id] && (
              <img src={art.img} alt={art.credit} referrerPolicy="no-referrer" onError={() => setImgError((e) => ({ ...e, [course.id]: true }))} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            )}
            <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: inkTop, background: 'linear-gradient(180deg, oklch(0.20 0.07 268) 0%, oklch(0.24 0.08 262) 72%, oklch(0.30 0.09 258 / 0) 100%)', transition: 'height .6s ease', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, top: `${((1 - p) * 100).toFixed(2)}%`, height: 2, background: 'oklch(0.82 0.11 250)', opacity: 0.55, transition: 'top .6s ease', pointerEvents: 'none' }} />
            {(imgError[course.id] || !art) && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 18, color: '#fff' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, opacity: 0.92 }}>{art ? art.credit : course.title}</div>
              </div>
            )}
          </div>
          {art && <div style={{ padding: '8px 24px 0', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.04em', color: 'oklch(0.62 0.02 60)', textAlign: 'right' }}>{art.credit}</div>}

          {/* course completion */}
          <div style={{ padding: '14px 24px 0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15.5, fontWeight: 700, color: 'var(--ink-strong)' }}>{complete ? 'Course complete' : `${d} of ${total} lessons`}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--muted)' }}>{Math.round(p * 100)}%</div>
            </div>
            <div style={{ height: 4, background: 'oklch(0.92 0.015 65)', borderRadius: 99, marginTop: 10, overflow: 'hidden' }}>
              <div style={{ width: `${p * 100}%`, height: '100%', background: 'var(--accent)', borderRadius: 99, transition: 'width .5s ease' }} />
            </div>
          </div>

          {/* lessons */}
          <div style={{ padding: '18px 24px 30px' }}>
            {course.lessons.map((lesson, i) => {
              const isDone = lesson.done
              const isCur = i === curIdx
              return (
                <button key={lesson.id} className="press" onClick={() => navigate(`/learn/${course.id}/${lesson.id}`)} style={{
                  display: 'flex', alignItems: 'center', gap: 13, width: '100%', textAlign: 'left', background: 'none', border: 'none',
                  borderBottom: '1px solid var(--card-border)', padding: '13px 0', cursor: 'pointer',
                }}>
                  <span style={{ width: 23, height: 23, borderRadius: '50%', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: isDone ? 'var(--accent)' : 'transparent', border: isCur ? '1.5px solid var(--accent)' : isDone ? 'none' : '1.5px solid var(--card-border)', color: '#fff' }}>
                    {isDone ? <IconCheck size={12} strokeWidth={3} /> : <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: isCur ? 'var(--accent)' : 'oklch(0.8 0.01 60)' }}>{i + 1}</span>}
                  </span>
                  <span style={{ flex: 1, fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: isCur ? 600 : 400, color: isDone ? 'var(--ink)' : isCur ? 'var(--ink-strong)' : 'oklch(0.63 0.02 60)' }}>{lesson.title}</span>
                  {isCur && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--accent)', fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13 }}>Begin <IconArrowRight size={13} strokeWidth={2.2} /></span>}
                </button>
              )
            })}
          </div>
        </>
      )}
    </Screen>
  )
}

// Slim Word-of-day teaser at the top of Learn — the doorway to the Glossary.
// Shows today's two words; tap to open the full /glossary room.
function WordStrip({ navigate, pair, savedCount }) {
  return (
    <button
      className="press"
      onClick={() => navigate('/glossary')}
      style={{ display: 'flex', alignItems: 'center', gap: 12, width: 'calc(100% - 40px)', margin: '14px 20px 0', background: '#fff', border: '1px solid var(--card-border)', borderRadius: 18, padding: '12px 14px', textAlign: 'left' }}
    >
      <div style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <IconMoon size={19} strokeWidth={1.8} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)' }}>Word of the day</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'oklch(0.28 0.03 55)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {pair.urdu.word} · {pair.english.word}
        </div>
      </div>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: 'var(--accent)', flex: 'none' }}>
        {savedCount > 0 ? `Glossary · ${savedCount}` : 'Glossary'} <IconArrowRight size={14} strokeWidth={2.2} />
      </span>
    </button>
  )
}
