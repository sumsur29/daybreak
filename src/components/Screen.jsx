import TabBar from './TabBar'
import ProfileButton from './ProfileButton'

// Scroll container fills the small viewport height (stable on first paint in
// standalone PWAs). The nav + profile are fixed overlays that float above it.
export default function Screen({ children, withTabBar = false, background = 'var(--canvas)' }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
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
        {withTabBar && <div style={{ height: 'calc(env(safe-area-inset-bottom, 0px) + 132px)' }} />}
      </div>
      {withTabBar && <TabBar />}
      {withTabBar && <ProfileButton />}
    </>
  )
}
