import BackTile from './BackTile'

export default function SessionProgressHeader({ eyebrow, stepLabel, pct, onBack, centered = false }) {
  if (centered) {
    return (
      <div style={{ padding: '14px 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <BackTile onClick={onBack} />
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'oklch(0.3 0.03 55)' }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>{stepLabel}</div>
        </div>
        <div style={{ width: 38 }} />
      </div>
    )
  }
  return (
    <div style={{ padding: '14px 22px 0', display: 'flex', alignItems: 'center', gap: 13 }}>
      <BackTile onClick={onBack} />
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--muted)',
            marginBottom: 5,
          }}
        >
          <span style={{ letterSpacing: '0.06em' }}>{eyebrow}</span>
          <span>{stepLabel}</span>
        </div>
        <div style={{ height: 6, background: 'oklch(0.93 0.02 65)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ width: `${pct}%`, height: '100%', background: 'var(--accent)', borderRadius: 99 }} />
        </div>
      </div>
    </div>
  )
}
