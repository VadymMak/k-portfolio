/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "../hooks/useTranslation";
import styles from "./DesktopMenu.module.css";

const DesktopMenu = () => {
  const [isChildrensOpen, setIsChildrensOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Language context and translations
  const {
    currentLanguage,
    availableLanguages,
    changeLanguage,
    getCurrentLanguageLabel,
  } = useLanguage();
  const { translate } = useTranslation();

  // Book projects with translations
  const bookProjects = [
    { id: "nutcracker", title: translate("books.nutcracker") },
    { id: "wild-swans", title: translate("books.wildSwans") },
    { id: "winter-adventures", title: translate("books.winterAdventures") },
    { id: "magic-world", title: translate("books.magicWorld") },
    { id: "sigurd", title: translate("books.sigurd") },
    { id: "secrets-sea", title: translate("books.seaSecrets") },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setIsLanguageOpen(false);
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
                {availableLanguages
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
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("about")}
              className={styles.menuButton}
            >
              {translate("menu.aboutMe")}
            </button>
          </li>

          {/* Books Intro */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("books-intro")}
              className={styles.menuButton}
            >
              {translate("menu.illustrationPhilosophy")}
            </button>
          </li>

          {/* Children's Book Illustrations - Accordion */}
          <li className={styles.menuItem}>
            <button
              onClick={() => setIsChildrensOpen(!isChildrensOpen)}
              className={styles.menuButton}
            >
              <span>{isChildrensOpen ? "▼" : "►"}</span>
              <span>{translate("menu.childrensBooks")}</span>
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
              {translate("menu.labelDesign")}
            </button>
          </li>

          {/* Logos */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("logos")}
              className={styles.menuButton}
            >
              {translate("menu.logos")}
            </button>
          </li>

          {/* Print and Digital Branding */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("branding")}
              className={styles.menuButton}
            >
              {translate("menu.branding")}
            </button>
          </li>

          {/* Contact */}
          <li className={styles.menuItem}>
            <button
              onClick={() => scrollToSection("contact")}
              className={styles.menuButton}
            >
              {translate("menu.contactMe")}
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
            href="https://wa.me/qr/A3NYYPE55OODK1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <span className={styles.contactLabel}>WhatsApp:</span> +421 951 813
            809
          </a>

          <div className={styles.socialLinks}>
            <a
              href="https://www.behance.net/akolesnyk14bf8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Behance"
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/akolesnyk.sketch?igsh=eTgyYnNrZnVneDRy"
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