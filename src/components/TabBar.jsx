import { NavLink, useLocation } from 'react-router-dom'
import { IconSun, IconBook, IconPencilPage, IconBarChart } from '../icons/Icons'

// "You" lives behind the floating avatar (top-right) instead of this bar —
// see ProfileButton.jsx. These are the 4 primary destinations.
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

// Docked bottom nav: flush to the screen edge, full width, owns the home-indicator
// safe area. This is the reliable pattern for home-screen PWAs — no floating gap,
// no content peeking underneath.
export default function TabBar() {
  const { pathname } = useLocation()
  const activeIndex = activeIndexFor(pathname)

  return (
    <nav
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 30,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderTop: '1px solid var(--card-border)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        boxShadow: '0 -4px 20px -8px rgba(120,60,20,0.12)',
      }}
    >
      <div style={{ display: 'flex', position: 'relative' }}>
        {tabs.map(({ to, label, Icon, end }, i) => {
          const active = i === activeIndex
          return (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="press"
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '10px 2px 8px',
                color: active ? 'var(--accent)' : 'var(--tab-inactive)',
                transition: 'color 200ms ease',
              }}
            >
              <Icon size={22} strokeWidth={active ? 2.1 : 1.8} />
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.01em' }}>{label}</div>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
