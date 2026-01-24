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

const languages = [
  { code: "en", label: "English" },
  { code: "sk", label: "Slovenčina" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "ua", label: "Українська" },
];

const MobileMenu = ({ isOpen, onClose }) => {
  const [isChildrensOpen, setIsChildrensOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const scrollToSection = (id) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleLanguageChange = (code) => {
    setCurrentLanguage(code);
    setIsLanguageOpen(false);
    localStorage.setItem("language", code);
  };

  const getCurrentLanguageLabel = () => {
    return (
      languages.find((lang) => lang.code === currentLanguage)?.label ||
      "English"
    );
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
            {/* Language Switcher */}
            <div className={styles.languageSection}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={styles.languageButton}
              >
                <span>{isLanguageOpen ? "▼" : "►"}</span>
                <span>{getCurrentLanguageLabel()}</span>
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.ul
                    className={styles.languageList}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {languages
                      .filter((lang) => lang.code !== currentLanguage)
                      .map((lang) => (
                        <li key={lang.code} className={styles.languageItem}>
                          <button
                            onClick={() => handleLanguageChange(lang.code)}
                            className={styles.languageOption}
                          >
                            {lang.label}
                          </button>
                        </li>
                      ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <ul className={styles.menuList}>
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

            {/* Contact Block */}
            <motion.div
              className={styles.contactBlock}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="mailto:akolesnykl989@gmail.com"
                className={styles.contactLink}
              >
                akolesnykl989@gmail.com
              </a>

              <a
                href="https://wa.me/421951813809"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.contactLabel}>WhatsApp:</span> +421 951
                813 809
              </a>

              <div className={styles.socialLinks}>
                <a
                  href="https://www.behance.net/anastasiiakol1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Behance
                </a>
                <a
                  href="https://www.instagram.com/a.kolisnyk_art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
