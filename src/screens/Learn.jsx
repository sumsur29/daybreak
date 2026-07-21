import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore } from '../state/store'
import { IconFeather, IconBook, IconCheck, IconArrowRight, IconFlame, IconLock } from '../icons/Icons'

// "The Long Sentence" — the Learn screen IS the path. A track selector sits on
// top; below, one continuous ink line draws itself down the margin to the
// lesson you're on. Done lessons are inked behind you, the current one is a wet
// pen-nib, the rest wait in faint pencil. Tapping a node opens that lesson.

const SHORT = {
  'poetry-foundations': 'Poetry',
  'short-story-craft': 'Short Story',
  'imagery-metaphor': 'Imagery',
  'character-voice': 'Character',
}
const TRACK_ICON = { 'poetry-foundations': IconFeather, 'short-story-craft': IconBook, 'imagery-metaphor': IconFeather, 'character-voice': IconFeather }

const ROMAN = [
  ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90],
  ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1],
]
function toRoman(n) {
  let out = ''
  let v = n
  for (const [sym, val] of ROMAN) while (v >= val) { out += sym; v -= val }
  return out || '—'
}

const INK_CSS = `
@keyframes lsDraw { to { stroke-dashoffset: 0; } }
@keyframes lsNib { 0%,100% { transform: translate(-50%,-50%) scale(1); } 50% { transform: translate(-50%,-50%) scale(1.1); } }
@keyframes lsFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.ls-inked { stroke-dasharray: 1; stroke-dashoffset: 1; animation: lsDraw 1100ms cubic-bezier(.4,0,.2,1) forwards; }
.ls-nib { animation: lsNib 2.4s ease-in-out infinite; }
.ls-row { animation: lsFade 460ms ease both; }
`

const MARGIN_X = 46
const AMP = 18
const TOP_PAD = 30
const ROW_H = 92

function pathD(pts, upto) {
  const end = upto == null ? pts.length - 1 : upto
  if (end < 0) return ''
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
  for (let i = 1; i <= end; i++) {
    const a = pts[i - 1]
    const b = pts[i]
    const cy = (b.y - a.y) * 0.4
    d += ` C ${a.x.toFixed(1)} ${(a.y + cy).toFixed(1)}, ${b.x.toFixed(1)} ${(b.y - cy).toFixed(1)}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
  }
  return d
}

function Nib() {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" style={{ display: 'block' }}>
      <path d="M11 1.5 L18.5 15 C18.5 21 14.5 24.5 11 24.5 C7.5 24.5 3.5 21 3.5 15 Z" fill="var(--accent)" />
      <line x1="11" y1="8.5" x2="11" y2="19.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="11" cy="12.5" r="1.7" fill="#fff" />
    </svg>
  )
}

export default function Learn() {
  const navigate = useNavigate()
  const { state } = useStore()
  const { courses, profile, streak } = state

  const isLocked = (c) => !!c.unlockLevel && profile.level < c.unlockLevel
  const defaultId = useMemo(() => {
    const inProgress = courses.find((c) => c.lessons.length > 0 && c.done > 0 && c.done < c.total)
    if (inProgress) return inProgress.id
    const firstOpen = courses.find((c) => c.lessons.length > 0 && !isLocked(c))
    return (firstOpen || courses[0]).id
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [sel, setSel] = useState(defaultId)
  const course = courses.find((c) => c.id === sel) || courses[0]

  const wrapRef = useRef(null)
  const [W, setW] = useState(360)
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const measure = () => setW(el.clientWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const lessons = course.lessons
  const curIdx = lessons.findIndex((l) => !l.done)
  const allDone = lessons.length > 0 && curIdx === -1
  const pts = lessons.map((_, i) => ({
    x: MARGIN_X + AMP * Math.sin(i * 0.72 + 0.4),
    y: TOP_PAD + i * ROW_H + ROW_H / 2,
  }))
  const svgH = TOP_PAD + lessons.length * ROW_H + 30
  const titleLeft = MARGIN_X + 28
  const inkedTo = allDone ? pts.length - 1 : Math.max(0, curIdx)

  return (
    <Screen withTabBar>
      <style>{INK_CSS}</style>

      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '20px 22px 2px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>Learn</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 700, color: 'var(--ink-strong)', marginTop: 5 }}>The long sentence</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--accent-tint)', color: 'var(--accent)', padding: '7px 12px', borderRadius: 99, fontWeight: 800, fontSize: 14, marginTop: 4 }}>
          <IconFlame size={17} /> {streak.current}
        </div>
      </div>

      {/* track selector */}
      <div style={{ display: 'flex', gap: 9, overflowX: 'auto', padding: '12px 22px 4px', WebkitOverflowScrolling: 'touch' }}>
        {courses.map((c) => {
          const locked = isLocked(c)
          const active = c.id === sel
          const Icon = TRACK_ICON[c.id] || IconFeather
          return (
            <button
              key={c.id}
              className="press"
              onClick={() => !locked && setSel(c.id)}
              style={{
                flex: 'none', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 14px', borderRadius: 99,
                background: active ? 'var(--accent)' : locked ? 'oklch(0.96 0.008 70)' : '#fff',
                border: active ? '1px solid transparent' : '1px solid var(--card-border)',
                color: active ? '#fff' : locked ? 'oklch(0.6 0.02 60)' : 'oklch(0.36 0.03 55)',
                boxShadow: active ? 'var(--shadow-button)' : 'none', opacity: locked ? 0.85 : 1,
              }}
            >
              {locked ? <IconLock size={15} strokeWidth={1.9} /> : <Icon size={16} strokeWidth={1.8} />}
              <span style={{ fontSize: 13.5, fontWeight: 700, whiteSpace: 'nowrap' }}>{SHORT[c.id] || c.title}</span>
              <span style={{ fontSize: 11, fontWeight: 700, opacity: active ? 0.85 : 0.6 }}>
                {locked ? `Lv ${c.unlockLevel}` : `${c.done}/${c.total}`}
              </span>
            </button>
          )
        })}
      </div>

      {/* selected track heading */}
      <div style={{ padding: '14px 22px 2px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'oklch(0.28 0.03 55)' }}>{course.title}</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14.5, color: 'var(--muted)', marginTop: 3 }}>
          {lessons.length === 0
            ? 'Coming soon — the ink is still wet.'
            : allDone
              ? `All ${toRoman(course.total)} lessons inked. The sentence is complete.`
              : `Lesson ${toRoman(curIdx + 1)} of ${toRoman(course.total)} — the line reaches here.`}
        </div>
      </div>

      {/* the path */}
      <div ref={wrapRef} style={{ position: 'relative', width: '100%', height: lessons.length ? svgH : 0, marginTop: 6 }}>
        {lessons.length > 0 && (
          <svg key={sel} width={W} height={svgH} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <path d={pathD(pts, pts.length - 1)} fill="none" stroke="oklch(0.9 0.02 70)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
            {curIdx !== 0 && (
              <path className="ls-inked" pathLength="1" d={pathD(pts, inkedTo)} fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" />
            )}
          </svg>
        )}

        {lessons.map((lesson, i) => {
          const done = lesson.done
          const current = i === curIdx
          const p = pts[i]
          return (
            <button
              key={lesson.id}
              className="press ls-row"
              onClick={() => navigate(`/learn/${course.id}/${lesson.id}`)}
              style={{ position: 'absolute', left: 0, top: p.y - ROW_H / 2, width: W, height: ROW_H, textAlign: 'left', animationDelay: `${Math.min(i, 8) * 45}ms` }}
            >
              {/* node marker */}
              <span style={{ position: 'absolute', left: p.x, top: ROW_H / 2, transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {done ? (
                  <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px oklch(0.72 0.15 40 / 0.35)' }}>
                    <IconCheck size={13} strokeWidth={2.8} />
                  </span>
                ) : current ? (
                  <span className="ls-nib" style={{ position: 'absolute', left: 0, top: 0, transform: 'translate(-50%,-50%)', width: 34, height: 34, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 10px oklch(0.72 0.15 40 / 0.28)' }}>
                    <Nib />
                  </span>
                ) : (
                  <span style={{ width: 15, height: 15, borderRadius: '50%', background: 'var(--canvas)', border: '2px solid oklch(0.87 0.03 65)' }} />
                )}
              </span>

              {/* contents entry */}
              {current ? (
                <div style={{ position: 'absolute', left: titleLeft, top: ROW_H / 2, transform: 'translateY(-50%)', width: W - titleLeft - 16, background: '#fff', border: '1px solid var(--card-border)', borderRadius: 16, padding: '12px 14px', boxShadow: 'var(--shadow-card)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.08em', color: 'var(--accent)', fontWeight: 700 }}>{toRoman(i + 1)}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15.5, fontWeight: 700, color: 'oklch(0.26 0.03 55)', marginTop: 2, lineHeight: 1.25 }}>{lesson.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 9 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--accent)', fontWeight: 800, fontSize: 12.5 }}>
                      Pick up the pen <IconArrowRight size={14} strokeWidth={2.2} />
                    </span>
                    <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>+20 XP</span>
                  </div>
                </div>
              ) : (
                <div style={{ position: 'absolute', left: titleLeft, top: ROW_H / 2, transform: 'translateY(-50%)', width: W - titleLeft - 16 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.08em', color: done ? 'oklch(0.7 0.08 45)' : 'oklch(0.72 0.02 60)', fontWeight: 700 }}>{toRoman(i + 1)}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, marginTop: 1, lineHeight: 1.25, color: done ? 'oklch(0.44 0.03 55)' : 'oklch(0.64 0.02 60)' }}>{lesson.title}</div>
                </div>
              )}
            </button>
          )
        })}

        {allDone && (
          <div style={{ position: 'absolute', left: 0, top: svgH - 18, width: W, textAlign: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--accent)' }}>
            · fin ·
          </div>
        )}
      </div>

      {/* empty-course state */}
      {lessons.length === 0 && (
        <div style={{ margin: '10px 22px 0', padding: '26px 20px', background: '#fff', border: '1px dashed var(--card-border)', borderRadius: 20, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'oklch(0.3 0.03 55)' }}>{course.title} is being written</div>
          <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 6, lineHeight: 1.5 }}>These lessons aren't ready yet. Keep writing — this track opens down the line.</div>
        </div>
      )}
    </Screen>
  )
}
