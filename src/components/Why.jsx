import { CLIENTS, WHY } from '../data/content'
import PhotoReveal from './PhotoReveal'

export default function Why() {
  return (
    <section id="why" className="why theme-red notch">
      <div className="wrap why__grid">
        <div className="why__text">
          <p className="kicker kicker--light">Why Redport</p>
          <h2 className="h2">A connected approach to technology challenges.</h2>
          <p className="why__intro">Redport brings multiple disciplines together rather than treating security, infrastructure and operations as isolated issues.</p>
          <dl className="why__list">
            {WHY.map((w) => (
              <div className="why__item" key={w.name}>
                <dt>{w.name}</dt>
                <dd>{w.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="why__side">
          <PhotoReveal name="why" className="why__photo shape-cut-tr" from="right" width={1100} />
          <div className="clients">
            <h3 className="clients__title">Client experience</h3>
            <ul className="clients__list">
              {CLIENTS.map((c) => (<li key={c}>{c}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
