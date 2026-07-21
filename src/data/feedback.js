// Local, text-aware writing feedback — no AI backend.
//
// Inspects the actual piece for concrete craft features (line-length variance,
// enjambment, the exposed last word, sensory coverage, abstraction vs. image,
// similes, adverb/filler density, repetition/anaphora, sentence pacing,
// dialogue) and returns targeted notes that quote the writer's real words and
// numbers. Notes are weighted toward the specific lesson's craft move.
//
// Shared by the daily session (WriteScreen) and the course lesson player.

const SENSES = {
  sound: new Set(['sound', 'silence', 'hush', 'echo', 'ring', 'rang', 'rung', 'hum', 'buzz', 'whisper', 'roar', 'clatter', 'creak', 'knock', 'footsteps', 'music', 'loud', 'quiet', 'crack', 'snap', 'thud', 'drip', 'siren', 'sirens', 'bell', 'thunder', 'rustle']),
  smell: new Set(['smell', 'scent', 'smoke', 'bread', 'perfume', 'gasoline', 'petrol', 'rot', 'musty', 'coffee', 'bloom', 'reek', 'stink', 'incense', 'fragrance']),
  taste: new Set(['taste', 'bitter', 'sweet', 'salt', 'salty', 'sour', 'metallic', 'honey', 'ash', 'sugar', 'tang', 'stale']),
  touch: new Set(['cold', 'warm', 'rough', 'smooth', 'soft', 'hard', 'sharp', 'damp', 'wet', 'dry', 'heat', 'ice', 'icy', 'sticky', 'grain', 'weight', 'skin', 'cool', 'blister', 'splinter', 'grit']),
}
const ABSTRACTIONS = new Set(['sad', 'sadness', 'happy', 'happiness', 'joy', 'joyful', 'love', 'loved', 'loss', 'grief', 'fear', 'afraid', 'scared', 'hope', 'hopeless', 'beauty', 'beautiful', 'anger', 'angry', 'lonely', 'loneliness', 'pain', 'painful', 'freedom', 'honor', 'despair', 'longing', 'regret', 'shame', 'peace', 'sorrow', 'hate', 'happiness', 'anxiety', 'nervous', 'nervousness', 'guilt'])
const FILLERS = new Set(['very', 'really', 'just', 'quite', 'somewhat', 'rather', 'actually', 'literally', 'simply', 'basically', 'totally', 'kind', 'sort'])
const STOP = new Set(['the', 'and', 'that', 'this', 'with', 'for', 'you', 'your', 'was', 'were', 'have', 'has', 'had', 'they', 'them', 'their', 'there', 'here', 'from', 'into', 'over', 'then', 'than', 'been', 'like', 'about', 'would', 'could', 'should', 'when', 'what', 'which', 'will', 'still', 'only', 'some', 'more', 'been', 'onto'])
const FUNC_END = new Set(['the', 'a', 'an', 'and', 'of', 'to', 'in', 'on', 'it', 'is', 'was', 'with', 'for', 'but', 'or', 'that', 'this', 'as', 'at', 'by'])

export function analyzeWriting(text) {
  const raw = (text || '').replace(/\r/g, '')
  const trimmed = raw.trim()
  const lineArr = raw.split('\n').map((l) => l.trim()).filter((l) => l.length > 0)
  const wordsArr = trimmed ? trimmed.split(/\s+/).filter(Boolean) : []
  const words = wordsArr.length
  const lines = lineArr.length
  const tokens = trimmed.toLowerCase().match(/[a-z']+/g) || []

  const lineLens = lineArr.map((l) => l.split(/\s+/).filter(Boolean).length)
  const maxLine = lineLens.length ? Math.max(...lineLens) : 0
  const minLine = lineLens.length ? Math.min(...lineLens) : 0

  const sentences = trimmed.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean)
  const sentLens = sentences.map((s) => s.split(/\s+/).filter(Boolean).length)
  const avgSentence = sentLens.length ? Math.round(words / sentLens.length) : words
  const maxSentence = sentLens.length ? Math.max(...sentLens) : 0
  const minSentence = sentLens.length ? Math.min(...sentLens) : 0

  const endsStop = /[.!?]["”']?\s*$/.test(trimmed)
  const enjambed = lineArr.filter((l, i) => i < lineArr.length - 1 && !/[.,;:!?—–-]["”']?$/.test(l)).length
  const hasDialogue = /["“”]/.test(raw)

  const similes = (trimmed.toLowerCase().match(/\b(like|as)\b/g) || []).length
  const adverbs = tokens.filter((w) => w.endsWith('ly') && w.length > 4)
  const abstractions = tokens.filter((w) => ABSTRACTIONS.has(w))
  const fillers = tokens.filter((w) => FILLERS.has(w))

  const senseHits = {}
  let senseTotal = 0
  for (const s of Object.keys(SENSES)) {
    senseHits[s] = tokens.filter((w) => SENSES[s].has(w))
    senseTotal += senseHits[s].length
  }
  const sensesUsed = Object.keys(senseHits).filter((s) => senseHits[s].length > 0)

  const freq = {}
  tokens.forEach((w) => {
    if (w.length > 3 && !STOP.has(w)) freq[w] = (freq[w] || 0) + 1
  })
  const topRepeat = Object.entries(freq).sort((a, b) => b[1] - a[1])[0]
  const repeatedWord = topRepeat && topRepeat[1] >= 3 ? topRepeat[0] : null
  const repeatedCount = topRepeat ? topRepeat[1] : 0

  const firstWords = lineArr.map((l) => (l.toLowerCase().match(/[a-z']+/) || [''])[0])
  let anaphoraWord = null
  let anaphoraCount = 0
  for (let i = 0; i < firstWords.length; i++) {
    if (!firstWords[i]) continue
    let c = 1
    for (let j = i + 1; j < firstWords.length; j++) {
      if (firstWords[j] === firstWords[i]) c++
      else break
    }
    if (c >= 2 && c > anaphoraCount) {
      anaphoraCount = c
      anaphoraWord = firstWords[i]
    }
  }

  const firstLine = lineArr[0] || ''
  const lastLine = lineArr[lineArr.length - 1] || ''
  const lastWord = (lastLine.replace(/["”'.,;:!?—–\- ]+$/, '').match(/[A-Za-z']+$/) || [''])[0]
  const weakEnd = !!lastWord && FUNC_END.has(lastWord.toLowerCase())

  return {
    text: trimmed, words, lines, lineLens, maxLine, minLine,
    sentences: sentLens.length, avgSentence, maxSentence, minSentence,
    endsStop, enjambed, hasDialogue, similes, adverbs, abstractions, fillers,
    senseHits, sensesUsed, senseTotal, repeatedWord, repeatedCount,
    anaphoraWord, anaphoraCount, firstLine, lastLine, lastWord, weakEnd,
  }
}

// Which craft dimensions each lesson cares about, in priority order.
const FOCUS = {
  'pf-1': ['break', 'lines', 'image'],
  'pf-2': ['sound', 'repetition', 'pacing'],
  'pf-3': ['break', 'ending', 'lines'],
  'pf-4': ['lines', 'break', 'repetition'],
  'pf-5': ['image', 'senses', 'detail'],
  'pf-6': ['metaphor', 'image', 'detail'],
  'pf-7': ['ending', 'pacing', 'image'],
  'pf-8': ['lines', 'break', 'pacing'],
  'pf-9': ['sound', 'repetition', 'pacing'],
  'pf-10': ['cut', 'detail', 'image'],
  'im-1': ['image', 'detail', 'senses'],
  'im-2': ['senses', 'image', 'detail'],
  'im-3': ['metaphor', 'repetition', 'image'],
  'im-4': ['detail', 'cut', 'image'],
  'im-5': ['dialogue', 'detail', 'image'],
  'im-6': ['cut', 'image', 'detail'],
  'ssc-1': ['opening', 'pacing', 'detail'],
  'ssc-2': ['pacing', 'detail', 'dialogue'],
  'ssc-3': ['dialogue', 'detail', 'cut'],
  'ssc-4': ['detail', 'cut', 'image'],
  'ssc-5': ['ending', 'detail', 'opening'],
  'ssc-6': ['dialogue', 'detail', 'opening'],
  'ssc-7': ['pacing', 'cut', 'dialogue'],
  'ssc-8': ['cut', 'detail', 'pacing'],
}

function candidates(a, genre) {
  const isPoem = genre === 'poem'
  return {
    lines: () => {
      if (a.lines < 2) return isPoem ? "It's sitting as one line — try breaking that thought across three or four and watch which words gain weight at the ends." : null
      if (a.maxLine - a.minLine >= 4) return `Your lines run from ${a.minLine} to ${a.maxLine} words — that range gives the ear a rhythm and keeps it alert.`
      return `Your lines are all close in length (${a.minLine}–${a.maxLine} words). Try making one much shorter than the rest and see how it stands out.`
    },
    break: () => {
      if (a.lines < 2) return null
      if (a.enjambed >= 1) return `${a.enjambed} of your lines break mid-phrase — that enjambment keeps pulling the reader forward before the thought resolves. Nice instinct.`
      return 'Every line lands on a stop. Try breaking one mid-phrase so its meaning spills into the next line — it creates momentum.'
    },
    ending: () => {
      if (!a.lastWord) return null
      if (a.weakEnd) return `You end on "${a.lastWord}" — a function word in the most exposed spot on the page. Rebreak so a word carrying more weight lands last.`
      return `You leave "${a.lastWord}" in the final, most exposed position — a strong last note to hand the reader.`
    },
    image: () => {
      if (a.abstractions.length > 0) return `You name a feeling outright ("${a.abstractions[0]}"). Try cutting it and letting a concrete image carry the same emotion — the reader feels it harder when they build it themselves.`
      if (a.senseTotal > 0) return 'You lean on images over stated feelings — exactly right. The reader arrives at the emotion instead of being told it.'
      return 'There\u2019s little sensory grounding yet — reach for one physical, specific thing the reader could actually see or touch.'
    },
    senses: () => {
      if (a.sensesUsed.length >= 2) return `You work in more than one sense (${a.sensesUsed.slice(0, 3).join(', ')}) — that\u2019s what makes a scene feel physically present.`
      if (a.sensesUsed.length === 1) return `Your sensory detail is all ${a.sensesUsed[0]}. Add one from another sense — a smell or a sound does outsized emotional work.`
      return 'Almost everything here reads visual by default. Slip in one non-visual detail — a smell, a sound, a texture — and the scene will suddenly feel real.'
    },
    metaphor: () => {
      if (a.similes >= 1) return 'You reach for a comparison ("like"/"as"). Try cutting the "like" to test whether the bolder, straight-metaphor version hits harder.'
      return 'No explicit comparison yet — try one metaphor that claims two things ARE the same, not just alike, and see if it lands.'
    },
    dialogue: () => {
      if (a.hasDialogue) return 'You brought in dialogue — good. Check that no line states a feeling outright that the subtext could carry instead.'
      return 'No dialogue yet. One line of speech — especially one that dodges the real question — can reveal character faster than description.'
    },
    detail: () => {
      if (a.adverbs.length >= 2) return `You lean on ${a.adverbs.length} "-ly" adverbs ("${a.adverbs[0]}", "${a.adverbs[1]}"). Swap the strongest for a sharper verb or a concrete detail and the line gets harder.`
      if (a.abstractions.length > 0) return 'Watch for the general where the specific would land harder — one precise, slightly odd detail beats a line of description.'
      return 'Find the single most specific detail here and trust it to carry the moment — specificity is what earns a reader\u2019s belief.'
    },
    pacing: () => {
      if (a.sentences >= 2 && a.maxSentence - a.minSentence >= 6) return `Your sentences swing from ${a.minSentence} to ${a.maxSentence} words — good variation. Make sure the long ones sit on the calm beats and the short ones on the tense.`
      if (a.avgSentence <= 7 && a.sentences >= 1) return 'Short, clipped units throughout — fast and percussive. Make sure that speed matches the feeling you wanted.'
      return 'The sentences run to a similar length. Set one very short sentence against a long one to control where the reader speeds up and slows down.'
    },
    cut: () => {
      if (a.fillers.length >= 1) return `You use filler words (${a.fillers.slice(0, 2).map((w) => `"${w}"`).join(', ')}) — cutting them almost always sharpens a line without losing meaning.`
      if (a.adverbs.length >= 1) return `Try cutting "${a.adverbs[0]}" and leaning on the verb alone — restraint usually makes the moment hit harder.`
      return 'Read it back and find the one line that only explains what another line already shows — that\u2019s usually the strongest cut.'
    },
    opening: () => {
      if (a.words < 4) return null
      const f = a.firstLine.slice(0, 42)
      return `You open on "${f}${a.firstLine.length > 42 ? '\u2026' : ''}" — check that\u2019s the true start. If it\u2019s throat-clearing, the piece may really begin a sentence or two later.`
    },
    sound: () => {
      if (a.anaphoraWord && a.anaphoraCount >= 2) return `${a.anaphoraCount} lines open with "${a.anaphoraWord}" — that repetition builds an incantatory pressure. Keep it if it\u2019s deliberate.`
      if (a.repeatedWord) return `You use "${a.repeatedWord}" ${a.repeatedCount} times. Read it aloud — if the echo is doing work, lean in; if not, vary it.`
      return 'Read this one aloud and mark any word your tongue trips on — that stumble is usually the first thing worth revising.'
    },
    repetition: () => {
      if (a.anaphoraWord && a.anaphoraCount >= 2) return `${a.anaphoraCount} lines begin with "${a.anaphoraWord}" — used on purpose, that\u2019s a real engine of rhythm.`
      if (a.repeatedWord) return `"${a.repeatedWord}" recurs ${a.repeatedCount} times — decide whether that\u2019s a motif you want or an echo to break.`
      return null
    },
  }
}

// Builds up to 4 varied, specific notes, leading with the lesson's focus.
export function writingFeedback({ text, genre, lessonId }) {
  const a = analyzeWriting(text)
  if (a.words < 3) {
    return { words: a.words, lines: a.lines, notes: ['Just a few words so far — give the prompt a little more and I can say something useful about the writing itself.'] }
  }
  const c = candidates(a, genre)
  const focus = FOCUS[lessonId] || (genre === 'poem' ? ['lines', 'image', 'sound'] : ['opening', 'dialogue', 'detail', 'pacing'])
  const order = [...focus, 'image', 'lines', 'pacing', 'detail', 'sound', 'ending', 'senses', 'metaphor', 'break', 'dialogue', 'cut', 'opening', 'repetition']
  const seen = new Set()
  const notes = []
  for (const dim of order) {
    if (notes.length >= 4) break
    if (seen.has(dim)) continue
    seen.add(dim)
    const fn = c[dim]
    if (!fn) continue
    const note = fn()
    if (note) notes.push(note)
  }
  return { words: a.words, lines: a.lines, notes: notes.slice(0, 4) }
}

// ---------------------------------------------------------------------------
// Portfolio-level analysis for the Writer's dashboard (Progress screen).
// Measures OUTPUT, not correctness: words & pieces this week, a per-day chart,
// and the single sharpest line surfaced from the week's writing.
// ---------------------------------------------------------------------------

function countWords(t) {
  const s = (t || '').trim()
  return s ? s.split(/\s+/).filter(Boolean).length : 0
}

// Scores every candidate line/sentence across the given pieces and returns the
// strongest — favouring image-rich, sensory, well-sized lines over bare
// statements of feeling. Returns { line, title } or null.
export function sharpestLine(pieces) {
  let best = null
  let bestScore = -1
  const wc = (t) => t.split(/\s+/).filter(Boolean).length
  for (const p of pieces || []) {
    const lines = (p.body || '').split('\n').map((l) => l.trim()).filter(Boolean)
    const cands = new Set()
    lines.forEach((l, i) => {
      const n = wc(l)
      if (n >= 4 && n <= 16) cands.add(l)
      // prose line: offer its sentences too
      if (n > 16) {
        l.split(/(?<=[.!?])\s+/).map((x) => x.trim()).filter((x) => wc(x) >= 4 && wc(x) <= 16).forEach((x) => cands.add(x))
      }
      // a two-line fragment reads as a fuller thought — offer it as well
      if (i < lines.length - 1) {
        const pair = l + '\n' + lines[i + 1]
        if (wc(pair) >= 6 && wc(pair) <= 16) cands.add(pair)
      }
    })
    for (const line of cands) {
      const toks = line.toLowerCase().replace(/\n/g, ' ').match(/[a-z']+/g) || []
      const n = wc(line)
      let score = n >= 6 && n <= 12 ? 3 : 1
      let sense = 0
      for (const s of Object.keys(SENSES)) sense += toks.filter((w) => SENSES[s].has(w)).length
      score += sense * 2
      score -= toks.filter((w) => ABSTRACTIONS.has(w)).length
      score += Math.min(toks.filter((w) => w.length > 4 && !STOP.has(w)).length, 3)
      if (/[—–,]/.test(line)) score += 1
      if (line.includes('\n')) score += 1 // prefer a two-line fragment
      if (score > bestScore) {
        bestScore = score
        best = { line: line.replace(/^["“]|["”]$/g, ''), title: p.title || 'Untitled' }
      }
    }
  }
  return best
}

export function weeklyOutput(portfolio) {
  const now = Date.now()
  const dayMs = 86400000
  const recent = (portfolio || [])
    .map((p) => ({ ...p, ts: p.updatedAt ? Date.parse(p.updatedAt) : NaN }))
    .filter((p) => !Number.isNaN(p.ts))
  const thisWeek = recent.filter((p) => p.ts >= now - 7 * dayMs)
  const totalWords = thisWeek.reduce((a, p) => a + countWords(p.body), 0)

  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const todayStart = (() => { const d = new Date(now); d.setHours(0, 0, 0, 0); return d.getTime() })()
  const perDay = []
  for (let i = 6; i >= 0; i--) {
    const start = todayStart - i * dayMs
    const words = recent.filter((p) => p.ts >= start && p.ts < start + dayMs).reduce((a, p) => a + countWords(p.body), 0)
    perDay.push({ label: DOW[new Date(start).getDay()][0], words, today: i === 0 })
  }
  const daysWritten = perDay.filter((d) => d.words > 0).length

  return { totalWords, pieces: thisWeek.length, perDay, daysWritten, sharpest: sharpestLine(thisWeek) }
}
