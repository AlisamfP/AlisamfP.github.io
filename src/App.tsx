import { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

import "./App.css";
import "./index.css";

type Section =  "about" | "projects" | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <About onNavigate={setActiveSection} />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };


  return (
    <div className="app h-screen items-center flex flex-col md:justify-center md:grid active grid-cols-1 md:grid-rows-[min-content_auto_min-content] justify-items-end md:grid-cols-[1fr_2fr]">
      <Header
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
      <main
        className="w-full p-1 md:p-2 justify-self-start md:overflow-auto md:h-full md:pl-0"
      >

            <div className="page-content flex flex-col justify-center h-full md:border-l-2 md:border-[#003333] p-2">{renderContent()}</div>

        <BackToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
