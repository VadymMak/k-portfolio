import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const bookProjects = [
  { id: 'nutcracker', title: 'The Nutcracker and the Mouse King', image: '4.png' },
  { id: 'wild-swans', title: 'The Wild Swans', image: '5.png' },
  { id: 'winter-adventures', title: 'Winter Adventures', image: '6.png' },
  { id: 'star-team', title: 'Star Team', image: '7.png' },
  { id: 'sigurd-dragon', title: 'Sigurd Fights the Dragon', image: '8.png' },
  { id: 'secrets-sea', title: 'Secrets of the Sea for Little Explorers', image: '9.png' },
]

const ChildrensBooks = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 bg-[#F5EFE6] p-8 lg:p-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#8B5A3C] text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light mb-2 font-serif"
        >
          Children's Book
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#8B5A3C] text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light mb-12 font-serif"
        >
          Illustrations
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-[#2D4A43] font-semibold mb-4">
            What I Put Into My Illustrations?
          </h3>
          <div className="text-[#2D4A43]/80 text-sm lg:text-base leading-relaxed space-y-4">
            <p>
              I pour sincerity, emotion, and quiet storytelling into every illustration I 
              create. My work is built on intuition — on the rhythm of lines, the 
              warmth of color, and the small details that make an image feel alive. I 
              strive to capture moments that breathe: gentle gestures, subtle 
              expressions, and the atmosphere that surrounds a story.
            </p>
            <p>
              I approach each illustration with care and intention. I think about how 
              a child will feel when they see the page, how the colors will guide their 
              curiosity, and how the composition will help them understand the world 
              a little better. My goal is to create images that are not only beautiful, 
              but meaningful — illustrations that comfort, inspire, and invite the 
              viewer to explore.
            </p>
            <p>
              Every piece I make carries a part of my own experience: my love for 
              nature, my fascination with quiet moments, and my belief that visual 
              storytelling can nurture kindness, imagination, and hope.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Project Menu */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 bg-[#2D4A43] p-8 lg:p-16 flex flex-col justify-center"
      >
        <ul className="space-y-6">
          {bookProjects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link
                to={`/childrens-books/${project.id}`}
                className="group block"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between py-4 border-b border-[#C9A86C]/30"
                >
                  <span className="text-[#C9A86C] text-lg lg:text-xl font-light group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-[#C9A86C] opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    →
                  </motion.span>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default ChildrensBooks
