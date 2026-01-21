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

const DesktopMenu = () => {
  const [isChildrensOpen, setIsChildrensOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="hidden lg:flex fixed top-0 right-0 w-[320px] h-screen flex-col bg-[#2D4A43]"
      style={{ zIndex: 100 }}
    >
      <div className="flex-1 flex flex-col justify-center px-8">
        <ul className="space-y-0">
          {/* Home */}
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="w-full py-5 text-[#C9A86C] text-lg text-center border-b border-[#C9A86C]/30 hover:text-white transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Home
            </button>
          </li>

          {/* About Me */}
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="w-full py-5 text-[#C9A86C] text-lg text-center border-b border-[#C9A86C]/30 hover:text-white transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              About Me
            </button>
          </li>

          {/* Children's Book Illustrations - Accordion */}
          <li>
            <button
              onClick={() => setIsChildrensOpen(!isChildrensOpen)}
              className="w-full py-5 text-[#C9A86C] text-lg text-center border-b border-[#C9A86C]/30 hover:text-white transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span>{isChildrensOpen ? "▼" : "►"}</span>
              <span>Children's book illustrations</span>
            </button>

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
                        className="w-full py-3 text-[#C9A86C] text-sm text-center hover:text-white hover:bg-[#C9A86C]/10 transition-colors"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
          <li>
            <button
              onClick={() => scrollToSection("label-design")}
              className="w-full py-5 text-[#C9A86C] text-lg text-center border-b border-[#C9A86C]/30 hover:text-white transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Label design
            </button>
          </li>

          {/* Logos */}
          <li>
            <button
              onClick={() => scrollToSection("logos")}
              className="w-full py-5 text-[#C9A86C] text-lg text-center border-b border-[#C9A86C]/30 hover:text-white transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Logos
            </button>
          </li>

          {/* Print and Digital Branding */}
          <li>
            <button
              onClick={() => scrollToSection("branding")}
              className="w-full py-5 text-[#C9A86C] text-lg text-center border-b border-[#C9A86C]/30 hover:text-white transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Print and Digital Branding
            </button>
          </li>

          {/* Contact */}
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-5 text-[#C9A86C] text-lg text-center border-b border-[#C9A86C]/30 hover:text-white transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopMenu;
