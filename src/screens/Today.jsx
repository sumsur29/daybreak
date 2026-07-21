import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore, getTodaySession } from '../state/store'
import { IconFeather, IconBook, IconSunRays, IconArrowRight, IconRevisit } from '../icons/Icons'

export default function Today() {
  const navigate = useNavigate()
  const { state, setTodayGenre } = useStore()
  const { profile, streak, todayGenre, sessionProgress, yesterdayPiece } = state
  const content = getTodaySession(state)
  const xpPct = Math.min(100, Math.round((profile.xp / profile.xpToNext) * 100))
  const sessionDone = sessionProgress.completedToday

  return (
    <Screen withTabBar>
      {/* hero band */}
      <div
        style={{
          margin: '10px 18px 0',
          background: 'var(--accent-gradient)',
          borderRadius: 26,
          padding: '13px 22px',
          color: '#fff',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 23,
                fontWeight: 700,
                lineHeight: 1.1,
                display: 'flex',
                alignItems: 'center',
                gap: 9,
              }}
            >
              Hi {profile.name.split(' ')[0]}! <IconSunRays size={24} strokeWidth={1.8} />
            </div>
            <div style={{ fontSize: 14, opacity: 0.92, marginTop: 6 }}>Ready for today's writing?</div>
          </div>
          <div
            className="press"
            onClick={() => navigate('/progress')}
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.22)',
              border: '3px solid #fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, lineHeight: 1 }}>
              {streak.current}
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.05em' }}>DAYS</div>
          </div>
        </div>
        <div
          className="press"
          onClick={() => navigate('/progress')}
          style={{ marginTop: 16, cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, marginBottom: 5 }}>
            <span>Level {profile.level} · {profile.title}</span>
            <span>{profile.xp} / {profile.xpToNext} XP</span>
          </div>
          <div style={{ height: 8, background: 'rgba(255,255,255,0.3)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: `${xpPct}%`, height: '100%', background: '#fff', borderRadius: 99 }} />
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.85, marginTop: 8, textAlign: 'right' }}>
            View progress ›
          </div>
        </div>
      </div>

      {/* genre chooser */}
      <div style={{ padding: '12px 20px 8px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'oklch(0.3 0.03 55)', marginBottom: 12 }}>
          Today I want to write…
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            className="press"
            onClick={() => setTodayGenre('poem')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '18px 18px',
              borderRadius: 20,
              background: todayGenre === 'poem' ? 'var(--accent)' : 'oklch(0.96 0.02 65)',
              color: todayGenre === 'poem' ? '#fff' : 'oklch(0.42 0.05 45)',
              boxShadow: todayGenre === 'poem' ? 'var(--shadow-button)' : 'none',
            }}
          >
            <IconFeather size={26} strokeWidth={1.7} />
            <div style={{ fontSize: 15, fontWeight: 700 }}>Poem</div>
          </button>
          <button
            className="press"
            onClick={() => setTodayGenre('story')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '18px 18px',
              borderRadius: 20,
              background: todayGenre === 'story' ? 'var(--accent)' : 'oklch(0.96 0.02 65)',
              color: todayGenre === 'story' ? '#fff' : 'oklch(0.42 0.05 45)',
              boxShadow: todayGenre === 'story' ? 'var(--shadow-button)' : 'none',
            }}
          >
            <IconBook size={26} strokeWidth={1.7} />
            <div style={{ fontSize: 15, fontWeight: 700 }}>Story</div>
          </button>
        </div>
      </div>

      {/* today's session card */}
      <div
        style={{
          margin: '12px 20px 0',
          background: '#fff',
          borderRadius: 24,
          padding: 22,
          boxShadow: 'var(--shadow-card)',
          border: '1px solid var(--card-border)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            Today's session · {content.eyebrow}
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-tint)', padding: '5px 10px', borderRadius: 99 }}>
            {sessionDone ? 'Done ✓' : `+${content.xp} XP`}
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'oklch(0.28 0.03 55)', marginTop: 12, lineHeight: 1.2 }}>
          {content.title}
        </div>
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <AgendaStep n={1} title="Read the lesson" subtitle={content.lessonStepLabel} filled={sessionProgress.step >= 1 || sessionDone} />
          <AgendaStep n={2} title="Study today's example" subtitle="See the technique in the wild" filled={sessionProgress.step >= 2 || sessionDone} />
          <AgendaStep n={3} title="Write from a prompt" subtitle="Your turn" filled={sessionProgress.step >= 3 || sessionDone} />
        </div>
        <button
          className="press"
          onClick={() => navigate(sessionDone ? '/practice' : '/session/lesson')}
          style={{
            width: '100%',
            marginTop: 20,
            background: 'var(--accent)',
            color: '#fff',
            textAlign: 'center',
            padding: 15,
            borderRadius: 16,
            fontWeight: 700,
            fontSize: 15,
            boxShadow: 'var(--shadow-button)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          {sessionDone ? 'Go to practice' : 'Begin session'} <IconArrowRight size={18} />
        </button>
      </div>

      {/* revisit yesterday */}
      {yesterdayPiece && (
        <button
          className="press"
          onClick={() => navigate(`/you/${yesterdayPiece.id}`)}
          style={{
            margin: '12px 20px 0',
            width: 'calc(100% - 40px)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#fff',
            border: '1px solid var(--card-border)',
            borderRadius: 18,
            padding: '14px 16px',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: 'var(--accent-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              flex: 'none',
            }}
          >
            <IconRevisit size={20} strokeWidth={1.8} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'oklch(0.6 0.06 45)', letterSpacing: '0.05em' }}>
              Finish yesterday
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'oklch(0.3 0.03 55)' }}>
              "{yesterdayPiece.title}"
            </div>
          </div>
          <span style={{ color: 'var(--accent)', fontSize: 18, fontWeight: 700 }}>→</span>
        </button>
      )}    </Screen>
  )
}

function AgendaStep({ n, title, subtitle, filled }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: filled ? 'var(--accent)' : 'transparent',
          border: filled ? 'none' : '1.5px solid oklch(0.8 0.06 45)',
          color: filled ? '#fff' : 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 13,
          flex: 'none',
        }}
      >
        {n}
      </span>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'oklch(0.3 0.03 55)' }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>{subtitle}</div>
      </div>
    </div>
  )
}
