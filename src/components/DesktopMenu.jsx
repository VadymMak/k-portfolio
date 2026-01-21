import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
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

const DesktopMenu = () => {
  return (
    <nav className="hidden lg:flex fixed right-0 top-0 h-screen w-[320px] bg-[#2D4A43] flex-col items-center justify-center px-8 z-30">
      <ul className="w-full max-w-[280px]">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-center h-[72px] text-center border-b border-[#C9A86C]/40 transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#C9A86C] hover:text-white"
                }`
              }
            >
              <span
                className="text-[20px] tracking-wide"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                {item.label}
                {item.label2 && (
                  <>
                    <br />
                    {item.label2}
                  </>
                )}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
