import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const bookProjects = [
  { id: "nutcracker", title: "The Nutcracker and the Mouse King" },
  { id: "wild-swans", title: "The Wild Swans" },
  { id: "winter-adventures", title: "Winter Adventures" },
  { id: "star-team", title: "Star Team" },
  { id: "sigurd-dragon", title: "Sigurd Fights the Dragon" },
  { id: "secrets-sea", title: "Secrets of the Sea for Little Explorers" },
];

const ChildrensBooksLayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Content Area */}
      <div className="w-full lg:w-[55%] bg-[#F5EFE6] min-h-screen">
        <Outlet />
      </div>

      {/* Right Side - Sticky Submenu */}
      <div className="w-full lg:w-[45%] bg-[#2D4A43] lg:fixed lg:right-[320px] lg:top-0 lg:h-screen lg:overflow-y-auto">
        <div className="p-8 lg:p-12 flex flex-col justify-center min-h-full">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center lg:text-left"
          >
            <NavLink
              to="/childrens-books"
              className="text-[#C9A86C] text-sm tracking-[0.3em] uppercase hover:text-white transition-colors"
            >
              ← Back to Overview
            </NavLink>
          </motion.div>

          {/* Book Projects List */}
          <nav>
            <ul className="space-y-2">
              {bookProjects.map((project, index) => (
                <motion.li
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={`/childrens-books/${project.id}`}
                    className={({ isActive }) =>
                      `group block py-4 px-4 border-b border-[#C9A86C]/30 transition-all duration-300 ${
                        isActive
                          ? "bg-[#C9A86C]/20 border-l-4 border-l-[#C9A86C]"
                          : "hover:bg-[#C9A86C]/10 border-l-4 border-l-transparent"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-base lg:text-lg font-light transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-[#C9A86C] group-hover:text-white"
                          }`}
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {project.title}
                        </span>
                        <motion.span
                          initial={{ opacity: 0, x: -5 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : -5,
                          }}
                          className="text-[#C9A86C]"
                        >
                          ●
                        </motion.span>
                      </div>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ChildrensBooksLayout;
