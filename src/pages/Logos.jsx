import { motion } from 'framer-motion'
import logosImage from '../assets/images/11.png'

const Logos = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-2/3 bg-[#F5EFE6] p-6 lg:p-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#8B5A3C] text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light mb-8 font-serif"
        >
          Logos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src={logosImage}
            alt="Logo design portfolio showcase"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Right Side - Description */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/3 bg-[#2D4A43] p-8 lg:p-12 flex flex-col justify-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#C9A86C]/20 border-2 border-[#C9A86C]/40 flex items-center justify-center">
            <span className="text-[#C9A86C] text-2xl font-serif font-semibold">AK</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#C9A86C] text-xl lg:text-2xl font-serif text-center mb-6"
        >
          Logos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#C9A86C]/80 text-sm lg:text-base leading-relaxed space-y-4"
        >
          <p>
            A logo is the visual heartbeat of a brand — a 
            distilled symbol of its character, values, and voice. 
            It's the first impression, the signature, and the 
            element that stays in memory long after the 
            product or message is gone. Thoughtful logo design 
            combines clarity, emotion, and precision, creating a 
            mark that feels both timeless and alive.
          </p>
          <p>
            In my work, I focus on logos that breathe with 
            simplicity and meaning. I explore the rhythm of 
            shapes, the balance of negative space, and the 
            harmony of color to craft identities that resonate. 
            Whether it's a monogram, an emblem, or a 
            minimalist symbol, each design is built to 
            communicate the essence of the brand with 
            honesty and elegance.
          </p>
          <p>
            A strong logo doesn't shout — it speaks clearly. It 
            builds trust, enhances recognition, and becomes the 
            foundation for a cohesive visual identity. I create 
            logos that reflect the story behind the brand, 
            support its growth, and feel emotionally true to the 
            people who stand behind it.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Logos
