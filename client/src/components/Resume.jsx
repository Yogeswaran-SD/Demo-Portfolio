import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-primary-gradient rounded-2xl">
            <FileText className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-3xl font-bold mb-6">Download My Resume</h3>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Get a comprehensive overview of my skills, experience, and education.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-gradient text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
