import React from "react";
import logo from "/wordmark-color-no-background.svg"; 

import type { Section } from "../types/section-types";

interface Props {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: Section[] = ["about", "projects", "contact"];

const Header: React.FC<Props> = ({ activeSection, onNavigate }) => {

  return (
    <header className="header active w-full md:h-full border-b-2 border-[#003333] md:border-0 md:p-4 flex flex-col items-center">
      <nav aria-label="Main navigation" className="w-full">
        <ul className="nav-list gap-2 md:gap-6 p-0 m-0 list-none items-center w-full grid grid-cols-[2fr_1fr] md:flex md:flex-col md:items-end md:justify-center md:h-screen md:relative md:min-h-24">
          {navItems.map((item) => (
            <li key={item} className={`nav-item ${item === activeSection ? "active-item order-1 md:absolute md:top-1 md:-right-2" : ""} md:order-2`}
            >
              <a
                href={`#${item}`}
                className={`nav-link text-[#003333] hover:border-[#003333] decoration-inherit border-b-2 border-transparent ${item === activeSection ? "font-extrabold border-b-2 border-current bg-[#f5eae0] text-2xl pr-1" : "no-underline text-inherit text-[1.1rem]"}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item);
                }}
                >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          <li className="logo-container flex justify-end col-[1/2] row-[1/5] md:order-1">
            <img src={logo} alt="Alisa Palson Wordmark" className="w-full min-w-40 max-w-[300px] md:min-w-52 md:max-w-full h-auto" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;