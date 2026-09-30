import { OEMS } from '../data/content'
import Ticker from './Ticker'

export default function Ecosystem() {
  const half = Math.ceil(OEMS.length / 2)
  return (
    <section id="ecosystem" className="eco theme-paper after-notch">
      <div className="wrap eco__head">
        <p className="kicker">Technology ecosystem</p>
        <h2 className="h2">OEM solutions we work with.</h2>
        <p className="eco__intro">We work across leading security, cloud and infrastructure technologies to match solutions to client requirements.</p>
      </div>
      <div className="eco__rows">
        <Ticker items={OEMS.slice(0, half)} speed={46} variant="oem" label="Technology partners" />
        <Ticker items={OEMS.slice(half)} speed={52} variant="oem oem--outline" reverse />
      </div>
      <p className="wrap eco__note">Plus other leading OEM technologies, selected for each client's environment, security architecture and business requirements.</p>
    </section>
  )
}
