import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">What I've built</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="gradient-text">Projects</span>
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
            <Plus className="w-12 h-12 text-accent" />
          </div>

          <h3 className="text-3xl font-bold mb-6">Projects Coming Soon</h3>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            This section will showcase my latest projects.<br />
            Each project will include a detailed description, tech stack, and live demo links.
          </p>

          <div className="mt-12 p-8 bg-accent/10 border border-accent/20 rounded-xl text-left max-w-2xl mx-auto">
            <strong className="text-white block mb-4">How to add projects:</strong>
            <p className="text-gray-300 text-sm leading-relaxed">
              Add project cards in the following format:<br /><br />
              <code className="block p-4 bg-black/30 rounded-lg font-code text-sm">
                <strong className="text-white">Project Name</strong><br />
                Short description of the problem and solution.<br />
                Tech: HTML, CSS, JavaScript, React, Node.js<br />
                <a href="#" className="text-accent underline">GitHub</a> | <a href="#" className="text-accent underline">Live Demo</a>
              </code>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
