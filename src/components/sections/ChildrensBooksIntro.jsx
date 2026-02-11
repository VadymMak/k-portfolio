/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./ChildrensBooksIntro.module.css";

const ChildrensBooksIntro = () => {
  const { translate } = useTranslation();

  return (
    <section className={styles.section} id="childrens-books">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>{translate("booksIntro.title")}</SectionTitle>
      </motion.div>

      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {translate("booksIntro.subtitle")}
      </motion.p>
    </section>
  );
};

export default ChildrensBooksIntro;