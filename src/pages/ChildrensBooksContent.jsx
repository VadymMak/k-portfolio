import { motion } from "framer-motion";

const ChildrensBooksContent = () => {
  return (
    <div className="p-8 lg:p-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#8B5A3C] text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light mb-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Children's Book
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[#8B5A3C] text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light mb-12"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
            I pour sincerity, emotion, and quiet storytelling into every
            illustration I create. My work is built on intuition — on the rhythm
            of lines, the warmth of color, and the small details that make an
            image feel alive. I strive to capture moments that breathe: gentle
            gestures, subtle expressions, and the atmosphere that surrounds a
            story.
          </p>
          <p>
            I approach each illustration with care and intention. I think about
            how a child will feel when they see the page, how the colors will
            guide their curiosity, and how the composition will help them
            understand the world a little better. My goal is to create images
            that are not only beautiful, but meaningful — illustrations that
            comfort, inspire, and invite the viewer to explore.
          </p>
          <p>
            Every piece I make carries a part of my own experience: my love for
            nature, my fascination with quiet moments, and my belief that visual
            storytelling can nurture kindness, imagination, and hope.
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-[#8B5A3C] italic mt-8"
      >
        ← Select a project from the menu to explore
      </motion.p>
    </div>
  );
};

export default ChildrensBooksContent;
