/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const HeroSection = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "calc(100vh - 114px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        src="/gallery/home.png"
        alt="AK Portfolio"
        style={{
          maxWidth: "100%",
          maxHeight: "calc(100vh - 200px)",
          objectFit: "contain",
        }}
      />
    </section>
  );
};

export default HeroSection;