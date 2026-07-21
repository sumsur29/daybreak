import { NavLink, useLocation } from 'react-router-dom'
import { IconSun, IconBook, IconPencilPage, IconBarChart } from '../icons/Icons'

const tabs = [
  { to: '/', label: 'Today', Icon: IconSun, end: true },
  { to: '/learn', label: 'Learn', Icon: IconBook },
  { to: '/practice', label: 'Practice', Icon: IconPencilPage },
  { to: '/progress', label: 'Progress', Icon: IconBarChart },
]

function activeIndexFor(pathname) {
  let best = 0
  let bestLen = -1
  tabs.forEach((tab, i) => {
    const matches = tab.end ? pathname === tab.to : pathname.startsWith(tab.to)
    if (matches && tab.to.length > bestLen) {
      best = i
      bestLen = tab.to.length
    }
  })
  return best
}

// Floating glass pill. Fixed overlay, sits low above the home indicator, with a
// fade scrim beneath so content scrolls under it.
export default function TabBar() {
  const { pathname } = useLocation()
  const activeIndex = activeIndexFor(pathname)

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          height: 'calc(env(safe-area-inset-bottom, 0px) + 96px)',
          background: 'linear-gradient(to top, var(--canvas) 60%, rgba(253,250,246,0))',
          zIndex: 25,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 10px)',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 30,
          pointerEvents: 'none',
        }}
      >
        <nav
          style={{
            position: 'relative',
            width: 'min(88vw, 336px)',
            background: 'rgba(255,255,255,0.86)',
            backdropFilter: 'blur(22px) saturate(180%)',
            WebkitBackdropFilter: 'blur(22px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.9)',
            borderRadius: 26,
            padding: 6,
            boxShadow: '0 14px 34px -10px rgba(120,60,20,0.32), 0 2px 10px -2px rgba(120,60,20,0.14)',
            pointerEvents: 'auto',
          }}
        >
          <div style={{ position: 'absolute', top: 6, bottom: 6, left: 6, right: 6, pointerEvents: 'none' }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '25%',
                left: `${activeIndex * 25}%`,
                background: 'rgba(255,255,255,0.92)',
                borderRadius: 19,
                boxShadow: '0 6px 14px -4px rgba(120,60,20,0.28), inset 0 0 0 1px rgba(255,255,255,0.8)',
                transition: 'left 380ms cubic-bezier(0.34, 1.35, 0.64, 1)',
              }}
            />
          </div>
          <div style={{ position: 'relative', display: 'flex', zIndex: 1, width: '100%' }}>
            {tabs.map(({ to, label, Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className="press"
                style={({ isActive }) => ({
                  flex: 1,
                  textAlign: 'center',
                  padding: '9px 2px',
                  color: isActive ? 'var(--accent)' : 'var(--tab-inactive)',
                  transition: 'color 200ms ease',
                })}
              >
                <Icon size={21} strokeWidth={1.8} />
                <div style={{ fontSize: 9.5, fontWeight: 700, marginTop: 3 }}>{label}</div>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
