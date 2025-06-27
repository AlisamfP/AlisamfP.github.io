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
    <div className={`app ${activeSection !== "splash" ? "active" : "splash"}`}>
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main
        className={`main-content ${activeSection === "splash" ? "hidden" : ""}`}
        aria-hidden={activeSection === "splash"}
      >
        {activeSection !== "splash" && (
          <>
            <div className="page-content">{renderContent()}</div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
