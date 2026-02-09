import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "../hooks/useTranslation";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ isOpen, onClose }) => {
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
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setIsLanguageOpen(false);
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
                  {translate("menu.aboutMe")}
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
                  {isChildrensOpen ? "▼" : "►"} {translate("menu.childrensBooks")}
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
                  {translate("menu.labelDesign")}
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
                  {translate("menu.logos")}
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
                  {translate("menu.branding")}
                </button>
              </motion.li>

              {/* Services */}
              <motion.li
                className={styles.menuItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <button
                  onClick={() => scrollToSection("services")}
                  className={styles.menuItemButton}
                >
                  {translate("menu.services")}
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
                  {translate("menu.contactMe")}
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
                href="https://wa.me/qr/A3NYYPE55OODK1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.contactLabel}>WhatsApp:</span> +421 951
                813 809
              </a>

              <div className={styles.socialLinks}>
                <a
                  href="https://www.behance.net/akolesnyk14bf8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Behance
                </a>
                <a
                  href="https://www.instagram.com/akolesnyk.sketch?igsh=eTgyYnNrZnVneDRy"
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