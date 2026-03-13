import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 800; // كل ما تزودي الرقم الحركة تبقى أبطأ
    const start = window.scrollY;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 w-12 h-12 rounded-full 
      bg-gradient-to-r from-green-400 to-blue-500 
      text-white flex items-center justify-center shadow-lg z-20"
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;