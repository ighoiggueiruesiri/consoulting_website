import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Chevron } from './Icons'

const KEY = 'redport:cookie-consent'

/** Read the saved choice: 'accepted' | 'declined' | null */
export const getCookieConsent = () => {
  try { return localStorage.getItem(KEY) } catch { return null }
}

export default function CookieNotice() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Wait a moment so the banner doesn't compete with the hero on load
    if (getCookieConsent()) return
    const t = setTimeout(() => setOpen(true), 1200)
    return () => clearTimeout(t)
  }, [])

  const choose = (value) => {
    try { localStorage.setItem(KEY, value) } catch { /* storage blocked: banner just closes */ }
    setOpen(false)
    // Let any analytics loader react to the choice
    window.dispatchEvent(new CustomEvent('redport:consent', { detail: value }))
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="cookie theme-ink"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie notice"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="cookie__title">We use cookies</p>
          <p className="cookie__text">
            Essential cookies keep this site working. With your permission, we also use cookies to see how the site is used and improve it.
          </p>
          <div className="cookie__actions">
            <button type="button" className="btn btn--red" onClick={() => choose('accepted')}>
              Accept <Chevron className="btn__icon" />
            </button>
            <button type="button" className="cookie__decline" onClick={() => choose('declined')}>
              Decline
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
