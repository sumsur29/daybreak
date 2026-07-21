import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore } from '../state/store'
import { IconCheck, IconArrowRight, IconBack } from '../icons/Icons'
import { wordsOfTheDay, lexEntry, lexLang } from '../data/lexicon'

const MASTERY_META = {
  new: { label: 'New', dot: 'oklch(0.7 0.02 60)' },
  learning: { label: 'Learning', dot: 'var(--accent)' },
  known: { label: 'Known', dot: 'oklch(0.62 0.13 150)' },
}

// The Glossary is the vocabulary room behind the Word-of-day strip in Learn.
// Two words a day — one Urdu (ghazal vocabulary), one English (poetic/craft) —
// revealed by flipping the card, then kept, graded (New → Learning → Known on
// tap), and reviewed as flashcards.
export default function Glossary() {
  const navigate = useNavigate()
  const { state, saveWord, cycleWordMastery } = useStore()
  const glossary = state.glossary || {}
  const pair = wordsOfTheDay(state.sessionDay || new Date().toISOString().slice(0, 10))
  const [reviewing, setReviewing] = useState(false)
  const [openId, setOpenId] = useState(null)

  const savedIds = Object.keys(glossary).sort((a, b) => (glossary[b].addedAt || '').localeCompare(glossary[a].addedAt || ''))
  const knownCount = savedIds.filter((id) => glossary[id].mastery === 'known').length

  return (
    <Screen background="var(--canvas)">
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 20px 6px' }}>
        <button className="press" onClick={() => navigate('/learn')} aria-label="Back" style={{ width: 38, height: 38, borderRadius: 12, background: '#fff', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)', flex: 'none' }}>
          <IconBack size={18} strokeWidth={2} />
        </button>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>Glossary</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--ink-strong)', marginTop: 2 }}>Words worth keeping</h1>
        </div>
      </div>

      {/* word of the day */}
      <div style={{ padding: '18px 20px 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>Word of the day</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>tap to reveal</div>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', gap: 12 }}>
        <WordCard entry={pair.urdu} lang="urdu" saved={!!glossary[pair.urdu.id]} onSave={() => saveWord(pair.urdu.id)} />
        <WordCard entry={pair.english} lang="english" saved={!!glossary[pair.english.id]} onSave={() => saveWord(pair.english.id)} />
      </div>

      {/* saved list */}
      <div style={{ padding: '30px 20px 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
          Your words{savedIds.length ? ` · ${savedIds.length}` : ''}
        </div>
        {savedIds.length >= 3 && (
          <button className="press" onClick={() => setReviewing(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-tint)', padding: '6px 12px', borderRadius: 99 }}>
            Review <IconArrowRight size={13} strokeWidth={2.2} />
          </button>
        )}
      </div>

      {savedIds.length === 0 ? (
        <div style={{ margin: '0 20px', padding: '22px 18px', background: '#fff', border: '1px dashed oklch(0.86 0.03 65)', borderRadius: 18, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.5 }}>
            Save today's words to start your collection. Tap any saved word to grade how well you know it — New, Learning, Known.
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
                  onClick={() => setOpenId(id)}
                  title="Tap to open"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#fff', border: '1px solid var(--card-border)', borderRadius: 99, padding: '8px 13px' }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: meta.dot, flex: 'none' }} />
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'oklch(0.28 0.03 55)' }}>{entry.word}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)' }}>{meta.label}</span>
                </button>
              )
            })}
          </div>
          <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>
            {knownCount > 0 ? `${knownCount} known · ` : ''}tap a word to see its meaning
          </div>
        </div>
      )}

      {openId && (
        <WordDetail
          id={openId}
          mastery={(glossary[openId] && glossary[openId].mastery) || 'new'}
          onGrade={() => cycleWordMastery(openId)}
          onWrite={(entry) => { setOpenId(null); navigate(`/write?mode=freewrite&seed=${encodeURIComponent(entry.word)}`) }}
          onRemove={() => { removeWord(openId); setOpenId(null) }}
          onClose={() => setOpenId(null)}
        />
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
    </Screen>
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
          minHeight: 152,
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

// Opened when a saved word is tapped: its meaning + note, the grade control
// (moved here so the chip's job is simply "open"), plus Write-with-it / Remove.
function WordDetail({ id, mastery, onGrade, onWrite, onRemove, onClose }) {
  const entry = lexEntry(id)
  const isUrdu = lexLang(id) === 'urdu'
  if (!entry) return null
  const meta = MASTERY_META[mastery] || MASTERY_META.new
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'oklch(0.22 0.03 55 / 0.55)', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--canvas)', borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: '10px 20px 26px', boxShadow: '0 -8px 40px oklch(0.2 0.03 55 / 0.2)' }}>
        <div style={{ width: 40, height: 4, borderRadius: 99, background: 'oklch(0.86 0.02 65)', margin: '0 auto 18px' }} />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>{isUrdu ? 'Urdu' : 'English'}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 8 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, color: 'oklch(0.26 0.03 55)', lineHeight: 1.05 }}>{entry.word}</div>
          {entry.pron && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)' }}>{entry.pron}</div>}
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.4, color: 'oklch(0.24 0.03 55)', marginTop: 16 }}>{entry.meaning}</div>
        {entry.note && <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--muted)', marginTop: 10 }}>{entry.note}</div>}

        <button className="press" onClick={onGrade} style={{ marginTop: 20, width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#fff', border: '1px solid var(--card-border)', borderRadius: 14, padding: '12px', fontWeight: 700, fontSize: 13.5, color: 'oklch(0.32 0.03 55)' }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: meta.dot }} /> {meta.label}
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', marginLeft: 4 }}>tap to change</span>
        </button>

        <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
          <button className="press" onClick={() => onWrite(entry)} style={{ flex: 1, background: 'var(--accent)', color: '#fff', padding: 13, borderRadius: 14, fontWeight: 700, fontSize: 13.5, boxShadow: 'var(--shadow-button)' }}>Write with it</button>
          <button className="press" onClick={onRemove} style={{ flex: 'none', background: 'transparent', color: 'var(--muted)', padding: '13px 16px', borderRadius: 14, fontWeight: 700, fontSize: 13.5 }}>Remove</button>
        </div>
      </div>
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
