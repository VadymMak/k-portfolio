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

const languages = [
  { code: "en", label: "English" },
  { code: "sk", label: "Slovenčina" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "ua", label: "Українська" },
];

const DesktopMenu = () => {
  const [isChildrensOpen, setIsChildrensOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
    <nav className={styles.nav}>
      <div className={styles.navInner}>
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
          {/* Home */}

          {/* About Me */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("about")}
              className={styles.menuButton}
            >
              About Me
            </button>
          </li>

          {/* Books Intro */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("about")}
              className={styles.menuButton}
            >
              My Illustration Philosophy
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

        {/* Contact Block */}
        <div className={styles.contactBlock}>
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
            <span className={styles.contactLabel}>WhatsApp:</span> +421 951 813
            809
          </a>

          <div className={styles.socialLinks}>
            <a
              href="https://www.behance.net/anastasiiakol1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Behance"
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/a.kolisnyk_art"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
