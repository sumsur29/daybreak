import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import SessionProgressHeader from '../components/SessionProgressHeader'
import { useStore, getTodaySession } from '../state/store'
import { IconBook } from '../icons/Icons'

export default function SessionExample() {
  const navigate = useNavigate()
  const { state, setSessionStep } = useStore()
  const content = getTodaySession(state)
  const { example } = content

  const goNext = () => {
    setSessionStep(3)
    navigate('/session/write')
  }

  return (
    <Screen>
      <SessionProgressHeader
        eyebrow={`${content.eyebrow.toUpperCase()} · SESSION`}
        stepLabel="Step 2 of 3"
        pct={66}
        onBack={() => navigate('/session/lesson')}
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
          <IconBook size={13} strokeWidth={1.9} />
          {example.title}
        </div>

        <div
          style={{
            marginTop: 16,
            background: 'var(--accent-gradient)',
            color: '#fff',
            borderRadius: 22,
            padding: '22px 22px 24px',
          }}
        >
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, marginBottom: 12 }}>
            {example.poemTitle}
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.9 }}>
            {example.lines.map((line, i) =>
              line === '' ? <div key={i} style={{ height: 12 }} /> : <div key={i}>{line}</div>
            )}
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            background: '#fff',
            border: '1px solid var(--card-border)',
            borderLeft: '3px solid var(--accent)',
            borderRadius: 14,
            padding: '16px 18px',
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'oklch(0.6 0.06 45)', letterSpacing: '0.05em', marginBottom: 8 }}>
            What to notice
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'oklch(0.4 0.03 55)' }}>{example.note}</p>
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
          Next: write from a prompt
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </Screen>
  )
}
