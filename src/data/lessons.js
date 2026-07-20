// Lesson curriculum, authored as typed "section blocks" that the LessonPlayer
// renders one screenful at a time (tap-through with a progress bar).
//
// Block types:
//   { type: 'intro',    takeaway, minutes, sections }   — cover card
//   { type: 'concept',  heading, body: [paragraph, ...] }
//   { type: 'example',  heading, lines: [...], caption, variant }  — rendered writing sample
//   { type: 'compare',  heading, left:{label,lines}, right:{label,lines}, caption }
//   { type: 'callout',  label, text }                    — pull-quote / key idea
//   { type: 'list',     heading, items: [{term, text}] }
//   { type: 'recap',    heading, points: [...] }
//   { type: 'tryit',    heading, prompt }                — closing exercise (last card)
//
// `lines` entries may be strings, '' (blank line / stanza break), or
// { text, mark } where mark highlights a word/phrase in accent.


export const lessonContent = {
  "pf-1": {
    title: "What makes a line a line",
    blocks: [
      {
        type: "intro",
        takeaway: "A poetic line isn't a sentence and isn't prose — it's a unit of attention the poet controls completely.",
        minutes: 6,
        sections: ["What a line really is", "Line vs. sentence", "See the difference", "Why it matters", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "The line is poetry's basic unit",
        body: [
          "Prose is built from sentences and paragraphs. Poetry is built from lines. That sounds obvious, but it's the single biggest shift when you move from writing prose to writing poems: the line, not the sentence, becomes the thing you're shaping.",
          "A line can be one word or fifteen. It can contain a whole sentence, half of one, or three of them. What makes it a line is that the poet chose where it ends — and that choice is the poem talking to the reader before the words even land.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "A sentence carries meaning. A line carries attention. A poem is the art of making the two disagree on purpose.",
      },
      {
        type: "concept",
        heading: "Line and sentence pull against each other",
        body: [
          "In the flattest kind of poem, every line is one complete sentence — line and sentence agree, and nothing interesting happens in the gap between them.",
          "The moment a line ends before its sentence does, a tension opens up. The reader reaches the edge of the line, pauses for a fraction of a second, and only then discovers how the sentence continues. That gap is where a poem does work prose can't.",
        ],
      },
      {
        type: "compare",
        heading: "One sentence, two shapes",
        left: {
          label: "As prose",
          lines: [
            "The light in the kitchen was still on when I got home.",
          ],
        },
        right: {
          label: "As lines",
          lines: [
            "The light in the kitchen",
            "was still on",
            "when I got home.",
          ],
        },
        caption: "Same words, same sentence. But broken into lines, each fragment gets its own beat — the light, the stillness, the arrival — and the poem asks you to feel them one at a time instead of all at once.",
      },
      {
        type: "example",
        heading: "A line holding a single image",
        variant: 'poem',
        lines: [
          "Morning.",
          "The whole house",
          "the shape of your absence —",
          "even the kettle waits.",
        ],
        caption: "Notice how the short second line, \"the whole house,\" makes you pause on the size of the emptiness before the sentence reveals what fills it. A prose version — \"the whole house had the shape of your absence\" — rushes past that beat.",
      },
      {
        type: "concept",
        heading: "Why this is the foundation",
        body: [
          "Everything else in poetry — rhythm, pacing, emphasis, surprise — is built on top of this one fact: you decide where each line ends. Every other lesson in this course is really a lesson in how to use that power well.",
          "So before techniques, just start noticing lines. When you read a poem you like, ask: why did it break there? You'll almost always find a reason.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Poetry's basic unit is the line, not the sentence.",
          "A line carries the reader's attention; a sentence carries meaning.",
          "Interesting things happen when the line ends before the sentence does.",
          "Every other poetic technique is built on your control of the line.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take one sentence you've written and break it into three or four lines. Try it two different ways. Notice how each version changes which words the reader lingers on.",
      },
    ],
  },
  "pf-2": {
    title: "Sound and rhythm",
    blocks: [
      {
        type: "intro",
        takeaway: "A poem is written to be heard. Word choice carries a beat before it carries meaning.",
        minutes: 7,
        sections: ["Poems are heard", "Hard and soft sounds", "Vowels set the tempo", "Repetition", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Even silent reading has a sound",
        body: [
          "When you read a poem in total silence, your inner ear still sounds out every word. That's why poems that look fine on the page can feel clumsy when you actually read them — the eye forgives what the ear won't.",
          "So the fastest way to test any line is to read it aloud. If your tongue stumbles, a reader's inner voice will stumble in the same place. Sound isn't decoration on top of a poem; it's part of how the poem means.",
        ],
      },
      {
        type: "concept",
        heading: "Hard sounds and soft sounds",
        body: [
          "Consonants have texture. Hard ones — k, t, g, d, p — land like footsteps or knocks; they feel abrupt, percussive, urgent. Soft ones — l, m, n, s, w, f — blur and glide; they feel calm, liquid, slow.",
          "You can hear a line's mood before you parse its meaning. A line packed with hard consonants feels clipped and tense; a line full of soft ones feels hushed. Matching that texture to what you're describing is a quiet superpower.",
        ],
      },
      {
        type: "compare",
        heading: "Hear the texture",
        left: {
          label: "Hard, percussive",
          lines: [
            "a cracked pot, kicked",
            "across the deck",
          ],
        },
        right: {
          label: "Soft, flowing",
          lines: [
            "a slow swell of",
            "water on the shallows",
          ],
        },
        caption: "The top lines are almost all hard stops — you can hear the clatter. The bottom lines are nearly all liquid sounds — they move the way water moves. Neither is \"better\"; each matches its subject.",
      },
      {
        type: "concept",
        heading: "Vowels set the tempo",
        body: [
          "Vowels control speed. Long, open vowels — the oo in moon, the o in stone, the a in slow — stretch a line out and let it linger. Short, clipped vowels — the i in bit, the a in tap — snap by quickly.",
          "If a line feels rushed when you wanted it slow and heavy, check your vowels: you may have loaded it with short, clipped sounds by accident. Swapping in a couple of long vowels can change the whole pace without changing the meaning.",
        ],
      },
      {
        type: "callout",
        label: "Try this in revision",
        text: "Read a line out loud and exaggerate it. Where does your mouth naturally slow down or speed up? That's the line's real rhythm — make sure it matches the feeling.",
      },
      {
        type: "concept",
        heading: "Repetition is rhythm's simplest engine",
        body: [
          "Repeating a sound, a word, or a sentence shape builds gravity — a sense the poem is circling something it can't say directly. It's the oldest tool in poetry, older than rhyme.",
          "But it's a knife's edge. Used with intent, repetition feels incantatory, hypnotic. Used carelessly, it just sounds like a stutter. The difference is almost always whether the repetition is building toward something or just filling space.",
        ],
      },
      {
        type: "example",
        heading: "Repetition building pressure",
        variant: 'poem',
        lines: [
          "Still the phone.",
          "Still the untouched cup.",
          { text: "Still", mark: "Still" },
          "the coat on its hook",
          "like it's coming right back.",
        ],
        caption: "Three lines open with \"Still\" — each repetition tightens the wait, so by the fourth line the ordinary coat feels unbearable. Remove the repetition and the poem goes slack.",
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Every poem is heard, even read silently — so read yours aloud.",
          "Hard consonants feel abrupt; soft ones feel calm. Match texture to subject.",
          "Long vowels slow a line down; short vowels speed it up.",
          "Repetition builds power when it's going somewhere, and noise when it isn't.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Write two lines about the same thing — one using mostly hard, clipped sounds, one using mostly soft, flowing sounds. Read both aloud. Notice how the sound alone changes the feeling.",
      },
    ],
  },
  'pf-3': {
    title: 'The line break',
    blocks: [
      {
        type: 'intro',
        takeaway: 'Where a line ends is punctuation you invent — it controls the reader\'s breath, attention, and speed.',
        minutes: 7,
        sections: ['The idea', 'Two kinds of break', 'See it work', 'The exposed word', 'Pacing', 'Recap', 'Your turn'],
      },
      {
        type: 'concept',
        heading: 'A line break is a decision',
        body: [
          "In prose, a line ends wherever the page margin runs out — a typographic accident, nothing more. In a poem, you decide where every single line ends. That decision is never neutral.",
          "Think of the line break as punctuation you invented for this one poem. It tells the reader where to pause, what to hold onto, and what to carry forward into the silence before the next line begins.",
        ],
      },
      {
        type: 'callout',
        label: 'The core idea',
        text: 'The end of a line is the most powerful piece of real estate in a poem. What you put there gets weight nothing in the middle of a line can get.',
      },
      {
        type: 'concept',
        heading: 'Two kinds of break',
        body: [
          "Poets talk about two basic moves. An end-stopped line finishes on a natural pause — a period, a comma, the end of a phrase. It feels settled, complete, sure of itself.",
          "An enjambed line breaks in the middle of a phrase, so the meaning spills over into the next line before it resolves. The reader is pulled forward, slightly off balance, wanting the rest.",
          "Neither is better. They do different emotional work — and knowing which one you're reaching for is most of the craft.",
        ],
      },
      {
        type: 'list',
        heading: 'When to reach for each',
        items: [
          { term: 'End-stopped', text: 'Composure, certainty, reflection. Each line arrives, settles, and the next begins fresh.' },
          { term: 'Enjambment', text: 'Urgency, restlessness, ambiguity. The thought outruns the line; the poem feels like it\'s still happening.' },
        ],
      },
      {
        type: 'compare',
        heading: 'The same words, broken two ways',
        left: {
          label: 'End-stopped',
          lines: ['She left the door open.', 'She was hoping he\'d return.'],
        },
        right: {
          label: 'Enjambed',
          lines: [{ text: 'She left the door', mark: 'door' }, 'open — just in case'],
        },
        caption: 'On the right, breaking after "door" makes the reader hang on the image of the open door for a beat before "open" resolves it. The hesitation is the meaning.',
      },
      {
        type: 'example',
        heading: 'Enjambment building tension',
        variant: 'poem',
        lines: [
          'The kettle finds its voice',
          { text: 'before I find', mark: 'find' },
          'mine — steam writing a sentence',
          'the window erases.',
        ],
        caption: 'Breaking after "find" leaves the line momentarily incomplete — find what? — so "mine" lands in the next line with quiet surprise. An end-stop after "voice" would have closed the door on that tension.',
      },
      {
        type: 'concept',
        heading: 'The exposed word',
        body: [
          "A word at the end of a line is surrounded by white space — it teeters on the edge of silence. That exposure gives it weight it would never get buried mid-sentence.",
          "This is a tool you can aim. If there's an ordinary word you want the reader to actually feel, engineer the line so it lands in that final, exposed position.",
        ],
      },
      {
        type: 'callout',
        label: 'Try this in revision',
        text: 'Take your flattest line. Find the one word in it that carries the most feeling, and rebreak the line so that word ends up last.',
      },
      {
        type: 'concept',
        heading: 'Break for pacing',
        body: [
          "Line length controls speed. Short, frequently-broken lines feel fast and breathless — the eye keeps hitting the edge and jumping. Long lines slow the reader down and let a thought unspool.",
          "A poem that breaks every line in the same rhythmic place starts to feel mechanical, like a metronome. Vary it: a run of short lines, then one that spills long, resets the reader's attention.",
        ],
      },
      {
        type: 'example',
        heading: 'Pacing through line length',
        variant: 'poem',
        lines: [
          'Rain.',
          'Then more rain,',
          'and the slow understanding that the roof',
          'we patched last spring was never going to hold.',
        ],
        caption: 'The two clipped opening lines drum like the first drops; the long fourth line floods, mimicking exactly what it describes. Pacing and meaning move together.',
      },
      {
        type: 'recap',
        heading: 'What to carry with you',
        points: [
          'A line break is invented punctuation — always a choice, never an accident.',
          'End-stopped = settled and certain. Enjambed = urgent and unresolved.',
          'The last word of a line is the most exposed; put what matters there.',
          'Vary line length to control pacing — and match it to what the poem is feeling.',
        ],
      },
      {
        type: 'tryit',
        heading: 'Your turn',
        prompt: 'Write four lines where a single enjambment changes what the reader expects. Break one line mid-phrase so the next line surprises or reverses it.',
      },
    ],
  },
  "pf-4": {
    title: "White space as punctuation",
    blocks: [
      {
        type: "intro",
        takeaway: "The blank space around a poem isn't empty — it's part of the composition, the way silence is part of music.",
        minutes: 6,
        sections: ["Space is not empty", "The stanza break", "A word alone", "Shape on the page", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Silence is material",
        body: [
          "New poets often fear white space and fill every line to the margin, worried the poem looks thin or unfinished if it doesn't. But the blank space around a poem is doing work — it's the silence that makes the notes audible.",
          "A poem that trusts its gaps is usually doing more, not less. The empty space is where the reader's own thoughts move in, where an image is allowed to settle before the next one arrives.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "White space is the poem's rest note. Where you put nothing tells the reader as much as where you put a word.",
      },
      {
        type: "concept",
        heading: "The stanza break is a held breath",
        body: [
          "A stanza break — the blank line between groups of lines — works like a paragraph break in prose, but with more weight. It signals a shift: in time, in image, in tone, or in thought.",
          "Crucially, a stanza break asks the reader to make the leap themselves. There's no transition sentence carrying them across; they cross the gap on their own, which makes the shift feel earned rather than explained.",
        ],
      },
      {
        type: "compare",
        heading: "With and without the break",
        left: {
          label: "No break",
          lines: [
            "the argument ended",
            "we sat in the cold car",
            "neither of us reaching over",
          ],
        },
        right: {
          label: "With a break",
          lines: [
            "the argument ended",
            "",
            " ",
            "we sat in the cold car",
            "neither of us reaching over",
          ],
        },
        caption: "The blank line forces a silence exactly where the silence in the scene lives. The poem stops talking at the same moment the people do.",
      },
      {
        type: "concept",
        heading: "A word alone commands the eye",
        body: [
          "Put a single word on its own line, surrounded by space, and it takes on weight nothing buried mid-line could have. Isolation is emphasis — the reader can't skim past a word that's standing alone.",
          "Use it sparingly. If every important word gets its own line, none of them feel special anymore. The power comes from the contrast with the fuller lines around it.",
        ],
      },
      {
        type: "example",
        heading: "Isolation as emphasis",
        variant: 'poem',
        lines: [
          "You said you'd call when you landed",
          "and I believed you,",
          "completely,",
          { text: "still", mark: "still" },
          "do.",
        ],
        caption: "Dropping \"still\" onto its own line — then \"do\" onto another — stretches the admission out, so the ending lands slow and exposed. Packed into one line, the confession would slip by.",
      },
      {
        type: "concept",
        heading: "The shape itself can mean",
        body: [
          "Some poets go further and let the arrangement on the page mirror the subject — lines drifting rightward as something falls, a widening gap between two speakers, fragments scattered to show a scattered mind.",
          "This is advanced and easy to overdo. But even subtle indentation, used once with intent, can make a reader feel the poem's meaning in their body before they've consciously read it.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "White space is compositional material, not wasted room.",
          "A stanza break is a held breath and an unspoken shift.",
          "A word alone on a line gets weight — use it sparingly.",
          "The shape on the page can quietly echo the poem's meaning.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take a poem you've written as a single block and add one stanza break where the feeling shifts. Then find your most important word and give it its own line. Read it again.",
      },
    ],
  },
  "pf-5": {
    title: "Imagery over statement",
    blocks: [
      {
        type: "intro",
        takeaway: "\"I was sad\" tells the reader what to feel. A concrete image lets them arrive at the feeling themselves.",
        minutes: 7,
        sections: ["Show, don't tell", "Why images work", "The unnamed feeling", "Arrive, don't open", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Naming a feeling is inert",
        body: [
          "\"I was sad\" is accurate and completely flat. There's nothing for the reader to do with it but take your word for it. Naming an emotion hands the reader a label, not an experience.",
          "A concrete image does something different. It gives the reader a physical detail — an object, a gesture, a sensation — and lets them assemble the feeling out of it themselves. The emotion becomes theirs because they built it.",
        ],
      },
      {
        type: "callout",
        label: "The oldest advice, made literal",
        text: "Don't tell me the moon is shining; show me the glint of light on broken glass. Trade the abstraction for the thing a person would actually see.",
      },
      {
        type: "concept",
        heading: "Why images beat statements",
        body: [
          "Abstract words — sadness, love, fear, freedom — mean something slightly different to every reader. Concrete things — a chipped mug, a locked gate, a porch light — mean nearly the same thing to everyone, and can carry the abstraction without ever naming it.",
          "Readers also understand and remember concrete language far more easily than abstraction. \"I see\" means \"I understand\" for a reason — we think in things, not concepts.",
        ],
      },
      {
        type: "compare",
        heading: "Statement vs. image",
        left: {
          label: "Telling",
          lines: [
            "She was lonely",
            "after he left.",
          ],
        },
        right: {
          label: "Showing",
          lines: [
            "She set two cups",
            "out of habit,",
            "then put one back.",
          ],
        },
        caption: "The right-hand version never says lonely — but the second cup, and the small correction of putting it back, builds the loneliness in the reader's mind more sharply than the word ever could.",
      },
      {
        type: "example",
        heading: "An image doing the emotional work",
        variant: 'poem',
        lines: [
          "For a week after,",
          "she left the porch light on",
          "all night —",
          "in case the dark",
          "had an address.",
        ],
        caption: "The poem never says grief, or hope, or denial. But the light left burning \"in case the dark had an address\" holds all three at once, and hands them to you without a single abstract word.",
      },
      {
        type: "concept",
        heading: "Arrive at the abstraction, don't open with it",
        body: [
          "This doesn't mean banning abstract words forever. A poem built on concrete images can sometimes earn one direct emotional statement near the end — because by then the reader has felt the feeling, so naming it lands like a confession.",
          "The mistake is starting there. Open on \"I was heartbroken\" and you've spent the feeling before building it. Open on the image, and the word — if you even still need it — arrives with weight.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Naming an emotion is flat; an image lets the reader build the feeling.",
          "Concrete things mean the same to everyone; abstractions don't.",
          "A well-chosen image can hold a feeling without ever naming it.",
          "If you use an abstraction, arrive at it — don't open with it.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Find a line where you named an emotion outright. Replace it with one concrete image — an object or gesture a person feeling that way would actually produce. Cut the emotion word entirely.",
      },
    ],
  },
  "pf-6": {
    title: "Metaphor vs. simile",
    blocks: [
      {
        type: "intro",
        takeaway: "A simile says two things are alike. A metaphor says they're the same. That small shift changes how boldly a poem speaks.",
        minutes: 6,
        sections: ["The difference", "What each does", "The confidence gap", "See it work", "When to use which", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "One word of difference",
        body: [
          "A simile compares using \"like\" or \"as\": her voice was like gravel. A metaphor drops the comparison and simply claims it: her voice was gravel. Grammatically it's tiny. In effect it's large.",
          "The simile keeps a small, honest distance — it admits it's making a comparison. The metaphor collapses that distance and insists on the identity. One explains; the other transforms.",
        ],
      },
      {
        type: "list",
        heading: "What each one does",
        items: [
          { term: "Simile", text: "Gentler, clearer. The \"like\" gives the reader a beat to process an unusual comparison. Good when the link needs a moment to land." },
          { term: "Metaphor", text: "Bolder, more immediate. Asks the reader to leap without a handrail. Good when the connection is intuitive enough that explaining it would slow the poem." },
        ],
      },
      {
        type: "callout",
        label: "The confidence gap",
        text: "A simile says \"let me show you a resemblance.\" A metaphor says \"this is how it is.\" Choose based on how much certainty the moment can bear.",
      },
      {
        type: "compare",
        heading: "The same image, both ways",
        left: {
          label: "Simile",
          lines: [
            "Grief came in",
            "like weather —",
            "gray, and from nowhere.",
          ],
        },
        right: {
          label: "Metaphor",
          lines: [
            "Grief was weather that year:",
            "gray, and from nowhere,",
            "and no way to argue with the sky.",
          ],
        },
        caption: "The simile observes grief from just outside it. The metaphor is inside it — grief simply IS weather now, unarguable. The metaphor commits harder, and the poem feels less like description and more like testimony.",
      },
      {
        type: "concept",
        heading: "A quick test",
        body: [
          "Take any simile in your draft and delete the \"like\" or \"as,\" forcing it into a metaphor. Then read both. If the metaphor version still makes sense and hits harder, the simile was probably playing it safe.",
          "If the metaphor version collapses into confusion — if the reader genuinely needs that \"like\" to follow you — then the simile was doing real work. Keep it. Not every comparison should be forced into identity.",
        ],
      },
      {
        type: "example",
        heading: "A metaphor that earns its claim",
        variant: 'poem',
        lines: [
          "My father at the end",
          "was a house",
          "with the lights going off",
          "room by room,",
          "and no one downstairs to reach the switch.",
        ],
        caption: "\"Was a house\" is a full metaphor — not like a house, is one. The poem never breaks the frame, and the extended image of rooms going dark carries the whole weight of watching a mind fade, without a single clinical word.",
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Simile compares (like/as); metaphor claims identity.",
          "Simile is gentler and clearer; metaphor is bolder and more immediate.",
          "Test a simile by cutting \"like\" — see if the metaphor is stronger.",
          "Keep the simile when the reader genuinely needs the beat to follow you.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Write one comparison as a simile, then rewrite it as a metaphor by cutting \"like\" or \"as.\" Decide which version your subject can carry — and why.",
      },
    ],
  },
  "pf-7": {
    title: "Form: the sonnet",
    blocks: [
      {
        type: "intro",
        takeaway: "The sonnet's real engine isn't rhyme or line count — it's the turn: the moment the poem changes its own mind.",
        minutes: 7,
        sections: ["Beyond 14 lines", "The turn", "Two classic shapes", "Compression", "Borrow the architecture", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "It's not really about the rules",
        body: [
          "Everyone knows the sonnet as fourteen lines with a rhyme scheme. But strip those away and the thing that actually makes a sonnet work is the volta — the turn — a pivot where the poem complicates, reverses, questions, or resolves what it just built.",
          "That's why the form has survived seven centuries across dozens of languages. Rhyme schemes come and go; the move of building an idea and then turning against it is permanently useful.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "A sonnet sets something up, then turns. The turn is what makes fourteen lines feel like they went somewhere instead of just stopping.",
      },
      {
        type: "list",
        heading: "Two classic places for the turn",
        items: [
          { term: "Italian (Petrarchan)", text: "Eight lines pose a problem or image, then the turn arrives around line 9, and the last six respond to it." },
          { term: "English (Shakespearean)", text: "Three four-line units build, then a final rhymed couplet delivers a compressed twist or verdict." },
        ],
      },
      {
        type: "concept",
        heading: "The constraint is the point",
        body: [
          "Fourteen lines is short. You can't wander, digress, or over-explain — there simply isn't room. Every line has to earn its place before the poem even reaches its turn.",
          "That pressure is a gift. Poets often discover their sharpest images inside strict forms precisely because the constraint forces them to cut everything that isn't essential.",
        ],
      },
      {
        type: "example",
        heading: "A turn in miniature",
        variant: 'poem',
        lines: [
          "All week I practiced what I'd say to you,",
          "rehearsed the reasons, sharpened every one,",
          "built the whole case the way the wounded do —",
          "",
          "then saw your face, and knew the case was done.",
        ],
        caption: "The first three lines build a careful argument. The blank line is the turn. The last line reverses everything: one look dissolves the whole prosecution. That build-then-turn shape is the sonnet's beating heart, even in five lines.",
      },
      {
        type: "concept",
        heading: "Borrow the architecture, skip the rules",
        body: [
          "You don't need rhyme or meter to use what the sonnet teaches. Write roughly two-thirds of a poem building a feeling or image, then use the final third to complicate or reverse it. That's a sonnet's logic in any form.",
          "The lesson underneath: even a free poem benefits from a moment where it turns. Without one, a poem can describe beautifully and still feel like it never arrived anywhere.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "The sonnet's engine is the turn, not the rhyme scheme.",
          "Italian sonnets turn around line 9; English ones in the final couplet.",
          "The tight length forces compression — every line must earn its place.",
          "You can borrow the build-then-turn shape in any poem, rhymed or not.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Write eight lines building a single idea or feeling. Then write four to six lines that turn against it — complicate, question, or reverse it. Don't worry about rhyme; just make the turn land.",
      },
    ],
  },
  "pf-8": {
    title: "Form: free verse",
    blocks: [
      {
        type: "intro",
        takeaway: "Free verse drops fixed meter and rhyme — but \"free\" doesn't mean \"formless.\" Every choice is now yours, and exposed.",
        minutes: 7,
        sections: ["What free verse is", "The hidden difficulty", "Build your own structure", "Line breaks still matter", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Free of inherited rules, not of structure",
        body: [
          "Free verse abandons the fixed patterns — no required meter, no set rhyme scheme, no prescribed line count. That's what \"free\" means. It does not mean the poet stops making structural decisions.",
          "In fact the poet now controls everything by hand: line length, stanza shape, rhythm, where every break falls. The pattern isn't inherited; it's invented fresh for this one poem.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "Free verse isn't the absence of form. It's form you build yourself, from scratch, with nothing to hide behind.",
      },
      {
        type: "concept",
        heading: "Why it's harder than it looks",
        body: [
          "A sonnet quietly makes decisions for you — how long the poem is, roughly where it turns. Free verse strips that scaffolding away, so every choice is fully exposed and has to be justified by the poem itself.",
          "This is why bad free verse is so common: it's easy to write prose, chop it into lines at random, and call it a poem. Without inherited form doing the work, the poet has to supply all the intention.",
        ],
      },
      {
        type: "compare",
        heading: "Prose chopped up vs. real free verse",
        left: {
          label: "Arbitrary breaks",
          lines: [
            "I walked down to the water and",
            "stood there for a while thinking",
            "about nothing in particular at all",
          ],
        },
        right: {
          label: "Deliberate breaks",
          lines: [
            "I walked down to the water",
            "and stood",
            "thinking about nothing",
            "in particular",
            "at all",
          ],
        },
        caption: "Left: the breaks fall wherever the line got long — they do no work. Right: each break isolates a beat — the standing, the nothing, the slow trailing-off — so the form enacts the emptiness the poem describes.",
      },
      {
        type: "concept",
        heading: "Build your own internal logic",
        body: [
          "Since there's no external pattern, free verse poems usually invent their own: a recurring image, a consistent line length that suddenly breaks for emphasis, a stanza shape that shifts when the subject shifts.",
          "The reader may never consciously notice the structure — but they feel it. Free verse that works is never actually shapeless; the shape is just custom-built and invisible.",
        ],
      },
      {
        type: "example",
        heading: "Free verse with invisible structure",
        variant: 'poem',
        lines: [
          "Every morning the same:",
          "kettle, window, the gray yard.",
          "Every morning the same,",
          "until the morning",
          "it wasn't.",
        ],
        caption: "No meter, no rhyme — but the repeated \"Every morning the same\" builds a structure, and the short final lines break that structure exactly when the poem's world breaks. The form is invented, but it's rigorous.",
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Free verse drops inherited rules, not structure itself.",
          "Every choice is now the poet's — and fully exposed.",
          "Prose chopped at random isn't free verse; the breaks must do work.",
          "Strong free verse builds its own invisible internal logic.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Write a short free-verse poem, then check every single line break. For each one ask: did I choose this, or did the line just get long? Rebreak any that were accidental.",
      },
    ],
  },
  "pf-9": {
    title: "Reading your work aloud",
    blocks: [
      {
        type: "intro",
        takeaway: "Your eye skips over problems your mouth won't. Reading aloud is the fastest, most honest edit you have.",
        minutes: 6,
        sections: ["Why the ear is honest", "Where you actually pause", "Catching echoes", "The recording trick", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "The eye forgives; the ear doesn't",
        body: [
          "When you read silently, your brain fills in the rhythm you intended — so awkward phrasing slides right past. Your mouth has no such mercy. If the actual words don't support the rhythm, you'll trip, out loud, every time.",
          "This makes reading aloud the single most efficient revision tool there is. It costs nothing, needs no expertise, and catches problems no amount of silent staring will.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "If you stumble reading it aloud, the reader stumbles reading it silently — because their inner voice hits the exact same snag yours did.",
      },
      {
        type: "concept",
        heading: "Compare your pauses to your breaks",
        body: [
          "As you read aloud, notice where you naturally pause versus where your line breaks tell you to. If you keep running straight through a break — or stopping dead in the middle of a line — the break may be fighting the poem's real rhythm.",
          "This isn't a rule that breaks must match natural pauses; sometimes you break against the rhythm on purpose. But it should be a choice. If the mismatch surprises even you, the break probably needs another look.",
        ],
      },
      {
        type: "concept",
        heading: "The ear catches repetition the eye misses",
        body: [
          "It's easy to reuse a word or a sentence shape twice in a poem without noticing on the page — especially in revision, when you're focused on one section at a time. Read aloud and the echo jumps out immediately.",
          "Sometimes that repetition is a gift you didn't know you'd left yourself, worth making deliberate. Sometimes it's just clumsy. Either way, you can only decide once you've heard it.",
        ],
      },
      {
        type: "callout",
        label: "Try this",
        text: "Read your poem to an empty room as if performing it. The parts you rush past out of embarrassment are usually the parts that aren't working yet.",
      },
      {
        type: "concept",
        heading: "Record it and listen back",
        body: [
          "If you can, record yourself reading and listen later, once a little distance has passed. Hearing your own words played back creates just enough separation to hear the poem the way a stranger would — which is who you're actually writing for.",
          "You'll notice things in playback you couldn't while reading: a line that drags, an ending that arrives too fast, a phrase that sounded fine in your head and clunks in the air.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Silent reading hides flaws; the mouth exposes them.",
          "Compare where you pause to where your lines break.",
          "Reading aloud catches accidental repetition the eye skips.",
          "Recording and listening back lets you hear it like a stranger.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Record yourself reading a finished poem out loud. Listen back and mark every place you stumbled, rushed, or ran out of breath unexpectedly. Revise those spots first.",
      },
    ],
  },
  "pf-10": {
    title: "Revision as re-seeing",
    blocks: [
      {
        type: "intro",
        takeaway: "Revision doesn't mean fixing typos. It means seeing the poem again — as if a stranger wrote it — and asking what it's really doing.",
        minutes: 7,
        sections: ["What revision means", "Show vs. explain", "Cut the scaffolding", "Kill your darlings", "Let it cool", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Re-vision, literally",
        body: [
          "The word means \"to see again.\" Not to tidy punctuation — to look at the whole poem as though someone else made it, and ask honestly what it actually does versus what you meant it to do. Those two things are rarely identical in a first draft.",
          "First drafts are for getting the feeling down. Revision is where the feeling becomes a made thing. Most of what separates a strong poem from a promising one happens here, not in the first rush of writing.",
        ],
      },
      {
        type: "concept",
        heading: "Every line: showing or explaining?",
        body: [
          "Go through the poem and, for each line, ask a blunt question: is this line showing something, or explaining something? Showing lines give the reader an image or action. Explaining lines tell the reader what to think about it.",
          "Explaining lines are usually the first to cut — especially when they sit right next to an image that's already doing the same job more powerfully. The image showed it; the explanation just repeats it in weaker words.",
        ],
      },
      {
        type: "compare",
        heading: "Before and after a cut",
        left: {
          label: "With scaffolding",
          lines: [
            "She folded his shirts",
            "and set them by the door.",
            "It was her way of saying goodbye.",
          ],
        },
        right: {
          label: "Scaffolding removed",
          lines: [
            "She folded his shirts",
            "and set them by the door.",
          ],
        },
        caption: "The third line explains what the first two already showed. Cutting it trusts the reader — and the folded shirts by the door say goodbye far more sharply than the sentence naming it ever could.",
      },
      {
        type: "callout",
        label: "The hardest, best cut",
        text: "The line to cut is rarely the weakest one. It's the line that explains what a stronger line already showed.",
      },
      {
        type: "concept",
        heading: "Suspect your favorite line",
        body: [
          "Writers protect their favorite lines hardest — the clever image, the gorgeous phrase — which is exactly why those deserve the most scrutiny, not the least. A beautiful line that isn't doing structural work is still a detour.",
          "This is the old advice to \"kill your darlings.\" It doesn't mean cut everything good. It means a line has to earn its place by doing a job, not just by being pretty. If you can't name its job, be suspicious.",
        ],
      },
      {
        type: "concept",
        heading: "Give it time to cool",
        body: [
          "A poem written an hour ago is still glowing with everything you intended — which makes it nearly impossible to see what's actually on the page. Even a single day of distance lets you read your own words closer to how a stranger will.",
          "So build a gap into your process. Draft, walk away, come back. The poem you return to is the real one; the poem in your head an hour after writing is a mirage.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Revision means re-seeing the whole poem, not fixing surface errors.",
          "For each line, ask: is it showing or explaining? Cut the explainers.",
          "The best cut is the line that explains what a stronger line showed.",
          "Suspect your favorite lines, and let a draft cool before revising.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take a finished poem and find one line that explains what another line already shows. Cut it. Then find the line you're proudest of and ask honestly what job it does. If you can't answer, cut that too and see what happens.",
      },
    ],
  },
}

// Returns a lesson's rich blocks if authored, else null (caller falls back to
// the legacy paragraphs/tryIt renderer for lessons not yet upgraded).
export function getLessonBlocks(lessonId) {
  return lessonContent[lessonId] || null
}
