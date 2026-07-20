import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import SessionProgressHeader from '../components/SessionProgressHeader'
import { useStore } from '../state/store'
import { sessionContent } from '../data/seed'
import { IconFeather } from '../icons/Icons'

export default function SessionLesson() {
  const navigate = useNavigate()
  const { state, setSessionStep } = useStore()
  const content = sessionContent[state.todayGenre]
  const { lesson } = content

  const goNext = () => {
    setSessionStep(2)
    navigate('/session/example')
  }

  return (
    <Screen>
      <SessionProgressHeader
        eyebrow={`${content.eyebrow.toUpperCase()} · SESSION`}
        stepLabel="Step 1 of 3"
        pct={33}
        onBack={() => navigate('/')}
      />

      <div style={{ padding: '24px 24px 0' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--accent)',
            background: 'var(--accent-tint)',
            padding: '6px 11px',
            borderRadius: 99,
          }}
        >
          <IconFeather size={13} strokeWidth={1.9} />
          {lesson.chip}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 700, color: 'var(--ink-strong)', marginTop: 14, lineHeight: 1.15 }}>
          {content.title}
        </h2>
        {lesson.paragraphs.map((p, i) => (
          <p key={i} style={{ fontSize: 15.5, lineHeight: 1.7, color: 'oklch(0.4 0.03 55)', marginTop: i === 0 ? 14 : 12 }}>
            {p}
          </p>
        ))}
        <div
          style={{
            marginTop: 20,
            background: '#fff',
            border: '1px solid var(--card-border)',
            borderLeft: '3px solid var(--accent)',
            borderRadius: 14,
            padding: '16px 18px',
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'oklch(0.6 0.06 45)', letterSpacing: '0.05em', marginBottom: 8 }}>
            {lesson.noticeLabel}
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--prompt-ink)', lineHeight: 1.9 }}>
            {lesson.noticeLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
            <span style={{ color: 'var(--accent)' }}>{lesson.noticeHighlight}</span>
          </div>
        </div>
        <div style={{ height: 120 }} />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px 22px calc(env(safe-area-inset-bottom, 0px) + 30px)',
          background: 'linear-gradient(to top, var(--canvas) 72%, transparent)',
        }}
      >
        <button
          className="press"
          onClick={goNext}
          style={{
            width: '100%',
            background: 'var(--accent)',
            color: '#fff',
            textAlign: 'center',
            padding: 16,
            borderRadius: 16,
            fontWeight: 700,
            fontSize: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            boxShadow: 'var(--shadow-button)',
          }}
        >
          Next: study {state.todayGenre === 'poem' ? 'a poem' : 'a story'}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </Screen>
  )
}
