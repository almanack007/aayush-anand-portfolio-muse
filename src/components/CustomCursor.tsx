import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover";

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [hoverLabel, setHoverLabel] = useState("");

  // Position coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end cinematic trailing lag
  const springConfig = { stiffness: 450, damping: 28, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], .cursor-pointer, input, textarea, select");
      
      if (interactive) {
        setCursorState("hover");
        
        // Contextual HUD labels based on target element type
        if (interactive.closest("nav")) {
          setHoverLabel("HUD // NAV");
        } else if (interactive.closest("#contact") || interactive.tagName === "INPUT" || interactive.tagName === "TEXTAREA") {
          setHoverLabel("HUD // INPUT");
        } else if (interactive.closest("#projects") || interactive.closest("#work") || interactive.closest("#arsenal")) {
          setHoverLabel("HUD // DATA");
        } else if (interactive.getAttribute("href")?.includes("linkedin") || interactive.getAttribute("href")?.includes("mailto")) {
          setHoverLabel("HUD // LINK");
        } else {
          setHoverLabel("HUD // SELECT");
        }
      } else {
        setCursorState("default");
        setHoverLabel("");
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* 1. Core Target Dot (Center Point) */}
      <motion.div 
        className="w-1.5 h-1.5 bg-foreground rounded-full absolute -translate-x-1/2 -translate-y-1/2" 
        animate={{
          scale: cursorState === "hover" ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />

      {/* 2. Crosshair Ticks (Cardinal Directions - Default State) */}
      {cursorState === "default" && (
        <>
          {/* North */}
          <div className="absolute w-[1px] h-[4px] bg-foreground/60 -translate-x-1/2 -translate-y-[8px]" />
          {/* South */}
          <div className="absolute w-[1px] h-[4px] bg-foreground/60 -translate-x-1/2 translate-y-[4px]" />
          {/* West */}
          <div className="absolute w-[4px] h-[1px] bg-foreground/60 -translate-x-[8px] -translate-y-1/2" />
          {/* East */}
          <div className="absolute w-[4px] h-[1px] bg-foreground/60 translate-x-[4px] -translate-y-1/2" />
        </>
      )}

      {/* 3. Concentric Spinning Ring (Hover State) */}
      <motion.div
        className="border border-foreground/30 rounded-full absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: cursorState === "hover" ? 44 : 0,
          height: cursorState === "hover" ? 44 : 0,
          opacity: cursorState === "hover" ? 0.7 : 0,
          rotate: cursorState === "hover" ? 360 : 0,
        }}
        transition={{
          width: { type: "spring", stiffness: 200, damping: 18 },
          height: { type: "spring", stiffness: 200, damping: 18 },
          rotate: { repeat: Infinity, ease: "linear", duration: 12 },
        }}
      >
        {/* Endurance Segment Ticks inside the ring */}
        <div className="absolute w-[1px] h-full border-t border-b border-foreground/50" />
        <div className="absolute h-[1px] w-full border-l border-r border-foreground/50 animate-pulse" />
      </motion.div>

      {/* 4. Monospace HUD Label (Hover State) */}
      <motion.div
        className="absolute left-6 top-0 -translate-y-1/2 font-mono text-[9px] tracking-widest text-foreground select-none pointer-events-none whitespace-nowrap opacity-60"
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: cursorState === "hover" ? 0.6 : 0,
          x: cursorState === "hover" ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        {hoverLabel}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
