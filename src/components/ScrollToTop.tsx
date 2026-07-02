import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Launch animation timeout
    setTimeout(() => {
      setIsLaunching(false);
    }, 1000);
  };

  // Circumference of our progress circle is 2 * PI * r (r = 18px -> 113.1px)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 select-none cursor-pointer"
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Main Button Container */}
          <div className="relative w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-foreground/10 shadow-lg flex items-center justify-center group overflow-hidden">
            
            {/* SVG Progress Circle Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              {/* Outer Track Ring */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-foreground/5 fill-none"
                strokeWidth="1.5"
              />
              {/* Active Progress Fill */}
              <motion.circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-[#B23A2B] fill-none"
                strokeWidth="2"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Inner Rocket Icon / Bauhaus Rocket Arrow */}
            <div className="relative w-6 h-6 flex items-center justify-center overflow-visible">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={
                  isLaunching
                    ? {
                        y: [-25, 25, 0],
                        opacity: [0, 0, 1],
                        scale: [0.8, 0.8, 1],
                        transition: {
                          duration: 0.9,
                          times: [0, 0.45, 0.9],
                          ease: "easeInOut"
                        }
                      }
                    : {
                        y: [0, -2, 0],
                        transition: {
                          repeat: Infinity,
                          duration: 2.2,
                          ease: "easeInOut"
                        }
                      }
                }
              >
                {/* Bauhaus Space Shuttle/Rocket Vector */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-foreground group-hover:stroke-[#B23A2B] transition-colors"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Rocket Nosecone / Triangular Wing tips */}
                  <path d="M12 2L4 12h16z" />
                  {/* Thruster Base */}
                  <path d="M12 12v6M9 16v3M15 16v3" fill="none" strokeWidth="1.5" />
                  {/* Engine plume flame (tiny red dot on hover/active) */}
                  <motion.circle
                    cx="12"
                    cy="20"
                    r="1.25"
                    className="fill-[#B23A2B] stroke-none opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Telemetry Scroll percentage indicator (appears on hover) */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="font-mono text-[9px] text-[#B23A2B] font-bold">
                {Math.round(scrollProgress)}%
              </span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
