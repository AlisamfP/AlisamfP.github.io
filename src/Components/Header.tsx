import React from "react";
import logo from "/wordmark-color-no-background.svg"; 
// import "../App.css";
// import "../index.css"

type Section = "splash" | "about" | "projects" | "contact";

interface Props {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: Section[] = ["about", "projects", "contact"];

const Header: React.FC<Props> = ({ activeSection, onNavigate }) => {
  const isSplash = activeSection === "splash";

  return (
    <header className={`header ${isSplash ? "splash grow justify-center" : "active w-full md:h-full"} flex flex-col items-center`}>
      <nav aria-label="Main navigation" className="w-full">
        <ul className={`nav-list gap-6 p-0 m-0 list-none items-center
            ${isSplash 
              ? "grid grid-cols-2 justify-center" 
              : "w-full grid grid-cols-2 md:flex md:flex-col md:items-end md:justify-center md:h-screen md:relative"}`}>
          {navItems.map((item) => (
            <li key={item} className={`nav-item ${item === activeSection ? "active-item order-1 md:absolute md:top-[1em] md:-right-[1em]" : ""} ${isSplash ? "col-span-1" : "md:order-2"}`}
            >
              <a
                href={`#${item}`}
                className={`nav-link ${item === activeSection ? "font-extrabold border-b-2 border-current" : "no-underline text-inherit text-[1.1rem]"}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item);
                }}
                >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          <li className={`logo-container ${isSplash ? "col-start-1 col-end-2 row-start-1 row-end-4 ml-12" : "col-[1/2] row-[1/4] md:order-1"}`}>
            <img src={logo} alt="Alisa Palson Wordmark" className="w-full md:w-[200px] h-auto" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;