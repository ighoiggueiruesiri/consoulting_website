import { FRAMEWORKS } from '../data/content'
import PhotoReveal from './PhotoReveal'

export default function Compliance() {
  return (
    <section id="compliance" className="comp theme-paper">
      <div className="wrap comp__grid">
        <div className="comp__lead">
          <p className="kicker">Governance and compliance</p>
          <h2 className="h2">Make technology decisions with structure.</h2>
          <p className="body">
            We pair technology governance and risk analysis with compliance support, building a bridge between technical controls and organizational requirements.
          </p>
          <PhotoReveal name="compliance" className="comp__photo shape-para" from="left" width={1100} />
        </div>

        <div className="comp__side">
          <ul className="fw">
            {FRAMEWORKS.map((f, i) => (
              <li key={f} className={`fw__tile ${i === 0 ? 'fw__tile--lead' : ''}`}><span>{f}</span></li>
            ))}
          </ul>
          <p className="comp__note">
            These framework names describe services we provide. Redport is not a certifying authority and does not claim certification under these frameworks itself.
          </p>
        </div>
      </div>
    </section>
  )
}
