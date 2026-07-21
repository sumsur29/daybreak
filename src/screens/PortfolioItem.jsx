import { useNavigate, useParams } from 'react-router-dom'
import Screen from '../components/Screen'
import BackTile from '../components/BackTile'
import { useStore } from '../state/store'

export default function PortfolioItem() {
  const navigate = useNavigate()
  const { pieceId } = useParams()
  const { state } = useStore()
  const piece = state.portfolio.find((p) => p.id === pieceId)

  if (!piece) {
    return (
      <Screen>
        <div style={{ padding: '14px 22px 0' }}>
          <BackTile to="/you" />
        </div>
        <p style={{ padding: '0 24px', marginTop: 16 }}>Piece not found.</p>
      </Screen>
    )
  }

  const isPoem = piece.genre === 'poem' || piece.genre === 'sher'

  return (
    <Screen>
      <div style={{ padding: '14px 22px 0' }}>
        <BackTile to="/you" />
      </div>
      <div style={{ padding: '20px 24px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: isPoem ? 'var(--accent)' : 'oklch(0.5 0.03 55)' }}>
            {isPoem ? 'Poem' : 'Story'}
          </span>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'oklch(0.62 0.02 55)' }}>
            {piece.status === 'finished' ? 'Finished' : 'Draft'} · {piece.date}
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, color: 'var(--ink-strong)', marginTop: 10, lineHeight: 1.2 }}>
          {piece.title}
        </h2>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 2, color: 'var(--prompt-ink)', marginTop: 20, whiteSpace: 'pre-wrap' }}>
          {piece.body}
        </div>
      </div>
      {piece.status === 'draft' && (
        <div style={{ padding: '0 24px 40px' }}>
          <button
            className="press"
            onClick={() => navigate(`/write?mode=freewrite&resume=${piece.id}`)}
            style={{
              width: '100%',
              background: 'var(--accent)',
              color: '#fff',
              textAlign: 'center',
              padding: 15,
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 15,
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Continue writing
          </button>
        </div>
      )}
    </Screen>
  )
}
