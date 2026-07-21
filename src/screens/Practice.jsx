import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore } from '../state/store'
import { IconPencilPage, IconFeather, IconBook, IconMoon, IconCheck, IconArrowRight } from '../icons/Icons'
import { wordsOfTheDay, lexEntry, lexLang } from '../data/lexicon'

const MASTERY_META = {
  new: { label: 'New', dot: 'oklch(0.7 0.02 60)' },
  learning: { label: 'Learning', dot: 'var(--accent)' },
  known: { label: 'Known', dot: 'oklch(0.62 0.13 150)' },
}

const segments = ['Prompts', 'Drills', 'Sprints']

export default function Practice() {
  const navigate = useNavigate()
  const { state } = useStore()
  const [segment, setSegment] = useState('Prompts')

  const list = state.practice.prompts.filter((p) => {
    if (segment === 'Prompts') return p.kind === 'poem' || p.kind === 'story' || p.kind === 'sher'
    if (segment === 'Drills') return p.kind === 'drill'
    return true // Sprints: reuse the same pool as a stand-in until timed sprints are added
  })

  return (
    <Screen withTabBar>
      <div style={{ padding: '20px 24px 6px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Practice
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--ink-strong)', marginTop: 5 }}>
          Warm up, any time
        </h2>
      </div>

      <div style={{ margin: '14px 20px 0', display: 'flex', background: '#fff', border: '1px solid oklch(0.93 0.02 65)', borderRadius: 14, padding: 5 }}>
        {segments.map((s) => (
          <button
            key={s}
            className="press"
            onClick={() => setSegment(s)}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 10,
              borderRadius: 10,
              background: segment === s ? 'var(--accent)' : 'transparent',
              color: segment === s ? '#fff' : 'var(--muted)',
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        className="press"
        onClick={() => navigate('/write?mode=freewrite')}
        style={{
          display: 'block',
          width: 'calc(100% - 40px)',
          margin: '16px 20px 0',
          background: '#fff',
          border: '1.5px dashed oklch(0.8 0.06 45)',
          borderRadius: 20,
          padding: 20,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'var(--accent-tint)',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <IconPencilPage size={22} strokeWidth={1.8} />
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, color: 'oklch(0.28 0.03 55)', marginTop: 12 }}>
          Freewrite
        </div>
        <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>Blank page, no rules. Just go.</div>
        <div style={{ marginTop: 14, display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '11px 22px', borderRadius: 12, fontWeight: 700, fontSize: 14 }}>
          Start blank
        </div>
      </button>

      <div style={{ padding: '22px 20px 8px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
        Today's prompts
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {list.map((p) => {
          const isPoem = p.kind === 'poem'
          const isStory = p.kind === 'story'
          const isSher = p.kind === 'sher'
          return (
            <button
              key={p.id}
              className="press"
              onClick={() => navigate(`/write?mode=practice&promptId=${p.id}`)}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: '#fff', border: '1px solid var(--card-border)', borderRadius: 18, padding: '16px 17px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
                {isPoem && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', background: 'var(--accent)', padding: '4px 9px', borderRadius: 99 }}>
                    <IconFeather size={11} strokeWidth={2.1} />
                    Poem
                  </span>
                )}
                {isStory && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'oklch(0.42 0.05 45)', background: 'oklch(0.96 0.02 65)', padding: '4px 9px', borderRadius: 99 }}>
                    <IconBook size={11} strokeWidth={2.1} />
                    Story
                  </span>
                )}
                {isSher && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)', background: 'var(--accent-tint)', padding: '4px 9px', borderRadius: 99 }}>
                    <IconMoon size={11} strokeWidth={2.1} />
                    Ghazal
                  </span>
                )}
                {!isPoem && !isStory && !isSher && (
                  <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'oklch(0.42 0.05 45)', background: 'oklch(0.96 0.02 65)', padding: '4px 9px', borderRadius: 99 }}>
                    Skill drill
                  </span>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'oklch(0.28 0.03 55)', lineHeight: 1.4 }}>{p.text}</div>
            </button>
          )
        })}
      </div>

      <GlossarySection />
    </Screen>
  )
}

// ————————————————————————————————————————————————————————————
// WORD OF THE DAY + GLOSSARY (Ghazal & Sher track)
// Two words a day — one Urdu (ghazal vocabulary), one English (poetic/craft) —
// revealed by flipping the card, then kept in a personal glossary you can grow,
// grade (New → Learning → Known on tap), and review as flashcards.
// ————————————————————————————————————————————————————————————
function GlossarySection() {
  const navigate = useNavigate()
  const { state, saveWord, cycleWordMastery, removeWord } = useStore()
  const glossary = state.glossary || {}
  const pair = wordsOfTheDay(state.sessionDay || new Date().toISOString().slice(0, 10))
  const [reviewing, setReviewing] = useState(false)

  const savedIds = Object.keys(glossary).sort((a, b) => (glossary[b].addedAt || '').localeCompare(glossary[a].addedAt || ''))
  const knownCount = savedIds.filter((id) => glossary[id].mastery === 'known').length

  return (
    <>
      <div style={{ padding: '30px 20px 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>Word of the day</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>tap to reveal</div>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', gap: 12 }}>
        <WordCard entry={pair.urdu} lang="urdu" saved={!!glossary[pair.urdu.id]} onSave={() => saveWord(pair.urdu.id)} />
        <WordCard entry={pair.english} lang="english" saved={!!glossary[pair.english.id]} onSave={() => saveWord(pair.english.id)} />
      </div>

      <div style={{ padding: '28px 20px 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
          Your glossary{savedIds.length ? ` · ${savedIds.length}` : ''}
        </div>
        {savedIds.length >= 3 && (
          <button className="press" onClick={() => setReviewing(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-tint)', padding: '6px 12px', borderRadius: 99 }}>
            Review <IconArrowRight size={13} strokeWidth={2.2} />
          </button>
        )}
      </div>

      {savedIds.length === 0 ? (
        <div style={{ margin: '0 20px', padding: '20px 18px', background: '#fff', border: '1px dashed oklch(0.86 0.03 65)', borderRadius: 18, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.5 }}>
            Save today's words to start your glossary. Tap a saved word to grade how well you know it.
          </div>
        </div>
      ) : (
        <div style={{ padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {savedIds.map((id) => {
              const entry = lexEntry(id)
              if (!entry) return null
              const m = glossary[id].mastery || 'new'
              const meta = MASTERY_META[m]
              return (
                <button
                  key={id}
                  className="press"
                  onClick={() => cycleWordMastery(id)}
                  title="Tap to grade"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#fff', border: '1px solid var(--card-border)', borderRadius: 99, padding: '8px 13px' }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: meta.dot, flex: 'none' }} />
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'oklch(0.28 0.03 55)' }}>{entry.word}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)' }}>{meta.label}</span>
                </button>
              )
            })}
          </div>
          {knownCount > 0 && (
            <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>
              {knownCount} known · tap any word to change its grade
            </div>
          )}
        </div>
      )}

      {reviewing && (
        <ReviewOverlay
          ids={savedIds}
          glossary={glossary}
          onGrade={cycleWordMastery}
          onWrite={(entry) => { setReviewing(false); navigate(`/write?mode=freewrite&seed=${encodeURIComponent(entry.word)}`) }}
          onClose={() => setReviewing(false)}
        />
      )}
    </>
  )
}

function WordCard({ entry, lang, saved, onSave }) {
  const [flipped, setFlipped] = useState(false)
  const isUrdu = lang === 'urdu'
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <button
        className="press"
        onClick={() => setFlipped((f) => !f)}
        style={{
          width: '100%',
          minHeight: 148,
          textAlign: 'left',
          borderRadius: 20,
          padding: '15px 15px 14px',
          background: flipped ? '#fff' : isUrdu ? 'var(--accent-gradient)' : 'oklch(0.29 0.04 265)',
          color: flipped ? 'oklch(0.28 0.03 55)' : '#fff',
          border: flipped ? '1px solid var(--card-border)' : 'none',
          boxShadow: flipped ? 'none' : 'var(--shadow-card)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: flipped ? 0.55 : 0.8 }}>
          {isUrdu ? 'Urdu' : 'English'}
        </div>
        {!flipped ? (
          <div style={{ marginTop: 'auto' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 25, fontWeight: 600, lineHeight: 1.1 }}>{entry.word}</div>
            {entry.pron && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, opacity: 0.85, marginTop: 5 }}>{entry.pron}</div>}
          </div>
        ) : (
          <div style={{ marginTop: 8, overflow: 'hidden' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.4, color: 'oklch(0.24 0.03 55)' }}>{entry.meaning}</div>
            {entry.note && <div style={{ fontSize: 11.5, lineHeight: 1.45, color: 'var(--muted)', marginTop: 7 }}>{entry.note}</div>}
          </div>
        )}
      </button>
      <button
        className="press"
        onClick={onSave}
        disabled={saved}
        style={{
          width: '100%',
          marginTop: 8,
          padding: '9px 10px',
          borderRadius: 12,
          fontWeight: 700,
          fontSize: 12.5,
          border: 'none',
          background: saved ? 'transparent' : 'var(--accent-tint)',
          color: saved ? 'var(--muted)' : 'var(--accent)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {saved ? (<><IconCheck size={12} strokeWidth={2.6} /> Saved</>) : 'Save to glossary'}
      </button>
    </div>
  )
}

function ReviewOverlay({ ids, glossary, onGrade, onWrite, onClose }) {
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const id = ids[i]
  const entry = lexEntry(id)
  const isUrdu = lexLang(id) === 'urdu'
  const advance = () => { setFlipped(false); setI((n) => (n + 1) % ids.length) }
  if (!entry) return null
  const m = (glossary[id] && glossary[id].mastery) || 'new'
  const meta = MASTERY_META[m]

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'oklch(0.22 0.03 55 / 0.55)', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', padding: '0 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 2px', color: '#fff' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em' }}>{i + 1} / {ids.length}</div>
        <button className="press" onClick={onClose} style={{ fontSize: 14, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.16)', padding: '6px 14px', borderRadius: 99 }}>Done</button>
      </div>

      <button
        className="press"
        onClick={() => setFlipped((f) => !f)}
        style={{ flex: 'none', width: '100%', minHeight: 300, borderRadius: 26, background: '#fff', border: 'none', boxShadow: 'var(--shadow-card)', padding: 26, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>{isUrdu ? 'Urdu' : 'English'}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 600, color: 'oklch(0.26 0.03 55)', marginTop: 10, lineHeight: 1.05 }}>{entry.word}</div>
        {entry.pron && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>{entry.pron}</div>}
        {flipped ? (
          <div style={{ marginTop: 18, borderTop: '1px solid var(--card-border)', paddingTop: 16 }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.4, color: 'oklch(0.24 0.03 55)' }}>{entry.meaning}</div>
            {entry.note && <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--muted)', marginTop: 10 }}>{entry.note}</div>}
          </div>
        ) : (
          <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>tap to reveal the meaning</div>
        )}
      </button>

      <div style={{ display: 'flex', gap: 10, padding: '16px 0 26px' }}>
        <button className="press" onClick={() => { onGrade(id) }} style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.16)', color: '#fff', padding: '13px 15px', borderRadius: 16, fontWeight: 700, fontSize: 13 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: meta.dot }} /> {meta.label}
        </button>
        <button className="press" onClick={() => onWrite(entry)} style={{ flex: 1, background: 'rgba(255,255,255,0.16)', color: '#fff', padding: 13, borderRadius: 16, fontWeight: 700, fontSize: 13 }}>Write with it</button>
        <button className="press" onClick={advance} style={{ flex: 1, background: 'var(--accent)', color: '#fff', padding: 13, borderRadius: 16, fontWeight: 700, fontSize: 13, boxShadow: 'var(--shadow-button)' }}>Next</button>
      </div>
    </div>
  )
}
