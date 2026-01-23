/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import styles from "./Header.module.css";

const Header = () => {
  const scrollToTop = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      {/* Logo - Left */}
      <button onClick={scrollToTop} className={styles.logoButton}>
        <motion.div
          className={styles.logoCircle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.logoText}>AK</span>
        </motion.div>
      </button>

      {/* Title - Centered */}
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Professional Illustrator / Grafik Designer
        </h1>
      </div>
    </header>
  );
};

export default Header;
