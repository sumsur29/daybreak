# Daybreak — Writing Practice PWA

A daily writing-practice app: pick Poem or Story, read a 2-minute lesson, study a worked
example, then write from a prompt. Built from the locked "1b · Daybreak" design direction
(see `design/` for the original handoff).

## Stack
- React + Vite
- react-router-dom (HashRouter — works on any static host, no server rewrites needed)
- vite-plugin-pwa (installable, offline-capable via a generated service worker)
- @fontsource packages for Bricolage Grotesque, Karla, Newsreader, Spline Sans Mono (self-hosted, no network calls)
- Local state only — everything persists to `localStorage`, no backend

## Run it

```bash
npm install
npm run dev       # dev server
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

Open the dev server URL on your phone (same network) or use your browser's device toolbar
to preview at mobile width. To install as an app, build + serve over HTTPS (or localhost)
and use "Add to Home Screen" / the browser's install prompt.

## Structure
- `src/screens/` — one file per screen (Today, session lesson/example/write, Learn,
  course/lesson detail, Practice, Progress, You/portfolio, portfolio item)
- `src/components/` — shared chrome: tab bar, screen wrapper, back button, session header
- `src/icons/Icons.jsx` — the exact line-icon set from the design file
- `src/state/store.jsx` — the local state store (profile, streak, portfolio, courses, etc.)
- `src/data/seed.js` — the initial content (lesson copy, example poem/story, prompts, courses)
- `src/index.css` — design tokens as CSS variables (colors, fonts, shadows)

## Notes on fidelity
Screens 1b (Today), 2a (Lesson), 2b (Write), 2c (Learn), 2d (Practice), 2e (Progress),
and 2f (You/Portfolio) are built to match the handoff pixel-for-pixel — same OKLCH colors,
radii, shadows, and type scale, using the exact inline SVGs from the design file.

Two screens aren't in the original handoff and were extrapolated in the same visual
language, since the interactions describe them but no frame was drawn:
- **Session · Study example** (step 2 of the daily ritual)
- **Course lesson list / individual lesson reading** (under Learn)

"Coach tip" and "Finish & get feedback" are wired to local logic (XP, streak, portfolio,
skills) — there's no AI feedback backend in this v1, matching the handoff's "AI feedback is
an optional later add."
