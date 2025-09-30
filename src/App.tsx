import { useCallback, useMemo, useRef, useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

import type { Section } from "./types/section-types";

import "./App.css";
import "./index.css";


function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  const mainContentRef = useRef<HTMLElement>(null);

  const handleNavigation = useCallback((section: Section) => {
    setActiveSection(section);
    if(mainContentRef.current) {
      mainContentRef.current.scrollTo(0,0)
    }
  }, []);

  const renderContent = useMemo(() => {


    switch (activeSection) {
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About onNavigate={handleNavigation} />;

    }
  }, [activeSection, handleNavigation]);

  return (
    <div className="app-container">
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      <main ref={mainContentRef} className="main-content">
        <div className="page-content">
          {renderContent}
        </div>

        <BackToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
