import { useState, useRef, useEffect } from 'react'
import { IconBook, IconArrowRight, IconCheck, IconFeather } from '../icons/Icons'
import { useStore } from '../state/store'
import LessonComplete from './LessonComplete'

// Text analysis helpers — no AI backend in v1, so these inspect the writing
// for the SPECIFIC craft move each lesson taught, giving targeted feedback
// instead of generic observations.
function analyze(text) {
  const trimmed = text.trim()
  const lineArr = text.split('\n').filter((l) => l.trim().length > 0)
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0
  const lineLengths = lineArr.map((l) => l.trim().split(/\s+/).filter(Boolean).length)
  const variedLines = lineLengths.length > 1 && Math.max(...lineLengths) - Math.min(...lineLengths) >= 3
  const endsOnStop = /[.!?]["”]?\s*$/.test(trimmed)
  const hasDialogue = /["“”]/.test(text)
  const sentences = trimmed.split(/[.!?]+/).filter((sc) => sc.trim().length > 0)
  const avgSentence = sentences.length ? Math.round(words / sentences.length) : words
  const abstractWords = (trimmed.match(/\b(sad|sadness|happy|happiness|love|loss|fear|hope|beauty|beautiful|angry|anger|lonely|loneliness|joy|pain|freedom|honor)\b/gi) || []).length
  const senseWords = (trimmed.match(/\b(smell|scent|sound|taste|touch|cold|warm|rough|smooth|bitter|sweet|loud|quiet|soft|hard|salt|smoke|bread|rain)\b/gi) || []).length
  const similes = (trimmed.match(/\b(like|as)\b/gi) || []).length
  return { text: trimmed, words, lineArr, lineLengths, variedLines, endsOnStop, hasDialogue, avgSentence, abstractWords, senseWords, similes, lines: lineArr.length }
}

// Per-lesson analyzers. Each returns 2 targeted notes about the actual writing.
// Keyed by lessonId; falls back to a course-level analyzer.
const LESSON_ANALYZERS = {
  // ---- Poetry ----
  'pf-1': (a) => [
    a.lines <= 1 ? 'You wrote it as one line — try breaking that same thought across three or four lines and watch which words gain weight.'
      : `You broke it into ${a.lines} lines. Read each line's last word aloud — those are the words you've given the most emphasis, whether you meant to or not.`,
    a.variedLines ? 'Your line lengths vary, which already gives the piece a rhythm — good instinct.'
      : 'Your lines are close to the same length. Try making one much shorter than the rest and see how it stands out.',
  ],
  'pf-2': (a) => [
    a.avgSentence <= 6 ? 'Short, clipped units — this reads fast and percussive. Read it aloud and feel the beat.'
      : 'Longer phrasing here — it slows the ear down. Make sure that matches the mood you wanted.',
    'Read it aloud once more and mark any word your tongue trips on — that stumble is the first thing to revise.',
  ],
  'pf-3': (a) => [
    a.lines >= 2 && !a.endsOnStop ? 'You let the ending hang without a full stop — that enjambment keeps the reader leaning forward. Nice.'
      : a.lines >= 2 ? 'You closed on a full stop. Try breaking your strongest line mid-phrase so the meaning spills into the next.'
      : 'Try breaking this across more lines, and break one line mid-phrase so the next line surprises the reader.',
    a.variedLines ? 'The varied line lengths give you real control over pacing here.'
      : 'Your lines run to similar lengths — vary one sharply to control where the reader speeds up or slows down.',
  ],
  'pf-5': (a) => [
    a.abstractWords > 0 ? `You named a feeling directly (${a.abstractWords} abstract word${a.abstractWords > 1 ? 's' : ''}). Try replacing one with a concrete image that shows it instead.`
      : 'You avoided naming emotions outright — that\'s the whole game. The reader gets to feel it themselves.',
    a.senseWords > 0 ? 'There\'s sensory detail here, which grounds the image. Good.'
      : 'Add one physical, sensory detail — something a person could actually see or touch in this moment.',
  ],
  'pf-6': (a) => [
    a.similes > 0 ? 'You reached for a comparison — try cutting the "like" or "as" to see if the bolder metaphor version hits harder.'
      : 'No explicit comparison yet. Try one metaphor that claims two things ARE the same, not just similar.',
    'Read your comparison and ask: does it need the "like" to make sense, or is it stronger as a straight metaphor?',
  ],
  // ---- Short Story ----
  'ssc-3': (a) => [
    a.hasDialogue ? 'You brought in dialogue — good. Now check: does any line state a feeling outright that could be implied instead?'
      : 'No dialogue yet. The exercise is about subtext in speech — add a line where a character avoids saying what they mean.',
    'Strong test: could a different character say your lines unchanged? If so, make them more specific to this person.',
  ],
  'ssc-4': (a) => [
    a.words < 40 ? 'Tight and specific — good. One precise odd detail beats a paragraph of general description.'
      : 'Watch for general description creeping in. Find the single most specific detail and consider cutting the rest.',
    'The best detail is slightly strange and implies a history. Do you have one here that makes the reader wonder?',
  ],
  // ---- Imagery ----
  'im-1': (a) => [
    a.abstractWords > 0 ? `You used ${a.abstractWords} abstract word${a.abstractWords > 1 ? 's' : ''}. Swap one for a concrete, specific thing — a crow, not a bird.`
      : 'You stayed concrete — no bare abstractions. That\'s exactly the move.',
    a.senseWords > 0 ? 'Good sensory grounding — the reader can picture this.'
      : 'Push for a more specific noun or a sharper verb; specificity is what makes an image stick.',
  ],
  'im-2': (a) => [
    a.senseWords >= 2 ? 'You worked in more than one sense — that\'s what makes a scene feel physically present.'
      : 'Most writing leans on sight. Add one non-visual detail — a smell, a sound, a texture.',
    'Smell is wired to memory — if you can slip one in, it does outsized emotional work.',
  ],
}

function courseFallback(a, courseTitle) {
  const poetry = /poetry|imagery/i.test(courseTitle)
  if (poetry) {
    return [
      a.variedLines ? 'Your line lengths vary — that gives the piece rhythm and control.'
        : a.lines > 1 ? 'Try varying your line lengths more sharply to control the reader\'s pace.'
        : 'Try breaking this across several lines and notice which words land at the ends.',
      a.abstractWords > 0 ? 'You named a feeling directly — see if a concrete image could carry it instead.'
        : 'Nice — you leaned on images over stated emotions.',
    ]
  }
  return [
    a.hasDialogue ? 'Dialogue is doing some work here — check that it reveals character, not just information.'
      : 'Consider a line of dialogue — it can reveal character faster than description.',
    a.avgSentence <= 8 ? 'Short sentences keep this moving quickly — good for tension.'
      : 'Longer sentences here slow the pace — make sure that suits the moment.',
  ]
}

// Generates lesson-specific, text-aware feedback locally (no AI backend in v1).
function exerciseFeedback(text, courseTitle, lessonId) {
  const a = analyze(text)
  const analyzer = LESSON_ANALYZERS[lessonId]
  const notes = analyzer ? analyzer(a) : courseFallback(a, courseTitle)
  return { words: a.words, lines: a.lines, notes }
}

// Renders a rich lesson as a tap-through sequence of section cards.
// Props: courseTitle, blocks[], onComplete(), onExit()
export default function LessonPlayer({ courseTitle, title, blocks, lessonId, alreadyComplete, onComplete, onExit }) {
  const [index, setIndex] = useState(0)
  const scrollRef = useRef(null)
  const { saveDraftPiece } = useStore()
  const total = blocks.length
  const block = blocks[index]
  const isLast = index === total - 1
  const isFirst = index === 0

  // interactive "your turn" state (only on the tryit card)
  const [attempt, setAttempt] = useState('')
  const [result, setResult] = useState(null) // { words, lines, notes } once submitted
  const [celebrating, setCelebrating] = useState(false)

  // scroll each new section back to top
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [index])

  const genreForCourse = /poetry|poem/i.test(courseTitle) ? 'poem' : 'story'

  const submitAttempt = () => {
    if (!attempt.trim()) return
    const fb = exerciseFeedback(attempt, courseTitle, lessonId)
    // save the attempt to the portfolio as a draft so it isn't lost
    const firstLine = attempt.split('\n').find((l) => l.trim().length > 0)
    const derived = firstLine ? firstLine.trim().slice(0, 60) : `${title} — exercise`
    saveDraftPiece({ title: derived, genre: genreForCourse, body: attempt })
    setResult(fb)
    // let the feedback render, then scroll it into view
    setTimeout(() => scrollRef.current?.scrollTo({ top: 9999, behavior: 'smooth' }), 60)
  }

  const next = () => {
    if (isLast) {
      setCelebrating(true)
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

  // footer button behavior depends on whether we're on the interactive tryit card
  const onTryIt = isLast && block.type === 'tryit'
  const footerAction = onTryIt && !result ? submitAttempt : next
  const footerDisabled = onTryIt && !result && !attempt.trim()

  if (celebrating) {
    return (
      <LessonComplete
        line={attempt}
        words={result?.words}
        genre={genreForCourse}
        alreadyComplete={alreadyComplete}
        onContinue={onComplete}
      />
    )
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
          <BlockView
            block={block}
            courseTitle={courseTitle}
            lessonTitle={title}
            attempt={attempt}
            setAttempt={setAttempt}
            result={result}
            alreadyComplete={alreadyComplete}
          />
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
          onClick={footerAction}
          disabled={footerDisabled}
          style={{
            width: '100%',
            background: footerDisabled ? 'oklch(0.9 0.02 65)' : 'var(--accent)',
            color: footerDisabled ? 'oklch(0.6 0.02 55)' : '#fff',
            textAlign: 'center',
            padding: 16,
            borderRadius: 16,
            fontWeight: 700,
            fontSize: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            boxShadow: footerDisabled ? 'none' : 'var(--shadow-button)',
            transition: 'background 200ms ease',
          }}
        >
          {onTryIt ? (
            result ? (
              <>
                Complete lesson <IconCheck size={17} strokeWidth={2.4} />
              </>
            ) : (
              <>
                Get feedback <IconArrowRight size={18} />
              </>
            )
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

function BlockView({ block, courseTitle, lessonTitle, attempt, setAttempt, result, alreadyComplete }) {
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
      return <TryItBlock block={block} attempt={attempt} setAttempt={setAttempt} result={result} alreadyComplete={alreadyComplete} />
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

function TryItBlock({ block, attempt, setAttempt, result, alreadyComplete }) {
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
          padding: '20px 20px',
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.9, marginBottom: 8 }}>
          Exercise
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.5 }}>{block.prompt}</div>
      </div>

      {/* write-it-here box */}
      <div style={{ marginTop: 16 }}>
        <textarea
          value={attempt}
          onChange={(e) => setAttempt(e.target.value)}
          readOnly={!!result}
          placeholder="Write your attempt here…"
          rows={6}
          style={{
            width: '100%',
            background: '#fff',
            border: '1px solid var(--card-border)',
            borderRadius: 16,
            padding: '16px 16px',
            fontFamily: 'var(--font-serif)',
            fontSize: 17,
            lineHeight: 1.7,
            color: 'var(--prompt-ink)',
            resize: 'none',
            outline: 'none',
          }}
        />
      </div>

      {/* feedback appears after "Get feedback" */}
      {result && (
        <div style={{ marginTop: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--accent-tint)',
              borderRadius: 14,
              padding: '12px 16px',
            }}
          >
            <span style={{ color: 'var(--accent)', display: 'flex' }}>
              <IconCheck size={18} strokeWidth={2.4} />
            </span>
            <span style={{ fontSize: 13.5, fontWeight: 700, color: 'oklch(0.42 0.05 45)' }}>
              Saved · {result.words} words · {result.lines} line{result.lines === 1 ? '' : 's'}{alreadyComplete ? '' : ' · +20 XP'}
            </span>
          </div>

          <div style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
            A few things I noticed
          </div>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {result.notes.map((note, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid var(--card-border)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: 14,
                  padding: '14px 16px',
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'oklch(0.35 0.03 55)',
                }}
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
