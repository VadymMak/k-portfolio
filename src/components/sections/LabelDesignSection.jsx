/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";

const LabelDesignSection = () => {
  return (
    <section
      id="label-design"
      style={{
        padding: "80px 40px",
        scrollMarginTop: "120px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Label Design</SectionTitle>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        src="/gallery/label-design.png"
        alt="Label Design Portfolio"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </section>
  );
};

export default LabelDesignSection;