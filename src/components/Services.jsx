import { SERVICES } from '../data/content'
import PhotoReveal from './PhotoReveal'
import { Chevron } from './Icons'

export default function Services() {
  return (
    <section id="services" className="svc theme-ink">
      <div className="wrap">
        <div className="svc__head">
          <p className="kicker">Managed services, cloud and infrastructure</p>
          <h2 className="h2">Operate, connect and scale.</h2>
          <p className="svc__intro">Services that support day-to-day operations while modernizing the technology foundation.</p>
        </div>

        <div className="svc__grid">
          {SERVICES.map((s, i) => (
            <article key={s.id} className={`svc-card ${i === 1 ? 'svc-card--red' : ''}`}>
              <PhotoReveal name={s.img} className="svc-card__photo shape-cut-bl" from={i === 1 ? 'top' : 'bottom'} delay={i * 0.12} width={1000} />
              <div className="svc-card__body">
                <p className="svc-card__kind">{s.kind}</p>
                <h3 className="svc-card__title">{s.title}</h3>
                <ul className="svc-card__list">
                  {s.items.map((it) => (<li key={it}><Chevron className="svc-card__bullet" />{it}</li>))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
