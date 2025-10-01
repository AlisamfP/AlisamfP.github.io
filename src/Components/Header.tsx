import React from "react";
import logo from "/wordmark-color-no-background.svg";

import type { Section } from "../types/section-types";

import "./header.css";

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const NAV_ITEMS: Section[] = ["about", "projects", "contact"];

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const navRefs = React.useRef<Record<Section, HTMLLIElement | null>>({
    about: null,
    projects: null,
    contact: null,
  });
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: Section
  ) => {
    e.preventDefault();
    onNavigate(section);
  };

  const getDisplayName = (section: Section): string => {
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Alisa Palson Wordmark" className="logo-image" />
      </div>
      <nav aria-label="Main navigation" className="navigation-wrapper">
        <ul className="navigation-list">
          {NAV_ITEMS.map((section) => {
            const isActive = section === activeSection;
            return (
              <li
                key={section}
                ref={(el) => { navRefs.current[section] = el; }}
                className={`nav-item ${
                  isActive ? "nav-item--active" : ""
                }`}
              >
                <a
                  href={`#${section}`}
                  className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                  onClick={(e) => handleNavClick(e, section)}
                >
                  {getDisplayName(section)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
