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

const DesktopMenu = () => {
  const location = useLocation();
  const isChildrensBooks = location.pathname.startsWith("/childrens-books");

  return (
    <nav className="hidden lg:flex fixed right-0 top-0 h-screen w-[320px] bg-[#2D4A43] flex-col items-center justify-center px-8 z-30">
      <ul className="w-full max-w-[280px]">
        {/* Home */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center justify-center h-[72px] text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                isActive ? "text-white" : "text-[#C9A86C] hover:text-white"
              }`
            }
          >
            <span
              className="text-[20px] tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Home
            </span>
          </NavLink>
        </li>

        {/* About Me */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center justify-center h-[72px] text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                isActive ? "text-white" : "text-[#C9A86C] hover:text-white"
              }`
            }
          >
            <span
              className="text-[20px] tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              About Me
            </span>
          </NavLink>
        </li>

        {/* Children's Books with Accordion */}
        <li>
          <NavLink
            to="/childrens-books"
            className={`flex items-center justify-center h-[72px] text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
              isChildrensBooks
                ? "text-white"
                : "text-[#C9A86C] hover:text-white"
            }`}
          >
            <span
              className="text-[20px] tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              {isChildrensBooks ? "▼" : "►"} Children's book
              <br />
              illustrations
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
                      className={({ isActive }) =>
                        `flex items-center justify-center h-[52px] text-center border-b border-[#C9A86C]/20 transition-colors duration-300 ${
                          isActive
                            ? "text-white bg-[#C9A86C]/20"
                            : "text-[#C9A86C]/80 hover:text-white"
                        }`
                      }
                    >
                      <span
                        className="text-[16px] tracking-wide"
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
        </li>

        {/* Label Design */}
        <li>
          <NavLink
            to="/label-design"
            className={({ isActive }) =>
              `flex items-center justify-center h-[72px] text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                isActive ? "text-white" : "text-[#C9A86C] hover:text-white"
              }`
            }
          >
            <span
              className="text-[20px] tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Label design
            </span>
          </NavLink>
        </li>

        {/* Logos */}
        <li>
          <NavLink
            to="/logos"
            className={({ isActive }) =>
              `flex items-center justify-center h-[72px] text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                isActive ? "text-white" : "text-[#C9A86C] hover:text-white"
              }`
            }
          >
            <span
              className="text-[20px] tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Logos
            </span>
          </NavLink>
        </li>

        {/* Branding */}
        <li>
          <NavLink
            to="/branding"
            className={({ isActive }) =>
              `flex items-center justify-center h-[72px] text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                isActive ? "text-white" : "text-[#C9A86C] hover:text-white"
              }`
            }
          >
            <span
              className="text-[20px] tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Print and Digital
              <br />
              Branding
            </span>
          </NavLink>
        </li>

        {/* Contact */}
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center justify-center h-[72px] text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                isActive ? "text-white" : "text-[#C9A86C] hover:text-white"
              }`
            }
          >
            <span
              className="text-[20px] tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Contact Me
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
