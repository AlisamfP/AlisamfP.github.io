import React, { useEffect, useState } from "react";
import logo from "/wordmark-color-no-background.svg";

import type { Section } from "../types/section-types";

import "../styles/header.css";

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const NAV_ITEMS: Section[] = ["about", "projects", "contact"];
const MOBILE_BREAKPOINT = "(max-width: 767px)";

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(MOBILE_BREAKPOINT).matches
  );

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: Section
  ) => {
    e.preventDefault();
    onNavigate(section);
    if(isMobile) setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const getDisplayName = (section: Section): string => {
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  // sorting nav items to ensure tab order is consistent with active items
  const sortedNavItems = NAV_ITEMS.sort((section: Section) => {
    return activeSection === section ? 0 : 1;
  });

  // determine nav classes based on mobile state
  const getNavClasses = () => {
    if (!isMobile) return "navigation-wrapper";
    return `navigation-wrapper ${isNavOpen ? "nav-open" : "nav-closed"}`
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      // check to see if we're in mobile size
      const isNowMobile = e.matches;
      setIsMobile(isNowMobile);

      // if we've resized to mobile, hide the nav
      if (e.matches) {
        setIsNavOpen(false);
      }
    };
    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Alisa Palson Wordmark" className="logo-image" />
      </div>
      <button
        aria-label={isNavOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        aria-expanded={isNavOpen}
        className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group md:hidden"
        onClick={toggleNav}
      >
        <div
          className={`${genericHamburgerLine} ${isNavOpen ? "rotate-45 translate-y-3" : ""
            } opacity-50 group-hover:opacity-100`}
        />
        <div
          className={`${genericHamburgerLine} ${isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div
          className={`${genericHamburgerLine} ${isNavOpen ? "-rotate-45 -translate-y-3" : ""
            } opacity-50 group-hover:opacity-100`}
        />
      </button>

      <nav aria-label="Main navigation" className={getNavClasses()}>
        <ul className="navigation-list">
          {sortedNavItems.map((section) => {
            const isActive = section === activeSection;
            return (
              <li
                key={section}
                className={`nav-item ${isActive ? "nav-item--active" : ""}`}
              >
                <a
                  href={`#${section}`}
                  className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
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
