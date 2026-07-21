import { useEffect } from 'react'

// iOS standalone PWAs sometimes paint the first frame at a short viewport
// height, then grow to full height only after a user gesture. This nudges a
// reflow right after mount (and on the next frames) so the layout settles to
// full height immediately — no drag needed.
export default function useViewportFix() {
  useEffect(() => {
    const settle = () => {
      // touching a layout-affecting property forces recalculation against the
      // now-correct visual viewport height
      document.documentElement.style.setProperty('--vh100', window.innerHeight + 'px')
      window.scrollTo(0, 0)
    }
    settle()
    const r1 = requestAnimationFrame(settle)
    const t1 = setTimeout(settle, 60)
    const t2 = setTimeout(settle, 250)
    window.visualViewport?.addEventListener('resize', settle)
    return () => {
      cancelAnimationFrame(r1)
      clearTimeout(t1)
      clearTimeout(t2)
      window.visualViewport?.removeEventListener('resize', settle)
    }
  }, [])
}
