// Lexicon for Word of the Day + Glossary (Pass 2b of the Ghazal & Sher track).
//
// Two pools: `urdu` (Roman transliteration of common ghazal/Urdu words) and
// `english` (poetic / craft words worth a writer's while). Word of the Day
// serves ONE from each pool per day, picked deterministically from the date so
// everyone on the same day sees the same pair and it advances at the 6am roll.
//
// Roman only, by decision — no Devanagari/Nastaliq. Each entry:
//   { id, word, pron?, meaning, note? }
// `pron` is a light pronunciation nudge; `note` is an optional usage/feel line.

export const LEXICON = {
  urdu: [
    { id: 'u-ishq', word: 'ishq', pron: 'ishq', meaning: 'love — deep, consuming, often divine', note: 'The engine of the whole ghazal tradition. Heavier than "pyaar"; closer to obsession or the love of God.' },
    { id: 'u-dil', word: 'dil', pron: 'dil', meaning: 'the heart', note: 'The ghazal\u2019s favourite organ — it breaks, bleeds, burns, and keeps beating anyway.' },
    { id: 'u-gham', word: 'gham', pron: 'ġham', meaning: 'sorrow, grief', note: 'Not depression but a dignified, almost cherished sadness — the shayar\u2019s natural weather.' },
    { id: 'u-hijr', word: 'hijr', pron: 'hijr', meaning: 'separation from the beloved', note: 'The ache of being apart. Its opposite is "visaal" (union).' },
    { id: 'u-visaal', word: 'visaal', pron: 'vi-saal', meaning: 'union, reunion with the beloved', note: 'The longed-for meeting — rare, and sweeter for it.' },
    { id: 'u-firaaq', word: 'firaaq', pron: 'fi-raaq', meaning: 'separation, parting', note: 'A cousin of hijr; also the takhallus of the poet Firaq Gorakhpuri.' },
    { id: 'u-intezaar', word: 'intezaar', pron: 'in-te-zaar', meaning: 'the act of waiting', note: 'Waiting itself, as a state of being — the Nayika of the miniatures lives here.' },
    { id: 'u-tanhaai', word: 'tanhaai', pron: 'tan-haa-i', meaning: 'solitude, loneliness', note: 'The quiet room where most ghazals are actually written.' },
    { id: 'u-yaad', word: 'yaad', pron: 'yaad', meaning: 'memory, remembrance', note: '"Teri yaad" — your memory — one of the most-sung phrases in the language.' },
    { id: 'u-khwaab', word: 'khwaab', pron: 'khwaab', meaning: 'a dream', note: 'Where the beloved is allowed to appear when the waking world won\u2019t oblige.' },
    { id: 'u-chaand', word: 'chaand', pron: 'chaand', meaning: 'the moon', note: 'Stands in for the beloved\u2019s face — luminous, distant, borrowed light.' },
    { id: 'u-raat', word: 'raat', pron: 'raat', meaning: 'night', note: 'The ghazal\u2019s home hour: sleeplessness, longing, and candlelight.' },
    { id: 'u-subah', word: 'subah', pron: 'su-bah', meaning: 'morning, dawn', note: 'Relief or fresh grief, depending on whether the night was kind.' },
    { id: 'u-aasmaan', word: 'aasmaan', pron: 'aas-maan', meaning: 'the sky, the heavens', note: 'Often blamed personally, as fate, for the lover\u2019s troubles.' },
    { id: 'u-sitaara', word: 'sitaara', pron: 'si-taa-ra', meaning: 'a star; one\u2019s fortune', note: 'Both the light overhead and the luck it\u2019s said to govern.' },
    { id: 'u-gul', word: 'gul', pron: 'gul', meaning: 'a rose, a flower', note: 'The beloved, in the old rose-and-nightingale pairing with "bulbul".' },
    { id: 'u-bulbul', word: 'bulbul', pron: 'bul-bul', meaning: 'the nightingale', note: 'The lover who sings helplessly to the rose it can never hold.' },
    { id: 'u-baagh', word: 'baagh', pron: 'baaġh', meaning: 'a garden', note: 'The stage for the rose, the nightingale, and the whole drama of spring.' },
    { id: 'u-bahaar', word: 'bahaar', pron: 'ba-haar', meaning: 'spring; bloom, flourish', note: 'Beauty and its cruel brevity — bahaar always ends.' },
    { id: 'u-khizaan', word: 'khizaan', pron: 'khi-zaan', meaning: 'autumn, the withering season', note: 'The counterweight to bahaar — decline, loss, the garden emptying.' },
    { id: 'u-shama', word: 'shama', pron: 'sha-ma', meaning: 'a candle, its flame', note: 'Paired with "parwana": the flame that draws the moth to its death.' },
    { id: 'u-parwana', word: 'parwana', pron: 'par-waa-na', meaning: 'a moth', note: 'The lover who burns himself on the flame he can\u2019t resist.' },
    { id: 'u-saaqi', word: 'saaqi', pron: 'saa-qi', meaning: 'the cupbearer who pours the wine', note: 'Giver of intoxication; in Sufi verse, often the divine itself.' },
    { id: 'u-mai', word: 'mai', pron: 'mai', meaning: 'wine', note: 'Literal or mystical drunkenness — the ghazal rarely says which, on purpose.' },
    { id: 'u-jaam', word: 'jaam', pron: 'jaam', meaning: 'a wine-cup, goblet', note: 'What the saaqi fills; sometimes the whole ritual of surrender in one word.' },
    { id: 'u-mehfil', word: 'mehfil', pron: 'meh-fil', meaning: 'a gathering, a company of people', note: 'The lit, crowded room — against which the lover feels most alone.' },
    { id: 'u-mehboob', word: 'mehboob', pron: 'meh-boob', meaning: 'the beloved', note: 'The one the whole poem is bent toward, named or not.' },
    { id: 'u-mehbooba', word: 'jaan', pron: 'jaan', meaning: 'life; darling, dearest', note: 'Literally "life" — used the way English uses "my life", "my soul".' },
    { id: 'u-nazar', word: 'nazar', pron: 'na-zar', meaning: 'a glance, a gaze; sight', note: 'A single look does enormous work in the ghazal — met, avoided, remembered.' },
    { id: 'u-aankh', word: 'aankh', pron: 'aankh', meaning: 'the eye', note: 'Where the tears live and the glances start.' },
    { id: 'u-ashk', word: 'ashk', pron: 'ashk', meaning: 'a tear', note: 'The more literary word for tears — "ashk" over the plain "aansu".' },
    { id: 'u-zakhm', word: 'zakhm', pron: 'zakhm', meaning: 'a wound', note: 'Usually of the heart, and usually one the lover is oddly proud of.' },
    { id: 'u-dard', word: 'dard', pron: 'dard', meaning: 'pain, ache', note: 'The shayar\u2019s companion — often addressed almost fondly.' },
    { id: 'u-junoon', word: 'junoon', pron: 'ju-noon', meaning: 'madness, frenzy (esp. of love)', note: 'The point where ishq stops being reasonable — and the ghazal loves that point.' },
    { id: 'u-deewana', word: 'deewana', pron: 'dee-waa-na', meaning: 'one driven mad (by love)', note: 'The lover in full junoon — wild, wandering, unashamed.' },
    { id: 'u-sabr', word: 'sabr', pron: 'sabr', meaning: 'patience, endurance', note: 'The virtue the lover is always running out of.' },
    { id: 'u-taqdeer', word: 'taqdeer', pron: 'taq-deer', meaning: 'fate, destiny', note: 'Written in advance, and rarely in the lover\u2019s favour.' },
    { id: 'u-naseeb', word: 'naseeb', pron: 'na-seeb', meaning: 'fortune, lot, what\u2019s written for you', note: 'Close to taqdeer, but more personal — "my share".' },
    { id: 'u-wafa', word: 'wafa', pron: 'wa-faa', meaning: 'faithfulness, loyalty in love', note: 'The promise kept; its betrayal ("bewafaai") fuels half the couplets ever written.' },
    { id: 'u-jafa', word: 'jafa', pron: 'ja-faa', meaning: 'cruelty, unkindness (from the beloved)', note: 'The beloved\u2019s coldness — which the lover somehow keeps returning for.' },
    { id: 'u-husn', word: 'husn', pron: 'husn', meaning: 'beauty', note: 'Beauty as a force in the world, paired with "ishq" (love) as its answer.' },
    { id: 'u-noor', word: 'noor', pron: 'noor', meaning: 'light, radiance (often divine)', note: 'A holier light than lamplight — the glow of the face or of God.' },
    { id: 'u-saaya', word: 'saaya', pron: 'saa-ya', meaning: 'a shadow; shelter', note: 'Both the dark shape and the protection of being under someone\u2019s "saaya".' },
    { id: 'u-manzil', word: 'manzil', pron: 'man-zil', meaning: 'destination; a stage of a journey', note: 'The goal at the end of the road — reached or, more poignantly, not.' },
    { id: 'u-raah', word: 'raah', pron: 'raah', meaning: 'a path, road, way', note: 'The road of love or life — long, dusty, and rarely straight.' },
    { id: 'u-safar', word: 'safar', pron: 'sa-far', meaning: 'a journey, travel', note: 'The going itself, valued over the arriving.' },
    { id: 'u-sehra', word: 'sehra', pron: 'seh-ra', meaning: 'a desert, wilderness', note: 'Where the mad lover wanders — vast, empty, and somehow the right address.' },
    { id: 'u-qafas', word: 'qafas', pron: 'qa-fas', meaning: 'a cage', note: 'Captivity, the world, the body — the bulbul dreams of the garden from inside it.' },
    { id: 'u-aazaadi', word: 'aazaadi', pron: 'aa-zaa-di', meaning: 'freedom', note: 'What the caged bird sings toward — political or personal.' },
    { id: 'u-khaak', word: 'khaak', pron: 'khaak', meaning: 'dust, ashes, earth', note: 'What everything returns to — a favourite for the ghazal\u2019s note of mortality.' },
    { id: 'u-fanaa', word: 'fanaa', pron: 'fa-naa', meaning: 'annihilation, passing away (esp. of the self in love/God)', note: 'The Sufi ideal: the self dissolving entirely into the beloved.' },
    { id: 'u-sukoon', word: 'sukoon', pron: 'su-koon', meaning: 'peace, stillness, calm', note: 'The rest the restless heart is forever chasing.' },
    { id: 'u-lafz', word: 'lafz', pron: 'lafz', meaning: 'a word', note: 'The unit the shayar actually works in — chosen, weighed, placed.' },
    { id: 'u-sukhan', word: 'sukhan', pron: 'su-khan', meaning: 'speech, poetry, the art of the word', note: 'The craft itself — a "sukhanwar" is a master of it.' },
    { id: 'u-takhallus', word: 'takhallus', pron: 'ta-khal-lus', meaning: 'a poet\u2019s pen-name', note: 'Woven into the maqta, the closing sher — Ghalib, Mir, Faiz are all takhallus.' },
    { id: 'u-mehr', word: 'mehr', pron: 'mehr', meaning: 'kindness, affection; also the sun', note: 'Warmth given — the tender opposite of the beloved\u2019s "jafa".' },
    { id: 'u-ehsaas', word: 'ehsaas', pron: 'eh-saas', meaning: 'feeling, deep awareness', note: 'The felt sense of a thing — what the ghazal tries to hand you directly.' },
    { id: 'u-khamoshi', word: 'khamoshi', pron: 'kha-mo-shi', meaning: 'silence', note: 'Often louder than speech in a ghazal — what isn\u2019t said, on purpose.' },
    { id: 'u-aaina', word: 'aaina', pron: 'aa-i-na', meaning: 'a mirror', note: 'For vanity, self-knowledge, or the beloved seeing herself — a rich, tricky image.' },
    { id: 'u-shab', word: 'shab', pron: 'shab', meaning: 'night (the literary word)', note: 'The elevated cousin of "raat" — "shab-e-firaaq", the night of separation.' },
  ],
  english: [
    { id: 'e-liminal', word: 'liminal', pron: 'LIM-in-al', meaning: 'occupying a threshold; in between two states', note: 'Dawn, doorways, the moment before sleep — poetry lives in liminal space.' },
    { id: 'e-susurrus', word: 'susurrus', pron: 'soo-SUR-us', meaning: 'a soft whispering or rustling sound', note: 'The sound of leaves or a crowd murmuring — onomatopoeia you can plant in a line.' },
    { id: 'e-petrichor', word: 'petrichor', pron: 'PET-ri-kor', meaning: 'the earthy scent of rain on dry ground', note: 'A whole sensory memory in one word — use it and the reader smells it.' },
    { id: 'e-caesura', word: 'caesura', pron: 'si-ZHOOR-a', meaning: 'a deliberate pause or break within a line of verse', note: 'The breath in the middle of a line — a craft tool, like the ghazal\u2019s turn.' },
    { id: 'e-enjambment', word: 'enjambment', pron: 'en-JAM-ment', meaning: 'running a sentence past the line break without pause', note: 'The line ends but the thought spills over — pulls the reader forward.' },
    { id: 'e-volta', word: 'volta', pron: 'VOL-ta', meaning: 'the turn in a poem where thought or feeling shifts', note: 'Every good sher has one; the sonnet has one too. The pivot is the poem.' },
    { id: 'e-elegy', word: 'elegy', pron: 'EL-e-jee', meaning: 'a poem of mourning or lament', note: 'The English cousin of the ghazal\u2019s "gham" — grief given form.' },
    { id: 'e-aubade', word: 'aubade', pron: 'oh-BAHD', meaning: 'a poem or song greeting the dawn, often of lovers parting', note: 'Its opposite is the "nocturne". The ghazal\u2019s "subah" lives here.' },
    { id: 'e-nocturne', word: 'nocturne', pron: 'NOK-turn', meaning: 'a composition evoking the night', note: 'Where most ghazals belong — "raat", candlelight, and longing.' },
    { id: 'e-ephemeral', word: 'ephemeral', pron: 'e-FEM-er-al', meaning: 'lasting a very short time; fleeting', note: 'Like "bahaar", spring — beauty defined by how quickly it goes.' },
    { id: 'e-mellifluous', word: 'mellifluous', pron: 'me-LIF-loo-us', meaning: 'sweet and smooth to the ear (of sound or speech)', note: 'What you want a read-aloud line to be — honey in the vowels.' },
    { id: 'e-luminous', word: 'luminous', pron: 'LOO-min-us', meaning: 'giving off or full of light; radiant', note: 'The English "noor" — reach for it and the image lights up.' },
    { id: 'e-reverie', word: 'reverie', pron: 'REV-er-ee', meaning: 'a state of pleasant dreamy absorption', note: 'The daydream — cousin to the ghazal\u2019s "khwaab".' },
    { id: 'e-solitude', word: 'solitude', pron: 'SOL-i-tood', meaning: 'the state of being alone, often by choice', note: 'The chosen version of "tanhaai" — where the writing gets done.' },
    { id: 'e-yearning', word: 'yearning', pron: 'YERN-ing', meaning: 'intense longing for something', note: 'The plain English for the ghazal\u2019s whole engine of desire.' },
    { id: 'e-saudade', word: 'saudade', pron: 'sow-DAH-de', meaning: 'a deep, bittersweet longing for something absent', note: 'Portuguese, untranslatable — the closest Western word to "hijr".' },
    { id: 'e-halcyon', word: 'halcyon', pron: 'HAL-see-on', meaning: 'idyllically calm and happy; a golden past time', note: '"Halcyon days" — remembered peace, always tinged with its loss.' },
    { id: 'e-gossamer', word: 'gossamer', pron: 'GOS-a-mer', meaning: 'something light, thin, and delicate', note: 'Spider-silk, fine cloth — a texture word for the barely-there.' },
    { id: 'e-crepuscular', word: 'crepuscular', pron: 'kre-PUS-kew-lar', meaning: 'of or resembling twilight; dim', note: 'The half-light of dusk — a fancier, dimmer "liminal".' },
    { id: 'e-ineffable', word: 'ineffable', pron: 'in-EF-a-bul', meaning: 'too great or extreme to be expressed in words', note: 'The thing the poem circles because it can\u2019t say it outright.' },
    { id: 'e-elegiac', word: 'elegiac', pron: 'el-e-JY-ak', meaning: 'having a mournful, wistful quality', note: 'The tone of looking back and aching — the ghazal\u2019s default mood.' },
    { id: 'e-lambent', word: 'lambent', pron: 'LAM-bent', meaning: 'glowing softly; flickering lightly over a surface', note: 'The way candlelight ("shama") moves — light that plays rather than blazes.' },
    { id: 'e-threnody', word: 'threnody', pron: 'THREN-o-dee', meaning: 'a song or poem of lamentation for the dead', note: 'A sharper elegy — grief set to music.' },
    { id: 'e-numinous', word: 'numinous', pron: 'NOO-min-us', meaning: 'suggesting the presence of the divine; awe-inspiring', note: 'The shiver of the sacred — where the Sufi ghazal reaches.' },
    { id: 'e-diaphanous', word: 'diaphanous', pron: 'dy-AF-a-nus', meaning: 'light, delicate, and translucent', note: 'Veils, mist, dawn light — you can see through it.' },
    { id: 'e-quietude', word: 'quietude', pron: 'KWY-e-tood', meaning: 'a state of stillness, calm, and quiet', note: 'The English "sukoon" — the peace the restless line is after.' },
    { id: 'e-wanderlust', word: 'wanderlust', pron: 'WON-der-lust', meaning: 'a strong desire to travel and roam', note: 'The pull of the "safar" — the road wanted for its own sake.' },
    { id: 'e-melancholy', word: 'melancholy', pron: 'MEL-an-kol-ee', meaning: 'a thoughtful, gentle sadness', note: 'The dignified "gham" — sorrow you can sit with rather than flee.' },
    { id: 'e-effulgent', word: 'effulgent', pron: 'e-FUL-jent', meaning: 'shining brightly; radiant', note: 'Stronger than luminous — the face, the moon, at full blaze.' },
    { id: 'e-tremulous', word: 'tremulous', pron: 'TREM-yoo-lus', meaning: 'trembling, quivering; timid', note: 'A voice or a hand that shakes with feeling — the lover before the beloved.' },
    { id: 'e-plangent', word: 'plangent', pron: 'PLAN-jent', meaning: 'loud, resonant, and mournful (of a sound)', note: 'A bell, a call across water — sound with grief in it.' },
    { id: 'e-incandescent', word: 'incandescent', pron: 'in-kan-DES-ent', meaning: 'glowing with intense heat or feeling', note: 'The "shama" at its hottest — or a line that burns with emotion.' },
  ],
}

// A stable day index, matched to the app\u2019s 6am-Dubai roll (todayKey passed in).
function dayIndex(dayKey) {
  return Math.floor(Date.parse(dayKey) / 86400000)
}

// Word of the Day: one Urdu + one English, deterministic from the date so the
// pair is the same for everyone that day and changes at the daily roll.
export function wordsOfTheDay(dayKey) {
  const d = dayIndex(dayKey)
  const u = LEXICON.urdu[((d % LEXICON.urdu.length) + LEXICON.urdu.length) % LEXICON.urdu.length]
  const e = LEXICON.english[((d % LEXICON.english.length) + LEXICON.english.length) % LEXICON.english.length]
  return { urdu: u, english: e }
}

// Look up any entry by id across both pools (for the glossary store).
export function lexEntry(id) {
  return LEXICON.urdu.find((w) => w.id === id) || LEXICON.english.find((w) => w.id === id) || null
}

export function lexLang(id) {
  return String(id).startsWith('u-') ? 'urdu' : 'english'
}
