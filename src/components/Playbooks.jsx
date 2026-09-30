import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PLAYBOOKS } from '../data/content'
import Photo from './Photo'
import { Chevron } from './Icons'

export default function Playbooks() {
  const [tab, setTab] = useState(0)
  const pb = PLAYBOOKS[tab]
  const tabRefs = useRef([])

  // ARIA tabs pattern: arrow keys move both selection and focus together.
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = e.key === 'ArrowRight' ? (tab + 1) % PLAYBOOKS.length : (tab - 1 + PLAYBOOKS.length) % PLAYBOOKS.length
    setTab(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="approach" className="how theme-paper after-notch">
      <div className="wrap">
        <div className="how__head">
          <div>
            <p className="kicker">How we work</p>
            <h2 className="h2">A clear method for security and AI.</h2>
          </div>
          <div className="tabs" role="tablist" aria-label="Choose a playbook" onKeyDown={onKey}>
            {PLAYBOOKS.map((p, i) => (
              <button
                key={p.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={tab === i}
                aria-controls={`tabpanel-${p.id}`}
                tabIndex={tab === i ? 0 : -1}
                className={`tab ${tab === i ? 'is-on' : ''}`}
                onClick={() => setTab(i)}
              >
                {tab === i && <motion.span layoutId="tab-pill" className="tab__pill" transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                <span className="tab__label">{p.tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="how__body" role="tabpanel" id={`tabpanel-${pb.id}`} aria-labelledby={`tab-${pb.id}`}>
          <div className="how__visual">
            <AnimatePresence mode="wait">
              <div className="how__shape shape-cut-tr" key={pb.id}>
              <motion.div
                className="how__frame"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                exit={{ clipPath: 'inset(0 0 0 100%)' }}
                transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
              >
                <Photo name={pb.img} width={1300} className="how__photo" />
                <div className="how__caption">
                  <h3 className="how__title">{pb.title}</h3>
                  <p className="how__blurb">{pb.blurb}</p>
                  <ol className="how__flow" aria-label="Stages">
                    {pb.flow.map((f, i) => (
                      <li key={f}>{f}{i < pb.flow.length - 1 && <Chevron className="how__flow-sep" />}</li>
                    ))}
                  </ol>
                </div>
              </motion.div>
              </div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.ol
              key={pb.id}
              className="steps"
              initial="hidden" animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } }}
            >
              {pb.steps.map((s, i) => (
                <motion.li
                  key={s.name}
                  className="step"
                  variants={{ hidden: { opacity: 0, x: 28 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
                >
                  <span className="step__node" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className="step__name">{s.name}</h3>
                    <p className="step__text">{s.text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
