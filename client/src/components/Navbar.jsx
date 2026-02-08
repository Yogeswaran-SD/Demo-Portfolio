import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const targetPosition = target.offsetTop - 70
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
      scrolled ? 'bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold">
          <span className="gradient-text">YOGESWARAN</span>
          <span className="text-accent">.S</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-gray-400 font-medium hover:text-white transition-colors ${
                activeSection === link.href.substring(1) ? 'text-white' : ''
              }`}
            >
              {link.name}
              <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-primary-gradient transition-all duration-300 ${
                activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${
            mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${
            mobileMenuOpen ? 'opacity-0' : ''
          }`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${
            mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`} />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-[70px] right-6 md:hidden glass-card p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-gray-400 font-medium hover:text-white transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-white' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
