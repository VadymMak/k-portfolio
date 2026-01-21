import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-[#F5EFE6] py-4 px-6 lg:px-12">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#D4C4A8] border-2 border-[#C9B896]/50 flex items-center justify-center shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="text-[#8B5A3C] text-2xl lg:text-3xl font-medium"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              AK
            </span>
          </motion.div>
        </Link>

        {/* Title */}
        <div>
          <h1
            className="text-[#8B5A3C] text-xs lg:text-sm tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Professional
          </h1>
          <h2
            className="text-[#8B5A3C] text-xs lg:text-sm tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Illustrator/Grafik Designer
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
