import { useEffect, useState } from "react";
import { TbArrowUp } from "react-icons/tb";


const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const scrollElem = document.querySelector(".main-content");
    if(!scrollElem) return;
    
    const toggleVisible = () => {
      setVisible(scrollElem.scrollTop > 100);
    };
    scrollElem.addEventListener("scroll", toggleVisible);

    toggleVisible();
    return () => scrollElem.removeEventListener("scroll", toggleVisible);
  }, []);

  const handleBackToTop = () => {
    document.querySelector("main")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleBackToTop}
      className={`${
        visible
          ? "fixed bottom-4 right-4 z-50 p-3 bg-[#006666] text-white rounded-full shadow-lg hover:bg-[#003333] focus:outline-none focus:ring-2 focus:ring-[#003333]"
          : "hidden"
      }`}
      aria-label="Back to top"
    >
      <TbArrowUp />
    </button>
  );
};

export default BackToTop;
