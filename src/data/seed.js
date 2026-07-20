// Real content used to seed local state. Matches the copy specified in the design handoff.

export const blankProfile = {
  name: '',
  level: 1,
  title: 'Newcomer',
  xp: 0,
  xpToNext: 100,
}

export const blankStreak = {
  current: 0,
  best: 0,
}

const DAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

// Builds a Mon–Sun week strip with today marked (not yet completed).
function buildBlankWeek() {
  const jsDay = new Date().getDay() // 0=Sun..6=Sat
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1 // convert to Mon=0..Sun=6
  return DAY_LABELS.map((label, i) => ({
    label,
    status: i === todayIndex ? 'today' : 'empty',
  }))
}

// Each genre's daily ritual: a 2-min lesson, a worked example, and a prompt to write from.
export const sessionContent = {
  poem: {
    eyebrow: 'Poetry',
    minutes: 15,
    xp: 50,
    title: 'Painting with line breaks',
    lessonStepLabel: 'line breaks & pacing',
    lesson: {
      chip: 'Lesson',
      paragraphs: [
        "A line break is a poet's punctuation of breath. Where you end a line tells the reader where to pause — and what to notice.",
        'Break early and you build tension. Break late and the thought spills over, quickening the pace.',
      ],
      noticeLabel: 'Notice the difference',
      noticeLines: ['She left the door', 'open — '],
      noticeHighlight: 'just in case',
    },
    example: {
      title: "Today's poem",
      poemTitle: 'Kitchen, Early',
      lines: [
        'The kettle finds its voice',
        'before I find mine —',
        'steam writing a sentence',
        'the window erases.',
        '',
        'I set two cups anyway.',
        'One of them is for the quiet.',
      ],
      note: 'Notice how the break after "voice" holds the silence a beat longer, and the short final stanza changes the whole poem\'s weight.',
    },
    write: {
      promptLabel: 'Prompt',
      prompt: 'Write four lines where a single line break changes what the reader expects.',
    },
  },
  story: {
    eyebrow: 'Fiction',
    minutes: 15,
    xp: 50,
    title: 'Starting mid-scene',
    lessonStepLabel: 'openings & momentum',
    lesson: {
      chip: 'Lesson',
      paragraphs: [
        'A story that opens mid-scene drops the reader into motion — a decision already being made, a door already swinging shut.',
        'You can explain later. Open on the moment the reader would otherwise wish they hadn\'t missed.',
      ],
      noticeLabel: 'Notice the difference',
      noticeLines: ['She had been planning this for weeks.', 'The key turned before she let herself think.'],
      noticeHighlight: 'before she let herself think',
    },
    example: {
      title: "Today's story",
      poemTitle: 'The Spare Key',
      lines: [
        'The lock gave on the second try, and Mara was inside before the porch light caught her.',
        'She had rehearsed this — the hallway, the coat hooks, the second stair that creaked — but rehearsal hadn\'t prepared her for how ordinary it would feel.',
        'Like she still lived there.',
      ],
      note: 'The scene starts after the decision was made. We learn the backstory through what Mara already knows, not through explanation.',
    },
    write: {
      promptLabel: 'Prompt',
      prompt: 'Open a story mid-action — no throat-clearing, no setup. Just the moment already happening.',
    },
  },
}

export const blankSkills = [
  { name: 'Line breaks', rating: 0 },
  { name: 'Imagery', rating: 0 },
  { name: 'Dialogue', rating: 0 },
]

export const blankPortfolio = []

export const seedCourses = [
  {
    id: 'poetry-foundations',
    title: 'Poetry Foundations',
    total: 10,
    done: 0,
    unlockLevel: null,
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `pf-${i + 1}`,
      title: [
        'What makes a line a line',
        'Sound and rhythm',
        'Line breaks and pacing',
        'White space as punctuation',
        'Imagery over statement',
        'Metaphor vs. simile',
        'Form: the sonnet',
        'Form: free verse',
        'Reading your work aloud',
        'Revision as re-seeing',
      ][i],
      done: false,
      body: 'A short craft lesson on this topic, with an example and a quick exercise to try in your own words.',
    })),
  },
  {
    id: 'short-story-craft',
    title: 'Short Story Craft',
    total: 8,
    done: 0,
    unlockLevel: null,
    lessons: Array.from({ length: 8 }, (_, i) => ({
      id: `ssc-${i + 1}`,
      title: [
        'Starting mid-scene',
        'Building a single scene',
        'Dialogue that carries plot',
        'The unreliable detail',
        'Endings that land',
        'Point of view',
        'Pacing a short story',
        'Cutting what doesn\'t serve it',
      ][i],
      done: false,
      body: 'A short craft lesson on this topic, with an example and a quick exercise to try in your own words.',
    })),
  },
  {
    id: 'imagery-metaphor',
    title: 'Imagery & Metaphor',
    total: 6,
    done: 0,
    unlockLevel: null,
    lessons: Array.from({ length: 6 }, (_, i) => ({
      id: `im-${i + 1}`,
      title: [
        'Concrete over abstract',
        'The five senses',
        'Extended metaphor',
        'Avoiding cliché',
        'Imagery in dialogue',
        'When to let go of a metaphor',
      ][i],
      done: false,
      body: 'A short craft lesson on this topic, with an example and a quick exercise to try in your own words.',
    })),
  },
  {
    id: 'character-voice',
    title: 'Character & Voice',
    total: 7,
    done: 0,
    unlockLevel: 6,
    lessons: [],
  },
]

export const seedPractice = {
  prompts: [
    { id: 'pr-color', kind: 'poem', minutes: '3–5 min', text: 'Describe a color to someone who has never seen.' },
    { id: 'pr-lift', kind: 'story', minutes: '10 min', text: 'Two strangers are stuck in a lift. One is lying.' },
    { id: 'pr-grief', kind: 'drill', minutes: '5 min', text: 'Show, don\'t tell: convey grief without the word "sad".' },
  ],
}

export const blankStats = {
  pieces: 0,
  words: 0,
  lessons: 0,
}

export function titleForLevel(level) {
  if (level >= 7) return 'Wordsmith'
  if (level >= 4) return 'Storyteller'
  if (level >= 2) return 'Apprentice'
  return 'Newcomer'
}

export function buildInitialState() {
  return {
    onboarded: false,
    profile: blankProfile,
    streak: { ...blankStreak, week: buildBlankWeek() },
    todayGenre: 'poem',
    sessionProgress: { step: 0, completedToday: false },
    skills: blankSkills,
    portfolio: blankPortfolio,
    courses: seedCourses,
    practice: seedPractice,
    stats: blankStats,
    yesterdayPiece: null,
    drafts: {}, // keyed by draft key -> { text, updatedAt }
  }
}
