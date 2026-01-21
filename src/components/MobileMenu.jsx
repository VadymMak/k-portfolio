import { NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isChildrensBooks = location.pathname.startsWith("/childrens-books");

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
                <NavLink
                  to="/"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[#C9A86C] hover:text-white"
                    }`
                  }
                >
                  <span
                    className="text-xl tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                    }}
                  >
                    Home
                  </span>
                </NavLink>
              </motion.li>

              {/* About Me */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <NavLink
                  to="/about"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[#C9A86C] hover:text-white"
                    }`
                  }
                >
                  <span
                    className="text-xl tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                    }}
                  >
                    About Me
                  </span>
                </NavLink>
              </motion.li>

              {/* Children's Books with Accordion */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <NavLink
                  to="/childrens-books"
                  onClick={!isChildrensBooks ? onClose : undefined}
                  className={`h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                    isChildrensBooks
                      ? "text-white"
                      : "text-[#C9A86C] hover:text-white"
                  }`}
                >
                  <span
                    className="text-xl tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                    }}
                  >
                    {isChildrensBooks ? "▼" : "►"} Children's book illustrations
                  </span>
                </NavLink>

                {/* Accordion Submenu */}
                <AnimatePresence>
                  {isChildrensBooks && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#243832]"
                    >
                      {bookProjects.map((project) => (
                        <li key={project.id}>
                          <NavLink
                            to={`/childrens-books/${project.id}`}
                            onClick={onClose}
                            className={({ isActive }) =>
                              `flex items-center justify-center h-[48px] text-center border-b border-[#C9A86C]/20 transition-colors duration-300 ${
                                isActive
                                  ? "text-white bg-[#C9A86C]/20"
                                  : "text-[#C9A86C]/80 hover:text-white"
                              }`
                            }
                          >
                            <span
                              className="text-[15px] tracking-wide"
                              style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 400,
                              }}
                            >
                              {project.title}
                            </span>
                          </NavLink>
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
                <NavLink
                  to="/label-design"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[#C9A86C] hover:text-white"
                    }`
                  }
                >
                  <span
                    className="text-xl tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                    }}
                  >
                    Label design
                  </span>
                </NavLink>
              </motion.li>

              {/* Logos */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <NavLink
                  to="/logos"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[#C9A86C] hover:text-white"
                    }`
                  }
                >
                  <span
                    className="text-xl tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                    }}
                  >
                    Logos
                  </span>
                </NavLink>
              </motion.li>

              {/* Branding */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <NavLink
                  to="/branding"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[#C9A86C] hover:text-white"
                    }`
                  }
                >
                  <span
                    className="text-xl tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                    }}
                  >
                    Print and Digital Branding
                  </span>
                </NavLink>
              </motion.li>

              {/* Contact */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <NavLink
                  to="/contact"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `h-[60px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[#C9A86C] hover:text-white"
                    }`
                  }
                >
                  <span
                    className="text-xl tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                    }}
                  >
                    Contact Me
                  </span>
                </NavLink>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
