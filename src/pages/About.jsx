import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      style={{
        width: "100%",
        minHeight: "calc(100vh - 114px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C9B99A",
        padding: "20px",
      }}
    >
      <img
        src="/gallery/about-me.png"
        alt="About Anastasiia Kolisnyk"
        style={{
          maxWidth: "100%",
          maxHeight: "calc(100vh - 200px)",
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </motion.div>
  );
};

export default About;
