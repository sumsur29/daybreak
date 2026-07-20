import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore } from '../state/store'
import { IconFeather, IconBook, IconLock, IconArrowRight } from '../icons/Icons'

const trackIcon = { 'poetry-foundations': IconFeather, 'short-story-craft': IconBook, 'imagery-metaphor': IconFeather, 'character-voice': IconLock }

export default function Learn() {
  const navigate = useNavigate()
  const { state } = useStore()
  const continueCourse = state.courses.find((c) => c.done > 0 && c.done < c.total)
  const continuePct = continueCourse ? Math.round((continueCourse.done / continueCourse.total) * 100) : 0
  const nextLesson = continueCourse?.lessons[continueCourse.done]

  return (
    <Screen withTabBar>
      <div style={{ padding: '20px 24px 6px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Learn
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--ink-strong)', marginTop: 5 }}>
          Courses &amp; craft
        </h2>
      </div>

      {continueCourse && (
        <button
          className="press"
          onClick={() => navigate(`/learn/${continueCourse.id}`)}
          style={{
            display: 'block',
            width: 'calc(100% - 40px)',
            textAlign: 'left',
            margin: '14px 20px 0',
            background: 'var(--accent-gradient)',
            color: '#fff',
            borderRadius: 22,
            padding: 20,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.9 }}>
            Continue · {continueCourse.title.toUpperCase()}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, marginTop: 8 }}>
            {nextLesson ? `Lesson ${continueCourse.done + 1} · ${nextLesson.title}` : ''}
          </div>
          <div style={{ marginTop: 14, height: 8, background: 'rgba(255,255,255,0.3)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: `${continuePct}%`, height: '100%', background: '#fff', borderRadius: 99 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, marginTop: 8 }}>
            <span>{continueCourse.done} of {continueCourse.total} lessons</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>Resume <IconArrowRight size={14} strokeWidth={2} /></span>
          </div>
        </button>
      )}

      <div style={{ padding: '22px 20px 8px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
        All tracks
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {state.courses.map((course) => {
          const locked = !!course.unlockLevel && state.profile.level < course.unlockLevel
          const Icon = trackIcon[course.id] || IconFeather
          const pct = course.total ? Math.round((course.done / course.total) * 100) : 0
          return (
            <button
              key={course.id}
              className="press"
              disabled={locked}
              onClick={() => !locked && navigate(`/learn/${course.id}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                textAlign: 'left',
                background: locked ? 'oklch(0.97 0.008 70)' : '#fff',
                border: '1px solid var(--card-border)',
                borderRadius: 18,
                padding: '15px 16px',
                opacity: locked ? 0.8 : 1,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 13,
                  background: locked ? 'oklch(0.94 0.01 65)' : 'var(--accent-tint)',
                  color: locked ? 'oklch(0.6 0.02 60)' : 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 'none',
                }}
              >
                {locked ? <IconLock size={20} strokeWidth={1.8} /> : <Icon size={22} strokeWidth={1.7} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15.5, color: locked ? 'oklch(0.45 0.02 55)' : 'oklch(0.3 0.03 55)' }}>
                  {course.title}
                </div>
                {locked ? (
                  <div style={{ fontSize: 11, color: 'oklch(0.6 0.02 55)', marginTop: 4, fontWeight: 600 }}>
                    Unlocks at Level {course.unlockLevel}
                  </div>
                ) : course.done > 0 ? (
                  <>
                    <div style={{ height: 5, background: 'oklch(0.94 0.02 65)', borderRadius: 99, marginTop: 8, overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: 'var(--accent)' }} />
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 5, fontWeight: 600 }}>
                      {course.done} / {course.total} lessons · In progress
                    </div>
                  </>
                ) : (
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, fontWeight: 600 }}>
                    {course.total} lessons · Not started
                  </div>
                )}
              </div>
              {!locked && course.done === 0 && (
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)' }}>Start</div>
              )}
            </button>
          )
        })}
      </div>
    </Screen>
  )
}
