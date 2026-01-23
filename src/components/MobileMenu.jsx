import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import styles from "./MobileMenu.module.css";

const bookProjects = [
  { id: "nutcracker", title: "The Nutcracker and the Mouse King" },
  { id: "wild-swans", title: "The Wild Swans" },
  { id: "winter-adventures", title: "Winter Adventures" },
  { id: "star-team", title: "Star Team" },
  { id: "sigurd-dragon", title: "Sigurd Fights the Dragon" },
  { id: "secrets-sea", title: "Secrets of the Sea for Little Explorers" },
];

const MobileMenu = ({ isOpen, onClose }) => {
  const [isChildrensOpen, setIsChildrensOpen] = useState(false);

  const scrollToSection = (id) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onClose}
        className={styles.menuButton}
        aria-label="Toggle menu"
      >
        <div className={styles.hamburger}>
          <motion.span
            className={styles.hamburgerLine}
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className={styles.hamburgerLine}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className={styles.hamburgerLine}
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </div>
      </button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={`${styles.menuPanel} ${isOpen ? styles.open : ""}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{ display: "flex" }}
          >
            <ul className={styles.menuList}>
              {/* Home */}
              <motion.li
                className={styles.menuItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <button
                  onClick={() => scrollToSection("home")}
                  className={styles.menuItemButton}
                >
                  Home
                </button>
              </motion.li>

              {/* About Me */}
              <motion.li
                className={styles.menuItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className={styles.menuItemButton}
                >
                  About Me
                </button>
              </motion.li>

              {/* Children's Books with Accordion */}
              <motion.li
                className={styles.menuItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <button
                  onClick={() => setIsChildrensOpen(!isChildrensOpen)}
                  className={styles.menuItemButton}
                >
                  {isChildrensOpen ? "▼" : "►"} Children's book illustrations
                </button>

                {/* Accordion Submenu */}
                <AnimatePresence>
                  {isChildrensOpen && (
                    <motion.ul
                      className={styles.submenu}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {bookProjects.map((project) => (
                        <li key={project.id} className={styles.submenuItem}>
                          <button
                            onClick={() => scrollToSection(project.id)}
                            className={styles.submenuButton}
                          >
                            {project.title}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Label Design */}
              <motion.li
                className={styles.menuItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => scrollToSection("label-design")}
                  className={styles.menuItemButton}
                >
                  Label design
                </button>
              </motion.li>

              {/* Logos */}
              <motion.li
                className={styles.menuItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  onClick={() => scrollToSection("logos")}
                  className={styles.menuItemButton}
                >
                  Logos
                </button>
              </motion.li>

              {/* Branding */}
              <motion.li
                className={styles.menuItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => scrollToSection("branding")}
                  className={styles.menuItemButton}
                >
                  Print and Digital Branding
                </button>
              </motion.li>

              {/* Contact */}
              <motion.li
                className={styles.menuItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className={styles.menuItemButton}
                >
                  Contact Me
                </button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;