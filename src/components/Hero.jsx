import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { DISCIPLINES } from '../data/content'
import { scrollToId } from '../lib/scroll'
import Mark, { FACETS } from './Mark'
import Photo from './Photo'
import Ticker from './Ticker'
import { Chevron } from './Icons'

const EASE = [0.16, 1, 0.3, 1]

// Where each facet flies in from, and how strongly it reacts to the pointer
const FACET_MOTION = {
  a: { from: { x: -90, y: -110, rotate: -7 }, depth: 14, photo: 'heroA', delay: 0.25 },
  b: { from: { x: -120, y: 100, rotate: 6 }, depth: 26, photo: 'heroB', delay: 0.4 },
  c: { from: { x: 110, y: 120, rotate: -5 }, depth: 38, photo: 'heroC', delay: 0.55 },
}

function Facet({ id, mx, my, reduce }) {
  const f = FACETS[id]
  const m = FACET_MOTION[id]
  const px = useTransform(mx, (v) => v * m.depth)
  const py = useTransform(my, (v) => v * m.depth)
  const { l, t, w, h } = f.box
  return (
    <motion.div
      className={`facet facet--${id}`}
      style={{ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%`, clipPath: f.clip, x: px, y: py }}
    >
      <motion.div
        className="facet__inner"
        initial={reduce ? { opacity: 0 } : { opacity: 0, ...m.from }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ duration: reduce ? 0.6 : 1.25, ease: EASE, delay: reduce ? 0 : m.delay }}
      >
        <Photo name={m.photo} width={1100} eager />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 })
  const my = useSpring(rawY, { stiffness: 60, damping: 18 })

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    rawX.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    rawY.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }
  const onLeave = () => { rawX.set(0); rawY.set(0) }

  const line = (text, delay) => (
    <span className="hero__line">
      <motion.span
        initial={reduce ? { opacity: 0 } : { y: '112%' }}
        animate={reduce ? { opacity: 1 } : { y: 0 }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {text}<b className="hero__dot">.</b>
      </motion.span>
    </span>
  )

  return (
    <section id="top" className="hero theme-ink notch">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__grid wrap">
        <div className="hero__copy">
          <motion.p className="hero__place" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}>
            <Mark className="hero__place-mark" /> Redport Consulting Ltd, Lagos
          </motion.p>

          <h1 className="hero__title" aria-label="Technology. Security. Transformation.">
            {line('Technology', 0.15)}
            {line('Security', 0.27)}
            {line('Transformation', 0.39)}
          </h1>

          <motion.p className="hero__lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.9, ease: EASE }}>
            Strategy-led technology consulting for resilient, secure and high-performing organizations.
          </motion.p>

          <motion.div className="hero__actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.9, ease: EASE }}>
            <a href="#contact" className="btn btn--red" onClick={(e) => { e.preventDefault(); scrollToId('contact') }}>
              Start a conversation <Chevron className="btn__icon" />
            </a>
            <a href="#capabilities" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); scrollToId('capabilities') }}>
              Explore capabilities
            </a>
          </motion.div>
        </div>

        <div className="hero__stage" onMouseMove={onMove} onMouseLeave={onLeave}>
          <Mark className="hero__ghost" />
          <div className="collage">
            <Facet id="a" mx={mx} my={my} reduce={reduce} />
            <Facet id="b" mx={mx} my={my} reduce={reduce} />
            <Facet id="c" mx={mx} my={my} reduce={reduce} />
          </div>
        </div>
      </div>

      <div className="hero__ticker">
        <Ticker items={DISCIPLINES} speed={38} variant="hero" label="Our disciplines" />
      </div>
    </section>
  )
}
