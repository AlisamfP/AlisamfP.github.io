import { useEffect, useState } from "react";
import Button from "./Button";
import { TbArrowUp } from "react-icons/tb";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  // 768px === md
  // layout changes on md size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollElem = isMobile
      ? window
      : document.querySelector(".main-content");
    if (!scrollElem) return;

    const getScrollTop = () =>
      isMobile ? window.pageYOffset : (scrollElem as Element).scrollTop;

    const toggleVisible = () => {
      setVisible(getScrollTop() > 100);
    };
    scrollElem.addEventListener("scroll", toggleVisible);

    toggleVisible();
    return () => scrollElem.removeEventListener("scroll", toggleVisible);
  }, [isMobile]);

  const handleBackToTop = () => {
    const scrollElem = isMobile
      ? window
      : document.querySelector(".main-content");
    if (!scrollElem) return;
    scrollElem.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="primary"
      onClick={handleBackToTop}
      className={visible ? "fixed bottom-4 right-4 z-50" : "!hidden"}
      ariaLabel="Back to top"
      icon={TbArrowUp}
    />
  );
};

export default BackToTop;
