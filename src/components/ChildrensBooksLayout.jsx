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
    <div className="min-h-screen">
      {/* Content Area - with padding for mobile bottom menu */}
      <div className="w-full bg-[#F5EFE6] min-h-screen pb-24 lg:pb-0">
        <Outlet />
      </div>

      {/* Mobile: Fixed bottom horizontal submenu */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 overflow-x-auto"
        style={{
          backgroundColor: "rgba(45, 74, 67, 0.95)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <ul className="flex whitespace-nowrap px-2 py-3">
          {bookProjects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="flex-shrink-0"
            >
              <NavLink
                to={`/childrens-books/${project.id}`}
                className={({ isActive }) =>
                  `block px-3 py-2 mx-1 rounded-full text-xs transition-all duration-300 ${
                    isActive
                      ? "bg-[#C9A86C] text-[#2D4A43]"
                      : "text-[#C9A86C] border border-[#C9A86C]/50"
                  }`
                }
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                {project.title.length > 15
                  ? project.title.substring(0, 15) + "..."
                  : project.title}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Desktop: Fixed right submenu - SAME SIZE as main menu (320px) */}
      <nav className="hidden lg:flex fixed right-[320px] top-0 h-screen w-[320px] bg-[#2D4A43] flex-col items-center justify-center px-8">
        <ul className="w-full max-w-[280px]">
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
                  `block h-[72px] flex items-center justify-center text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
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
                  {project.title}
                </span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ChildrensBooksLayout;
