import TabBar from './TabBar'
import ProfileButton from './ProfileButton'

// Scroll container is a normal block filling the small viewport height (stable
// on first paint in standalone PWAs). It is NOT positioned, so it doesn't
// become a containing block for the nav — the fixed nav anchors to the real
// viewport and stays put when content scrolls.
export default function Screen({ children, withTabBar = false, background = 'var(--canvas)' }) {
  return (
    <>
      <div
        style={{
          height: '100svh',
          background,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingTop: withTabBar
            ? 'calc(env(safe-area-inset-top, 0px) + 52px)'
            : 'env(safe-area-inset-top, 0px)',
        }}
      >
        {children}
        {withTabBar && <div style={{ height: 'calc(env(safe-area-inset-bottom, 0px) + 100px)' }} />}
      </div>
      {withTabBar && <TabBar />}
      {withTabBar && <ProfileButton />}
    </>
  )
}
