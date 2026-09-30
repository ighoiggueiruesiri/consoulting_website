import { motion, useReducedMotion } from 'framer-motion'
import Photo from './Photo'

const ART_ANGLES = [0, 24, -18, 42, -34, 12, 60, -8]

// Only shrink the edge the element enters from, so anything already
// on-screen at load (e.g. just under the fold) is never wrongly excluded.
const VIEWPORT = {
  bottom: { margin: '0px 0px -10% 0px' },
  top: { margin: '-10% 0px 0px 0px' },
  left: { margin: '0px -10% 0px 0px' },
  right: { margin: '0px 0px 0px -10%' },
}

/**
 * A photo that is unmasked (curtain) as it scrolls into view while the image
 * inside settles from a slight zoom. `className` carries the facet shape.
 *
 * The art fallback lives on its own unmasked base layer beneath the mask, so
 * a missed or delayed reveal trigger never leaves a blank box behind, only
 * the designed art panel.
 */
export default function PhotoReveal({ name, className = '', delay = 0, width = 1400, from = 'bottom', children }) {
  const reduce = useReducedMotion()
  const hidden = { bottom: 'inset(100% 0 0 0)', top: 'inset(0 0 100% 0)', left: 'inset(0 100% 0 0)', right: 'inset(0 0 0 100%)' }[from]
  const seed = Math.abs([...name].reduce((a, c) => a + c.charCodeAt(0), 0)) % ART_ANGLES.length

  return (
    <div className={`reveal-photo ${className}`}>
      <div className="photo__art reveal-photo__base" style={{ '--a': `${ART_ANGLES[seed]}deg` }} aria-hidden="true" />
      <motion.div
        className="reveal-photo__mask"
        initial={reduce ? false : { clipPath: hidden }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, ...VIEWPORT[from] }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay }}
      >
        <motion.div
          className="reveal-photo__zoom"
          initial={reduce ? false : { scale: 1.28 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, ...VIEWPORT[from] }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay }}
        >
          <Photo name={name} width={width} hideArt bare />
        </motion.div>
      </motion.div>
      {children}
    </div>
  )
}
