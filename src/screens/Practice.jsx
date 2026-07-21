import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore } from '../state/store'
import { IconPencilPage, IconFeather, IconBook, IconMoon } from '../icons/Icons'

const segments = ['Prompts', 'Drills', 'Sprints']

export default function Practice() {
  const navigate = useNavigate()
  const { state } = useStore()
  const [segment, setSegment] = useState('Prompts')

  const list = state.practice.prompts.filter((p) => {
    if (segment === 'Prompts') return p.kind === 'poem' || p.kind === 'story' || p.kind === 'sher'
    if (segment === 'Drills') return p.kind === 'drill'
    return true // Sprints: reuse the same pool as a stand-in until timed sprints are added
  })

  return (
    <Screen withTabBar>
      <div style={{ padding: '20px 24px 6px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Practice
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--ink-strong)', marginTop: 5 }}>
          Warm up, any time
        </h2>
      </div>

      <div style={{ margin: '14px 20px 0', display: 'flex', background: '#fff', border: '1px solid oklch(0.93 0.02 65)', borderRadius: 14, padding: 5 }}>
        {segments.map((s) => (
          <button
            key={s}
            className="press"
            onClick={() => setSegment(s)}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 10,
              borderRadius: 10,
              background: segment === s ? 'var(--accent)' : 'transparent',
              color: segment === s ? '#fff' : 'var(--muted)',
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        className="press"
        onClick={() => navigate('/write?mode=freewrite')}
        style={{
          display: 'block',
          width: 'calc(100% - 40px)',
          margin: '16px 20px 0',
          background: '#fff',
          border: '1.5px dashed oklch(0.8 0.06 45)',
          borderRadius: 20,
          padding: 20,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'var(--accent-tint)',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <IconPencilPage size={22} strokeWidth={1.8} />
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, color: 'oklch(0.28 0.03 55)', marginTop: 12 }}>
          Freewrite
        </div>
        <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>Blank page, no rules. Just go.</div>
        <div style={{ marginTop: 14, display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '11px 22px', borderRadius: 12, fontWeight: 700, fontSize: 14 }}>
          Start blank
        </div>
      </button>

      <div style={{ padding: '22px 20px 8px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
        Today's prompts
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {list.map((p) => {
          const isPoem = p.kind === 'poem'
          const isStory = p.kind === 'story'
          const isSher = p.kind === 'sher'
          return (
            <button
              key={p.id}
              className="press"
              onClick={() => navigate(`/write?mode=practice&promptId=${p.id}`)}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: '#fff', border: '1px solid var(--card-border)', borderRadius: 18, padding: '16px 17px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
                {isPoem && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', background: 'var(--accent)', padding: '4px 9px', borderRadius: 99 }}>
                    <IconFeather size={11} strokeWidth={2.1} />
                    Poem
                  </span>
                )}
                {isStory && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'oklch(0.42 0.05 45)', background: 'oklch(0.96 0.02 65)', padding: '4px 9px', borderRadius: 99 }}>
                    <IconBook size={11} strokeWidth={2.1} />
                    Story
                  </span>
                )}
                {isSher && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)', background: 'var(--accent-tint)', padding: '4px 9px', borderRadius: 99 }}>
                    <IconMoon size={11} strokeWidth={2.1} />
                    Ghazal
                  </span>
                )}
                {!isPoem && !isStory && !isSher && (
                  <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'oklch(0.42 0.05 45)', background: 'oklch(0.96 0.02 65)', padding: '4px 9px', borderRadius: 99 }}>
                    Skill drill
                  </span>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'oklch(0.28 0.03 55)', lineHeight: 1.4 }}>{p.text}</div>
            </button>
          )
        })}
      </div>

    </Screen>
  )
}
