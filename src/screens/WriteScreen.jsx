import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Screen from '../components/Screen'
import SessionProgressHeader from '../components/SessionProgressHeader'
import { useStore, getTodaySession } from '../state/store'
import { IconClock, IconSparkleWand, IconDraftPage, IconCheck } from '../icons/Icons'

function useTimer(active) {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    if (!active) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [active])
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

// No AI backend in v1 (see README) — this generates a few genuinely
// text-aware observations locally, so "Finish & get feedback" produces an
// actual response instead of just closing the screen.
function generateFeedback({ genre, text, words, lines }) {
  const notes = []
  if (genre === 'poem') {
    if (lines <= 4) notes.push('Short and controlled — every line is doing real work at this length.')
    else if (lines <= 10) notes.push('A nice compact shape. See if any single line could be cut without losing the poem.')
    else notes.push('A longer piece — try reading it aloud and listen for where the energy dips.')
    notes.push(
      /[.!?]\s*$/.test(text.trim())
        ? 'You closed on a full stop — try ending mid-thought sometime and see how it changes the poem.'
        : 'Ending without a full stop leaves the last line hanging — that\'s often a strength, not an accident.'
    )
  } else {
    notes.push(
      /["“”]/.test(text)
        ? 'Good — dialogue is doing some of the storytelling work here.'
        : 'No dialogue yet. A single line of speech can reveal character fast.'
    )
    notes.push(
      words < 80
        ? 'Short scene — that\'s a strength for pacing, not a flaw.'
        : 'Solid length. Check your first sentence — is that really where the story starts?'
    )
  }
  return notes
}

export default function WriteScreen() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const mode = params.get('mode') || 'session' // 'session' | 'practice' | 'freewrite'
  const promptId = params.get('promptId')
  const resumeId = params.get('resume')
  const { state, wordsInText, linesInText, saveDraft, finishWriting, saveDraftPiece } = useStore()
  const resumePiece = resumeId ? state.portfolio.find((p) => p.id === resumeId) : null

  const genre = mode === 'session' ? state.todayGenre : mode === 'practice' ? findPromptGenre(state, promptId) : resumePiece ? resumePiece.genre : 'poem'
  const draftKey = mode === 'session' ? `session-${state.todayGenre}` : mode === 'practice' ? `practice-${promptId}` : resumeId ? `resume-${resumeId}` : 'freewrite'

  const promptText = useMemo(() => {
    if (mode === 'session') return getTodaySession(state).write.prompt
    if (mode === 'practice') {
      const p = state.practice.prompts.find((pr) => pr.id === promptId)
      return p ? p.text : ''
    }
    return ''
  }, [mode, promptId, state])

  const [text, setText] = useState(() => state.drafts[draftKey]?.text || resumePiece?.body || '')
  const textareaRef = useRef(null)
  const timer = useTimer(true)
  const [tipVisible, setTipVisible] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)
  const [result, setResult] = useState(null) // set once finished — swaps the editor for a feedback view

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  // persist WIP as the user types (debounced by React batching is fine here since it's local state)
  useEffect(() => {
    const id = setTimeout(() => saveDraft(draftKey, text), 400)
    return () => clearTimeout(id)
  }, [text, draftKey, saveDraft])

  const words = wordsInText(text)
  const lines = linesInText(text)

  const headerTitle = resumePiece ? 'Continue writing' : mode === 'freewrite' ? 'Freewrite' : mode === 'practice' ? 'Practice write' : 'Your turn'
  const stepLabel = mode === 'session' ? 'Step 3 of 3' : resumePiece ? resumePiece.title : mode === 'freewrite' ? 'Blank page, no rules' : 'Warm-up prompt'

  const deriveTitle = () => {
    const firstLine = text.split('\n').find((l) => l.trim().length > 0)
    if (firstLine) return firstLine.trim().slice(0, 60)
    return genre === 'poem' ? 'Untitled poem' : 'Untitled story'
  }

  const handleFinish = () => {
    if (!text.trim()) return
    const isDailySession = mode === 'session'
    finishWriting({ title: deriveTitle(), genre, body: text, isDailySession, replaceId: resumeId || undefined })
    setResult({
      isDailySession,
      notes: generateFeedback({ genre, text, words, lines }),
    })
  }

  const handleDone = () => {
    navigate(mode === 'session' ? '/' : mode === 'practice' ? '/practice' : '/you')
  }

  const handleSaveDraft = () => {
    if (!text.trim()) return
    saveDraftPiece({ title: deriveTitle(), genre, body: text, replaceId: resumeId || undefined })
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 1400)
  }

  if (result) {
    return (
      <Screen>
        <SessionProgressHeader centered eyebrow="Nice work!" stepLabel="Piece saved" onBack={handleDone} />
        <div style={{ padding: '20px 24px 40px' }}>
          <div
            style={{
              background: 'var(--accent-gradient)',
              color: '#fff',
              borderRadius: 22,
              padding: 22,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.22)',
                border: '2px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 'none',
              }}
            >
              <IconCheck size={20} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700 }}>
                {words} words · {lines} line{lines === 1 ? '' : 's'}
              </div>
              <div style={{ fontSize: 13, opacity: 0.92, marginTop: 2 }}>
                {result.isDailySession
                  ? `+50 XP · Day ${state.streak.current} streak`
                  : 'Saved to your portfolio'}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20, fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
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

          <button
            className="press"
            onClick={handleDone}
            style={{
              width: '100%',
              marginTop: 24,
              background: 'var(--accent)',
              color: '#fff',
              textAlign: 'center',
              padding: 16,
              borderRadius: 16,
              fontWeight: 700,
              fontSize: 15,
              boxShadow: 'var(--shadow-button)',
            }}
          >
            {mode === 'session' ? 'Back to Today' : mode === 'practice' ? 'Back to Practice' : 'Back to portfolio'}
          </button>
        </div>
      </Screen>
    )
  }

  return (
    <Screen>
      <SessionProgressHeader
        centered
        eyebrow={headerTitle}
        stepLabel={stepLabel}
        onBack={() => navigate(mode === 'session' ? '/session/example' : -1)}
      />
      {/* timer pill, positioned like the design's top-right chip */}
      <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'flex-end', marginTop: -34 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: 'var(--accent-tint)',
            color: 'var(--accent)',
            fontWeight: 700,
            fontSize: 13,
            padding: '8px 11px',
            borderRadius: 99,
          }}
        >
          <IconClock size={14} strokeWidth={1.9} />
          {timer}
        </div>
      </div>

      {promptText && (
        <div style={{ margin: '16px 20px 0', background: 'var(--accent-gradient)', color: '#fff', borderRadius: 18, padding: '16px 18px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.9 }}>
            Prompt
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.45, marginTop: 6 }}>{promptText}</div>
        </div>
      )}

      <div style={{ margin: '16px 22px 0' }}>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start writing…"
          rows={10}
          style={{
            width: '100%',
            fontFamily: 'var(--font-serif)',
            fontSize: 18,
            lineHeight: 2,
            color: 'var(--prompt-ink)',
            resize: 'none',
          }}
        />
      </div>

      <div style={{ height: 170 }} />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#fff',
          borderTop: '1px solid var(--card-border)',
          padding: '14px 20px calc(env(safe-area-inset-bottom, 0px) + 28px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>
            {words} words · {lines} line{lines === 1 ? '' : 's'}
          </span>
          <span style={{ flex: 1 }} />
          <button
            className="press"
            onClick={() => setTipVisible((v) => !v)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--accent)',
              background: 'var(--accent-tint)',
              padding: '6px 11px',
              borderRadius: 99,
            }}
          >
            <IconSparkleWand size={13} strokeWidth={1.9} />
            Coach tip
          </button>
        </div>
        {tipVisible && (
          <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 12, lineHeight: 1.5 }}>
            {genre === 'poem'
              ? 'Try ending a line on a word you want the reader to sit with, even mid-thought.'
              : 'Cut your first sentence and see if the second one is actually where the story starts.'}
          </div>
        )}
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            aria-label="Save draft"
            className="press"
            onClick={handleSaveDraft}
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: savedFlash ? 'var(--accent-tint)' : 'oklch(0.96 0.02 65)',
              color: savedFlash ? 'var(--accent)' : 'oklch(0.5 0.03 55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
            }}
          >
            <IconDraftPage size={20} strokeWidth={1.8} />
          </button>
          <button
            className="press"
            onClick={handleFinish}
            style={{
              flex: 1,
              background: 'var(--accent)',
              color: '#fff',
              textAlign: 'center',
              padding: 15,
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 15,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            Finish &amp; get feedback
          </button>
        </div>
      </div>
    </Screen>
  )
}

function findPromptGenre(state, promptId) {
  const p = state.practice.prompts.find((pr) => pr.id === promptId)
  if (!p) return 'poem'
  return p.kind === 'story' ? 'story' : 'poem'
}
