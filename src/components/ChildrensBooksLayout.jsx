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
      {/* Content Area */}
      <div className="w-full lg:w-[50%] bg-[#F5EFE6] min-h-screen pb-48 lg:pb-0">
        <Outlet />
      </div>

      {/* Sticky Submenu - Fixed bottom on mobile, Fixed right on desktop */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-30
          lg:right-[320px] lg:left-auto lg:top-0 lg:bottom-0 lg:w-[250px]
          overflow-x-auto lg:overflow-y-auto
        "
        style={{
          backgroundColor: "rgba(45, 74, 67, 0.95)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {/* Mobile: Horizontal scroll */}
        <nav className="lg:hidden">
          <ul className="flex whitespace-nowrap px-4 py-3">
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
                    `block px-4 py-2 mx-1 rounded-full text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[#C9A86C] text-[#2D4A43]"
                        : "text-[#C9A86C] hover:text-white border border-[#C9A86C]/50"
                    }`
                  }
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                  }}
                >
                  {project.title.length > 20
                    ? project.title.substring(0, 20) + "..."
                    : project.title}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Desktop: Vertical list */}
        <nav className="hidden lg:block">
          <div className="p-6 lg:p-8 flex flex-col justify-center min-h-full">
            <ul>
              {bookProjects.map((project, index) => (
                <motion.li
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={`/childrens-books/${project.id}`}
                    className={({ isActive }) =>
                      `block py-5 text-center border-b border-[#C9A86C]/40 transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-[#C9A86C] hover:text-white"
                      }`
                    }
                  >
                    <span
                      className="text-[17px] tracking-wide"
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
          </div>
        </nav>
      </div>

      {/* Spacer for desktop main menu */}
      <div className="hidden lg:block lg:w-[320px]" />
    </div>
  );
};

export default ChildrensBooksLayout;
