import { CONTACT, NAV } from '../data/content'
import { scrollToId } from '../lib/scroll'
import { IconArrowUp } from './Icons'

export default function Footer() {
  return (
    <footer className="footer theme-ink">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img src="/logo-full-light.png" alt="Redport Consulting Ltd" width="846" height="289" />
          <p>Technology. Security. Transformation.</p>
        </div>
        <nav aria-label="Footer" className="footer__nav">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollToId(n.id) }}>{n.label}</a>
          ))}
        </nav>
        <div className="footer__contact">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          {CONTACT.phones.map((p) => (<a key={p.href} href={p.href}>{p.label}</a>))}
        </div>
      </div>
      <div className="wrap footer__base">
        <p>&copy; {new Date().getFullYear()} Redport Consulting Limited. Lagos, Nigeria.</p>
        <button className="footer__top" onClick={() => scrollToId('top')}>Back to top <IconArrowUp /></button>
      </div>
    </footer>
  )
}
