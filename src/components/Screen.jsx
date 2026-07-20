export default function Screen({ children, withTabBar = false, background = 'var(--canvas)' }) {
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
      {withTabBar && <div style={{ height: 96 }} />}
    </div>
  )
}
