import React from "react";
import logo from "/wordmark-color-no-background.svg"; 
import "../App.css";
import "../index.css"

type Section = "splash" | "about" | "work" | "contact";

interface Props {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: Section[] = ["about", "work", "contact"];

const Header: React.FC<Props> = ({ activeSection, onNavigate }) => {
  const isSplash = activeSection === "splash";

  return (
    <header className={`header ${isSplash ? "splash" : "active"}`}>
      <nav aria-label="Main navigation">
        <ul className={`nav-list ${isSplash ? "splash" : "active"}`}>
          {navItems.map((item) => (
            <li
              key={item}
              className={`nav-item ${item === activeSection ? "active-item" : ""}`}
            >
              <a
                href={`#${item}`}
                aria-current={item === activeSection ? "page" : undefined}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          {/* Logo in the flow — not absolutely positioned */}
          <li className="logo-container">
            <img src={logo} alt="Alisa Palson Wordmark" className="logo" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;