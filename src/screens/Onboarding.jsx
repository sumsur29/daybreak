import { useState } from 'react'
import Screen from '../components/Screen'
import { useStore } from '../state/store'
import { IconFeather, IconBook, IconArrowRight } from '../icons/Icons'

export default function Onboarding() {
  const { completeOnboarding } = useStore()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    completeOnboarding(name)
  }

  return (
    <Screen background="var(--accent-gradient)">
      <div
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 28px',
          color: '#fff',
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 18,
            background: 'rgba(255,255,255,0.22)',
            border: '2px solid #fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 22,
          }}
        >
          <IconFeather size={26} strokeWidth={1.7} />
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, lineHeight: 1.15 }}>
          Welcome to Daybreak
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.92, marginTop: 10, maxWidth: 320 }}>
          A short lesson, an example, a prompt — a few minutes a day to build a real writing
          habit. What should we call you?
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: 28 }}>
          <label style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.85 }}>
            Your name
          </label>
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ava"
            maxLength={40}
            style={{
              display: 'block',
              width: '100%',
              marginTop: 8,
              background: 'rgba(255,255,255,0.16)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              borderRadius: 16,
              padding: '14px 16px',
              fontSize: 17,
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: '#fff',
            }}
          />
          <button
            type="submit"
            className="press"
            disabled={!name.trim()}
            style={{
              width: '100%',
              marginTop: 20,
              background: '#fff',
              color: 'var(--accent)',
              textAlign: 'center',
              padding: 16,
              borderRadius: 16,
              fontWeight: 700,
              fontSize: 15,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              opacity: name.trim() ? 1 : 0.6,
            }}
          >
            Start writing <IconArrowRight size={18} />
          </button>
        </form>

        <div style={{ display: 'flex', gap: 10, marginTop: 28, opacity: 0.85 }}>
          <FeaturePill icon={<IconFeather size={15} strokeWidth={1.8} />} label="Poems" />
          <FeaturePill icon={<IconBook size={15} strokeWidth={1.8} />} label="Stories" />
        </div>
      </div>
    </Screen>
  )
}

function FeaturePill({ icon, label }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 700,
        background: 'rgba(255,255,255,0.16)',
        padding: '7px 12px',
        borderRadius: 99,
      }}
    >
      {icon}
      {label}
    </div>
  )
}
