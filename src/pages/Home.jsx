import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/1.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5EFE6] flex flex-col items-center justify-center px-6 py-12 lg:py-0">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Link to="/">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#C9A86C]/20 border-2 border-[#C9A86C]/40 flex items-center justify-center hover:bg-[#C9A86C]/30 transition-colors duration-300">
            <span className="text-[#8B5A3C] text-4xl md:text-5xl font-serif font-semibold">AK</span>
          </div>
        </Link>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-[#8B5A3C] text-xl md:text-2xl tracking-[0.3em] uppercase font-light mb-2">
          Professional
        </h1>
        <h2 className="text-[#8B5A3C] text-xl md:text-2xl tracking-[0.2em] uppercase font-light">
          Illustrator/Grafik Designer
        </h2>
      </motion.div>

      {/* Hero Image with Parallax Effect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-xl lg:max-w-2xl"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-t-[50%] rounded-b-lg shadow-2xl"
        >
          <img
            src={heroImage}
            alt="Landscape illustration with mountains and cypress trees"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-4 -left-4 w-8 h-8 bg-[#C9A86C]/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#2D4A43]/10 rounded-full blur-sm"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 lg:hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-[#2D4A43]/50"
        >
          <span className="text-sm mb-2">Explore</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
