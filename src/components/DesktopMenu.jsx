/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useState } from "react";
import styles from "./DesktopMenu.module.css";

const bookProjects = [
  { id: "nutcracker", title: "The Nutcracker and the Mouse King" },
  { id: "wild-swans", title: "The Wild Swans" },
  { id: "winter-adventures", title: "Winter Adventures" },
  { id: "star-team", title: "Star Team" },
  { id: "sigurd-dragon", title: "Sigurd Fights the Dragon" },
  { id: "secrets-sea", title: "Secrets of the Sea for Little Explorers" },
];

const DesktopMenu = () => {
  const [isChildrensOpen, setIsChildrensOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <ul className={styles.menuList}>
          {/* Home */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("home")}
              className={styles.menuButton}
            >
              Home
            </button>
          </li>

          {/* About Me */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("about")}
              className={styles.menuButton}
            >
              About Me
            </button>
          </li>

          {/* Children's Book Illustrations - Accordion */}
          <li className={styles.menuItem}>
            <button
              onClick={() => setIsChildrensOpen(!isChildrensOpen)}
              className={styles.menuButton}
            >
              <span>{isChildrensOpen ? "▼" : "►"}</span>
              <span>Children's book illustrations</span>
            </button>

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
          </li>

          {/* Label Design */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("label-design")}
              className={styles.menuButton}
            >
              Label design
            </button>
          </li>

          {/* Logos */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("logos")}
              className={styles.menuButton}
            >
              Logos
            </button>
          </li>

          {/* Print and Digital Branding */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("branding")}
              className={styles.menuButton}
            >
              Print and Digital Branding
            </button>
          </li>

          {/* Contact */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("contact")}
              className={styles.menuButton}
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopMenu;