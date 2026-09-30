import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { NAV } from '../data/content'
import { scrollToId } from '../lib/scroll'
import { Chevron, IconClose, IconMenu } from './Icons'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const ids = NAV.map((n) => n.id)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  const go = (id) => (e) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollToId(id), open ? 250 : 0) }

  return (
    <>
      <header className={`nav ${solid ? 'nav--solid' : ''}`}>
        <div className="nav__inner wrap">
          <a href="#top" className="nav__brand" onClick={go('top')} aria-label="Redport Consulting, back to top">
            <img src="/logo-full-light.png" alt="Redport Consulting Ltd" width="846" height="289" />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {NAV.filter((n) => n.id !== 'contact').map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={go(n.id)} className={active === n.id ? 'is-active' : ''}>{n.label}</a>
            ))}
          </nav>

          <a href="#contact" onClick={go('contact')} className="btn btn--red nav__cta">
            Start a conversation <Chevron className="btn__icon" />
          </a>

          <button className="nav__toggle" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <IconMenu />
          </button>
        </div>
        <motion.div className="nav__progress" style={{ scaleX: progress }} aria-hidden="true" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <button className="drawer__close" onClick={() => setOpen(false)} aria-label="Close menu"><IconClose /></button>
            <ul>
              {NAV.map((n, i) => (
                <motion.li key={n.id} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}>
                  <a href={`#${n.id}`} onClick={go(n.id)}>{n.label}</a>
                </motion.li>
              ))}
            </ul>
            <p className="drawer__foot">Technology. Security. Transformation.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
