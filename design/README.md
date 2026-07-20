# Handoff: Writing Practice PWA ("Daybreak")

## Overview
A warm, encouraging mobile app that helps a writer improve through **daily practice + structured learning**. The core loop is a **Today** ritual the user picks each day (Poem or Story): read a short lesson → study an example → write from a prompt. Around that sit **Learn** (courses), **Practice** (prompts/drills/sprints), **Progress** (streaks, XP, skills), and **You** (profile + portfolio). Motivation is gamified but gentle: streaks, levels, XP, skills mastered.

Target: **installable PWA, mobile-first, offline-capable.** No backend required for v1 (all state local). AI feedback is an optional later add.

## About the Design Files
The file `Writing App.dc.html` in this bundle is a **design reference created in HTML** — a high-fidelity prototype showing the intended look and behavior. **It is not production code to copy verbatim.** Your task is to **recreate these designs in a real app environment.** If the target project has no codebase yet, build it as a **PWA** with a modern framework of your choice (React + Vite + a service worker/manifest is a good default). Reproduce the visuals pixel-for-pixel using that stack's patterns; fill in real content; wire real navigation and local persistence.

**⚠ Do not redesign.** The visual design is final and locked. Do not change colors, fonts, spacing, radii, shadows, icons, or layout. Do not add screens, tabs, or gamification not described here. If a visual choice is ever ambiguous, match the HTML file exactly rather than inventing.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and interactions. Recreate pixel-perfectly. The phone bezel, notch, status bar (`9:41 ✦ ▮▮▮`), and the `1b`/`2a` corner badges in the prototype are **mockup scaffolding only** — do not build them (except a real OS status bar, which the device provides). Build the screen content inside the bezel.

## Design Tokens

### Color (authored in OKLCH — keep OKLCH; hex fallbacks provided)
| Token | OKLCH | ~Hex | Use |
|---|---|---|---|
| Accent | `oklch(0.72 0.15 40)` | `#c96f3a` | Primary buttons, active states, accent text |
| Accent gradient | `linear-gradient(135deg, oklch(0.78 0.13 65), oklch(0.72 0.15 40))` | `#d98a4a → #c96f3a` | Headers, hero cards, primary CTAs, avatar bg |
| Accent tint | `oklch(0.95 0.04 55)` | `#f6e6d8` | Chip backgrounds, icon tiles, selected pills |
| Canvas | `oklch(0.985 0.012 70)` | `#fdfaf6` | Screen background |
| Card | `#ffffff` | `#ffffff` | Cards, tab bar, sheets |
| Card border | `oklch(0.94 0.02 65)` | `#ece4da` | 1px card/hairline borders |
| Ink (headings) | `oklch(0.26–0.32 0.03 55)` | `#38302a`–`#443b34` | Titles, primary text |
| Muted | `oklch(0.55 0.03 55)` | `#8a7e73` | Secondary text, labels |
| Tab inactive | `oklch(0.60 0.02 55)` | `#948b81` | Inactive tab icons |
| Prompt-serif ink | `oklch(0.28–0.30 0.03 55)` | Newsreader quote/prompt text |

Only ONE accent hue family (warm terracotta/amber). Do not introduce a second accent color.

### Typography (Google Fonts)
| Family | Role | Weights |
|---|---|---|
| **Bricolage Grotesque** | Headings, screen titles, card titles, big numbers | 500/600/700 |
| **Karla** | UI, body, buttons, labels, nav | 400/500/600/700 |
| **Newsreader** (serif) | The writing itself, prompts, poem/story titles, example quotes | 400/500 |
| **Spline Sans Mono** | Small uppercase eyebrow labels (e.g. `POETRY · SESSION`, dates) | 400/500/600 |

Type scale in use: screen title ~28px/700 Bricolage; card title 19–22px/600 Bricolage; body 14–15.5px Karla; eyebrow 11–12px Spline Mono uppercase letter-spacing 0.06–0.1em; big stat numbers 22–26px Bricolage 700; writing/serif 17–18px Newsreader line-height 1.7–2.

### Shape & elevation
- Radii: cards 18–24px; pills/chips 99px; icon tiles 12–14px; buttons 14–16px; hero cards 22px.
- Shadow (cards/CTAs): `0 10px 30px -14px rgba(120,60,20,0.35)`; button: `0 8px 18px -8px oklch(0.6 0.15 40)`.
- Card borders: `1px solid oklch(0.94 0.02 65)`.
- Spacing: screen h-padding 20–24px; card padding 16–22px; gap between cards 11–12px.

### Icons
All icons are **inline SVG line icons** already in `Writing App.dc.html` — 1.7–1.9 stroke width, round caps/joins, `currentColor`. **Reuse these exact SVGs.** No emoji, no icon font, no library substitutes. Key glyphs: feather (poem), open book (story/learn), pencil-on-page (practice/write), bar chart (progress), person (you), sun-rays (today), clock (timer), sparkle-wand (coach tip), flame (streak), check (completed).

## Screens / Views

### 1. Today (home) — tab "Today"
**Purpose:** Land here daily; see greeting + streak + level, choose today's genre, start the guided session, or revisit yesterday.
**Layout (top→bottom):**
- **Hero band** (accent gradient, radius 26, margin 16/18): `Hi Ava! ☀` (Bricolage 26/700) + subtitle "Ready for today's writing?"; right side a **streak ring** (64px circle, translucent white fill, 3px white border, "6 / DAYS"). Below: **XP bar** — label row `Level 4 · Storyteller` / `320 / 500 XP`, then 8px white-on-translucent progress bar at 64%.
- **Genre chooser:** heading "Today I want to write…"; two equal pills (Poem selected = accent fill white text w/ shadow; Story = tint bg). **Poem and Story only — no Fiction.** Feather icon on Poem, book icon on Story, 22px, label 13/700.
- **Today's session card** (white, radius 24, card shadow): top row eyebrow `Today's session · Poetry · ~15 min` (Spline Mono, accent) + `+50 XP` pill; title "Painting with line breaks" (Bricolage 22/600); then a **3-step numbered agenda**: step 1 = filled accent circle "1" + "Read the lesson / 2 min · line breaks & pacing"; steps 2 & 3 = outline circle + title + subtitle ("Study today's poem", "Write from a prompt / ~8 min · your turn"); CTA "Begin session →" (accent, white, radius 16, button shadow).
- **Revisit yesterday card:** white, icon tile (↻) + "FINISH YESTERDAY" eyebrow + serif title "Rain on the tin roof" + → chevron.
- Bottom: **tab bar**.

### 2a. Session · Lesson (step 1 of 3)
**Purpose:** Read a 2-min craft lesson.
**Layout:** back-arrow tile + progress header (`POETRY · SESSION` / `Step 1 of 3`, 6px bar at 33% accent); "Lesson" chip (feather icon); title "Painting with line breaks" (Bricolage 27/700); two body paragraphs (Karla 15.5/1.7); a **"Notice the difference" callout** (white card, 3px left accent border) containing a serif example with one word in accent. Sticky bottom CTA over a canvas-gradient fade: "Next: study a poem →".

### 2b. Session · Write (step 3 of 3)
**Purpose:** Write from the prompt with a running timer.
**Layout:** header = back tile + centered "Your turn / Step 3 of 3" + **timer pill** (clock icon `07:42`, tint bg accent text); **prompt card** (accent gradient, white) "PROMPT" eyebrow + serif prompt; **editor area** = serif text (Newsreader 18/2) with a blinking accent caret; sticky bottom bar (white, top border): meta row "18 words · 4 lines" + "Coach tip" chip (sparkle-wand icon); actions row = square save/draft icon button (page icon) + primary "Finish & get feedback" (accent).

### 2c. Learn — tab "Learn"
**Purpose:** Structured courses with modules & progress.
**Layout:** eyebrow "Learn" + title "Courses & craft"; **Continue card** (accent gradient): "CONTINUE · POETRY FOUNDATIONS" / "Module 3 · Line & rhythm" / white progress bar 60% / "6 of 10 lessons" + "Resume →". Section "All tracks" → list of track rows (white cards, icon tile + title + thin progress bar + status): *Poetry Foundations* (6/10, in progress), *Short Story Craft* (8 lessons, not started, "Start"), *Imagery & Metaphor* (6 lessons, "Start"), *Character & Voice* (**locked** — dimmed, lock icon, "Unlocks at Level 6").

### 2d. Practice — tab "Practice"
**Purpose:** Warm-ups any time.
**Layout:** eyebrow "Practice" + title "Warm up, any time"; **segmented control** Prompts / Drills / Sprints (Prompts active = accent); **Freewrite card** (white, dashed accent border, centered): pencil icon circle + "Freewrite" + "Blank page, no rules. Just go." + "Start blank" button. Section "Today's prompts" → cards each with a category chip + time estimate + serif prompt text: Poem chip (accent-fill) "Describe a color to someone who has never seen." (3–5 min); Story chip (tint) "Two strangers are stuck in a lift. One is lying." (10 min); "Skill drill" chip "Show, don't tell: convey grief without the word 'sad'." (5 min).

### 2e. Progress — tab "Progress"
**Purpose:** See growth.
**Layout:** eyebrow "Progress" + title "You're growing"; **Level card** (accent gradient): "Level 4 / Storyteller" + 56px ring "4"; white progress bar 64%; "320 / 500 XP to Level 5". **Streak card** (white): flame icon + "6-day streak" + "Best: 14"; a 7-dot **week strip** — Mon–Fri filled accent w/ check, Sat = dashed accent ring (today), Sun = empty. Section "Skills mastered" → rows with a 5-dot rating (filled = accent): Line breaks 4/5, Imagery 3/5, Dialogue 2/5. Then 3 **stat tiles**: 12 Pieces · 8.4k Words · 18 Lessons.

### 2f. You — tab "You"
**Purpose:** Profile + portfolio.
**Layout:** **Profile header** bleeds under status bar (accent gradient): avatar "A" (58px) + "Ava Mercer" + "Storyteller · Level 4" + settings gear. Row "Your portfolio · 12 pieces"; filter pills All / Poems / Stories (All active). Portfolio list (white cards, icon tile + serif title + category eyebrow + status; finished items show accent check): "Rain on the tin roof" (Poem · Draft · Jul 19), "The last train home" (Story · Finished · Jul 12), "Salt" (Poem · Finished · Jul 8).

## Interactions & Behavior
- **Tab bar** (persistent, 5 tabs): Today · Learn · Practice · Progress · You. Active tab uses accent color; inactive `oklch(0.60 0.02 55)`. Routes between the five top-level screens.
- **Genre chooser:** tapping Poem/Story sets today's genre and re-themes the session card's content accordingly; selected pill = accent fill.
- **Begin session →** enters the guided flow: Lesson (2a) → Study example → Write (2b). Progress header bar advances 33% → 66% → 100%. "Finish & get feedback" completes the session, awards XP, increments streak, saves the piece to portfolio.
- **Write screen:** live word/line count; running timer; caret blink; save-draft button persists WIP.
- **Learn:** track row → module list → lesson. Locked track shows lock + "Unlocks at Level N" and is non-tappable.
- **Practice:** segmented control switches Prompts/Drills/Sprints lists; tapping a prompt opens the write editor (same as 2b) seeded with that prompt. Freewrite opens a blank editor.
- **Portfolio:** filter pills filter by All/Poems/Stories; tapping a piece opens it (read/continue editing).
- Transitions: gentle (150–250ms ease); no flashy motion. Buttons have a pressed state (slight scale/opacity).

## State Management
Persist locally (localStorage / IndexedDB — offline-first):
- `profile`: name, level, title, xp, xpToNext.
- `streak`: current, best, per-day completion for the week.
- `todayGenre`: 'poem' | 'story'.
- `sessionProgress`: step index, per-step completion for today.
- `skills`: { name → 0–5 }.
- `portfolio`: [{ id, title, genre, status:'draft'|'finished', body, createdAt, updatedAt }].
- `courses`: [{ id, title, lessons:[{done}], unlockLevel }].
- `stats`: pieces, words, lessonsDone (derivable from above).
Completing a session mutates streak, xp (+50), portfolio, and stats. Level up when xp ≥ xpToNext.

## PWA Requirements
- `manifest.json`: name "Daybreak — Writing Practice", theme/background color `#c96f3a` / `#fdfaf6`, standalone display, portrait, maskable app icon in the warm accent.
- Service worker: cache app shell + fonts for offline; app must fully work offline (all v1 features are local).
- Installable; respects safe-area insets (the design already reserves bottom padding for the home indicator).

## Assets
- **Icons:** all inline SVG in `Writing App.dc.html` — extract and reuse. No external icon set.
- **Fonts:** Google Fonts — Bricolage Grotesque, Karla, Newsreader, Spline Sans Mono (self-host for offline PWA).
- **Images:** none in v1 (avatar is an initial on a gradient). No photography required.
- **App icon:** design a simple mark on the accent gradient (e.g. a feather) — match the app's icon style.

## Files
- `Writing App.dc.html` — the high-fidelity design. Screens are labeled sections: **1b** Today, **2a** Lesson, **2b** Write, **2c** Learn, **2d** Practice, **2e** Progress, **2f** You. **Ignore turn-1 sections `1a` and `1c`** — those are rejected alternate concepts. Copy exact style values from this file's markup.

## Definition of Done
Side-by-side, each built screen is indistinguishable from its section in the design file (minus the phone bezel/status bar/badges). Content is real, navigation and local persistence work, and it installs and runs offline as a PWA. When unsure about any pixel, match the file — never invent.
