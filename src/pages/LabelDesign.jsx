import { motion } from 'framer-motion'
import labelImage from '../assets/images/10.png'

const LabelDesign = () => {
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
          Label Design
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src={labelImage}
            alt="Label design portfolio showcase"
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
          Label Design
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#C9A86C]/80 text-sm lg:text-base leading-relaxed space-y-4"
        >
          <p>
            Label design is the art of creating a visual identity 
            for a product through its packaging. It combines 
            aesthetics, clarity, and brand storytelling to make a 
            product instantly recognizable and emotionally 
            appealing. A well-designed label not only informs — it 
            invites, inspires, and builds trust.
          </p>
          <p>
            My approach to label design focuses on thoughtful 
            composition, harmonious color palettes, and clear 
            typography. I create labels that reflect the 
            character of the product and the values of the 
            brand, whether it's a handcrafted item, a natural 
            cosmetic, or a premium food product.
          </p>
          <p>
            A strong label communicates at a glance — it 
            captures attention, conveys quality, and helps the 
            product stand out on the shelf. I design labels that 
            feel alive, sincere, and visually memorable, blending 
            artistic intuition with practical functionality.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LabelDesign
