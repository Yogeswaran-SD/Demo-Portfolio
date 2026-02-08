import { motion } from 'framer-motion'
import { Zap, Users, Monitor, Layers } from 'lucide-react'

const About = () => {
  const highlights = [
    { icon: Zap, text: 'Quick learner' },
    { icon: Users, text: 'Team player' },
    { icon: Monitor, text: 'Strong debugging skills' },
    { icon: Layers, text: 'Interested in scalable systems' },
  ]

  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </div>

        <motion.div
          className="glass-card p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a Computer Science Engineering student with strong interest in{' '}
            <strong className="text-white font-semibold">Full-Stack Software Development</strong>. I enjoy transforming
            ideas into real applications and continuously improving my problem-solving and development skills.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            I am actively looking for opportunities to contribute, learn, and grow as a developer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-primary/10 border border-primary/20 rounded-xl hover:bg-primary/15 hover:border-primary/30 hover:translate-x-2 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-white font-medium">{item.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
