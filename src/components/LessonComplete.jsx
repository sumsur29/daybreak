import { useEffect, useState } from 'react'
import { IconFlame, IconArrowRight } from '../icons/Icons'
import { useStore } from '../state/store'

// Daybreak day boundary (06:00 Dubai) — mirrors store.todayKey so the streak
// preview shown here matches what markTodayActive will do on continue.
function todayKey() {
  const now = new Date()
  const d = new Date(now.getTime() + (4 * 60 - 6 * 60) * 60 * 1000)
  return d.toISOString().slice(0, 10)
}

const LC_STYLE = `
@keyframes lcDusk{to{opacity:0}}
@keyframes lcSun{0%{transform:translate(-50%,140px) scale(.7);opacity:.5}60%{opacity:1}100%{transform:translate(-50%,6px) scale(1);opacity:1}}
@keyframes lcPulse{0%,100%{opacity:.85;transform:translate(-50%,6px) scale(1)}50%{opacity:1;transform:translate(-50%,6px) scale(1.05)}}
@keyframes lcUp{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
@keyframes lcRule{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.lc-dusk{animation:lcDusk 1.7s ease .25s forwards}
.lc-sun{animation:lcSun 1.5s cubic-bezier(.2,.7,.3,1) both, lcPulse 3.4s ease-in-out 1.6s infinite}
.lc-eyebrow{animation:lcUp .5s ease .35s both}
.lc-line{opacity:0;animation:lcUp .6s cubic-bezier(.2,.8,.3,1) both}
.lc-rule{transform-origin:center;animation:lcRule .6s ease 1.55s both}
.lc-cap{animation:lcUp .5s ease 1.7s both}
.lc-foot{animation:lcUp .5s ease 1.95s both}
.lc-cta{animation:lcUp .5s ease 2.15s both}
@media (prefers-reduced-motion: reduce){.lc-root *{animation-duration:.01ms!important}}
`

// End-of-lesson celebration. The day breaks (sky settles, sun rises) and the
// line the writer just wrote is set in type — the reward is their own words,
// not a scoreboard. Streak / XP / words sit quietly beneath.
// Props: line (their attempt text), words (number), genre ('poem'|'story'),
// alreadyComplete (bool — replays award no XP), onContinue().
export default function LessonComplete({ line, words, genre, alreadyComplete, onContinue }) {
  const { state } = useStore()
  const [xp, setXp] = useState(0)

  const alreadyToday = state.lastActiveDate === todayKey()
  const streakNow = alreadyToday ? state.streak.current : state.streak.current + 1

  const rawLines = (line || '').split('\n').map((l) => l.trim()).filter(Boolean)
  const shown = rawLines.slice(0, 3)
  const hasLine = shown.length > 0
  const firstLine = hasLine ? shown[0] : ''
  const caption = firstLine.slice(0, 46)
  const genreWord = genre === 'poem' ? 'poem' : 'story'

  useEffect(() => {
    if (alreadyComplete) return
    let n = 0
    const id = setInterval(() => {
      n += 1
      setXp(n)
      if (n >= 20) clearInterval(id)
    }, 78)
    return () => clearInterval(id)
  }, [alreadyComplete])

  return (
    <div
      className="lc-root"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 30px',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
      <style>{LC_STYLE}</style>

      {/* light field: cream base + dawn sky fading off to reveal it */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--canvas)' }} />
      <div
        className="lc-dusk"
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, oklch(0.93 0.055 68), oklch(0.9 0.07 52) 40%, oklch(0.87 0.085 36))' }}
      />
      <div
        className="lc-sun"
        style={{
          position: 'absolute',
          left: '50%',
          top: '40%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 55%, oklch(0.86 0.11 62 / .95), oklch(0.82 0.12 50 / .5) 42%, transparent 66%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', width: '100%', maxWidth: 360, textAlign: 'center' }}>
        <div
          className="lc-eyebrow"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'oklch(0.5 0.11 42)', fontWeight: 600 }}
        >
          {hasLine ? 'You wrote this today' : 'Lesson complete'}
        </div>

        {hasLine ? (
          <div style={{ marginTop: 20, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 25, lineHeight: 1.4, color: 'var(--ink-strong)' }}>
            {shown.map((l, i) => (
              <div key={i} className="lc-line" style={{ animationDelay: `${(0.7 + i * 0.18).toFixed(2)}s` }}>
                {l}
              </div>
            ))}
          </div>
        ) : (
          <div
            className="lc-line"
            style={{ marginTop: 20, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 24, lineHeight: 1.4, color: 'var(--ink-strong)', animationDelay: '0.7s' }}
          >
            Something exists now that didn&rsquo;t this morning.
          </div>
        )}

        <div className="lc-rule" style={{ height: 1, width: 44, background: 'var(--accent)', margin: '22px auto 0', opacity: 0.55 }} />

        {hasLine && (
          <div className="lc-cap" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 14, fontWeight: 600 }}>
            &ldquo;{caption}{firstLine.length > 46 ? '\u2026' : ''}&rdquo; &middot; today&rsquo;s {genreWord}
          </div>
        )}

        <div className="lc-foot" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 26, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--accent)', fontWeight: 800, fontSize: 14 }}>
            <IconFlame size={17} /> {streakNow} <span style={{ fontWeight: 700, color: 'var(--muted)', fontSize: 12.5 }}>day streak</span>
          </span>
          {!alreadyComplete && (
            <>
              <Dot />
              <span style={{ fontWeight: 800, fontSize: 14, color: 'oklch(0.42 0.05 48)' }}>+{xp} XP</span>
            </>
          )}
          {typeof words === 'number' && words > 0 && (
            <>
              <Dot />
              <span style={{ fontWeight: 700, fontSize: 13, color: 'var(--muted)' }}>{words} words</span>
            </>
          )}
        </div>

        <button
          className="lc-cta press"
          onClick={onContinue}
          style={{
            marginTop: 26,
            width: '100%',
            background: 'var(--accent)',
            color: '#fff',
            padding: 16,
            borderRadius: 16,
            fontWeight: 700,
            fontSize: 15,
            boxShadow: 'var(--shadow-button)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          Carry it into tomorrow <IconArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}

function Dot() {
  return <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--muted)', opacity: 0.5 }} />
}
