/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import styles from "./ChildrensBooksIntro.module.css";

const ChildrensBooksIntro = () => {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Children's Book Illustrations</SectionTitle>
      </motion.div>

      <motion.div 
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h3 className={styles.descriptionTitle}>
          What I Put Into My Illustrations?
        </h3>
        <p className={styles.descriptionText}>
          I pour sincerity, emotion, and quiet storytelling into every illustration I create. My work is built on intuition — on the rhythm of lines, the warmth of color, and the small details that make an image feel alive. I strive to capture moments that breathe: gentle gestures, subtle expressions, and the atmosphere that surrounds a story.
        </p>
        <p className={styles.descriptionText}>
          I approach each illustration with care and intention. I think about how a child will feel when they see the page, how the colors will guide their curiosity, and how the composition will help them understand the world a little better. My goal is to create images that are not only beautiful, but meaningful — illustrations that comfort, inspire, and invite the viewer to explore.
        </p>
        <p className={styles.descriptionText}>
          Every piece I make carries a part of my own experience: my love for nature, my fascination with quiet moments, and my belief that visual storytelling can nurture kindness, imagination, and hope.
        </p>
      </motion.div>
    </section>
  );
};

export default ChildrensBooksIntro;