import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore } from '../state/store'
import { IconGear, IconFeather, IconBook, IconMoon, IconCheck, IconBack } from '../icons/Icons'

const filters = ['All', 'Poems', 'Stories', 'Ghazals']

export default function You() {
  const navigate = useNavigate()
  const { state } = useStore()
  const { profile, portfolio, savedRecaps = [] } = state
  const [filter, setFilter] = useState('All')
  const [openRecap, setOpenRecap] = useState(null)

  const list = portfolio.filter((p) => {
    if (filter === 'All') return true
    if (filter === 'Poems') return p.genre === 'poem'
    if (filter === 'Ghazals') return p.genre === 'sher'
    return p.genre === 'story'
  })

  return (
    <Screen withTabBar>
      {/* profile header */}
      <div style={{ background: 'var(--accent-gradient)', color: '#fff', padding: '20px 24px 26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button
            aria-label="Back"
            className="press"
            onClick={() => navigate('/')}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              flex: 'none',
            }}
          >
            <IconBack size={18} strokeWidth={1.9} />
          </button>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.25)',
              border: '2px solid #fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontSize: 26,
              flex: 'none',
            }}
          >
            {profile.name[0]}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700 }}>{profile.name}</div>
            <div style={{ fontSize: 13, opacity: 0.92, marginTop: 2 }}>
              {profile.title} · Level {profile.level}
            </div>
          </div>
          <button
            aria-label="Settings"
            className="press"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              flex: 'none',
            }}
          >
            <IconGear size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* saved lesson recaps — revisit anytime */}
      {savedRecaps.length > 0 && (
        <>
          <div style={{ padding: '18px 20px 6px', display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'oklch(0.3 0.03 55)' }}>
              Lesson recaps
            </div>
            <span style={{ flex: 1 }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>
              {savedRecaps.length} saved
            </span>
          </div>
          <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {savedRecaps.map((r) => {
              const isOpen = openRecap === r.lessonId
              return (
                <div
                  key={r.lessonId}
                  style={{ background: '#fff', border: '1px solid var(--card-border)', borderRadius: 18, overflow: 'hidden' }}
                >
                  <button
                    className="press"
                    onClick={() => setOpenRecap(isOpen ? null : r.lessonId)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 13,
                      width: '100%',
                      textAlign: 'left',
                      background: 'transparent',
                      border: 'none',
                      padding: '15px 16px',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: 'var(--accent-tint)',
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 'none',
                      }}
                    >
                      <IconBook size={19} strokeWidth={1.7} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16.5, color: 'oklch(0.28 0.03 55)' }}>
                        {r.lessonTitle}
                      </div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent)', marginTop: 3 }}>
                        {r.courseTitle}
                      </div>
                    </div>
                    <span
                      style={{
                        color: 'var(--muted)',
                        fontSize: 18,
                        transform: isOpen ? 'rotate(90deg)' : 'none',
                        transition: 'transform 200ms ease',
                      }}
                    >
                      ›
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '2px 18px 18px' }}>
                      <div style={{ height: 1, background: 'var(--card-border)', margin: '0 0 14px' }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                        {r.points.map((p, i) => (
                          <div key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                            <span
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                background: 'var(--accent-tint)',
                                color: 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 'none',
                                marginTop: 1,
                              }}
                            >
                              <IconCheck size={12} strokeWidth={2.6} />
                            </span>
                            <span style={{ fontSize: 14.5, lineHeight: 1.55, color: 'oklch(0.35 0.03 55)' }}>{p}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        className="press"
                        onClick={() => navigate(`/learn/${r.courseId}/${r.lessonId}`)}
                        style={{
                          marginTop: 16,
                          width: '100%',
                          background: 'var(--accent-tint)',
                          color: 'var(--accent)',
                          border: 'none',
                          borderRadius: 12,
                          padding: '11px',
                          fontSize: 13.5,
                          fontWeight: 700,
                          fontFamily: 'inherit',
                        }}
                      >
                        Revisit full lesson
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}

      <div style={{ padding: '18px 20px 6px', display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'oklch(0.3 0.03 55)' }}>Your portfolio</div>
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>{portfolio.length} pieces</span>
      </div>

      <div style={{ padding: '8px 20px 0', display: 'flex', gap: 8 }}>
        {filters.map((f) => (
          <button
            key={f}
            className="press"
            onClick={() => setFilter(f)}
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: filter === f ? '#fff' : 'var(--muted)',
              background: filter === f ? 'var(--accent)' : '#fff',
              border: filter === f ? 'none' : '1px solid var(--card-border)',
              padding: '7px 14px',
              borderRadius: 99,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div style={{ padding: '14px 20px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {list.map((piece) => {
          const isPoem = piece.genre === 'poem'
          const isSher = piece.genre === 'sher'
          const Icon = isSher ? IconMoon : isPoem ? IconFeather : IconBook
          return (
            <button
              key={piece.id}
              className="press"
              onClick={() => navigate(`/you/${piece.id}`)}
              style={{ display: 'flex', alignItems: 'center', gap: 13, width: '100%', textAlign: 'left', background: '#fff', border: '1px solid var(--card-border)', borderRadius: 18, padding: '16px 17px' }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: (isPoem || isSher) ? 'var(--accent-tint)' : 'oklch(0.95 0.02 65)',
                  color: (isPoem || isSher) ? 'var(--accent)' : 'oklch(0.5 0.03 55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 'none',
                }}
              >
                <Icon size={20} strokeWidth={1.7} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'oklch(0.28 0.03 55)' }}>{piece.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', color: (isPoem || isSher) ? 'var(--accent)' : 'oklch(0.5 0.03 55)' }}>
                    {isSher ? 'Ghazal' : isPoem ? 'Poem' : 'Story'}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'oklch(0.62 0.02 55)' }}>
                    {piece.status === 'finished' ? 'Finished' : 'Draft'} · {piece.date}
                  </span>
                </div>
              </div>
              {piece.status === 'finished' && (
                <span style={{ color: 'var(--accent)', display: 'flex' }}>
                  <IconCheck size={18} strokeWidth={2} />
                </span>
              )}
            </button>
          )
        })}
      </div>
    </Screen>
  )
}
