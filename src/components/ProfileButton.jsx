import { useNavigate } from 'react-router-dom'
import { useStore } from '../state/store'

export default function ProfileButton() {
  const navigate = useNavigate()
  const { state } = useStore()
  const initial = state.profile.name ? state.profile.name.trim()[0]?.toUpperCase() : '·'

  return (
    <button
      aria-label="Your profile"
      className="press"
      onClick={() => navigate('/you')}
      style={{
        position: 'fixed',
        top: 'calc(env(safe-area-inset-top, 0px) + 16px)',
        right: 18,
        zIndex: 30,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--accent-gradient)',
        border: '2px solid rgba(255,255,255,0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'var(--font-serif)',
        fontSize: 17,
        fontWeight: 600,
        boxShadow: '0 10px 22px -8px rgba(120,60,20,0.4)',
      }}
    >
      {initial}
    </button>
  )
}
