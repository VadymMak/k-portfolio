import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/1.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5EFE6] flex flex-col items-center justify-center px-8 lg:px-16 py-12">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Link to="/">
          <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-[#D4C4A8] border-[3px] border-[#B8A888]/50 flex items-center justify-center">
            <span
              className="text-[#8B5A3C] text-5xl lg:text-[3.5rem] tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
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
          className="text-[#8B5A3C] text-base lg:text-lg tracking-[0.3em] uppercase mb-1"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          Professional
        </h1>
        <h2
          className="text-[#8B5A3C] text-base lg:text-lg tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          Illustrator/Grafik Designer
        </h2>
      </motion.div>

      {/* Hero Image - Landscape */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-md lg:max-w-lg"
      >
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "50% 50% 5% 5% / 35% 35% 5% 5%",
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
  );
};

export default Home;
