import { Chevron } from './Icons'

/** Endless horizontal ticker. Items are duplicated so the loop is seamless. */
export default function Ticker({ items, speed = 40, reverse = false, variant = 'plain', label }) {
  return (
    <div className={`ticker ticker--${variant}`} style={{ '--speed': `${speed}s` }} role={label ? 'group' : undefined} aria-label={label}>
      <div className={`ticker__track ${reverse ? 'is-reverse' : ''}`}>
        {[0, 1].map((n) => (
          <ul className="ticker__set" key={n} aria-hidden={n === 1 ? 'true' : undefined}>
            {items.map((t) => (
              <li className="ticker__item" key={t}>
                <span>{t}</span>
                <Chevron className="ticker__sep" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
