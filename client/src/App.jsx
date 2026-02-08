import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

function App() {
  useEffect(() => {
    console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #667eea;')
    console.log('%cLooking to hire a Full-Stack Developer? Let\'s talk!', 'font-size: 14px; color: #4facfe;')
    console.log('%c📧 Email: yourmail@gmail.com', 'font-size: 12px; color: #a0aec0;')
  }, [])

  return (
    <div className="relative">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
