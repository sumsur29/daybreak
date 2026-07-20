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
}

// Returns a lesson's rich blocks if authored, else null (caller falls back to
// the legacy paragraphs/tryIt renderer for lessons not yet upgraded).
export function getLessonBlocks(lessonId) {
  return lessonContent[lessonId] || null
}
