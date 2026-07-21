import TabBar from './TabBar'
import ProfileButton from './ProfileButton'

// Flex column filling the (stable-on-first-paint) small viewport height. The
// nav is a normal flex child at the bottom — laid out, not position:fixed — so
// it physically can't be mispositioned by iOS viewport-height timing.
export default function Screen({ children, withTabBar = false, background = 'var(--canvas)' }) {
  return (
    <div style={{ height: '100svh', display: 'flex', flexDirection: 'column', background }}>
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingTop: withTabBar
            ? 'calc(env(safe-area-inset-top, 0px) + 52px)'
            : 'env(safe-area-inset-top, 0px)',
        }}
      >
        {children}
      </div>
      {withTabBar && <TabBar />}
      {withTabBar && <ProfileButton />}
    </div>
  )
}
