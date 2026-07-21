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
    id: "poetry-foundations",
    title: "Poetry Foundations",
    total: 10,
    done: 0,
    unlockLevel: null,
    lessons: [
      {
        id: "pf-1",
        title: "What makes a line a line",
        done: false,
        paragraphs: [
          "In prose, a line ends wherever the page margin says to — it's a typographic accident. In a poem, the poet decides where every single line ends, and that decision is never neutral. A line break is punctuation the poet invented for this one poem: it tells the reader where to pause, what to hold onto, and what to carry forward into the silence before the next line begins.",
          "Poets talk about two basic kinds of line break. An end-stopped line finishes on a natural pause — a period, comma, or the end of a phrase — and feels settled, complete, certain. An enjambed line breaks in the middle of a phrase or sentence, so the meaning spills over into the next line before it resolves. Neither is better; they do different emotional work.",
          "End-stopped lines suit a poem that wants to feel composed, reflective, sure of itself — each line arrives, settles, and the next one begins fresh. Enjambment suits urgency, restlessness, or ambiguity — the reader's eye is pulled forward before the thought is finished, so the poem feels like it's still happening rather than being reported after the fact.",
          "A useful trick: write the poem first as a block of ordinary prose, with no line breaks at all. Then go back and decide, sentence by sentence, where you want the reader to breathe. You'll often find the \"natural\" break isn't at the end of a clause — it's at the word you most want the reader to sit with, even for a second.",
        ],
        tryIt: "Take a paragraph of your own prose — even a text message — and break it into five short lines. Read it back. Where did the pauses change what it meant?",
      },
      {
        id: "pf-2",
        title: "Sound and rhythm",
        done: false,
        paragraphs: [
          "A poem is written to be heard, even when it's read in total silence — your inner ear still processes the sounds. Word choice carries a beat before it carries meaning: hard consonants (k, t, g) land like footsteps; soft ones (l, m, s, w) blur and glide. A line full of hard sounds feels clipped and urgent even before you know what it says.",
          "You don't need to scan meter or count syllables to write musically — most working poets today don't. What matters is noticing where a line trips over itself. If you stumble reading it aloud, a reader will too, even silently, because their inner voice hits the same snag yours did.",
          "Repetition is rhythm's simplest tool: repeating a sound, a word, or a sentence structure builds a kind of gravity, a sense that the poem is circling something it can't say directly. Used sparingly, it's incantatory. Used carelessly, it just sounds like a stutter — the difference is almost always intention.",
          "Vowels carry duration. Long vowel sounds (\"moon,\" \"stone\") slow a line down and let it linger; short, clipped vowels (\"bit,\" \"tap\") speed it up. If a line feels rushed when you wanted it contemplative, check whether you loaded it with short vowels and hard stops by accident.",
        ],
        tryIt: "Read your last poem out loud, slowly. Circle every word your tongue caught on. Those are usually the words worth revising first — not because they're wrong, but because sound is telling you something meaning alone can't.",
      },
      {
        id: "pf-3",
        title: "Line breaks and pacing",
        done: false,
        paragraphs: [
          "A line break is a speed control. End a line on a strong, complete word and it lands with weight — the reader pauses, absorbs it, moves on deliberately. Break mid-phrase and the sentence spills forward with momentum, pulling the reader into the next line before they've had time to settle.",
          "Where you break relative to the sentence changes the tension, too. Break early — before the sentence has said much — and you're withholding, making the reader wait for the rest of the thought. Break late, letting a line run long and breathless, and the release feels sudden, almost overflowing.",
          "The end of a line is also the most exposed position in a poem — a word placed there, surrounded by white space, gets weight it wouldn't get buried mid-sentence. Poets sometimes engineer a line break specifically to land an ordinary word in that spotlight and make it feel loaded.",
          "Pacing isn't only about individual lines — it's about the whole poem's shape. A poem that breaks every line in exactly the same rhythmic place starts to feel mechanical, like a metronome. Varying your break pattern — some short, sudden lines next to some that run long — keeps a reader's attention alert rather than lulled.",
        ],
        tryIt: "Take a poem you've written with short, clipped lines and rewrite it with the opposite pacing — let every line run long and breathless. Which version actually serves the feeling you were going for?",
      },
      {
        id: "pf-4",
        title: "White space as punctuation",
        done: false,
        paragraphs: [
          "The blank space around a poem isn't empty — it's part of the composition, the way silence is part of music. A stanza break is a held breath, a beat where the poem pointedly says nothing. A single word alone on its own line, surrounded by white space, commands attention no sentence buried in a paragraph ever could.",
          "New poets often fear white space and fill every line to the margin, worried the poem looks unfinished or thin if it doesn't. But a poem that trusts its gaps is usually doing more, not less — it's letting the reader's own thoughts move into the silence instead of over-explaining.",
          "Stanza breaks in particular function like scene changes or paragraph breaks in prose, but with more weight: a stanza break signals a shift in time, tone, image, or logic, and asks the reader to actively make the leap themselves rather than being led across it by a transition sentence.",
          "Indentation and irregular spacing on the page are white space tools too — some poets stagger lines across the page to control exactly how fast the eye moves, or to visually mimic what the poem is describing (a falling object, a fracture, a widening gap between two people).",
        ],
        tryIt: "Find the single most important line in something you've written. Give it its own stanza — completely alone, surrounded by space — and read the poem again. Does the isolation earn its weight, or does it now feel exposed?",
      },
      {
        id: "pf-5",
        title: "Imagery over statement",
        done: false,
        paragraphs: [
          "\"I was sad\" tells a reader what to feel. It's accurate, and it's also inert — there's nothing for the reader to do with it except believe you. A concrete image does something different: it hands the reader a physical detail and lets them arrive at the feeling themselves, which makes the emotion theirs, not just reported to them.",
          "This is the oldest advice in writing — show, don't tell — but it's easy to underestimate how literal it should be. Instead of naming an abstraction (sadness, love, fear, hope), describe an object, gesture, or sensory detail that a person feeling that way would actually notice or do.",
          "The image doesn't need to explain itself. \"She left the porch light on for a week\" never uses the word grief, loneliness, or hope — but a reader assembles all three from one small, specific action. That gap between the image and the feeling it implies is where a poem's real power lives.",
          "This doesn't mean banning every abstract word forever — sometimes a poem earns a direct emotional statement precisely because it's been built on concrete images up to that point, so the one abstraction lands like a confession. The problem is starting there, not arriving there.",
        ],
        tryIt: "Find a line where you named an emotion directly — sad, angry, happy, afraid. Replace it with one concrete image that implies the same feeling without naming it.",
      },
      {
        id: "pf-6",
        title: "Metaphor vs. simile",
        done: false,
        paragraphs: [
          "A simile says two things are alike, using \"like\" or \"as\": her voice was like gravel. A metaphor skips the comparison and simply claims they're the same thing: her voice was gravel. That small grammatical difference changes how confidently the line speaks — simile explains itself; metaphor commits.",
          "Because a simile signals \"this is a comparison,\" it reads as more explanatory and gentler — it holds the reader's hand across the leap. A metaphor asks the reader to make that leap unassisted, which can feel bolder, stranger, and more immediate, but also riskier if the connection isn't clear enough to land.",
          "Neither is a lesser tool. Similes are often better for comparisons that are unusual or need a beat to process — the \"like\" gives the reader a half-second to catch up. Metaphors work best when the connection is intuitive enough that spelling it out would actually slow the poem down.",
          "A quick diagnostic: take any simile in your draft and mentally delete the \"like\" or \"as.\" If the resulting metaphor still makes sense and feels more powerful, the simile was probably playing it safe. If it collapses into confusion, the simile was doing necessary work and should stay.",
        ],
        tryIt: "Take a simile from something you've written and cut the \"like\" or \"as\" to force it into a metaphor. Does the bolder version hold up, or did the comparison need the extra scaffolding?",
      },
      {
        id: "pf-7",
        title: "Form: the sonnet",
        done: false,
        paragraphs: [
          "The sonnet's defining feature isn't really its fourteen lines or its rhyme scheme — it's the turn, traditionally called the volta. Somewhere around line 9 (in the Italian/Petrarchan form) or in the closing couplet (in the English/Shakespearean form), the poem pivots: it complicates, reverses, questions, or resolves the idea it spent the opening lines building.",
          "That structure — build an idea, then turn against it — is why the sonnet has survived for seven centuries across wildly different languages and subjects. The tight length forces compression: there's no room to wander, so every line has to earn its place before the poem even gets to its turn.",
          "You can borrow the sonnet's architecture without touching its rhyme scheme or meter, and many contemporary poets do exactly that. Write roughly two-thirds of a poem establishing a feeling, image, or argument — then use the final third to complicate or reverse it. The turn is what makes a short poem feel like it went somewhere.",
          "The risk of ignoring form entirely is that a poem can drift without ever arriving anywhere — it observes, it describes, and then it just stops. The sonnet's turn is a reminder that even a poem without rhyme benefits from a moment where it changes its own mind.",
        ],
        tryIt: "Write eight lines building a single idea or image. Then write four more lines that complicate, question, or reverse what you just built. Notice what the turn does to the whole poem's weight.",
      },
      {
        id: "pf-8",
        title: "Form: free verse",
        done: false,
        paragraphs: [
          "Free verse drops fixed meter and consistent rhyme, but \"free\" is misleading — it doesn't mean unstructured. The poet still fully controls line length, stanza shape, rhythm, and where the breaks fall; there's just no inherited pattern doing that work for you automatically.",
          "This is exactly why free verse is harder to write well than it looks. A sonnet's form quietly makes some decisions for you — how long the poem is, roughly where the turn goes. Free verse strips that scaffolding away, so every choice is fully exposed and has to be justified by the poem itself.",
          "Because there's no external form to fall back on, free verse poets often build their own internal logic instead — a recurring image, a consistent line length that suddenly breaks for emphasis, a stanza pattern that shifts when the poem's subject shifts. The structure is invented fresh for each poem, but it's still structure.",
          "A common beginner mistake is writing free verse that's really just prose with arbitrary line breaks — the lines aren't doing any of the pacing or emphasis work discussed in the line-break lessons, they're just wherever the writer happened to stop. Free verse still needs every line break to be a decision.",
        ],
        tryIt: "Look at the line lengths across a free verse poem you've written. For each one, ask: did I choose this length on purpose, or is it just where the sentence ran out of room?",
      },
      {
        id: "pf-9",
        title: "Reading your work aloud",
        done: false,
        paragraphs: [
          "Your eye skips over problems your mouth won't let you get away with. A phrase that reads fine silently — because your brain fills in the intended rhythm — will trip you up out loud if the actual words don't support that rhythm. Reading aloud is the fastest, most honest edit available to any writer.",
          "Pay attention to where you naturally pause when reading versus where your line breaks force a pause. If they don't line up — if you keep running through a break because the sentence wants to continue, or stopping mid-line because the phrase demands it — the line break may be fighting the poem's real rhythm instead of supporting it.",
          "Reading aloud also exposes accidental repetition. It's easy to reuse a word or sentence structure twice in a poem without noticing on the page, especially in revision when you're focused on one section at a time. Your ear catches an echo your eye reads right past.",
          "If you can, record yourself reading the poem and listen back later, once some distance has passed. Hearing your own voice read your own words, played back, creates just enough separation to hear the poem the way a stranger would — which is closer to how an actual reader will experience it.",
        ],
        tryIt: "Record yourself reading a finished poem, even just on your phone. Listen back and mark every place you stumbled, slowed down unintentionally, or ran out of breath in a spot that surprised you.",
      },
      {
        id: "pf-10",
        title: "Revision as re-seeing",
        done: false,
        paragraphs: [
          "The word \"revision\" literally means to see again — not to fix typos or swap a few words, but to look at the whole poem as though someone else wrote it, and ask honestly what it's actually doing versus what you intended it to do. Those two things are rarely identical on a first draft.",
          "A useful test: read the poem and, for each line, ask whether it's showing something or explaining something. Explaining lines are usually the first ones to cut, especially if they're sitting right next to an image that's already doing the same work more powerfully.",
          "The best cuts in revision usually aren't the weak lines — weak lines are easy to spot and easy to fix. The harder, more valuable cuts are the lines that exist only to explain a stronger line nearby. If an image is doing its job, it doesn't need a sentence next to it clarifying what it means.",
          "Give a draft time before you revise it — even a day helps. A poem written an hour ago is still full of the intention in your head, which makes it nearly impossible to see what's actually on the page instead of what you meant to put there.",
        ],
        tryIt: "Pick your favorite line in a recent piece. Now find the line most likely to be explaining or justifying it. Cut that second line entirely and read the poem again — what changes?",
      },
    ],
  },
  {
    id: "short-story-craft",
    title: "Short Story Craft",
    total: 8,
    done: 0,
    unlockLevel: null,
    lessons: [
      {
        id: "ssc-1",
        title: "Starting mid-scene",
        done: false,
        paragraphs: [
          "A story that opens with backstory — who someone is, how they got here, what led to this moment — asks a reader for patience before it's earned any. Opening mid-scene, in the middle of an action already underway, asks for none: the reader is dropped straight into motion and has to catch up, which is a far stickier kind of curiosity than being told what's coming.",
          "This technique is often called starting in medias res — literally, \"into the middle of things.\" It doesn't mean skipping backstory forever, just delaying it. You can fold in the \"why\" gradually, once the reader is already invested in the \"what,\" rather than front-loading every piece of context before anything happens.",
          "A practical benefit beyond pure drama: entering mid-scene forces you to cut throat-clearing — the paragraph where a character wakes up, has coffee, and thinks about their day before the actual story starts. That paragraph almost never survives a strong edit anyway, so starting past it saves you the trouble of writing it just to delete it later.",
          "The risk is disorientation without intrigue — if the reader has genuinely no idea what's happening and no reason to want to find out, mid-scene openings fail. The fix isn't to add explanation, it's to make sure the scene itself contains a clear, physical stake: someone wants something, right now, and something is in the way.",
        ],
        tryIt: "Take your story's current opening paragraph and delete it entirely. Start with what was originally your second paragraph. Read both openings back to back — which one actually makes you want to keep reading?",
      },
      {
        id: "ssc-2",
        title: "Building a single scene",
        done: false,
        paragraphs: [
          "A scene is not a summary of events — it's one continuous moment, in one place, unfolding close to the pace a character would actually experience it. Summary compresses time and tells the reader what happened; scene slows down and lets them watch it happen, in something close to real time.",
          "The clearest signal you've left scene and entered summary is a phrase like \"over the next few days\" or \"weeks went by.\" That's not a failure — summary is necessary for bridging the gaps between moments that matter — but the moments that actually carry the story's weight deserve to be rendered as full scenes, not compressed past.",
          "A well-built scene usually has its own small shape: it opens with a character wanting something, moves through some obstacle or tension, and closes on a shift — something is different by the end of the scene than it was at the start, even if the difference is small.",
          "There's also a middle option between full scene and pure summary sometimes called a half-scene: mostly summary, but pausing briefly for one vivid, dramatized beat — a scrap of dialogue, one sensory detail — before pulling back out to summary again. It's useful when a moment matters some, but not enough to earn a full scene.",
        ],
        tryIt: "Find a sentence in your draft that compresses time (\"later that week…\", \"after a few days…\"). Expand just that moment into a real scene — dialogue, physical detail, present-tense unfolding — even if it's only a paragraph long.",
      },
      {
        id: "ssc-3",
        title: "Dialogue that carries plot",
        done: false,
        paragraphs: [
          "Dialogue that only exchanges information — \"How are you?\" \"Fine, you?\" — is dead weight unless something else is happening underneath it. Strong dialogue does at least two jobs simultaneously: it reveals character through how a line is said, not just what it says, while something in the scene is also shifting or being decided.",
          "People rarely say exactly what they mean, especially in moments of real tension. Subtext — what's implied but not stated outright — usually carries more weight than the literal words on the page. A character who changes the subject when asked something direct is telling you more than one who answers honestly.",
          "Dialogue also has rhythm the way poetry does. Real speech is full of interruption, fragments, and things left unfinished. Overly polished, grammatically complete dialogue often reads as stiff or artificial precisely because real people rarely talk in complete, tidy sentences, especially when they're upset, distracted, or hiding something.",
          "One test for whether a line of dialogue is earning its place: could a different character in the story say the exact same line without it feeling wrong? If yes, the dialogue isn't specific enough to that character's voice yet — it's just plot information wearing quotation marks.",
        ],
        tryIt: "Find a line of dialogue where a character states their feelings directly (\"I'm scared,\" \"I love you,\" \"I'm angry with you\"). Rewrite the exchange so they avoid saying it outright, and let the subtext carry it instead.",
      },
      {
        id: "ssc-4",
        title: "The unreliable detail",
        done: false,
        paragraphs: [
          "A single specific, slightly odd detail — a character who reads the ingredients list on every food package before eating, a stopped clock nobody's bothered to fix in three years — tells a reader more about a person or a place than a full paragraph of generic description ever could.",
          "Specificity earns trust. Vague description (\"a nice house,\" \"an ordinary day\") reads as filler, because it could describe almost anything and therefore describes nothing in particular. One precise, unusual detail reads as observation — proof the narrator actually looked closely at this exact world rather than reaching for a stock description.",
          "The best details often aren't the most dramatic ones — they're the small, slightly askew ones that suggest a whole history without explaining it. A character noticing that someone's wedding ring has left a pale line on their finger says more, and more efficiently, than a paragraph about their recent divorce.",
          "This is a place where restraint matters: one or two precise details land; five in a row start to feel like a list, and the reader stops absorbing them individually. Choose the single detail that's doing the most work, and trust it to carry the scene alone.",
        ],
        tryIt: "Find one generic description in your draft (\"a nice house,\" \"a busy street,\" \"an old car\"). Replace it with a single, specific, slightly odd detail instead of a fuller description.",
      },
      {
        id: "ssc-5",
        title: "Endings that land",
        done: false,
        paragraphs: [
          "A satisfying ending is rarely a twist for its own sake — it's usually a shift in understanding that was quietly set up earlier in the story, and is only now paying off. The reader should feel surprised and, on a second thought, inevitable: of course it was going to end this way, even though they didn't see it coming.",
          "If an ending feels unearned when you read it back, the actual problem is almost never the ending itself — it's usually something missing earlier in the piece. The fix is to go back and plant whatever detail, image, or feeling the ending needs in order to pay off convincingly.",
          "Endings that simply stop — where the last sentence just happens to be the last sentence, with no shift in understanding — tend to feel incomplete even if the prose itself is fine. A reader needs to feel that something changed, even subtly: an understanding gained, a question finally answered or deliberately left open on purpose.",
          "Ambiguous endings can absolutely work, but there's a difference between an ending that's ambiguous on purpose — because uncertainty is the actual point of the story — and one that's ambiguous because the writer didn't figure out what the story was building toward. Readers can usually tell the difference.",
        ],
        tryIt: "Look at your story's actual last line. Find one earlier place in the story where you could plant a small echo of it — an image, a word, a gesture — so the ending pays something off instead of arriving cold.",
      },
      {
        id: "ssc-6",
        title: "Point of view",
        done: false,
        paragraphs: [
          "Who's telling the story controls exactly what the reader is allowed to know — and, just as importantly, what they're deliberately kept from knowing. That gap between what the narrator knows and what the reader wants to know is one of fiction's most reliable sources of tension.",
          "First person (\"I\") gives maximum intimacy — the reader sits directly inside one character's thoughts and perceptions — but strictly limits information to whatever that character personally notices, remembers, or chooses to reveal. Everything the reader learns is filtered through one potentially biased, incomplete, or even dishonest narrator.",
          "Third person limited (\"he,\" \"she,\" \"they,\" tracking one character's interiority at a time) keeps a little more distance than first person while still filtering the story through a single perspective. It's the most common point of view in contemporary fiction because it balances intimacy with narrative flexibility.",
          "Third person omniscient goes further, moving freely between multiple characters' thoughts and knowing things no single character could — useful for large casts or complex plots, but riskier: shifting perspective too abruptly, especially within a single scene, can disorient a reader who was just settling into one character's head. A fourth option, sometimes called objective or cinematic POV, reports only what's observable from outside — action and dialogue, no access to anyone's thoughts at all — which creates deliberate distance and lets readers infer everything themselves.",
        ],
        tryIt: "Rewrite one paragraph of your story from a different character's point of view than the one you originally used. What does the new angle reveal that the original hid, and what does it lose?",
      },
      {
        id: "ssc-7",
        title: "Pacing a short story",
        done: false,
        paragraphs: [
          "Pacing isn't fundamentally about speed — it's about proportion. A well-paced story slows down for the moments that matter most and compresses everything that's just transportation between them. A story that moves at exactly the same pace throughout, giving equal weight to every moment, ends up feeling like nothing is especially important.",
          "Scene versus summary is the biggest lever: render pivotal moments as full scenes, in close to real time, and compress the connective tissue between them into brief summary. Too many scenes back to back and a story drags; too much summary and the reader never gets to actually experience anything.",
          "Sentence length is a finer-grained pacing tool within a scene. Short sentences accelerate — they read faster and mimic urgency, almost physically. Longer sentences, with more subordinate clauses, slow the reader down and allow a moment to expand, accumulating detail and feeling rather than rushing past it.",
          "Dialogue affects pace too: quick, clipped exchanges between characters read fast and build tension, while a single long uninterrupted speech slows everything down, for better or worse depending on what the moment needs. If a scene feels sluggish, check whether one character has been talking, uninterrupted, for too long.",
        ],
        tryIt: "Go through your draft and mark each paragraph as either fast or slow. Is that pattern deliberate — matching what each moment needs — or is it just the pace you happened to default to throughout?",
      },
      {
        id: "ssc-8",
        title: "Cutting what doesn't serve it",
        done: false,
        paragraphs: [
          "Every sentence in a short story should be doing at least one job: revealing character, moving the plot forward, or building atmosphere and setting. If a sentence isn't doing any of those three things, it's a strong candidate for cutting, no matter how well-written it is on its own.",
          "Elmore Leonard's famous advice was to leave out the parts readers tend to skip — which in practice usually means the parts that exist for the writer's benefit (explaining, justifying, showing off a nice turn of phrase) rather than the reader's. A sentence you're proud of isn't automatically a sentence the story needs.",
          "Writers tend to protect their favorite lines the hardest during revision, precisely because they're proud of the craft in them — which is exactly why those lines deserve the most scrutiny first, not the least. A gorgeous sentence that isn't doing structural work is still, functionally, a detour.",
          "A useful revision pass: go through a full draft and, for every paragraph, write one word in the margin describing its job (character, plot, mood). If you can't come up with a word, or if two consecutive paragraphs have the same job and could be combined, that's usually where the fat is.",
        ],
        tryIt: "Find the sentence you're proudest of in your current draft. Honestly identify what job it's doing — character, plot, or atmosphere. If you genuinely can't answer, cut it and read the piece again.",
      },
    ],
  },
  {
    id: "imagery-metaphor",
    title: "Imagery & Metaphor",
    total: 6,
    done: 0,
    unlockLevel: null,
    lessons: [
      {
        id: "im-1",
        title: "Concrete over abstract",
        done: false,
        paragraphs: [
          "Abstract words — beauty, loss, freedom, honor, love — name concepts, not things. They have no physical form, which means every reader has to supply their own private idea of what the word means, and those private ideas rarely match. Concrete words name things a reader can actually picture: a chipped mug, a locked gate, a stopped clock.",
          "This is the root of \"show, don't tell.\" Instead of writing that a character felt happy, you describe the physical, sensory reality of that happiness — a grin spreading, a held breath finally released — and let the reader arrive at the word \"happy\" themselves, without you ever having to use it.",
          "Concreteness isn't just a stylistic preference; readers process and remember concrete language more easily than abstract language, because it gives the mind something to actually hold onto. When a line in your own writing feels flat or forgettable, it's very often hiding an abstraction that needs to be swapped for a specific, physical detail instead.",
          "This doesn't mean abstract words are forbidden. A poem or story built almost entirely on concrete images can sometimes earn one direct abstract statement near the end — because by that point, the reader has already felt the feeling through image after image, and naming it lands like a quiet confession rather than an opening claim.",
        ],
        tryIt: "Find an abstract word in your draft — sad, angry, beautiful, afraid. Replace it with one concrete, physical detail that implies the same feeling without naming it directly.",
      },
      {
        id: "im-2",
        title: "The five senses",
        done: false,
        paragraphs: [
          "Most first-draft description leans almost entirely on sight — what a place looks like, what a character's face does. Sound, smell, touch, and taste are chronically underused, which is a missed opportunity, because non-visual senses are often what actually triggers memory and emotion most powerfully in real experience.",
          "Smell in particular is tied unusually closely to memory and emotional recall. A single, well-placed smell detail — bread, gasoline, a specific perfume — can do more emotional work in five words than a paragraph of visual description, because it taps into how memory actually functions rather than just describing a scene.",
          "You don't need to cram all five senses into every passage — that quickly turns into an exhausting checklist rather than a natural detail. Even one unexpected non-visual sense, placed deliberately, can make an entire scene feel suddenly, physically real in a way pure visual description doesn't.",
          "A quick audit: go through a scene you've written and highlight every sensory detail. If everything you highlighted is visual, that's a sign worth noting — not because sight is wrong, but because the scene is missing dimensions a reader's body would actually register if they were really there.",
        ],
        tryIt: "Go through one of your pieces and mark every sensory detail. If they're all visual, add exactly one detail from a different sense — sound, smell, touch, or taste.",
      },
      {
        id: "im-3",
        title: "Extended metaphor",
        done: false,
        paragraphs: [
          "Most metaphors appear once and disappear. An extended metaphor instead runs through an entire piece — a poem, a paragraph, even a whole story — with each return to the image deepening it rather than simply repeating it. Done well, it gives a piece a spine, a single idea everything else quietly orbits.",
          "The technique works because each return to the image can reveal something new about it. If a poem opens by comparing grief to weather, a later line might return to that same weather image but shift it — the storm has passed, or it's changed direction — tracking the poem's emotional movement through the metaphor's own internal logic.",
          "The main risk is strain: if you force the extended metaphor into places where it doesn't naturally fit, just to keep the thread going, it stops feeling organic and starts feeling like a gimmick or a puzzle the writer is solving instead of a feeling the writer is expressing.",
          "A useful test is whether the metaphor's return points feel discovered or engineered. The strongest extended metaphors seem to arise naturally each time, as if the writer couldn't help noticing the connection again — not like a device being dutifully reused to prove the poem has a \"through-line.\"",
        ],
        tryIt: "Take a metaphor from your opening line or paragraph and find one more place later in the piece where it could naturally return — changed slightly, deepened, not just repeated.",
      },
      {
        id: "im-4",
        title: "Avoiding cliché",
        done: false,
        paragraphs: [
          "\"Heart of gold,\" \"time heals all wounds,\" \"butterflies in my stomach\" — these were once genuinely fresh, surprising images. Repetition across generations of writing has worn all the surprise, and most of the meaning, off them. A reader's eye slides right over a cliché without really registering it, because they've seen it too many times to feel it.",
          "The fix isn't to avoid the underlying feeling — nervousness, grief, love are all still worth writing about. The fix is finding your own specific version of the feeling instead of reaching for the pre-packaged phrase everyone already has memorized. What does that nervousness actually feel like, physically, for this exact character, in this exact moment?",
          "Clichés often sneak in during a first draft simply because they're fast — the phrase is already sitting there, fully formed, and reaching for it is easier than inventing something true. That's fine for a first draft. Revision is where you go back and interrogate every phrase that arrived too easily.",
          "A practical test: if a phrase in your draft could have been written by literally anyone, about literally any character, in literally any story — it's probably a cliché, even if it doesn't ring a bell as one immediately. The specific, the odd, the personally observed rarely sound like anyone else's writing.",
        ],
        tryIt: "Find a cliché in your own draft. Ask specifically what caused that feeling in this exact scene, for this exact character — then write that instead of the borrowed phrase.",
      },
      {
        id: "im-5",
        title: "Imagery in dialogue",
        done: false,
        paragraphs: [
          "Characters don't usually speak in polished, poetic imagery the way a narrator might — real speech is rougher, more clipped, less composed. But the comparisons a character does reach for, even offhand ones, still say something real about who they are, what they notice, and what world they come from.",
          "A character who describes fear as being \"like a phone about to ring\" is telling you something different than one who says fear is \"like drowning.\" The first suggests dread of an incoming event, something specific and modern; the second suggests being overwhelmed, submerged, out of control. Neither is more correct — they reveal different people.",
          "The trick is sourcing a character's comparisons from their own world, not yours. A mechanic reaching for a metaphor will likely reach for something mechanical; a nurse might reach for something clinical. Giving every character the same elegant, writerly imagery flattens them into versions of the author instead of distinct people.",
          "This also applies to what characters notice at all. A character's dialogue and internal comparisons reveal their attention — what they'd actually register in a given moment says as much about them as what they say outright, sometimes more.",
        ],
        tryIt: "Give a character a comparison or metaphor drawn specifically from their job, hobby, or background — not a generic, writerly one you'd reach for yourself.",
      },
      {
        id: "im-6",
        title: "When to let go of a metaphor",
        done: false,
        paragraphs: [
          "Not every idea needs a metaphor. Sometimes the plainest, most literal sentence available is the strongest possible choice, and reaching for imagery instead just softens a moment that actually needed to land hard and direct, without any figurative cushioning between the reader and the fact.",
          "A death, a confession, a single stark piece of information often works better stated flatly than dressed in comparison. Imagery has a way of gently reframing the reader's attention onto the comparison itself — which can be exactly the wrong move when you want the reader's attention to stay entirely on the bare fact.",
          "A telling sign that a metaphor isn't working yet: you find yourself stacking two or three different comparisons for the same feeling in the same passage, as if hoping one of them will finally land. That instinct to keep trying different metaphors is usually the writing telling you that none of them are quite right, and the moment might just want plain language instead.",
          "Letting go of a metaphor isn't a failure of craft — recognizing when a moment doesn't need one is itself a craft skill, and often a harder one to develop than generating metaphors in the first place, since most writing instruction pushes toward more imagery rather than teaching restraint.",
        ],
        tryIt: "Find a place in your draft where you reached for a metaphor out of habit rather than necessity. Try the plain, literal version instead and see which one actually hits harder.",
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
    sessionProgress: { step: 0, completedToday: false, practiceDone: false, recap: null },
    skills: blankSkills,
    portfolio: blankPortfolio,
    courses: seedCourses,
    practice: seedPractice,
    stats: blankStats,
    yesterdayPiece: null,
    drafts: {}, // keyed by draft key -> { text, updatedAt }
    savedRecaps: [], // completed-lesson recaps, newest first, for revision
    lastActiveDate: null, // YYYY-MM-DD of last streak-advancing activity
    sessionDay: null, // Daybreak day (6am Dubai) the current session belongs to
  }
}
