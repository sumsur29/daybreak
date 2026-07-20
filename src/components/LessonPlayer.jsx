import { useState, useRef, useEffect } from 'react'
import { IconBook, IconArrowRight, IconCheck, IconFeather } from '../icons/Icons'

// Renders a rich lesson as a tap-through sequence of section cards.
// Props: courseTitle, blocks[], onComplete(), onExit()
export default function LessonPlayer({ courseTitle, title, blocks, onComplete, onExit }) {
  const [index, setIndex] = useState(0)
  const scrollRef = useRef(null)
  const total = blocks.length
  const block = blocks[index]
  const isLast = index === total - 1
  const isFirst = index === 0

  // scroll each new section back to top
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [index])

  const next = () => {
    if (isLast) {
      onComplete()
    } else {
      setIndex((i) => Math.min(total - 1, i + 1))
    }
  }
  const back = () => {
    if (isFirst) {
      onExit()
    } else {
      setIndex((i) => Math.max(0, i - 1))
    }
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--canvas)',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
      {/* header: back + progress */}
      <div style={{ padding: '14px 20px 12px', display: 'flex', alignItems: 'center', gap: 13, flex: 'none' }}>
        <button
          aria-label="Back"
          className="press"
          onClick={back}
          style={{
            width: 36,
            height: 36,
            borderRadius: 11,
            background: '#fff',
            border: '1px solid var(--card-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'oklch(0.42 0.03 55)',
            flex: 'none',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M11 6l-6 6 6 6" />
          </svg>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {blocks.map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 4,
                  borderRadius: 99,
                  background: i <= index ? 'var(--accent)' : 'oklch(0.92 0.02 65)',
                  transition: 'background 250ms ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* section body */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <div style={{ padding: '8px 24px 24px' }} key={index}>
          <BlockView block={block} courseTitle={courseTitle} lessonTitle={title} />
        </div>
      </div>

      {/* footer CTA — always in flow, never overlaps text */}
      <div
        style={{
          flex: 'none',
          padding: '12px 20px calc(env(safe-area-inset-bottom, 0px) + 16px)',
          borderTop: '1px solid var(--card-border)',
          background: '#fff',
        }}
      >
        <button
          className="press"
          onClick={next}
          style={{
            width: '100%',
            background: 'var(--accent)',
            color: '#fff',
            textAlign: 'center',
            padding: 16,
            borderRadius: 16,
            fontWeight: 700,
            fontSize: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            boxShadow: 'var(--shadow-button)',
          }}
        >
          {isLast ? (
            <>
              Complete lesson <IconCheck size={17} strokeWidth={2.4} />
            </>
          ) : block.type === 'intro' ? (
            <>
              Start lesson <IconArrowRight size={18} />
            </>
          ) : (
            <>
              Continue <IconArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  )
}

/* ---------- block renderers ---------- */

function BlockView({ block, courseTitle, lessonTitle }) {
  switch (block.type) {
    case 'intro':
      return <IntroBlock block={block} courseTitle={courseTitle} lessonTitle={lessonTitle} />
    case 'concept':
      return <ConceptBlock block={block} />
    case 'callout':
      return <CalloutBlock block={block} />
    case 'list':
      return <ListBlock block={block} />
    case 'example':
      return <ExampleBlock block={block} />
    case 'compare':
      return <CompareBlock block={block} />
    case 'recap':
      return <RecapBlock block={block} />
    case 'tryit':
      return <TryItBlock block={block} />
    default:
      return null
  }
}

function Eyebrow({ children }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        color: 'var(--accent)',
        background: 'var(--accent-tint)',
        padding: '6px 11px',
        borderRadius: 99,
      }}
    >
      {children}
    </div>
  )
}

function IntroBlock({ block, courseTitle, lessonTitle }) {
  return (
    <div>
      <div style={{ background: 'var(--accent-gradient)', color: '#fff', borderRadius: 24, padding: 24, marginTop: 8 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.9 }}>
          {courseTitle} · {block.minutes} min
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, marginTop: 12, lineHeight: 1.15 }}>
          {lessonTitle}
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.5, marginTop: 12, opacity: 0.95 }}>
          {block.takeaway}
        </p>
      </div>
      <div style={{ marginTop: 22, fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
        In this lesson
      </div>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {block.sections.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '1.5px solid oklch(0.85 0.05 55)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 700,
                flex: 'none',
              }}
            >
              {i + 1}
            </span>
            <span style={{ fontSize: 14.5, color: 'oklch(0.35 0.03 55)', fontWeight: 500 }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConceptBlock({ block }) {
  return (
    <div style={{ paddingTop: 8 }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--ink-strong)', lineHeight: 1.2 }}>
        {block.heading}
      </h2>
      {block.body.map((p, i) => (
        <p key={i} style={{ fontSize: 16, lineHeight: 1.72, color: 'oklch(0.38 0.03 55)', marginTop: i === 0 ? 16 : 14 }}>
          {p}
        </p>
      ))}
    </div>
  )
}

function CalloutBlock({ block }) {
  return (
    <div style={{ paddingTop: 24 }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid var(--card-border)',
          borderLeft: '4px solid var(--accent)',
          borderRadius: 16,
          padding: '22px 22px',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent)', marginBottom: 12 }}>
          {block.label}
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.5, color: 'var(--ink-strong)' }}>
          {block.text}
        </div>
      </div>
    </div>
  )
}

function ListBlock({ block }) {
  return (
    <div style={{ paddingTop: 8 }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink-strong)', lineHeight: 1.2 }}>
        {block.heading}
      </h2>
      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {block.items.map((it, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--card-border)', borderRadius: 16, padding: '16px 18px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--accent)' }}>{it.term}</div>
            <div style={{ fontSize: 14.5, lineHeight: 1.6, color: 'oklch(0.4 0.03 55)', marginTop: 5 }}>{it.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// renders poem/story lines with optional in-line accent highlight
function WritingLines({ lines, serifSize = 18 }) {
  return (
    <div style={{ fontFamily: 'var(--font-serif)', fontSize: serifSize, lineHeight: 1.9, color: 'var(--prompt-ink)' }}>
      {lines.map((line, i) => {
        if (line === '') return <div key={i} style={{ height: 14 }} />
        if (typeof line === 'string') return <div key={i}>{line}</div>
        // { text, mark }
        const { text, mark } = line
        if (!mark || !text.includes(mark)) return <div key={i}>{text}</div>
        const [before, after] = text.split(mark)
        return (
          <div key={i}>
            {before}
            <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{mark}</span>
            {after}
          </div>
        )
      })}
    </div>
  )
}

function ExampleBlock({ block }) {
  return (
    <div style={{ paddingTop: 8 }}>
      <Eyebrow>
        <IconBook size={13} strokeWidth={1.9} />
        {block.heading}
      </Eyebrow>
      <div
        style={{
          marginTop: 14,
          background: '#fff',
          border: '1px solid var(--card-border)',
          borderRadius: 18,
          padding: '22px 22px',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <WritingLines lines={block.lines} />
      </div>
      {block.caption && (
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', marginTop: 14 }}>{block.caption}</p>
      )}
    </div>
  )
}

function CompareBlock({ block }) {
  return (
    <div style={{ paddingTop: 8 }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink-strong)', lineHeight: 1.2 }}>
        {block.heading}
      </h2>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[block.left, block.right].map((side, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              border: '1px solid var(--card-border)',
              borderRadius: 16,
              padding: '16px 18px',
            }}
          >
            <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: 10 }}>
              {side.label}
            </div>
            <WritingLines lines={side.lines} serifSize={16.5} />
          </div>
        ))}
      </div>
      {block.caption && (
        <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', marginTop: 14 }}>{block.caption}</p>
      )}
    </div>
  )
}

function RecapBlock({ block }) {
  return (
    <div style={{ paddingTop: 8 }}>
      <Eyebrow>
        <IconCheck size={13} strokeWidth={2.2} />
        Recap
      </Eyebrow>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink-strong)', lineHeight: 1.2, marginTop: 14 }}>
        {block.heading}
      </h2>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {block.points.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: 'var(--accent-tint)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 'none',
                marginTop: 1,
              }}
            >
              <IconCheck size={12} strokeWidth={2.6} />
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: 'oklch(0.38 0.03 55)' }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TryItBlock({ block }) {
  return (
    <div style={{ paddingTop: 8 }}>
      <Eyebrow>
        <IconFeather size={13} strokeWidth={1.9} />
        Your turn
      </Eyebrow>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--ink-strong)', lineHeight: 1.2, marginTop: 14 }}>
        {block.heading}
      </h2>
      <div
        style={{
          marginTop: 16,
          background: 'var(--accent-gradient)',
          color: '#fff',
          borderRadius: 20,
          padding: '22px 22px',
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.9, marginBottom: 8 }}>
          Exercise
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.55 }}>{block.prompt}</div>
      </div>
      <p style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 14, lineHeight: 1.5 }}>
        Completing this lesson marks it done. Head to Practice or today's session to try the exercise.
      </p>
    </div>
  )
}
