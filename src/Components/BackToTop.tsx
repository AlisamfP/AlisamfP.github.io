import { useEffect, useState } from "react";
import { TbArrowUp } from "react-icons/tb";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrolled > 100) {
        setVisible(true);
      } else if (scrolled <= 100) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);

    toggleVisible();
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
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
