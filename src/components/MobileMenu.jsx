import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  {
    path: "/childrens-books",
    label: "Children's book",
    label2: "illustrations",
  },
  { path: "/label-design", label: "Label design" },
  { path: "/logos", label: "Logos" },
  { path: "/branding", label: "Print and Digital", label2: "Branding" },
  { path: "/contact", label: "Contact Me" },
];

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onClose}
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-[#2D4A43] rounded-full flex items-center justify-center shadow-lg"
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
            className="lg:hidden fixed inset-0 bg-[#2D4A43] z-40 flex flex-col items-center justify-center px-8"
          >
            <ul className="w-full max-w-xs">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `h-[65px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-[#C9A86C] hover:text-white"
                      }`
                    }
                  >
                    <span
                      className="text-xl tracking-wide leading-tight"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 400,
                      }}
                    >
                      {item.label}
                      {item.label2 && (
                        <>
                          <br />
                          {item.label2}
                        </>
                      )}
                    </span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
