import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.jsx'

// Force the app to pick up new deploys without a manual cache clear.
// When a new service worker is waiting, activate it and reload once.
registerSW({
  immediate: true,
  onNeedRefresh() {
    // a new version is available — reload to use it
    window.location.reload()
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
