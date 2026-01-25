/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import NutCrackerPage from "./NutCrackerPage";
import styles from "./ChildrensBooksSection.module.css";

const ChildrensBooksSection = () => {
  return (
    <section id="childrens-books" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Children's Book Illustrations</SectionTitle>
      </motion.div>

      <div className={styles.description}>
        <h3 className={styles.descriptionTitle}>
          What I Put Into My Illustrations?
        </h3>
        <p className={styles.descriptionText}>
          I pour sincerity, emotion, and quiet storytelling into every
          illustration I create. My work is built on intuition — on the rhythm
          of lines, the warmth of color, and the small details that make an
          image feel alive. I strive to capture moments that breathe: gentle
          gestures, subtle expressions, and the atmosphere that surrounds a
          story.
        </p>
      </div>

      {/* Book Pages */}
      <NutCrackerPage />
      
      {/* Позже добавим другие книги: */}
      {/* <WildSwansPage /> */}
      {/* <WinterAdventuresPage /> */}
      {/* <StarTeamPage /> */}
      {/* <SigurdDragonPage /> */}
      {/* <SecretsSeaPage /> */}
    </section>
  );
};

export default ChildrensBooksSection;