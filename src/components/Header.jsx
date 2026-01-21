import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-[#F5EFE6] py-4 px-6 lg:px-12 border-b border-[#D4C4A8]/50">
      <div className="flex items-center justify-center gap-4">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#D4C4A8] border-2 border-[#C9B896]/50 flex items-center justify-center shadow-sm flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="text-[#8B5A3C] text-xl lg:text-2xl font-medium"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              AK
            </span>
          </motion.div>
        </Link>

        {/* Title - one line */}
        <h1
          className="text-[#8B5A3C] text-xs lg:text-sm tracking-[0.2em] uppercase whitespace-nowrap"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          Professional Illustrator / Grafik Designer
        </h1>
      </div>
    </header>
  );
};

export default Header;
