import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Continuous learning</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <motion.div
          className="glass-card p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center glass-card border-2 border-white/10 rounded-2xl">
            <Award className="w-12 h-12 text-accent" />
          </div>

          <h3 className="text-3xl font-bold mb-6">Certifications Coming Soon</h3>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            This section will display my professional certifications and completed courses.
          </p>

          <div className="mt-12 p-8 bg-accent/10 border border-accent/20 rounded-xl text-left max-w-2xl mx-auto">
            <strong className="text-white block mb-4">Example format:</strong>
            <p className="text-gray-300 text-sm leading-relaxed">
              • SQL Basics – 2025<br />
              • Web Development Bootcamp – 2025<br />
              • Full-Stack Development Course – 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
