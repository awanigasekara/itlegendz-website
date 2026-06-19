import React from "react";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoIcon from "../images/itlegendz-icon.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact_form" },
];

const serviceLinks = [
  "Custom Software",
  "Web Development",
  "E-Commerce",
  "AI & Automation",
  "Software Testing & QA",
  "Maintenance & Support",
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />

      <div className="site-container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a className="site-footer__logo" href="#home" aria-label="ITLEGENDZ home">
              <span className="site-footer__logo-mark" aria-hidden="true">
                <img src={logoIcon} alt="" />
              </span>
              <span className="site-footer__wordmark">ITLEGENDZ</span>
            </a>
            <p>
              UK-based technology company helping businesses build smarter websites, software,
              automation systems, and long-term digital foundations.
            </p>
            <a
              className="site-footer__cta"
              href="#contact_form"
              aria-label="Start your ITLEGENDZ project"
            >
              Start Your Project
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>

          <nav className="site-footer__column" aria-label="Footer navigation">
            <h2>Company</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__column">
            <h2>Services</h2>
            <ul>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column site-footer__contact">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="tel:+447432742427">
                  <Phone aria-hidden="true" size={17} />
                  +44 7432 742427
                </a>
              </li>
              <li>
                <a href="mailto:info@itlegendz.co.uk">
                  <Mail aria-hidden="true" size={17} />
                  info@itlegendz.co.uk
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/itlegendz-ltd" target="_blank" rel="noreferrer">
                  <Linkedin aria-hidden="true" size={17} />
                  itlegendz-ltd
                </a>
              </li>
              <li>
                <span>
                  <MapPin aria-hidden="true" size={17} />
                  Bainton Grove, Hull, England
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {year} ITLEGENDZ LTD. All rights reserved.</p>
          <a href="#home" aria-label="Back to top">
            Back to top
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
