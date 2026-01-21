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
      <div className="w-full lg:w-[50%] bg-[#F5EFE6] min-h-screen">
        <Outlet />
      </div>

      {/* Middle - Sticky Submenu (Semi-transparent) */}
      <div
        className="w-full lg:w-[250px] lg:fixed lg:right-[320px] lg:top-0 lg:h-screen lg:overflow-y-auto"
        style={{
          backgroundColor: "rgba(45, 74, 67, 0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="p-6 lg:p-8 flex flex-col justify-center min-h-full">
          {/* Book Projects List */}
          <nav>
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
                    {({ isActive }) => (
                      <span
                        className={`text-[17px] tracking-wide transition-colors duration-300 ${
                          isActive ? "text-white" : ""
                        }`}
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 400,
                        }}
                      >
                        {project.title}
                      </span>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Right side space for main menu */}
      <div className="hidden lg:block lg:w-[320px]" />
    </div>
  );
};

export default ChildrensBooksLayout;
