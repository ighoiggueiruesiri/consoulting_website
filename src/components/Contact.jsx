import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CAPABILITIES, CONTACT } from '../data/content'
import Photo from './Photo'
import { Chevron } from './Icons'

const TOPICS = [...CAPABILITIES.map((c) => ({ id: c.id, label: c.title })), { id: 'other', label: 'Something else' }]

export default function Contact() {
  const [topic, setTopic] = useState('')
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const on = (e) => { setTopic(e.detail); setSent(false) }
    window.addEventListener('redport:topic', on)
    return () => window.removeEventListener('redport:topic', on)
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      if (!accessKey) {
        throw new Error('Missing VITE_WEB3FORMS_ACCESS_KEY. Check your .env file and restart the dev server.')
      }

      formData.append('access_key', accessKey)

      const label = TOPICS.find((t) => t.id === formData.get('topic'))?.label || 'General enquiry'
      formData.append('subject', `Website enquiry: ${label}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSent(true)
        form.reset()
        setTopic('')
      } else {
        console.error('Form submission failed:', data)
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting the form:', error)
      alert('Something went wrong. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact theme-ink">
      <div className="contact__bg" aria-hidden="true"><Photo name="contact" width={2000} tint={false} /></div>
      <div className="contact__veil" aria-hidden="true" />

      <div className="wrap contact__grid">
        <div className="contact__text">
          <h2 className="contact__title">Let's build<br />what's next.</h2>
          <p className="contact__sub">Tell us what you're working on. We'll reply with how we'd approach it.</p>

          <ul className="contact__details">
            {CONTACT.phones.map((p) => (<li key={p.href}><a href={p.href}>{p.label}</a></li>))}
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          </ul>
          <address className="contact__addr">
            <strong>Redport Consulting Limited</strong>
            {CONTACT.address.map((l) => (<span key={l}>{l}</span>))}
          </address>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="form__row">
            <label className="field"><span>Your name</span><input name="name" required autoComplete="name" /></label>
            <label className="field"><span>Organization <em>(optional)</em></span><input name="org" autoComplete="organization" /></label>
          </div>
          <label className="field"><span>Work email</span><input name="email" type="email" required autoComplete="email" /></label>
          <label className="field">
            <span>What do you need help with?</span>
            <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} required>
              <option value="" disabled>Choose a topic</option>
              {TOPICS.map((t) => (<option key={t.id} value={t.id}>{t.label}</option>))}
            </select>
          </label>
          <label className="field"><span>Message</span><textarea name="message" rows="4" required /></label>

          <button type="submit" className="btn btn--red form__submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send message'} <Chevron className="btn__icon" />
          </button>

          <AnimatePresence>
            {sent && (
              <motion.p className="form__ok" role="status" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                Thank you! Your message has been sent successfully. We will get back to you shortly.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  )
}