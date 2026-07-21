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
  "ssc-1": {
    title: "Starting mid-scene",
    blocks: [
      {
        type: "intro",
        takeaway: "A story that opens with backstory asks for patience it hasn't earned. Open in motion, and the reader has no choice but to lean in.",
        minutes: 7,
        sections: ["The cold open", "In medias res", "Cutting throat-clearing", "The stake test", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Start where it's already happening",
        body: [
          "A story that opens by explaining — who this is, how they got here, what led to today — is asking the reader to wait before anything grabs them. Opening mid-action asks for nothing: the reader is dropped into motion and has to catch up, which is a far stickier kind of attention.",
          "You can fold in the 'why' later, once the reader is hooked on the 'what.' Curiosity about how someone got into this moment is a stronger engine than a tidy explanation delivered up front.",
        ],
      },
      {
        type: "callout",
        label: "The technique has a name",
        text: "In medias res — 'into the middle of things.' Enter late, explain little, and let the reader assemble the backstory from motion.",
      },
      {
        type: "compare",
        heading: "Two openings, same story",
        left: {
          label: "Backstory first",
          lines: [
            "Maya had always hated hospitals. Ever since she was a child, the smell of them made her uneasy, and now, at thirty-four, driving to see her father, she felt that old dread return.",
          ],
        },
        right: {
          label: "Mid-scene",
          lines: [
            "The nurse said two minutes. Maya had driven four hours for two minutes.",
          ],
        },
        caption: "The left version explains her feelings before we care. The right drops us into a ticking clock and a four-hour drive — we feel the dread instead of being told about it, and we want to know why.",
      },
      {
        type: "concept",
        heading: "It forces you to cut throat-clearing",
        body: [
          "Beyond drama, starting mid-scene kills the warm-up paragraph — the character waking up, making coffee, thinking about their day before the story starts. That paragraph almost never survives a real edit anyway.",
          "So starting past it saves you from writing scaffolding you'll only delete later. If you find your first paragraph is someone getting ready for the day, the story probably starts in your second or third.",
        ],
      },
      {
        type: "concept",
        heading: "The one thing a cold open needs",
        body: [
          "Mid-scene fails when the reader is disoriented with no reason to care. The fix isn't more explanation — it's a clear, physical stake inside the scene itself: someone wants something, right now, and something is in the way.",
          "Give the reader a want and an obstacle in the first lines, and they'll happily wait for the context. Withhold both, and no amount of backstory will save it.",
        ],
      },
      {
        type: "example",
        heading: "A cold open with a built-in stake",
        variant: 'prose',
        lines: [
          "\"Don't,\" she said, but he was already dialing.",
          "Forty seconds. That was how long it would take his mother to answer, and how long Ana had to decide whether the truth was worth what it would cost.",
        ],
        caption: "We know nothing about these people — and we don't need to. A want (stop the call), an obstacle (he's already dialing), a clock (forty seconds). The backstory can wait; the tension can't.",
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Opening with backstory asks for patience the story hasn't earned.",
          "In medias res drops the reader into motion and hooks curiosity.",
          "Starting mid-scene cuts the warm-up paragraph you'd delete anyway.",
          "A cold open needs a want, an obstacle, and ideally a clock.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Write the opening of a story that begins in the middle of an action already underway — a decision being made, a door closing. No backstory. Make sure a want and an obstacle are visible in the first two sentences.",
      },
    ],
  },
  "ssc-2": {
    title: "Building a single scene",
    blocks: [
      {
        type: "intro",
        takeaway: "A scene is one continuous moment rendered close to real time — not a summary of events. Knowing the difference is the core of pacing.",
        minutes: 7,
        sections: ["Scene vs. summary", "The shape of a scene", "When to use which", "The half-scene", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Scene shows; summary tells",
        body: [
          "A scene is one continuous moment, in one place, unfolding roughly at the pace a character would live it. Summary compresses time and reports what happened. Both are necessary — but they do opposite jobs, and beginners often summarize the moments that deserve a scene.",
          "The clearest tell that you've slipped into summary is a phrase like 'over the next few weeks' or 'they spent the summer.' That's fine for bridging — but the moments that carry your story's weight should be lived, not summarized past.",
        ],
      },
      {
        type: "callout",
        label: "The core distinction",
        text: "Summary covers ground. Scene makes the reader stand on it. Save your scenes for the ground that matters.",
      },
      {
        type: "compare",
        heading: "The same event, both modes",
        left: {
          label: "Summary",
          lines: [
            "They argued about the money again, and eventually she left.",
          ],
        },
        right: {
          label: "Scene",
          lines: [
            "\"It's not about the money,\" she said, though it was. He watched her pull her coat off the hook, one arm, then the other, taking her time, giving him every chance to say the thing. He didn't. The door clicked.",
          ],
        },
        caption: "Summary tells you they argued. The scene lets you watch her put on the coat one arm at a time, waiting for him to speak. You feel the failure in real time — that's what a scene buys you.",
      },
      {
        type: "concept",
        heading: "A scene has its own small arc",
        body: [
          "A strong scene isn't just a moment — it has a shape. It opens with someone wanting something, moves through friction or obstacle, and closes on a shift: something is different at the end than at the start, even subtly.",
          "If a scene ends in exactly the same place it began — no change in knowledge, feeling, or situation — ask whether it needs to be a scene at all, or whether a line of summary would do.",
        ],
      },
      {
        type: "concept",
        heading: "The half-scene: a middle gear",
        body: [
          "Between full scene and pure summary sits a useful third gear: the half-scene. It's mostly summary, but it pauses for one vivid, dramatized beat — a scrap of dialogue, a single sharp detail — before pulling back out.",
          "Use it when a moment matters somewhat, but not enough for a full scene. It grounds a stretch of summary in one concrete instant, so the reader stays connected without you spending a whole scene's worth of space.",
        ],
      },
      {
        type: "example",
        heading: "A half-scene in action",
        variant: 'prose',
        lines: [
          "The trial dragged on for weeks. Witnesses came and went, the lawyers circled, and Ellen stopped expecting anything to change.",
          "Only once did it break through — when the boy pointed at her father and said, quietly, \"That's him,\" and the whole room seemed to inhale.",
          "Then the machinery resumed, and the weeks closed over the moment again.",
        ],
        caption: "Weeks of summary bracket a single dramatized beat — the boy's 'That's him.' The half-scene lets you compress time while still giving the reader one moment to actually stand in.",
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "A scene is one continuous moment in near-real time; summary compresses.",
          "Save full scenes for the moments that carry weight.",
          "A good scene has a small arc — something shifts by the end.",
          "The half-scene grounds summary with one dramatized beat.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take a moment you'd normally summarize ('they made up the next day') and write it as a full scene — real-time, with dialogue and physical detail. Then notice what the scene reveals that the summary hid.",
      },
    ],
  },
  "ssc-3": {
    title: "Dialogue that carries plot",
    blocks: [
      {
        type: "intro",
        takeaway: "Dialogue that only trades information is dead weight. The best dialogue reveals character while something is also shifting underneath.",
        minutes: 7,
        sections: ["Two jobs at once", "Subtext", "The rhythm of speech", "The voice test", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Good dialogue works two jobs at once",
        body: [
          "Dialogue that just exchanges facts — 'How was your day?' 'Fine.' — is dead weight unless something else is happening under it. Strong dialogue reveals who a person is through how they speak, while the scene itself is shifting or being decided.",
          "Ask of every exchange: is this only moving information, or is it also revealing character and changing the situation? If it's only information, it can usually be cut or compressed into a line of narration.",
        ],
      },
      {
        type: "concept",
        heading: "Subtext: what isn't said",
        body: [
          "People rarely say exactly what they mean, especially under pressure. Subtext — the meaning under the words — usually carries more than the literal line. A character who changes the subject when asked a direct question tells you more than one who answers.",
          "The strongest dialogue often has two conversations running at once: the words on the surface, and the real exchange happening underneath. Let characters dodge, deflect, and imply.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "On-the-nose dialogue says what it means. Real dialogue means more than it says. Write the second kind.",
      },
      {
        type: "compare",
        heading: "On the nose vs. subtext",
        left: {
          label: "On the nose",
          lines: [
            "\"I'm angry that you forgot our anniversary and I feel unappreciated.\"",
          ],
        },
        right: {
          label: "Subtext",
          lines: [
            "\"There's cake in the fridge,\" she said. \"It was on sale.\" She didn't look up. \"Half price.\"",
          ],
        },
        caption: "The left states the feeling outright — flat and unreal. The right never names the hurt, but the cake, the not-looking-up, the 'half price' carry it completely. The reader does the work, which is why it lands.",
      },
      {
        type: "concept",
        heading: "Speech has rhythm — and it's not tidy",
        body: [
          "Real speech is full of interruption, fragments, and things left unfinished. Grammatically perfect, complete dialogue often reads as stiff, because people don't talk that way — especially when upset, distracted, or hiding something.",
          "Let characters cut each other off. Let sentences trail. Let someone answer a question that wasn't asked. The mess is what makes it sound like a person instead of a script.",
        ],
      },
      {
        type: "concept",
        heading: "The voice test",
        body: [
          "One quick check for whether a line earns its place: could a completely different character say the exact same line without it feeling wrong? If yes, the dialogue isn't specific enough to this character yet — it's just plot information in quotation marks.",
          "Great dialogue is inseparable from the person saying it. The word choice, the rhythm, what they avoid — all of it should belong to one character and no one else.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Dialogue should reveal character AND move the scene, not just inform.",
          "Subtext — what's left unsaid — usually carries the most weight.",
          "Real speech is messy: fragments, interruptions, dodges.",
          "If any character could say the line, it's not specific enough.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Write a short exchange where one character is upset but never says so directly. Let the feeling show through what they choose to talk about instead. No character may name their emotion.",
      },
    ],
  },
  "ssc-4": {
    title: "The unreliable detail",
    blocks: [
      {
        type: "intro",
        takeaway: "One specific, slightly odd detail tells the reader more than a paragraph of description — because specificity is what earns their trust.",
        minutes: 6,
        sections: ["Specificity earns trust", "The odd detail", "Restraint", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "The specific beats the general",
        body: [
          "A single precise, slightly unusual detail — a man who reads every ingredient label before eating, a clock nobody's fixed in three years — tells the reader more about a person or place than a full paragraph of general description.",
          "Vague description ('a nice house,' 'an ordinary day') reads as filler because it could describe anything. One exact, unexpected detail reads as observation — proof the narrator actually looked at this specific world.",
        ],
      },
      {
        type: "callout",
        label: "Why it works",
        text: "A generic detail could be anywhere. A specific one could only be here. Specificity is how a reader decides to trust you.",
      },
      {
        type: "concept",
        heading: "The best details are slightly off",
        body: [
          "The most powerful details often aren't the dramatic ones — they're the small, faintly strange ones that imply a whole history without explaining it. A character noticing the pale band of skin where a wedding ring used to be says more than a paragraph about the divorce.",
          "Look for the detail that makes the reader lean in and wonder, rather than the one that spells everything out. Implication is stronger than statement.",
        ],
      },
      {
        type: "compare",
        heading: "Generic vs. specific",
        left: {
          label: "Generic",
          lines: [
            "Her apartment was messy and a little sad.",
          ],
        },
        right: {
          label: "Specific",
          lines: [
            "Three mugs of tea sat on the windowsill, each with a full skin of dust, each abandoned at a different week.",
          ],
        },
        caption: "'Messy and sad' tells you how to feel. The three dusty mugs, each from a different week, shows you a person starting things and drifting off — and lets you feel the sadness yourself, which is far sharper.",
      },
      {
        type: "concept",
        heading: "One detail, not five",
        body: [
          "Restraint matters here. One or two precise details land; five in a row become a list, and the reader stops absorbing them individually. Each additional detail dilutes the ones around it.",
          "Choose the single detail doing the most work and trust it to carry the moment. A paragraph of description usually has one great detail buried in it — cut to that one.",
        ],
      },
      {
        type: "example",
        heading: "A detail that implies a whole life",
        variant: 'prose',
        lines: [
          "He kept his dead wife's umbrella by the door, and on clear days, sometimes, he took it anyway.",
        ],
        caption: "One sentence, one object, one small odd behavior — and you understand grief, habit, and a kind of quiet loyalty without a single abstract word or a line of backstory. That's the whole power of the specific detail.",
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "One specific detail beats a paragraph of general description.",
          "The best details are slightly odd and imply a history.",
          "Specificity is what earns the reader's trust.",
          "Use one or two great details, not five — restraint sharpens them.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take a generic description in something you've written ('a busy office,' 'an old car') and replace it with a single specific, slightly odd detail that implies more than it states.",
      },
    ],
  },
  "ssc-5": {
    title: "Endings that land",
    blocks: [
      {
        type: "intro",
        takeaway: "A satisfying ending isn't a twist — it's a shift in understanding that was quietly set up earlier, now paying off.",
        minutes: 7,
        sections: ["Surprising yet inevitable", "Plant the payoff", "Don't just stop", "Earned ambiguity", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Surprising, then inevitable",
        body: [
          "A satisfying ending is rarely a twist for its own sake. It's a shift in understanding that was quietly seeded earlier and only now pays off. The reader should feel surprised, and then — a second later — feel that it was inevitable all along.",
          "That double beat is the goal: 'I didn't see it coming' immediately followed by 'of course.' A twist with no groundwork gets the first half and fails the second — it surprises, but feels cheap.",
        ],
      },
      {
        type: "callout",
        label: "The target",
        text: "The best endings are surprising and inevitable at once. The surprise comes from the reader; the inevitability comes from you, planted pages earlier.",
      },
      {
        type: "concept",
        heading: "If the ending doesn't land, fix the middle",
        body: [
          "When an ending feels unearned, the problem is almost never the ending itself — it's something missing earlier. The fix is to go back and plant the detail, image, or feeling the ending needs to pay off.",
          "So treat a weak ending as a diagnostic, not a dead end. Ask: what would have to be true earlier for this ending to feel inevitable? Then go plant it.",
        ],
      },
      {
        type: "compare",
        heading: "Unearned vs. planted",
        left: {
          label: "Twist from nowhere",
          lines: [
            "...and then she realized the whole town had known about her father all along. THE END.",
          ],
        },
        right: {
          label: "Planted earlier",
          lines: [
            "(Earlier: neighbors going quiet when she passed; her mother changing the subject.) ...and then she understood the silences. They had always known.",
          ],
        },
        caption: "The left twist arrives from nowhere. The right pays off small moments the reader half-noticed — the quiet neighbors, the dodged questions — so the ending detonates something already sitting there.",
      },
      {
        type: "concept",
        heading: "An ending that just stops isn't an ending",
        body: [
          "Endings that merely stop — where the last sentence just happens to be last — feel incomplete even when the prose is fine. The reader needs to feel something changed: an understanding gained, a question answered, or one deliberately left open.",
          "Before you end, ask: what is different now? If nothing has shifted — in the character, the situation, or the reader's understanding — the story hasn't ended, it's just paused.",
        ],
      },
      {
        type: "concept",
        heading: "Ambiguity on purpose vs. by accident",
        body: [
          "Open endings can be powerful, but there's a difference between ambiguity that's the point — because uncertainty is the story's truth — and ambiguity because the writer didn't figure out what it was building toward.",
          "Readers can feel the difference. An earned open ending resonates; an unearned one just feels unfinished. If you end open, make sure the openness is the meaning, not an escape.",
        ],
      },
      {
        type: "example",
        heading: "A quiet, planted ending",
        variant: 'prose',
        lines: [
          "(Throughout: he never once called her by her name.)",
          "At the funeral, he stood, and in front of everyone, he finally said it — her name, just her name — and then sat back down.",
        ],
        caption: "Nothing 'happens' — no twist. But the whole story planted his inability to say her name, so the small act of finally saying it lands like a thunderclap. Surprising, inevitable, earned.",
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Great endings are surprising and then, a beat later, inevitable.",
          "If an ending feels unearned, fix what's missing earlier.",
          "An ending must shift something — knowledge, feeling, situation.",
          "Open endings work only when the openness is the point.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Look at a story's last line. Find one earlier place you could plant a small detail or gesture that the ending pays off. Add it — then the ending should feel inevitable instead of tacked on.",
      },
    ],
  },
  "ssc-6": {
    title: "Point of view",
    blocks: [
      {
        type: "intro",
        takeaway: "Who tells the story controls what the reader can know — and what they're kept from knowing is often the story's real engine.",
        minutes: 8,
        sections: ["POV is information control", "First person", "Third limited", "Omniscient & objective", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "POV is about what the reader is allowed to know",
        body: [
          "Choosing a point of view is really deciding what information the reader gets and how. What a narrator can't or won't tell us creates the gap between what we know and what we want to know — and that gap is one of fiction's most reliable engines of tension.",
          "So POV isn't a technicality — it's a fundamental choice about intimacy and access. Pick it deliberately, and hold it consistently; the most common beginner error is drifting between viewpoints without meaning to.",
        ],
      },
      {
        type: "list",
        heading: "The main points of view",
        items: [
          { term: "First person ('I')", text: "Maximum intimacy — we're inside one head — but limited to what that character notices, remembers, or admits. The narrator can be biased or unreliable." },
          { term: "Third limited ('he/she')", text: "Slightly more distance, still filtered through one character's mind at a time. The most common POV in modern fiction — intimacy plus flexibility." },
        ],
      },
      {
        type: "list",
        heading: "Wider lenses",
        items: [
          { term: "Omniscient", text: "The narrator knows everything and can enter any mind. Great for large casts and sweep, but shifting between heads too fast disorients the reader." },
          { term: "Objective / cinematic", text: "Reports only what's observable — action and dialogue, no interiority. Creates cool distance and makes the reader infer everything." },
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "First person hands you a mind. Objective hands you a camera. Everything in between is a dial for how close the reader stands.",
      },
      {
        type: "compare",
        heading: "The same moment, two POVs",
        left: {
          label: "First person",
          lines: [
            "I told him I was fine. I was not fine. But there are things you don't say in a kitchen at 7am.",
          ],
        },
        right: {
          label: "Objective",
          lines: [
            "\"I'm fine,\" she said. She turned back to the sink. The tap ran for a while.",
          ],
        },
        caption: "First person lets us hear the lie from inside — we know she's not fine. Objective only shows the words and the running tap, and makes us infer the lie. Same moment; completely different reader experience.",
      },
      {
        type: "concept",
        heading: "Consistency is the rule that matters most",
        body: [
          "Whatever POV you choose, hold it. The jarring error is starting in third limited — locked to one character's knowledge — then suddenly revealing another character's private thoughts. It quietly breaks the reader's trust in the story's rules.",
          "Establish the POV in the first paragraph or two, and stay within its limits. Consistency is what lets a reader relax into the story instead of tripping over shifting access.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "POV controls what the reader knows — and the gaps create tension.",
          "First person: intimate but limited and possibly unreliable.",
          "Third limited: the flexible modern default; omniscient sees all; objective shows only the surface.",
          "Choose a POV deliberately and hold it consistently.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take one paragraph you've written and rewrite it in a different POV — first to third, or intimate to objective. Notice what the new lens reveals, and what it hides.",
      },
    ],
  },
  "ssc-7": {
    title: "Pacing a short story",
    blocks: [
      {
        type: "intro",
        takeaway: "Pacing isn't speed — it's proportion. You slow down for what matters and compress everything that's just getting you there.",
        minutes: 7,
        sections: ["Proportion, not speed", "Scene vs. summary", "Sentence length", "Dialogue and pace", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Pacing is proportion",
        body: [
          "Pacing isn't about going fast — it's about proportion. A well-paced story slows down for the moments that matter and compresses the transportation between them. If every moment gets equal weight, nothing feels important.",
          "So pacing is really a series of decisions about emphasis: where do I linger, where do I hurry? Contrast is what tells the reader which moments to care about.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "Even pacing flattens a story. Vary it — dwell on what matters, rush what doesn't — and the shape itself tells the reader where to look.",
      },
      {
        type: "concept",
        heading: "The biggest lever: scene vs. summary",
        body: [
          "The largest pacing control is the one from the scene lesson: render pivotal moments as full scenes in near-real time, and compress the connective tissue into brief summary. Too many scenes back to back and the story drags; too much summary and the reader never gets to experience anything.",
          "Think of summary as the fast-forward between the moments you actually want the reader to live. Alternating the two is most of pacing.",
        ],
      },
      {
        type: "compare",
        heading: "Sentence length changes speed",
        left: {
          label: "Long — slows down",
          lines: [
            "The afternoon stretched on, warm and unhurried, and she let herself sink into the chair, listening to the far-off sound of a mower somewhere down the street, thinking of nothing in particular.",
          ],
        },
        right: {
          label: "Short — speeds up",
          lines: [
            "The door slammed. Glass broke. She ran. Behind her, footsteps — closer now. She didn't look back.",
          ],
        },
        caption: "Long, flowing sentences expand time and slow the pulse. Short, clipped ones accelerate — readers process them faster, and the visual rhythm signals speed before meaning even lands. Match sentence length to the scene's temperature.",
      },
      {
        type: "concept",
        heading: "Dialogue sets tempo too",
        body: [
          "Quick, clipped exchanges read fast and build tension. A long, uninterrupted speech slows everything down — sometimes for good reason, sometimes by accident. If a scene feels sluggish, check whether one character has been talking, uninterrupted, for too long.",
          "You can tighten a slack scene just by breaking a monologue into a back-and-forth, or loosen a rushed one by letting a character speak at length. Dialogue rhythm is a pacing dial.",
        ],
      },
      {
        type: "concept",
        heading: "A revision pass for pace",
        body: [
          "Go through a draft and mark each stretch 'fast' or 'slow.' Then ask whether the pattern matches the story's emphasis — the emotional peaks slow, the connective tissue fast — or whether it's just steady throughout because you wrote at one default speed.",
          "Deliberately varied pacing is invisible and powerful. Accidentally uniform pacing is the quiet reason many competent stories feel flat.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Pacing is proportion — linger on what matters, compress the rest.",
          "Scene vs. summary is the biggest pacing lever.",
          "Short sentences accelerate; long sentences slow the reader down.",
          "Clipped dialogue speeds a scene; long speeches slow it.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take a tense moment you've written and rewrite it in short, clipped sentences. Then take a calm moment and rewrite it in one long, flowing sentence. Feel how sentence length alone changes the speed.",
      },
    ],
  },
  "ssc-8": {
    title: "Cutting what doesn't serve it",
    blocks: [
      {
        type: "intro",
        takeaway: "Every sentence should reveal character, move the plot, or build atmosphere. If it does none of those, it's a candidate to cut — no matter how good it is.",
        minutes: 7,
        sections: ["The three jobs", "Leave out the skipped parts", "Suspect your darlings", "The margin pass", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Every sentence needs a job",
        body: [
          "In a short story, every sentence should be doing at least one of three things: revealing character, moving the plot, or building atmosphere and setting. A sentence doing none of the three is a candidate to cut, however well-written it is on its own.",
          "This is what makes short stories feel taut. There's no room for sentences that are merely present. Each one should earn its place by doing a job you can name.",
        ],
      },
      {
        type: "callout",
        label: "Leonard's razor",
        text: "Elmore Leonard said to leave out the parts readers skip. In practice, that's the parts that serve the writer — explaining, showing off — not the reader.",
      },
      {
        type: "concept",
        heading: "Protect the reader, not your pride",
        body: [
          "Writers tend to defend their favorite lines hardest — the clever image, the gorgeous phrase — which is exactly why those deserve the most scrutiny. A beautiful sentence that isn't doing structural work is still, functionally, a detour.",
          "This is 'kill your darlings,' and it's widely misunderstood. It doesn't mean cut everything good. It means a line has to earn its place by doing a job, not just by being pretty.",
        ],
      },
      {
        type: "compare",
        heading: "Before and after the cut",
        left: {
          label: "With a darling",
          lines: [
            "The rain fell in silver threads against the glass, beautiful and cold, like tiny falling knives catching the streetlight. She picked up the phone.",
          ],
        },
        right: {
          label: "Cut to the work",
          lines: [
            "The rain hit the glass. She picked up the phone.",
          ],
        },
        caption: "The silver-threads-and-knives sentence is pretty — and it stalls the moment. If the scene is about her picking up the phone, the ornate description is a detour. Cutting it doesn't lose the story; it sharpens it.",
      },
      {
        type: "concept",
        heading: "The margin pass",
        body: [
          "A concrete revision method: go through a draft and, in the margin, write one word for each paragraph's job — 'character,' 'plot,' 'mood.' If you can't come up with a word, or two paragraphs in a row share the same job, that's usually where the fat is.",
          "It sounds mechanical, but it exposes what your instincts miss. The paragraph you can't assign a job to is almost always the one to cut or fold into its neighbor.",
        ],
      },
      {
        type: "concept",
        heading: "Cutting is where the story sharpens",
        body: [
          "Most first drafts are twenty to thirty percent too long — not because the extra is bad, but because it's inert. Cutting it doesn't shrink the story; it concentrates it. The same events hit harder with less around them.",
          "Trust that removing what doesn't work makes what remains stronger. A short story is defined as much by what you leave out as by what you keep.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Every sentence should reveal character, move plot, or build mood.",
          "Leave out the parts that serve the writer, not the reader.",
          "Suspect your favorite lines hardest — pretty isn't a job.",
          "Use the margin pass: name each paragraph's job, cut the ones you can't.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take a page you've written and, for each paragraph, name its job in one word — character, plot, or mood. Find the one you can't name, and cut it. Read the page again.",
      },
    ],
  },
  "im-1": {
    title: "Concrete over abstract",
    blocks: [
      {
        type: "intro",
        takeaway: "Abstract words name concepts; concrete words name things a reader can see, touch, and remember. The concrete almost always wins.",
        minutes: 7,
        sections: ["Concepts vs. things", "Why concrete wins", "Show, don't tell", "Arrive at the abstraction", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Abstractions have no body",
        body: [
          "Words like beauty, loss, freedom, honor name concepts — they have no physical form, so every reader supplies a different private idea of what they mean. Concrete words name things a reader can actually picture: a chipped mug, a locked gate, a porch light.",
          "The gap matters more than it seems. When a line feels flat or forgettable, it's very often hiding an abstraction that should be swapped for a specific, physical thing.",
        ],
      },
      {
        type: "callout",
        label: "Chekhov's rule",
        text: "Don't tell me the moon is shining; show me the glint of light on broken glass. Trade the concept for the thing that produces it.",
      },
      {
        type: "concept",
        heading: "Why concrete language wins",
        body: [
          "Readers process and remember concrete language far more easily than abstraction — it gives the mind something to hold. Studies of comprehension bear this out, but you already know it: 'I see' means 'I understand.' We think in things.",
          "Concrete detail also means roughly the same to everyone. 'A locked gate' lands the same in every reader; 'oppression' splinters into a thousand private versions. The concrete unifies the reader's experience.",
        ],
      },
      {
        type: "compare",
        heading: "Abstract vs. concrete",
        left: {
          label: "Abstract",
          lines: [
            "She felt a deep sadness and a sense of hopelessness about her situation.",
          ],
        },
        right: {
          label: "Concrete",
          lines: [
            "She washed the same cup three times, then set it down and forgot why she was standing there.",
          ],
        },
        caption: "The left names two abstractions and lands on nothing. The right never says sad or hopeless — but the repeated washing and the forgetting show a mind underwater, and the reader feels it instead of being told.",
      },
      {
        type: "concept",
        heading: "Specificity within the concrete",
        body: [
          "Concreteness has degrees. 'A bird' is more abstract than 'a crow,' and 'a crow' is weaker than 'a crow shaking water off one wing.' The more specific the noun and the more active the verb, the more the image lives.",
          "So don't stop at concrete — push toward specific. Specific nouns and vivid verbs are the fastest way to make an image sharp and memorable.",
        ],
      },
      {
        type: "concept",
        heading: "Arrive at the abstraction, don't lead with it",
        body: [
          "This doesn't ban abstract words forever. A passage built on concrete images can earn one direct abstract statement — because by then the reader has felt the feeling, so naming it lands like a confession rather than a claim.",
          "The mistake is opening there. Lead with 'she was devastated' and you've spent the feeling before earning it. Lead with the image, and the abstraction — if you still need it — arrives with weight.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Abstractions name concepts; concrete words name things you can sense.",
          "Readers understand and remember the concrete far better.",
          "Push past concrete to specific: a crow, not a bird.",
          "Arrive at an abstraction through images — don't open on it.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Find an abstract word in your writing — sad, angry, beautiful, afraid — and replace it with one concrete, specific detail that produces the feeling without naming it. Cut the abstract word entirely.",
      },
    ],
  },
  "im-2": {
    title: "The five senses",
    blocks: [
      {
        type: "intro",
        takeaway: "Most first-draft writing is all eyes. Sound, smell, touch, and taste are what actually make a scene feel physically real.",
        minutes: 6,
        sections: ["Beyond the visual", "Smell and memory", "Don't checklist", "The sense audit", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "First drafts are almost all sight",
        body: [
          "Most early writing leans entirely on the visual — what a place looks like, what a face does. Sound, smell, touch, and taste go missing, which is a lost opportunity, because non-visual senses are often what actually triggers memory and emotion.",
          "Sight tells the reader about a scene. The other senses put the reader inside it. A single well-placed non-visual detail can make a whole scene suddenly, physically real.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "Sight describes a world. Smell, sound, and touch make the reader's body believe they're in it.",
      },
      {
        type: "concept",
        heading: "Smell is wired to memory",
        body: [
          "Smell in particular is tied unusually closely to memory and emotion — more directly than any other sense. A single smell detail — bread, gasoline, a specific perfume — can do more emotional work in five words than a paragraph of visual description.",
          "It's a shortcut straight to feeling. When you want a scene to land in the body, reach for what it smells like before what it looks like.",
        ],
      },
      {
        type: "example",
        heading: "A non-visual detail grounding a scene",
        variant: 'prose',
        lines: [
          "The hospital didn't look frightening. It was the smell — bleach laid over something sweeter underneath, the sweetness losing — that told her where she really was.",
        ],
        caption: "The scene could be described visually for a paragraph. Instead one smell — bleach over something sweeter, 'the sweetness losing' — does all the work, and puts the reader bodily in the room.",
      },
      {
        type: "concept",
        heading: "One sense, not all five",
        body: [
          "You don't need to cram every sense into a passage — that becomes an exhausting checklist. Even one unexpected non-visual detail, placed deliberately, transforms a scene. Five senses per paragraph is a chore to read.",
          "Reach for the one sense that most belongs to this moment — the sound of a specific silence, the texture of a specific object — and trust it. Precision beats coverage.",
        ],
      },
      {
        type: "concept",
        heading: "The sense audit",
        body: [
          "A practical revision pass: go through a scene and highlight every sensory detail. If everything you highlighted is visual, that's the flag — not because sight is wrong, but because the scene is missing the dimensions a real body would register.",
          "Then add one detail from a different sense, in the spot where it matters most. Often that single addition is what makes a flat scene suddenly present.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "First drafts over-rely on sight; the other senses create presence.",
          "Smell is wired to memory — it reaches feeling fast.",
          "Use one deliberate non-visual detail, not a five-sense checklist.",
          "Audit a scene: if it's all visual, add one other sense.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take a scene you've written and mark every sensory detail. If they're all visual, add exactly one detail from another sense — sound, smell, touch, or taste — where it matters most.",
      },
    ],
  },
  "im-3": {
    title: "Extended metaphor",
    blocks: [
      {
        type: "intro",
        takeaway: "Most metaphors flash once and vanish. An extended metaphor runs through a whole piece, deepening each time it returns — giving the work a spine.",
        minutes: 7,
        sections: ["One image, sustained", "Deepen, don't repeat", "The strain risk", "Discovered vs. forced", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "A metaphor that stays",
        body: [
          "Most metaphors appear once and disappear. An extended metaphor instead runs through an entire piece — a poem, a paragraph, a whole story — with each return deepening the image rather than just repeating it. Done well, it gives a work a spine everything else orbits.",
          "The single sustained image becomes a lens the whole piece looks through. It's one of the most powerful structural tools available, and one of the easiest to overreach with.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "A single metaphor, returned to and deepened, can hold an entire piece together — an idea everything else quietly orbits.",
      },
      {
        type: "concept",
        heading: "Each return should reveal something new",
        body: [
          "The technique works because every return can turn the image slightly. If a poem opens comparing grief to weather, a later return might shift it — the storm passes, or changes direction — tracking the emotional movement through the metaphor's own logic.",
          "So don't just restate the image; evolve it. The second and third appearances should show a new facet, so the metaphor accumulates meaning instead of merely echoing.",
        ],
      },
      {
        type: "example",
        heading: "An extended metaphor evolving",
        variant: 'prose',
        lines: [
          "At first the debt was a small dog, easy to walk past.",
          "By spring it had grown teeth, and a bark, and a way of waiting by the door.",
          "By the end it was the only thing in the house that ate.",
        ],
        caption: "One image — the debt as an animal — returns three times, growing each time from harmless to menacing to all-consuming. The metaphor doesn't repeat; it develops, and carries the whole arc of the situation.",
      },
      {
        type: "concept",
        heading: "The strain risk",
        body: [
          "The main danger is strain: forcing the metaphor into places it doesn't naturally fit, just to keep the thread going. When that happens it stops feeling organic and starts feeling like a puzzle the writer is solving instead of a feeling being expressed.",
          "If a return to the image feels like a stretch to you, it will feel like a stretch to the reader. Better to let the metaphor rest than to jam it in where it doesn't belong.",
        ],
      },
      {
        type: "concept",
        heading: "Discovered, not engineered",
        body: [
          "The strongest extended metaphors feel discovered each time — as if the writer couldn't help noticing the connection again — not dutifully reused to prove the piece has a 'through-line.' The test is whether each return feels inevitable or manufactured.",
          "Aim for the sense that the image keeps recurring because it's true, not because you decided to structure the piece around it. When it's working, the metaphor seems to belong to the subject itself.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "An extended metaphor runs through a whole piece and gives it a spine.",
          "Each return should deepen or evolve the image, not just repeat it.",
          "Beware strain — don't force the image where it doesn't fit.",
          "The best returns feel discovered, not engineered.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Take a metaphor from your opening and find one later place it could naturally return — changed, deepened, showing a new facet. Then check: does the return feel inevitable, or forced?",
      },
    ],
  },
  "im-4": {
    title: "Avoiding cliché",
    blocks: [
      {
        type: "intro",
        takeaway: "A cliché was once a fresh image. Overuse wore the meaning off it. The fix isn't to avoid feeling — it's to find your own version of it.",
        minutes: 6,
        sections: ["Worn-smooth language", "The real fix", "Why they sneak in", "The anyone test", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Clichés were once alive",
        body: [
          "'Heart of gold,' 'time heals all wounds,' 'butterflies in my stomach' — these were once genuinely fresh, surprising images. Generations of overuse wore the surprise, and most of the meaning, off them. A reader's eye now slides right over a cliché without feeling it.",
          "That's the real cost: a cliché doesn't communicate, it just occupies space the reader skims. The feeling you meant to convey passes by unregistered.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "A cliché is a dead image. The reader has seen it too many times to feel it — so it takes up the space of feeling without delivering any.",
      },
      {
        type: "concept",
        heading: "The fix is specificity, not avoidance",
        body: [
          "The solution isn't to avoid the underlying feeling — nervousness, grief, love are all worth writing. It's to find your own specific version instead of the pre-packaged phrase everyone has memorized. What does this nervousness actually feel like, for this exact person, right now?",
          "The cliché is generic by definition. Your specific, observed version — what the feeling did in your body, in this moment — will never sound like anyone else's writing, because it's yours.",
        ],
      },
      {
        type: "compare",
        heading: "Cliché vs. observed",
        left: {
          label: "Cliché",
          lines: [
            "Her heart was pounding out of her chest and butterflies filled her stomach.",
          ],
        },
        right: {
          label: "Specific",
          lines: [
            "She noticed she was gripping her keys so hard the teeth left a red print across her palm.",
          ],
        },
        caption: "The left reaches for two worn phrases and lands on nothing felt. The right observes one exact physical thing — the keys biting the palm — and the nervousness becomes real because it's specific to this hand, this moment.",
      },
      {
        type: "concept",
        heading: "Why they sneak in — and how to catch them",
        body: [
          "Clichés slip into first drafts because they're fast: the phrase is already sitting there, fully formed, and reaching for it is easier than inventing something true. That's fine for a first draft. Revision is where you interrogate every phrase that arrived too easily.",
          "The tell is speed. If a phrase came without effort, be suspicious — the easy phrase is usually the borrowed one.",
        ],
      },
      {
        type: "concept",
        heading: "The 'anyone' test",
        body: [
          "A quick diagnostic: could this phrase have been written by literally anyone, about any character, in any story? If yes, it's probably a cliché even if it doesn't ring an obvious bell. The specific, the odd, the personally observed never sound generic.",
          "Run your images through that question. Anything that could belong to any story belongs to none — replace it with something only this character, in this moment, would produce.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Clichés were once fresh; overuse wore the feeling off them.",
          "The fix is your own specific version, not avoiding the feeling.",
          "They sneak in because they're fast — hunt them in revision.",
          "The test: could anyone have written it? Then it's a cliché.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Find a cliché in your writing. Ask what specifically caused that feeling in this exact scene, for this exact person — then write that instead of the borrowed phrase.",
      },
    ],
  },
  "im-5": {
    title: "Imagery in dialogue",
    blocks: [
      {
        type: "intro",
        takeaway: "Characters don't speak in polished imagery — but the comparisons they reach for reveal who they are and what world they come from.",
        minutes: 6,
        sections: ["Speech isn't polished", "Comparisons reveal character", "Source from their world", "Attention as character", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Characters aren't poets",
        body: [
          "Real speech is rougher than narration — clipped, imperfect, unpolished. Characters don't talk in the careful imagery a narrator might use. But the comparisons they do reach for, even offhand, still say something true about who they are and what they notice.",
          "So imagery in dialogue works differently than imagery in narration. It's not about beauty — it's about revelation. Every comparison a character makes is a small window into their mind.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "A character's metaphors come from their world, not yours. What they compare things to is a fingerprint.",
      },
      {
        type: "concept",
        heading: "The comparison is a fingerprint",
        body: [
          "A character who describes fear as 'like a phone about to ring' reveals something different from one who says 'like drowning.' The first suggests dread of an incoming event; the second, being overwhelmed and submerged. Neither is more correct — they reveal different people.",
          "So use the comparisons your characters make as characterization. What someone reaches for to explain a feeling tells you where their mind lives.",
        ],
      },
      {
        type: "compare",
        heading: "Generic vs. character-sourced",
        left: {
          label: "Generic",
          lines: [
            "\"I was so nervous,\" he said. \"My heart was racing.\"",
          ],
        },
        right: {
          label: "From his world (a mechanic)",
          lines: [
            "\"I was running rough,\" he said. \"Like an engine about to throw a rod.\"",
          ],
        },
        caption: "The left could be anyone. The right — 'running rough,' 'throw a rod' — could only be a man who works on engines. The comparison does double duty: it conveys the nerves and reveals the whole life behind them.",
      },
      {
        type: "concept",
        heading: "Source imagery from the character's world",
        body: [
          "The trick is drawing a character's comparisons from their own life — their job, their obsessions, their background — not from yours. A nurse reaches for something clinical; a gardener for something that grows. Giving every character the same elegant, writerly imagery flattens them into versions of the author.",
          "Before you write a character's comparison, ask: what would this specific person actually reach for? The answer individualizes them instantly.",
        ],
      },
      {
        type: "concept",
        heading: "What they notice is who they are",
        body: [
          "This extends beyond spoken comparisons to attention itself. What a character registers in a scene — what they'd actually notice walking into a room — reveals as much as what they say, sometimes more. A jeweler and a carpenter notice different things about the same door.",
          "Let each character's attention be specific to them. The details they fix on characterize them silently, without a word of explanation.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Characters speak rougher than narration — imagery reveals, not decorates.",
          "The comparison a character makes is a fingerprint of who they are.",
          "Source their imagery from their world — job, background, obsessions.",
          "What a character notices characterizes them as much as what they say.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Give a character a comparison drawn specifically from their job, hobby, or background — not a generic writerly one. Let the image reveal the person, not just the feeling.",
      },
    ],
  },
  "im-6": {
    title: "When to let go of a metaphor",
    blocks: [
      {
        type: "intro",
        takeaway: "Not every idea needs a metaphor. Sometimes the plainest possible sentence is the strongest — and knowing when is its own craft.",
        minutes: 6,
        sections: ["Plain can be strongest", "When to go bare", "The stacking tell", "Restraint as skill", "See it work", "Recap", "Your turn"],
      },
      {
        type: "concept",
        heading: "Sometimes plain is the power move",
        body: [
          "Not every idea needs a metaphor. Sometimes the plainest, most literal sentence available is the strongest choice, and reaching for imagery just softens a moment that needed to land hard and direct, with nothing between the reader and the fact.",
          "Imagery is a tool, not an obligation. A writer who reaches for a comparison at every turn dilutes the moments that actually need one. Knowing when to stay bare is as important as knowing how to build an image.",
        ],
      },
      {
        type: "callout",
        label: "The core idea",
        text: "A death, a confession, a plain hard fact often lands harder with no metaphor at all. Imagery can cushion exactly the blow you wanted to land.",
      },
      {
        type: "concept",
        heading: "When to go bare",
        body: [
          "A death, a confession, a single stark piece of information often works better stated flatly than dressed in comparison. Imagery gently redirects the reader's attention onto the comparison itself — which is the wrong move when you want their attention to stay entirely on the bare fact.",
          "The bigger and heavier the moment, the more you should consider plainness. The reader doesn't need help feeling a death; they need you to get out of the way.",
        ],
      },
      {
        type: "compare",
        heading: "Adorned vs. bare",
        left: {
          label: "Reaching for imagery",
          lines: [
            "The news settled over him like a heavy grey blanket, smothering, cold as a winter lake, pulling him down into some dark water.",
          ],
        },
        right: {
          label: "Bare",
          lines: [
            "The doctor said six weeks. He nodded, as if six weeks were a normal thing to say.",
          ],
        },
        caption: "The stacked metaphors on the left actually distance us from the grief — we're watching the comparisons, not the man. The bare right-hand version, with one small human gesture, hits far harder precisely because nothing stands between us and it.",
      },
      {
        type: "concept",
        heading: "The stacking tell",
        body: [
          "A reliable sign a metaphor isn't working: you find yourself stacking two or three comparisons for the same feeling, hoping one will land. That instinct to keep trying different images usually means none of them is right — and the moment may just want plain language.",
          "One clean metaphor or none. If you're piling them up, stop and ask whether the literal version would hit harder. It often will.",
        ],
      },
      {
        type: "concept",
        heading: "Restraint is the harder skill",
        body: [
          "Recognizing when a moment doesn't need a metaphor is itself a craft skill — often harder to develop than generating metaphors, since most writing instruction pushes toward more imagery, not less. Letting go of a comparison isn't a failure of imagination; it's a sign of control.",
          "The mature writer trusts plainness where plainness is stronger. That confidence — to leave a hard moment bare — is what separates controlled writing from decorated writing.",
        ],
      },
      {
        type: "recap",
        heading: "What to carry with you",
        points: [
          "Not every idea needs a metaphor; plain is sometimes strongest.",
          "Go bare for the heaviest moments — death, confession, hard facts.",
          "Stacking two or three metaphors means none is working.",
          "Restraint is a harder, more mature skill than generating imagery.",
        ],
      },
      {
        type: "tryit",
        heading: "Your turn",
        prompt: "Find a place where you reached for a metaphor out of habit, especially a heavy moment. Write the plain, literal version instead — and decide honestly which one hits harder.",
      },
    ],
  },
}

// Returns a lesson's rich blocks if authored, else null (caller falls back to
// the legacy paragraphs/tryIt renderer for lessons not yet upgraded).
export function getLessonBlocks(lessonId) {
  return lessonContent[lessonId] || null
}

// ---------------------------------------------------------------------------
// Daily-session generation: the "Today" session is drawn from the lessons,
// in curriculum order, skipping any already completed. Each lesson's blocks
// are mapped into the 3-step session shape (read → example → write prompt).
// ---------------------------------------------------------------------------

// Order the daily session walks through, per genre.
export const SESSION_ORDER = {
  poem: ['pf-1', 'pf-2', 'pf-3', 'pf-4', 'pf-5', 'pf-6', 'pf-7', 'pf-8', 'pf-9', 'pf-10', 'im-1', 'im-2', 'im-3', 'im-4', 'im-5', 'im-6'],
  story: ['ssc-1', 'ssc-2', 'ssc-3', 'ssc-4', 'ssc-5', 'ssc-6', 'ssc-7', 'ssc-8'],
}

function lineText(l) {
  return typeof l === 'string' ? l : l.text
}
function lineMark(l) {
  return typeof l === 'string' ? null : l.mark
}

// First lesson in genre order that isn't in doneIds; null when all are done.
export function pickTodayLessonId(doneIds, genre) {
  const order = SESSION_ORDER[genre] || SESSION_ORDER.poem
  return order.find((id) => !doneIds.has(id)) || null
}

// Maps one lesson's rich blocks into the { lesson, example, write } session shape
// the three session screens already consume.
export function buildSessionFromLesson(lessonId, genre) {
  const lesson = lessonContent[lessonId]
  if (!lesson) return null
  const blocks = lesson.blocks
  const concepts = blocks.filter((b) => b.type === 'concept')
  const example = blocks.find((b) => b.type === 'example')
  const compare = blocks.find((b) => b.type === 'compare')
  const callout = blocks.find((b) => b.type === 'callout')
  const tryit = blocks.find((b) => b.type === 'tryit')

  // read-step paragraphs: first one or two concepts, capped at 3 paragraphs
  let paragraphs = []
  if (concepts[0]) paragraphs = paragraphs.concat(concepts[0].body)
  if (paragraphs.length < 2 && concepts[1]) paragraphs = paragraphs.concat(concepts[1].body)
  paragraphs = paragraphs.slice(0, 3)

  // "notice" callout on the read step — prefer a poem line with an accent mark,
  // else a punchy callout, else the last line of an example/compare.
  let noticeLabel = 'Notice'
  let noticeLines = []
  let noticeHighlight = ''
  const markedBlock =
    example && example.lines.some(lineMark)
      ? { heading: example.heading, lines: example.lines }
      : compare && compare.right.lines.some(lineMark)
        ? { heading: compare.heading, lines: compare.right.lines }
        : null
  if (markedBlock) {
    noticeLabel = markedBlock.heading || 'Notice'
    const lines = markedBlock.lines
    const idx = lines.findIndex(lineMark)
    noticeHighlight = lineMark(lines[idx])
    noticeLines = lines
      .slice(0, idx)
      .filter((l) => lineText(l) !== '')
      .map(lineText)
      .slice(-3)
  } else if (callout) {
    noticeLabel = callout.label || 'Key idea'
    noticeHighlight = callout.text
  } else if (example || compare) {
    const src = example ? example.lines : compare.right.lines
    const nonEmpty = src.filter((l) => lineText(l) !== '')
    noticeHighlight = lineText(nonEmpty[nonEmpty.length - 1])
    noticeLines = nonEmpty.slice(0, -1).map(lineText).slice(-3)
  }

  // example step (gradient card)
  const exTitle = genre === 'poem' ? "Today's poem" : "Today's example"
  let ex
  if (example) {
    ex = { title: exTitle, poemTitle: example.heading, lines: example.lines.map(lineText), note: example.caption }
  } else if (compare) {
    ex = { title: exTitle, poemTitle: compare.heading, lines: compare.right.lines.map(lineText), note: compare.caption }
  } else {
    ex = { title: 'The key idea', poemTitle: lesson.title, lines: callout ? [callout.text] : [], note: concepts[0] ? concepts[0].body[0] : '' }
  }

  return {
    lessonId,
    eyebrow: genre === 'poem' ? 'Poetry' : 'Fiction',
    xp: 50,
    title: lesson.title,
    lessonStepLabel: concepts[0] ? concepts[0].heading : lesson.title,
    lesson: {
      chip: 'Lesson',
      paragraphs,
      noticeLabel,
      noticeLines,
      noticeHighlight,
    },
    example: ex,
    write: {
      promptLabel: 'Prompt',
      prompt: tryit ? tryit.prompt : 'Write freely for a few minutes, using today\'s idea.',
    },
  }
}
