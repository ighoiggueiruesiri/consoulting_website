const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

/** The brand chevron, borrowed from the company profile's arrow motif. */
export const Chevron = (p) => (
  <svg viewBox="0 0 20 16" aria-hidden="true" {...p}>
    <path d="M0 0h8l8 8-8 8H0l8-8z" fill="currentColor" />
  </svg>
)

export const IconShield = (p) => (
  <svg viewBox="0 0 40 40" aria-hidden="true" {...base} {...p}>
    <path d="M20 5 33 10.5V19c0 8.5-5.5 14.5-13 17-7.5-2.5-13-8.5-13-17v-8.5z" />
    <path d="m14 19.5 4.2 4.5L27 14" />
  </svg>
)
export const IconRadar = (p) => (
  <svg viewBox="0 0 40 40" aria-hidden="true" {...base} {...p}>
    <circle cx="20" cy="20" r="14" /><circle cx="20" cy="20" r="8" /><path d="m20 20 10-10" />
    <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" />
  </svg>
)
export const IconCloud = (p) => (
  <svg viewBox="0 0 40 40" aria-hidden="true" {...base} {...p}>
    <path d="M12.5 26.5H27a5.5 5.5 0 0 0 .7-10.96A8 8 0 0 0 12.9 13a6 6 0 0 0-.4 13.5Z" /><path d="M14 31h12" />
  </svg>
)
export const IconAI = (p) => (
  <svg viewBox="0 0 40 40" aria-hidden="true" {...base} {...p}>
    <rect x="9" y="12" width="22" height="17" rx="2" /><path d="M20 12V7m-4 0h8M9 20H5m30 0h-4M16 20h.01M24 20h.01M16 25h8" />
  </svg>
)
export const IconScale = (p) => (
  <svg viewBox="0 0 40 40" aria-hidden="true" {...base} {...p}>
    <path d="M20 6v27m-7 0h14M8 12h24" /><path d="M8 12 4 20a4 4 0 0 0 8 0zM32 12l-4 8a4 4 0 0 0 8 0z" />
  </svg>
)
export const IconMenu = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>
)
export const IconClose = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="m5 5 14 14M19 5 5 19" /></svg>
)
export const IconArrowUp = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
)
