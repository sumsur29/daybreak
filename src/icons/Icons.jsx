// All icons are line icons matching the locked design: round caps/joins, currentColor,
// stroke-width 1.7–1.9 for content icons, 1.8 for tab bar icons, 2–2.4 for check/arrow marks.

const base = (strokeWidth) => ({
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
})

export function IconMoon({ size = 22, strokeWidth = 1.7 }) {
  // Crescent — used for "Sher"/ghazal (raat, chaand: the ghazal's nocturnal mood).
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5z" />
    </svg>
  )
}

export function IconFeather({ size = 22, strokeWidth = 1.7 }) {
  // Pen-nib mark, used for "Poem" throughout — kept the export name so every
  // call site (Today, Practice, Learn, You, session screens) picks it up automatically.
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M12 2.5 19 12l-7 9.5L5 12z" />
      <path d="M12 6.5V17" />
      <circle cx="12" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconBook({ size = 22, strokeWidth = 1.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M12 6.5C9.8 5 6.5 4.7 3.5 5.4v13c3-.7 6.3-.4 8.5 1.1 2.2-1.5 5.5-1.8 8.5-1.1v-13C17.5 4.7 14.2 5 12 6.5Z" />
      <path d="M12 6.5V19" />
    </svg>
  )
}

export function IconPencilPage({ size = 22, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M4 20h16" />
      <path d="M14.5 4.5l5 5L9 20H4v-5z" />
    </svg>
  )
}

export function IconBarChart({ size = 23, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <line x1="5.5" y1="20" x2="5.5" y2="12" />
      <line x1="12" y1="20" x2="12" y2="4.5" />
      <line x1="18.5" y1="20" x2="18.5" y2="14.5" />
    </svg>
  )
}

export function IconPerson({ size = 23, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  )
}

export function IconSun({ size = 23, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M4 18h16" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" />
      <path d="M12 3.5v3M4.8 8.3l1.5 1.5M19.2 8.3l-1.5 1.5" />
    </svg>
  )
}

export function IconSunRays({ size = 24, strokeWidth = 1.8 }) {
  // greeting sparkle used in the Today hero, distinct ring+rays glyph
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
    </svg>
  )
}

export function IconClock({ size = 14, strokeWidth = 1.9 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function IconSparkleWand({ size = 13, strokeWidth = 2.1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M12 3.5c.6 3 2.3 4.7 5.3 5.3-3 .6-4.7 2.3-5.3 5.3-.6-3-2.3-4.7-5.3-5.3 3-.6 4.7-2.3 5.3-5.3Z" strokeLinejoin="round" />
      <path d="M19 14.5c.3 1.4 1 2.1 2.4 2.4-1.4.3-2.1 1-2.4 2.4-.3-1.4-1-2.1-2.4-2.4 1.4-.3 2.1-1 2.4-2.4Z" strokeLinejoin="round" />
    </svg>
  )
}

export function IconFlame({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1" strokeLinejoin="round">
      <path d="M12 2.5c1.4 3.5 4.5 4.6 4.5 9a4.5 4.5 0 0 1-9 0c0-1.4.7-2.6 1.5-3.3-.2 1.6 1 2.3 1 2.3-.6-3.4 2-5.5 1-8Z" />
    </svg>
  )
}

export function IconCheck({ size = 15, strokeWidth = 2.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export function IconBack({ size = 18, strokeWidth = 1.9 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </svg>
  )
}

export function IconArrowRight({ size = 18, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconGear({ size = 18, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    </svg>
  )
}

export function IconRevisit({ size = 20, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
      <path d="M3.5 4v4h4" />
    </svg>
  )
}

export function IconDraftPage({ size = 20, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <path d="M6 4h9l4 4v12H6z" />
      <path d="M9 4v5h6" />
    </svg>
  )
}

export function IconLock({ size = 20, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base(strokeWidth)}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  )
}
