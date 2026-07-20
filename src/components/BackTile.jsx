import { useNavigate } from 'react-router-dom'
import { IconBack } from '../icons/Icons'

export default function BackTile({ to, onClick, style }) {
  const navigate = useNavigate()
  return (
    <button
      aria-label="Back"
      className="press"
      onClick={onClick || (() => (to ? navigate(to) : navigate(-1)))}
      style={{
        width: 38,
        height: 38,
        borderRadius: 12,
        background: '#fff',
        border: '1px solid var(--card-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'oklch(0.42 0.03 55)',
        flex: 'none',
        ...style,
      }}
    >
      <IconBack size={18} strokeWidth={1.9} />
    </button>
  )
}
