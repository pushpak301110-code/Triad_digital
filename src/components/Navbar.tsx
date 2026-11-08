import { useState } from "react";
import HoverLinks from "./HoverLinks";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./styles/Navbar.css";

const navItems = [
  { label: "ABOUT",      href: "#about"    },
  { label: "WHAT WE DO", href: "#whatwedo" },
  { label: "WORK",       href: "#work"     },
  { label: "CONTACT",    href: "#contact"  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <span className="navbar-title-trio">TRIAD</span> DIGITAL
        </a>

        {/* Desktop nav links */}
        <ul className="navbar-desktop-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                data-href={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <HoverLinks text={item.label} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Mobile drawer */}
        <div
          className={`navbar-mobile-drawer ${
            mobileMenuOpen ? "mobile-drawer-open" : ""
          }`}
        >
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-brand">
              <span className="navbar-title-trio">TRIAD</span> DIGITAL
            </span>
            <button
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaXmark />
            </button>
          </div>

          <ul className="navbar-mobile-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
