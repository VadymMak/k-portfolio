import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/1.png";

const Home = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Content */}
      <div className="w-full lg:w-[60%] bg-[#F5EFE6] min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link to="/">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#D4C4A8] border-4 border-[#C9B896] flex items-center justify-center shadow-sm">
              <span className="text-[#8B5A3C] text-5xl lg:text-6xl font-serif font-medium tracking-wide">
                AK
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1
            className="text-[#8B5A3C] text-lg lg:text-xl tracking-[0.25em] uppercase mb-1"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Professional
          </h1>
          <h2
            className="text-[#8B5A3C] text-lg lg:text-xl tracking-[0.15em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Illustrator/Grafik Designer
          </h2>
        </motion.div>

        {/* Hero Image - Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-lg lg:max-w-xl"
        >
          <div
            className="relative overflow-hidden shadow-xl"
            style={{
              borderRadius: "50% 50% 4% 4% / 30% 30% 4% 4%",
            }}
          >
            <img
              src={heroImage}
              alt="Landscape with mountains and cypress trees"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Right Side - Navigation (Desktop only, mobile uses Layout hamburger) */}
      <nav className="hidden lg:flex w-[40%] bg-[#2D4A43] min-h-screen flex-col items-center justify-center px-12">
        <ul className="space-y-2 text-center w-full max-w-xs">
          {[
            { path: "/about", label: "About Me" },
            {
              path: "/childrens-books",
              label: "Children's book\nillustrations",
            },
            { path: "/label-design", label: "Label design" },
            { path: "/logos", label: "Logos" },
            { path: "/branding", label: "Print and Digital\nBranding" },
            { path: "/contact", label: "Contact Me" },
          ].map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Link
                to={item.path}
                className="block py-5 text-[#C9A86C] hover:text-white transition-colors duration-300 text-lg font-light tracking-wide border-b border-[#C9A86C]/30 whitespace-pre-line"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
