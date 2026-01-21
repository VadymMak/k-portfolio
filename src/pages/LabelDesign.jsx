import { motion } from "framer-motion";

const LabelDesign = () => {
  return (
    <div
      style={{
        padding: "40px",
        paddingTop: "50px",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "28px",
          fontWeight: 400,
          letterSpacing: "0.2em",
          color: "#8B5A3C",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Label Design
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <img
          src="/gallery/label-design.png"
          alt="Label Design Portfolio"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </motion.div>
    </div>
  );
};

export default LabelDesign;
