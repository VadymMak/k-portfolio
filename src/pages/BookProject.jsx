import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Import all book project images
import nutcrackerImg from '../assets/images/4.png'
import wildSwansImg from '../assets/images/5.png'
import winterImg from '../assets/images/6.png'
import starTeamImg from '../assets/images/7.png'
import sigurdImg from '../assets/images/8.png'
import secretsImg from '../assets/images/9.png'

const projectData = {
  'nutcracker': {
    title: 'The Nutcracker and the Mouse King',
    image: nutcrackerImg,
    description: 'A magical Christmas tale brought to life through warm, festive illustrations that capture the wonder and excitement of Clara\'s adventure with the Nutcracker Prince.',
  },
  'wild-swans': {
    title: 'The Wild Swans',
    image: wildSwansImg,
    description: 'Hans Christian Andersen\'s classic fairy tale illustrated with ethereal watercolors and delicate details that bring Eliza\'s journey to save her brothers to life.',
  },
  'winter-adventures': {
    title: 'Winter Adventures',
    image: winterImg,
    description: 'A cozy collection of winter scenes and holiday moments, filled with warmth, snow-covered landscapes, and the magic of the season.',
  },
  'star-team': {
    title: 'Star Team',
    image: starTeamImg,
    description: 'An exciting space adventure for young readers, featuring colorful characters and imaginative cosmic landscapes that spark curiosity about the universe.',
  },
  'sigurd-dragon': {
    title: 'Sigurd Fights the Dragon',
    image: sigurdImg,
    description: 'A Norse legend reimagined with rich, detailed illustrations featuring brave dwarves, fearsome dragons, and epic battles.',
  },
  'secrets-sea': {
    title: 'Secrets of the Sea for Little Explorers',
    image: secretsImg,
    description: 'An educational journey through the ocean depths, introducing young readers to fascinating marine creatures through playful, informative illustrations.',
  },
}

const BookProject = () => {
  const { projectId } = useParams()
  const project = projectData[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-[#8B5A3C] mb-4">Project not found</h1>
          <Link to="/childrens-books" className="text-[#2D4A43] underline">
            ← Back to Children's Books
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-6 lg:p-8"
      >
        <Link
          to="/childrens-books"
          className="inline-flex items-center text-[#2D4A43] hover:text-[#8B5A3C] transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Children's Books
        </Link>
      </motion.div>

      {/* Project Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center px-6 mb-8"
      >
        <h1 className="text-[#8B5A3C] text-2xl lg:text-4xl tracking-[0.15em] uppercase font-light font-serif">
          {project.title}
        </h1>
      </motion.div>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 lg:px-16 pb-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-[#2D4A43]/80 text-center max-w-2xl mx-auto leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Navigation to other projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-[#2D4A43] py-8 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-[#C9A86C] text-center mb-6 text-sm tracking-wider uppercase">
            Explore More Projects
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(projectData)
              .filter(([id]) => id !== projectId)
              .slice(0, 3)
              .map(([id, data]) => (
                <Link
                  key={id}
                  to={`/childrens-books/${id}`}
                  className="text-[#C9A86C]/70 hover:text-white transition-colors text-sm"
                >
                  {data.title}
                </Link>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BookProject
