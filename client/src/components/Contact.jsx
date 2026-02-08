import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yogeswaran.cse@gmail.com',
      href: 'mailto:yogeswaran.cse@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/yogeswaran-s-bb1025358/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/Yogeswaran-SD',
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Let's connect</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
        </div>

        <motion.div
          className="glass-card p-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Let's build something amazing together
          </h3>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-6 p-6 glass-card border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:translate-x-3 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-gradient rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-400 font-medium">{link.label}</span>
                    <span className="text-lg text-white font-semibold">{link.value}</span>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
