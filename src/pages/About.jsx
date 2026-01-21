import { motion } from 'framer-motion'
import aboutImage from '../assets/images/2.png'

const About = () => {
  return (
    <div className="min-h-screen bg-[#C4B49A] py-12 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Portrait Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5"
        >
          <div className="relative">
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-3 shadow-xl rotate-[-3deg]"
            >
              <img
                src={aboutImage}
                alt="Anastasiia Kolisnyk portrait illustration"
                className="w-full h-auto"
              />
            </motion.div>
            {/* Shadow effect */}
            <div className="absolute inset-0 bg-black/10 translate-x-2 translate-y-2 -z-10" />
          </div>
        </motion.div>

        {/* Torn Paper Text Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-3/5"
        >
          <div className="relative">
            {/* Torn paper effect container */}
            <div 
              className="relative bg-[#D4C4A8] p-8 lg:p-12"
              style={{
                clipPath: 'polygon(2% 0%, 98% 1%, 100% 3%, 99% 97%, 97% 100%, 3% 99%, 0% 97%, 1% 2%)',
                filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.15))'
              }}
            >
              {/* Heart cutout decoration */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-4 right-8 w-20 h-20 flex items-center justify-center"
              >
                <div className="text-[#8B5A3C] text-sm font-serif">About Me</div>
              </motion.div>

              {/* Content */}
              <div className="mt-8 space-y-4 text-[#5C4A3A] font-serif italic text-base lg:text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  I'm <span className="font-semibold not-italic">Anastasiia Kolisnyk</span> — an illustrator, designer, and creative 
                  entrepreneur based in Trenčín, Slovakia. I create artwork that 
                  blends emotional clarity with thoughtful craftsmanship, bringing 
                  together illustration, storytelling, multilingual adaptation, and 
                  visual identity design.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  My work spans children's books, educational materials, packaging, 
                  label design, logos, and print & digital branding. I focus on warm 
                  color palettes, intuitive composition, and imagery that feels alive — 
                  full of rhythm, sincerity, and gentle wonder.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Whether I'm illustrating marine animals for young readers, 
                  designing a brand's visual language, or crafting packaging that 
                  tells a story, my goal is always the same: to create meaningful, 
                  heartfelt visuals that inspire curiosity and connect with people.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Explore my portfolio to discover the projects, illustrations, and 
                  creative worlds I build with care and imagination.
                </motion.p>
              </div>
            </div>

            {/* Additional torn edge effect */}
            <div 
              className="absolute -bottom-2 left-4 right-4 h-4 bg-[#D4C4A8]"
              style={{
                clipPath: 'polygon(0 0, 5% 60%, 10% 20%, 15% 80%, 20% 30%, 25% 70%, 30% 10%, 35% 90%, 40% 40%, 45% 60%, 50% 20%, 55% 80%, 60% 30%, 65% 70%, 70% 10%, 75% 90%, 80% 40%, 85% 60%, 90% 20%, 95% 80%, 100% 0)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
