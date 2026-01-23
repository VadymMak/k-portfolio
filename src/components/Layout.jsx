import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.layout}>
      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Header */}
        <Header />

        {/* Content */}
        {children}
      </div>

      {/* Desktop Menu */}
      <DesktopMenu />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default Layout;