import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { initSmoothScroll } from './lib/scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Playbooks from './components/Playbooks'
import Services from './components/Services'
import Compliance from './components/Compliance'
import Ribbon from './components/Ribbon'
import Purpose from './components/Purpose'
import Why from './components/Why'
import Ecosystem from './components/Ecosystem'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieNotice from './components/CookieNotice'

export default function App() {
  useEffect(() => initSmoothScroll(), [])
  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="skip">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Playbooks />
        <Services />
        <Compliance />
        <Ribbon />
        <Purpose />
        <Why />
        <Ecosystem />
        <Contact />
      </main>
      <Footer />
      <CookieNotice />
    </MotionConfig>
  )
}
