import { NavLink } from 'react-router-dom'
import { IconSun, IconBook, IconPencilPage, IconBarChart, IconPerson } from '../icons/Icons'

const tabs = [
  { to: '/', label: 'Today', Icon: IconSun, end: true },
  { to: '/learn', label: 'Learn', Icon: IconBook },
  { to: '/practice', label: 'Practice', Icon: IconPencilPage },
  { to: '/progress', label: 'Progress', Icon: IconBarChart },
  { to: '/you', label: 'You', Icon: IconPerson },
]

export default function TabBar() {
  return (
    <nav
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#fff',
        borderTop: '1px solid var(--card-border)',
        padding: '12px 18px calc(env(safe-area-inset-bottom, 0px) + 14px)',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 20,
      }}
    >
      {tabs.map(({ to, label, Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className="press"
          style={({ isActive }) => ({
            textAlign: 'center',
            color: isActive ? 'var(--accent)' : 'var(--tab-inactive)',
            flex: 1,
          })}
        >
          <Icon size={23} strokeWidth={1.8} />
          <div style={{ fontSize: 10, fontWeight: 700, marginTop: 3 }}>{label}</div>
        </NavLink>
      ))}
    </nav>
  )
}
