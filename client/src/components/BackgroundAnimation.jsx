import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BackgroundAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setMousePosition({ x, y })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-30 bg-gradient-to-br from-primary to-primary-dark"
        style={{
          top: -250,
          left: -250,
        }}
        animate={{
          x: (mousePosition.x - 0.5) * 20,
          y: (mousePosition.y - 0.5) * 20,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 bg-gradient-to-br from-pink-400 to-red-500"
        style={{
          bottom: -200,
          right: -200,
        }}
        animate={{
          x: (mousePosition.x - 0.5) * 40,
          y: (mousePosition.y - 0.5) * 40,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-30 bg-gradient-to-br from-accent to-accent-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: (mousePosition.x - 0.5) * 60 - 175,
          y: (mousePosition.y - 0.5) * 60 - 175,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
    </div>
  )
}

export default BackgroundAnimation
