import { RIBBON } from '../data/content'
import Photo from './Photo'

/** A slow, endless strip of facet-cut photographs. Pauses on hover. */
export default function Ribbon() {
  return (
    <section className="ribbon theme-ink" aria-label="Gallery">
      <div className="ribbon__track">
        {[0, 1].map((n) => (
          <ul className="ribbon__set" key={n} aria-hidden={n === 1 ? 'true' : undefined}>
            {RIBBON.map((k, i) => (
              <li className={`ribbon__item ${i % 2 ? 'is-low' : ''}`} key={k}>
                <div className="ribbon__skew"><Photo name={k} width={700} className="ribbon__photo" /></div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
