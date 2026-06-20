import React from "react";
import { Globe2, Linkedin, Mail, Phone, Sparkles } from "lucide-react";

const highlights = [
  { label: "UK-Based Company", Icon: Globe2 },
  { label: "Global Delivery Excellence", Icon: Sparkles },
];

function TopHeader() {
  return (
    <div className="top-header">
      <div className="site-container top-header__inner">
        <div className="top-header__group top-header__group--left">
          {highlights.map(({ label, Icon }) => (
            <span className="top-header__item" key={label}>
              <Icon aria-hidden="true" size={15} />
              {label}
            </span>
          ))}
        </div>

        <div className="top-header__group top-header__group--right">
          <a className="top-header__link top-header__email" href="mailto:info@itlegendz.co.uk">
            <Mail aria-hidden="true" size={15} />
            info@itlegendz.co.uk
          </a>
          <a className="top-header__link" href="tel:+447432742427">
            <Phone aria-hidden="true" size={15} />
            +44 7432 742427
          </a>
          <a
            className="top-header__icon-link"
            href="https://www.linkedin.com/company/itlegendz"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit ITLEGENDZ on LinkedIn"
          >
            <Linkedin aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
