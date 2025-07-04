import React from "react";
import logo from "/wordmark-color-no-background.svg"; 

type Section = "splash" | "about" | "projects" | "contact";

interface Props {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: Section[] = ["about", "projects", "contact"];

const Header: React.FC<Props> = ({ activeSection, onNavigate }) => {
  const isSplash = activeSection === "splash";

  return (
    <header className={`header ${isSplash ? "splash grow justify-center" : "active w-full md:h-full border-b-2 border-[#003333] md:border-0 md:p-4"} flex flex-col items-center`}>
      <nav aria-label="Main navigation" className="w-full">
        <ul className={`nav-list gap-2 md:gap-6 p-0 m-0 list-none items-center
            ${isSplash 
              ? "grid grid-cols-[1fr_min-content_1fr] justify-center" 
              : "w-full grid grid-cols-2 md:flex md:flex-col md:items-end md:justify-center md:h-screen md:relative"}`}>
          {navItems.map((item) => (
            <li key={item} className={`nav-item ${item === activeSection ? "active-item order-1 md:absolute md:top-1 md:-right-2" : ""} ${isSplash ? "col-span-1" : "md:order-2"}`}
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
          <div className={`${isSplash ? "col-[2/3] row-start-1 row-end-4 inline-block h-[250px] min-h-[1em] w-[2px] self-stretch bg-[#003333]" : "hidden"}`}></div>

          <li className={`logo-container flex justify-end ${isSplash ? "col-start-1 col-end-2 row-start-1 row-end-4 ml-4" : "col-[1/2] row-[1/4] md:order-1"}`}>
            <img src={logo} alt="Alisa Palson Wordmark" className="w-full max-w-[300px] md:min-w-52 md:max-w-full h-auto" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;