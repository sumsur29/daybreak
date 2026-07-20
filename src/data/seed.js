// Real content used to seed local state. Matches the copy specified in the design handoff.

export const seedProfile = {
  name: 'Ava Mercer',
  level: 4,
  title: 'Storyteller',
  xp: 320,
  xpToNext: 500,
}

export const seedStreak = {
  current: 6,
  best: 14,
  // Mon–Sun. 'done' = completed that day, 'today' = today (in progress / dashed ring), 'empty' = not yet reached
  week: [
    { label: 'M', status: 'done' },
    { label: 'T', status: 'done' },
    { label: 'W', status: 'done' },
    { label: 'T', status: 'done' },
    { label: 'F', status: 'done' },
    { label: 'S', status: 'today' },
    { label: 'S', status: 'empty' },
  ],
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

export const seedSkills = [
  { name: 'Line breaks', rating: 4 },
  { name: 'Imagery', rating: 3 },
  { name: 'Dialogue', rating: 2 },
]

export const seedPortfolio = [
  {
    id: 'p-rain',
    title: 'Rain on the tin roof',
    genre: 'poem',
    status: 'draft',
    body: 'Rain on the tin roof,\nkeeping time with nothing —',
    date: 'Jul 19',
    updatedAt: '2026-07-19T18:00:00.000Z',
  },
  {
    id: 'p-train',
    title: 'The last train home',
    genre: 'story',
    status: 'finished',
    body: 'The platform had emptied by the time the last train pulled in...',
    date: 'Jul 12',
    updatedAt: '2026-07-12T22:10:00.000Z',
  },
  {
    id: 'p-salt',
    title: 'Salt',
    genre: 'poem',
    status: 'finished',
    body: 'What the sea keeps,\nit keeps in grains —',
    date: 'Jul 8',
    updatedAt: '2026-07-08T09:30:00.000Z',
  },
]

export const seedCourses = [
  {
    id: 'poetry-foundations',
    title: 'Poetry Foundations',
    total: 10,
    done: 6,
    unlockLevel: null,
    continueModule: 'Module 3 · Line & rhythm',
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
      done: i < 6,
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

export const seedStats = {
  pieces: 12,
  words: '8.4k',
  lessons: 18,
}

export function buildInitialState() {
  return {
    profile: seedProfile,
    streak: seedStreak,
    todayGenre: 'poem',
    sessionProgress: { step: 0, completedToday: false },
    skills: seedSkills,
    portfolio: seedPortfolio,
    courses: seedCourses,
    practice: seedPractice,
    stats: seedStats,
    yesterdayPiece: { id: 'p-rain', title: 'Rain on the tin roof' },
    drafts: {}, // keyed by draft key -> { text, updatedAt }
  }
}
