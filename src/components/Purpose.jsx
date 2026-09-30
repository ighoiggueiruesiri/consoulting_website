import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MISSION, VALUES, VISION } from '../data/content'
import Photo from './Photo'

export default function Purpose() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.08, 1.02])

  return (
    <section id="purpose" className="purpose theme-paper">
      <div ref={ref} className="purpose__band theme-ink">
        <motion.div className="purpose__bg" style={reduce ? undefined : { y, scale }}>
          <Photo name="lagos" width={2000} tint={false} />
        </motion.div>
        <div className="purpose__veil" aria-hidden="true" />
        <div className="wrap purpose__head">
          <p className="kicker kicker--light">What guides us</p>
          <h2 className="h2 purpose__title">Purpose, direction and values.</h2>
        </div>
      </div>

      <div className="wrap">
        <div className="purpose__cards">
          <article className="pcard pcard--ink">
            <h3 className="pcard__label">Vision</h3>
            <p className="pcard__text">{VISION}</p>
          </article>
          <article className="pcard pcard--red">
            <h3 className="pcard__label">Mission</h3>
            <p className="pcard__text">{MISSION}</p>
          </article>
        </div>

        <ul className="values">
          {VALUES.map((v) => (
            <li className="value" key={v.name}>
              <span className="value__mark" aria-hidden="true" />
              <h3 className="value__name">{v.name}</h3>
              <p className="value__text">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
