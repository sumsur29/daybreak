import TabBar from './TabBar'

// Tab-bar screens use a real flex layout so the bar docks directly under
// whatever content there is — no floating over empty background when a
// screen (like a blank-slate Today) is shorter than the viewport.
// Screens without a tab bar keep the simpler single scroll container, since
// their sticky bottom CTAs rely on it being the positioned containing block.
export default function Screen({ children, withTabBar = false, background = 'var(--canvas)' }) {
  if (withTabBar) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 'env(safe-area-inset-top, 0px)',
        }}
      >
        <div style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
          {children}
        </div>
        <TabBar />
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
      {children}
    </div>
  )
}
