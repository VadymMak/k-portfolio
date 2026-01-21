import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="lg:hidden fixed top-6 right-4 z-50 w-12 h-12 bg-[#2D4A43] rounded-full flex items-center justify-center shadow-lg"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-[#C9A86C] block origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-[#C9A86C] block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-[#C9A86C] block origin-center"
          />
        </div>
      </button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-[#2D4A43] z-40 flex flex-col items-center justify-start pt-20 px-8 overflow-y-auto"
          >
            <ul className="w-full max-w-xs">
              {/* Home */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <button
                  onClick={() => scrollToSection("home")}
                  className="w-full h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 text-[#C9A86C] hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="text-xl tracking-wide">Home</span>
                </button>
              </motion.li>

              {/* About Me */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="w-full h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 text-[#C9A86C] hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="text-xl tracking-wide">About Me</span>
                </button>
              </motion.li>

              {/* Children's Books with Accordion */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <button
                  onClick={() => setIsChildrensOpen(!isChildrensOpen)}
                  className="w-full h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 text-[#C9A86C] hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="text-xl tracking-wide">
                    {isChildrensOpen ? "▼" : "►"} Children's book illustrations
                  </span>
                </button>

                {/* Accordion Submenu */}
                <AnimatePresence>
                  {isChildrensOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#243832]"
                    >
                      {bookProjects.map((project) => (
                        <li key={project.id}>
                          <button
                            onClick={() => scrollToSection(project.id)}
                            className="w-full h-[48px] flex items-center justify-center text-center border-b border-[#C9A86C]/20 text-[#C9A86C]/80 hover:text-white transition-colors"
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                            }}
                          >
                            <span className="text-[15px] tracking-wide">
                              {project.title}
                            </span>
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Label Design */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => scrollToSection("label-design")}
                  className="w-full h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 text-[#C9A86C] hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="text-xl tracking-wide">Label design</span>
                </button>
              </motion.li>

              {/* Logos */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  onClick={() => scrollToSection("logos")}
                  className="w-full h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 text-[#C9A86C] hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="text-xl tracking-wide">Logos</span>
                </button>
              </motion.li>

              {/* Branding */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => scrollToSection("branding")}
                  className="w-full h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 text-[#C9A86C] hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="text-xl tracking-wide">
                    Print and Digital Branding
                  </span>
                </button>
              </motion.li>

              {/* Contact */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 text-[#C9A86C] hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="text-xl tracking-wide">Contact Me</span>
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
