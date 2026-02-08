import { motion } from 'framer-motion'
import { Code, Layout, Zap, Database, Terminal } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C', 'Python', 'Java', 'C++'],
    },
    {
      icon: Layout,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      icon: Zap,
      title: 'Backend',
      skills: ['Node.js', 'Express.js'],
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['SQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      icon: Terminal,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub'],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">My expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary-gradient rounded-xl">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-6">{category.title}</h3>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/40 hover:-translate-y-1 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
