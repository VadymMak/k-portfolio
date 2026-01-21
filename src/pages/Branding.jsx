import { motion } from 'framer-motion'
import brandingImage from '../assets/images/12.png'

const Branding = () => {
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
          className="text-[#8B5A3C] text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light mb-2 font-serif"
        >
          Print and Digital
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#8B5A3C] text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light mb-8 font-serif"
        >
          Branding
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src={brandingImage}
            alt="Print and digital branding portfolio showcase"
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
          Print and Digital Branding
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#C9A86C]/80 text-sm lg:text-base leading-relaxed space-y-4"
        >
          <p>
            Print and digital branding together create a unified 
            visual presence for a brand across both physical 
            and online spaces. My approach focuses on clarity, 
            emotional resonance, and a cohesive aesthetic that 
            strengthens recognition and trust.
          </p>
          <p>
            In print, I design materials that feel tangible and 
            memorable — business cards, brochures, catalogs, 
            packaging elements, posters, and branded 
            merchandise. Each piece is crafted with attention to 
            composition, typography, and color, ensuring that 
            the brand's personality is expressed with warmth 
            and precision.
          </p>
          <p>
            In the digital space, I develop visual systems for 
            websites, social media, presentations, and online 
            campaigns. This includes graphics, templates, icons, 
            and layouts that adapt seamlessly across platforms 
            while maintaining a consistent identity.
          </p>
          <p>
            By combining print and digital branding, I build 
            a complete visual language that supports the brand 
            at every point of contact — from a physical product 
            in someone's hands to the way the brand appears 
            on a screen.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Branding
