/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./ChildrensBooksIntro.module.css";

const ChildrensBooksIntro = () => {
  const { translate } = useTranslation();

  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>{translate("booksIntro.title")}</SectionTitle>
      </motion.div>

      <motion.div 
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h3 className={styles.descriptionTitle}>
          {translate("booksIntro.subtitle")}
        </h3>
        <p className={styles.descriptionText}>
          {translate("booksIntro.text1")}
        </p>
        <p className={styles.descriptionText}>
          {translate("booksIntro.text2")}
        </p>
        <p className={styles.descriptionText}>
          {translate("booksIntro.text3")}
        </p>
      </motion.div>
    </section>
  );
};

export default ChildrensBooksIntro;