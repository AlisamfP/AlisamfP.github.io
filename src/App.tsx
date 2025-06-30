import { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";
import "./index.css";

type Section = "splash" | "about" | "projects" | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("splash");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };


  return (
    <div className={`app h-screen items-center flex flex-col md:justify-center md:grid
      ${activeSection !== "splash"
        ? "active grid-cols-1 md:grid-rows-[min-content_auto_min-content] justify-items-end md:grid-cols-[1fr_2fr]"
        : "splash grid-rows-[auto_min-content]"}`}>
      <Header
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
      <main
        className={`main-content
           ${activeSection === "splash" ? "hidden" : "w-full p-1 md:p-2 justify-self-start md:overflow-auto md:h-full md:pl-0"}`}
        aria-hidden={activeSection === "splash"}
      >
        {activeSection !== "splash" && (
          <>
            <div className="page-content flex flex-col justify-center h-full md:border-l-2 md:border-[#003333] p-2">{renderContent()}</div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
