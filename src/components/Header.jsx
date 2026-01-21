import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-10 bg-[#F5EFE6] border-b border-[#D4C4A8]/50 relative"
      style={{ padding: "24px 40px" }}
    >
      {/* Logo - Left */}
      <Link to="/" className="flex-shrink-0 relative z-10">
        <motion.div
          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#D4C4A8] border-2 border-[#9f988b]/50 flex items-center justify-center shadow-sm"
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

      {/* Title - Centered in content area */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className="text-[#8B5A3C] text-sm sm:text-base lg:text-lg tracking-[0.15em] lg:tracking-[0.2em] uppercase whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
          }}
        >
          Professional Illustrator / Grafik Designer
        </h1>
      </div>
    </header>
  );
};

export default Header;
