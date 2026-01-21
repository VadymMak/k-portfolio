import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Header from "./Header";

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're in children's books section
  const isChildrensBooks = location.pathname.startsWith("/childrens-books");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Main Content Area - with fixed width excluding side menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 overflow-y-auto bg-[#F5EFE6] ${
          isChildrensBooks ? "lg:right-[640px]" : "lg:right-[320px]"
        } right-0`}
      >
        {/* Header - only in content area */}
        <Header />

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
      </div>

      {/* Desktop Menu - visible on ALL pages */}
      <DesktopMenu />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default Layout;
