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
    lessons: [
      {
        id: 'pf-1',
        title: 'What makes a line a line',
        done: false,
        paragraphs: [
          "A line in a poem isn't just where the page runs out of room — it's a decision. Prose wraps wherever the margin says to; a poem's line ends where the poet wants a small pause, a tiny intake of breath.",
          "That's the whole craft in miniature: every line break is a choice about what the reader notices first, and what they're forced to carry into the next line before the sentence resolves.",
        ],
        tryIt: 'Take any two-sentence thought and break it into three short lines. Notice what changes.',
      },
      {
        id: 'pf-2',
        title: 'Sound and rhythm',
        done: false,
        paragraphs: [
          "Poems are built to be heard, even read silently. Word choice carries a beat — hard consonants land differently than soft, open vowels.",
          "You don't need to count syllables to write musically. Read your line aloud; if you stumble, the reader will too.",
        ],
        tryIt: 'Say your last poem out loud. Circle any word your tongue tripped over.',
      },
      {
        id: 'pf-3',
        title: 'Line breaks and pacing',
        done: false,
        paragraphs: [
          'A line break controls speed. End on a strong word and the line lands with weight; break mid-phrase and the sentence spills forward, pulling the reader with it.',
          "Early breaks build tension — you're withholding the rest of the thought. Late breaks release it, letting the line run long and breathless.",
        ],
        tryIt: 'Rewrite one of your poems with the opposite pacing — if it was clipped, let it run long.',
      },
      {
        id: 'pf-4',
        title: 'White space as punctuation',
        done: false,
        paragraphs: [
          "The blank space around a poem is not empty — it's doing work. A stanza break is a held breath. A single word alone on a line commands full attention.",
          'Beginners often fear white space and fill every line to the margin. Trust the gaps; they let the reader\'s own thoughts enter the poem.',
        ],
        tryIt: "Take a stanza you've written and isolate its most important line — give it its own stanza, alone.",
      },
      {
        id: 'pf-5',
        title: 'Imagery over statement',
        done: false,
        paragraphs: [
          '"I was sad" tells the reader what to feel. "I left the porch light on for a week" shows them and lets them arrive at sadness themselves.',
          'A well-chosen image does the emotional work a statement never can, because the reader participates in building the feeling rather than just receiving it.',
        ],
        tryIt: 'Find a line where you named an emotion directly. Replace it with a concrete image that implies the same feeling.',
      },
      {
        id: 'pf-6',
        title: 'Metaphor vs. simile',
        done: false,
        paragraphs: [
          'A simile says two things are alike ("like," "as"); a metaphor claims they\'re the same thing. That small grammatical shift changes how confidently a poem speaks.',
          'Similes are gentler and more explanatory; metaphors are bolder and trust the reader to make the leap without a signpost.',
        ],
        tryIt: 'Take a simile from your work and cut the "like" or "as" — does the metaphor version hold up?',
      },
      {
        id: 'pf-7',
        title: 'Form: the sonnet',
        done: false,
        paragraphs: [
          "Fourteen lines, a turn partway through, and a closing shift in argument — the sonnet's constraint is exactly what makes it useful.",
          "The form forces compression: you can't wander, so every line has to earn its place. Even ignoring rhyme scheme, borrowing the \"turn\" structure sharpens any short poem.",
        ],
        tryIt: 'Write eight lines building an idea, then four lines that complicate or reverse it.',
      },
      {
        id: 'pf-8',
        title: 'Form: free verse',
        done: false,
        paragraphs: [
          'Free verse drops fixed meter and rhyme, but "free" doesn\'t mean "unstructured" — the poet still controls line length, stanza shape, and rhythm deliberately.',
          "Without an inherited form to lean on, every choice is more exposed. That's the challenge and the appeal: nothing in a free verse poem happens by accident.",
        ],
        tryIt: 'Look at your line lengths across a poem — are they varying on purpose, or out of habit?',
      },
      {
        id: 'pf-9',
        title: 'Reading your work aloud',
        done: false,
        paragraphs: [
          'Your eye skips over awkward phrasing that your mouth will catch immediately. Reading aloud is the fastest edit you can do.',
          "Listen for where you naturally pause versus where your line breaks force a pause — if they don't match, the line break might be fighting the poem's real rhythm.",
        ],
        tryIt: 'Record yourself reading a poem, then listen back and mark every place you stumbled.',
      },
      {
        id: 'pf-10',
        title: 'Revision as re-seeing',
        done: false,
        paragraphs: [
          'The word "revision" literally means to see again — not to fix typos, but to look at the poem as if someone else wrote it and ask what it\'s actually trying to do.',
          "The best cuts usually aren't the weak lines — they're the lines that explain what the strong lines already show.",
        ],
        tryIt: 'Pick your favorite line in a piece. Now find the line most likely to be explaining it, and cut that one instead.',
      },
    ],
  },
  {
    id: 'short-story-craft',
    title: 'Short Story Craft',
    total: 8,
    done: 0,
    unlockLevel: null,
    lessons: [
      {
        id: 'ssc-1',
        title: 'Starting mid-scene',
        done: false,
        paragraphs: [
          "A story that opens with backstory asks for patience before it's earned any. Opening mid-scene — a decision already being made, a door already swinging shut — asks for none.",
          'You can fold in the "why" later, once the reader is invested in the "what." Curiosity about how they got here does more work than an explanation up front.',
        ],
        tryIt: "Take your story's current opening paragraph and delete it. Start with the second paragraph instead — does it work better?",
      },
      {
        id: 'ssc-2',
        title: 'Building a single scene',
        done: false,
        paragraphs: [
          "A scene isn't a summary of events — it's one continuous moment, in one place, that plays out close to real time. Summary tells; scene shows.",
          'If you catch yourself writing "over the next few days," you\'ve left scene and entered summary. That\'s sometimes necessary, but the moments that matter deserve full scenes.',
        ],
        tryIt: 'Find a sentence in your draft that compresses time ("later that week…"). Expand it into a real scene.',
      },
      {
        id: 'ssc-3',
        title: 'Dialogue that carries plot',
        done: false,
        paragraphs: [
          'Dialogue that only exchanges information ("How are you?" "Fine.") is dead weight. Good dialogue reveals character while something is also happening or changing.',
          "Characters rarely say exactly what they mean. Subtext — what's not said — often carries more than the line itself.",
        ],
        tryIt: 'Take a piece of dialogue where a character states their feelings directly. Rewrite it so they avoid saying it outright.',
      },
      {
        id: 'ssc-4',
        title: 'The unreliable detail',
        done: false,
        paragraphs: [
          "A single specific, slightly odd detail — a character who reads the ingredients on food packaging, a stopped clock nobody's fixed — tells the reader more than a paragraph of description.",
          'Specificity earns trust. Vague description ("a nice house") reads as filler; one precise, unusual detail reads as observation.',
        ],
        tryIt: 'Replace one generic description in your draft with a single, oddly specific detail instead.',
      },
      {
        id: 'ssc-5',
        title: 'Endings that land',
        done: false,
        paragraphs: [
          "A satisfying ending usually isn't a twist — it's a shift in understanding that was quietly set up earlier, now paying off.",
          'If an ending feels unearned, the fix is rarely the ending itself. Go back and plant the detail or feeling it needs to pay off.',
        ],
        tryIt: "Look at your story's last line. Find where, earlier, you could plant a small echo of it.",
      },
      {
        id: 'ssc-6',
        title: 'Point of view',
        done: false,
        paragraphs: [
          "Who's telling the story controls what the reader is allowed to know — and what they're kept from knowing is often more powerful than what they're told.",
          'First person gets you intimacy but limits information to what that character notices. Third limited keeps some distance but still filters through one mind.',
        ],
        tryIt: "Rewrite one paragraph of your story from a different character's point of view. What does it reveal that the original hid?",
      },
      {
        id: 'ssc-7',
        title: 'Pacing a short story',
        done: false,
        paragraphs: [
          "Pacing isn't about speed — it's about proportion. Slow down for the moment that matters; compress everything that's just getting you there.",
          'If every paragraph moves at the same pace, nothing feels important. Contrast is what makes a moment land as significant.',
        ],
        tryIt: "Mark your draft's paragraphs fast or slow. Is the pacing doing what the story needs, or just steady throughout?",
      },
      {
        id: 'ssc-8',
        title: "Cutting what doesn't serve it",
        done: false,
        paragraphs: [
          "Every sentence in a short story should be doing at least one job: revealing character, moving plot, or building atmosphere. If it's doing none, it's a candidate to cut.",
          "Writers often protect their favorite sentences the hardest — which is exactly why they're worth questioning first.",
        ],
        tryIt: "Find the sentence you're proudest of in your draft. Ask honestly what job it's doing. If you can't answer, cut it and see what happens.",
      },
    ],
  },
  {
    id: 'imagery-metaphor',
    title: 'Imagery & Metaphor',
    total: 6,
    done: 0,
    unlockLevel: null,
    lessons: [
      {
        id: 'im-1',
        title: 'Concrete over abstract',
        done: false,
        paragraphs: [
          'Abstract words ("beauty," "loss," "freedom") mean something different to every reader. Concrete words — a chipped mug, a locked gate — mean roughly the same thing to everyone, and can carry the abstraction without naming it.',
          "When a line feels flat, it's often hiding an abstraction that needs to be replaced with a specific, physical thing.",
        ],
        tryIt: 'Find an abstract word in your draft. Replace it with one concrete object that implies it.',
      },
      {
        id: 'im-2',
        title: 'The five senses',
        done: false,
        paragraphs: [
          'Most first-draft description leans entirely on sight. Sound, smell, touch, and taste are underused — and they\'re often what actually triggers memory and emotion in a reader.',
          "You don't need all five in one piece. Even one unexpected non-visual detail can make a whole scene feel physically real.",
        ],
        tryIt: "Go through a piece and find every sensory detail. If they're all visual, add one that isn't.",
      },
      {
        id: 'im-3',
        title: 'Extended metaphor',
        done: false,
        paragraphs: [
          'A metaphor that runs through an entire piece — not just one line — gives a poem or story a spine. Each return to the image deepens it instead of repeating it.',
          "The risk is strain: if you force the metaphor into places it doesn't naturally fit, it starts to feel like a gimmick instead of a lens.",
        ],
        tryIt: 'Take a metaphor from your opening line and find one more place in the piece where it could naturally return, changed slightly.',
      },
      {
        id: 'im-4',
        title: 'Avoiding cliché',
        done: false,
        paragraphs: [
          '"Heart of gold," "time heals all wounds," "butterflies in my stomach" — these phrases were once fresh images. Overuse has worn the meaning off them.',
          'The fix isn\'t to avoid feeling — it\'s to find your own specific version of it. What does the familiar feeling actually look like in this exact moment, for this exact character?',
        ],
        tryIt: 'Find a cliché in your draft. Ask what specifically caused that feeling here, and write that instead.',
      },
      {
        id: 'im-5',
        title: 'Imagery in dialogue',
        done: false,
        paragraphs: [
          "Characters don't usually speak in polished imagery — but the images they reach for still say something about who they are and what they notice.",
          'A character who describes fear as "like a phone about to ring" tells you something different than one who says "like drowning." Let their comparisons come from their world, not yours.',
        ],
        tryIt: 'Give a character a comparison drawn specifically from their job, hobby, or background — not a generic one.',
      },
      {
        id: 'im-6',
        title: 'When to let go of a metaphor',
        done: false,
        paragraphs: [
          'Not every idea needs a metaphor. Sometimes the plainest possible sentence is the strongest one, and reaching for imagery just softens a moment that should land hard and direct.',
          'If you find yourself stacking two or three metaphors for the same feeling, that\'s usually a sign none of them are quite right yet — or that the moment wants plain language instead.',
        ],
        tryIt: 'Find a place where you used a metaphor out of habit rather than necessity. Try the plain, literal version instead.',
      },
    ],
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
    { id: 'pr-color', kind: 'poem', text: 'Describe a color to someone who has never seen.' },
    { id: 'pr-lift', kind: 'story', text: 'Two strangers are stuck in a lift. One is lying.' },
    { id: 'pr-grief', kind: 'drill', text: 'Show, don\'t tell: convey grief without the word "sad".' },
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
