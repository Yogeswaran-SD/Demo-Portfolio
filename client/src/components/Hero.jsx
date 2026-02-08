import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 glass-card px-6 py-2 rounded-full text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-6">
            Hi, I'm <span className="gradient-text">Yogeswaran S</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-semibold text-gray-400 mb-6">
            Full-Stack Software Developer
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12">
            BE – Computer Science Engineering (CSE)<br />
            I'm a passionate Computer Science student who loves building{' '}
            <span className="text-accent font-semibold">scalable web applications</span> and solving{' '}
            <span className="text-accent font-semibold">real-world problems</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-gradient text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass-card border-2 border-white/10 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-24 flex flex-col items-center gap-2 opacity-60"
          >
            <span className="text-sm font-medium uppercase tracking-wider">Scroll Down</span>
            <motion.div
              className="w-6 h-6 border-l-2 border-b-2 border-white rotate-[-45deg]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
