import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/about", label: "About Me" },
  {
    path: "/childrens-books",
    label: "Children's book",
    label2: "illustrations",
  },
  { path: "/label-design", label: "Label design" },
  { path: "/logos", label: "Logos" },
  { path: "/branding", label: "Print and Digital", label2: "Branding" },
  { path: "/contact", label: "Contact Me" },
];

// Menu component defined outside Layout
const MenuItems = ({ onItemClick, isMobile = false }) => (
  <ul className={`w-full ${isMobile ? "max-w-xs" : "max-w-[280px]"}`}>
    {navItems.map((item, index) => (
      <motion.li
        key={item.path}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.08 }}
      >
        <NavLink
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `block py-5 text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
              isActive ? "text-white" : "text-[#C9A86C] hover:text-white"
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
            {item.label}
          </span>
          {item.label2 && (
            <>
              <br />
              <span
                className="text-[17px] tracking-wide"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                {item.label2}
              </span>
            </>
          )}
        </NavLink>
      </motion.li>
    ))}
  </ul>
);

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Main Content Area */}
      <main className={`${!isHomePage ? "lg:mr-[320px]" : ""}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Desktop Navigation - Fixed Right Sidebar (hidden on home page) */}
      {!isHomePage && (
        <nav className="hidden lg:flex fixed right-0 top-0 h-screen w-[320px] bg-[#2D4A43] flex-col items-center justify-center px-6">
          {/* Logo - link to home */}
          <NavLink to="/" className="mb-10">
            <motion.div
              className="w-24 h-24 rounded-full bg-[#D4C4A8] border-[3px] border-[#B8A888]/50 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className="text-[#8B5A3C] text-3xl tracking-wide"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                AK
              </span>
            </motion.div>
          </NavLink>

          <MenuItems />
        </nav>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-[#2D4A43] rounded-full flex items-center justify-center shadow-lg"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5 bg-[#C9A86C] block origin-center"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-[#C9A86C] block"
          />
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5 bg-[#C9A86C] block origin-center"
          />
        </div>
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-[#2D4A43] z-40 flex flex-col items-center justify-center px-8"
          >
            {/* Logo - link to home */}
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mb-8"
            >
              <div className="w-20 h-20 rounded-full bg-[#D4C4A8] border-[3px] border-[#B8A888]/50 flex items-center justify-center">
                <span
                  className="text-[#8B5A3C] text-2xl tracking-wide"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                  }}
                >
                  AK
                </span>
              </div>
            </NavLink>

            <MenuItems
              onItemClick={() => setIsMobileMenuOpen(false)}
              isMobile={true}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
