import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/about', label: 'About Me' },
    { path: '/childrens-books', label: "Children's book illustrations" },
    { path: '/label-design', label: 'Label design' },
    { path: '/logos', label: 'Logos' },
    { path: '/branding', label: 'Print and Digital Branding' },
    { path: '/contact', label: 'Contact Me' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Main Content Area */}
      <main className="flex-1 lg:mr-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Desktop Navigation - Fixed Right Sidebar */}
      <nav className="hidden lg:flex fixed right-0 top-0 h-screen w-80 bg-[#2D4A43] flex-col items-center justify-center px-8">
        <NavLink to="/" className="mb-12">
          <motion.div 
            className="w-24 h-24 rounded-full bg-[#C9A86C]/20 border-2 border-[#C9A86C]/40 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[#C9A86C] text-3xl font-serif font-semibold">AK</span>
          </motion.div>
        </NavLink>

        <ul className="space-y-6 text-center">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.path}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 text-[#C9A86C] hover:text-white transition-colors duration-300 text-lg font-light tracking-wide relative group ${
                    isActive ? 'text-white' : ''
                  }`
                }
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C9A86C] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-[#2D4A43] rounded-full flex items-center justify-center shadow-lg"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-[#C9A86C] block"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-[#C9A86C] block"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-[#C9A86C] block"
          />
        </div>
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-[#2D4A43] z-40 flex flex-col items-center justify-center"
          >
            <NavLink 
              to="/" 
              className="mb-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-20 h-20 rounded-full bg-[#C9A86C]/20 border-2 border-[#C9A86C]/40 flex items-center justify-center">
                <span className="text-[#C9A86C] text-2xl font-serif font-semibold">AK</span>
              </div>
            </NavLink>

            <ul className="space-y-4 text-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 px-4 text-[#C9A86C] hover:text-white transition-colors duration-300 text-xl ${
                        isActive ? 'text-white' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout
