import { useState } from 'react'
import { CAPABILITIES } from '../data/content'
import { scrollToId } from '../lib/scroll'
import Photo from './Photo'
import { Chevron, IconAI, IconCloud, IconRadar, IconScale, IconShield } from './Icons'

const ICONS = { cyber: IconShield, soc: IconRadar, cloud: IconCloud, ai: IconAI, gov: IconScale }

export default function Capabilities() {
  const [active, setActive] = useState(0)

  const discuss = (id) => {
    window.dispatchEvent(new CustomEvent('redport:topic', { detail: id }))
    scrollToId('contact')
  }

  return (
    <section id="capabilities" className="caps theme-ink notch">
      <div className="wrap">
        <div className="caps__head">
          <div>
            <p className="kicker">What we do</p>
            <h2 className="h2">Five connected capability areas.</h2>
          </div>
          <p className="caps__intro">Security, AI governance, infrastructure, operations and compliance, brought together instead of handled as separate problems.</p>
        </div>

        <div className="panels">
          {CAPABILITIES.map((c, i) => {
            const Icon = ICONS[c.id]
            const on = active === i
            return (
              <article
                key={c.id}
                className={`panel ${on ? 'is-active' : ''}`}
                onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}
              >
                <Photo name={c.img} width={1200} className="panel__photo" tint={false} />
                <div className="panel__shade" aria-hidden="true" />

                <button
                  className="panel__toggle"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-expanded={on}
                  aria-controls={`panel-${c.id}`}
                >
                  <span className="panel__icon"><Icon /></span>
                  <span className="panel__name panel__name--h">{c.title}</span>
                  <span className="panel__name panel__name--v" aria-hidden="true">{c.title}</span>
                </button>

                <div className="panel__body" id={`panel-${c.id}`}>
                  <p className="panel__summary">{c.summary}</p>
                  <ul className="panel__list">
                    {c.items.map((it) => (<li key={it}><Chevron className="panel__bullet" />{it}</li>))}
                  </ul>
                  <button className="btn btn--white panel__cta" onClick={() => discuss(c.id)} tabIndex={on ? 0 : -1}>
                    Discuss this <Chevron className="btn__icon" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
