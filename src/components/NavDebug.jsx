import { useState, useEffect } from 'react'

// Temporary on-screen readout to diagnose the nav positioning bug.
export default function NavDebug() {
  const [v, setV] = useState({})
  useEffect(() => {
    const read = () => {
      const probe = document.createElement('div')
      probe.style.cssText = 'position:fixed;bottom:0;height:env(safe-area-inset-bottom,0px);width:0'
      document.body.appendChild(probe)
      const inset = probe.getBoundingClientRect().height
      document.body.removeChild(probe)
      setV({
        innerH: window.innerHeight,
        visualH: window.visualViewport ? Math.round(window.visualViewport.height) : 'n/a',
        docH: document.documentElement.clientHeight,
        inset: Math.round(inset),
        standalone: window.navigator.standalone ? 'PWA' : 'browser',
      })
    }
    read()
    window.addEventListener('scroll', read, true)
    window.addEventListener('resize', read)
    window.visualViewport?.addEventListener('resize', read)
    const t = setInterval(read, 500)
    return () => {
      window.removeEventListener('scroll', read, true)
      window.removeEventListener('resize', read)
      clearInterval(t)
    }
  }, [])
  return (
    <div style={{ position: 'fixed', top: 'calc(env(safe-area-inset-top,0px) + 4px)', left: 4, zIndex: 9999, background: '#000', color: '#0f0', font: '10px monospace', padding: '4px 6px', borderRadius: 6, pointerEvents: 'none', lineHeight: 1.4 }}>
      innerH:{v.innerH} visualH:{v.visualH}<br />docH:{v.docH} inset:{v.inset} {v.standalone}
    </div>
  )
}
