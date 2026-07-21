import TabBar from './TabBar'
import ProfileButton from './ProfileButton'

// withTabBar screens (Today, Learn, Practice, Progress) get the floating glass
// nav pill and the top-right profile avatar as fixed overlays — both escape
// this container's scroll/clip since nothing here sets a transform. Extra
// top/bottom padding on the scrollable content keeps real content clear of
// where those floating elements sit, regardless of how tall the content is.
export default function Screen({ children, withTabBar = false, background = 'var(--canvas)' }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingTop: withTabBar
            ? 'calc(env(safe-area-inset-top, 0px) + 52px)'
            : 'env(safe-area-inset-top, 0px)',
        }}
      >
        {children}
        {withTabBar && <div style={{ height: 'calc(env(safe-area-inset-bottom, 0px) + 92px)' }} />}
      </div>
      {withTabBar && <TabBar />}
      {withTabBar && <ProfileButton />}
    </>
  )
}
