import Lenis from '@studio-freight/lenis'

let lenis = null

export function initSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  let id
  const raf = (time) => {
    lenis.raf(time)
    id = requestAnimationFrame(raf)
  }
  id = requestAnimationFrame(raf)
  return () => {
    cancelAnimationFrame(id)
    lenis.destroy()
    lenis = null
  }
}

/** Scroll to a section by id, working with or without smooth scrolling. */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenis) lenis.scrollTo(el, { offset: id === 'top' ? 0 : -72, duration: 1.4 })
  else el.scrollIntoView({ behavior: 'auto', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}
