import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoIcon from "../images/itlegendz-icon.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact_form" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`main-nav ${isScrolled ? "main-nav--scrolled" : ""}`}>
      <div className="site-container main-nav__inner">
        <a className="brand" href="#home" aria-label="ITLEGENDZ home" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            <img src={logoIcon} alt="" />
          </span>
          <span className="brand__wordmark">ITLEGENDZ</span>
        </a>

        <button
          className="main-nav__toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>

        <div id="primary-navigation" className={`main-nav__menu ${isOpen ? "is-open" : ""}`}>
          <ul className="main-nav__links">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  className={index === 0 ? "is-active" : undefined}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="main-nav__cta" href="#contact_form" onClick={closeMenu}>
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
