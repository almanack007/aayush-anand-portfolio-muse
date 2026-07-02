import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Grid settings
    const spacing = 45;
    let cols = Math.ceil(width / spacing) + 1;
    let rows = Math.ceil(height / spacing) + 1;

    interface GridPoint {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
    }

    let points: GridPoint[] = [];

    const initPoints = () => {
      points = [];
      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          points.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    initPoints();

    // Dust particles (Interstellar space dust)
    interface DustParticle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
    }

    const dustParticles: DustParticle[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedY: -(Math.random() * 0.4 + 0.1),
      opacity: Math.random() * 0.4 + 0.1,
    }));

    // Telemetry items
    interface TelemetryItem {
      text: string;
      x: number;
      y: number;
      opacity: number;
      tickRate: number;
      lastTick: number;
    }

    const telemetryItems: TelemetryItem[] = [
      { text: "COORDS / 34.0522° N", x: 30, y: 120, opacity: 0.25, tickRate: 3000, lastTick: 0 },
      { text: "SYS / ENDURANCE_PLG", x: 30, y: 140, opacity: 0.25, tickRate: 5000, lastTick: 0 },
      { text: "GRAVITY / 1.00G", x: 30, y: 160, opacity: 0.25, tickRate: 1500, lastTick: 0 },
      { text: "RANGE / 0.42 LY", x: 30, y: 180, opacity: 0.25, tickRate: 4000, lastTick: 0 },
    ];

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;
      strength: number;
    }
    let ripples: Ripple[] = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initPoints();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 280,
        speed: 6.0,
        opacity: 1,
        strength: 55,
      });
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        ripples.push({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          radius: 0,
          maxRadius: 220,
          speed: 5.5,
          opacity: 1,
          strength: 45,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("touchstart", handleTouchStart);

    const maxDist = 180; // Gravity influence radius
    const gravityForce = 45; // Maximum pull displacement
    const springDamp = 0.88; // Physics rebound dampener
    const springStiff = 0.08; // Physics stiffness

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      // Determine colors based on page mode (light/dark)
      const isDark = document.documentElement.classList.contains("dark") || 
                     document.body.classList.contains("dark") ||
                     getComputedStyle(document.body).backgroundColor.includes("rgb(10") ||
                     getComputedStyle(document.body).backgroundColor.includes("rgb(4");

      const gridColor = isDark ? "rgba(255, 255, 255, 0.075)" : "rgba(0, 0, 0, 0.065)";
      const particleColor = isDark ? "rgba(255, 255, 255, " : "rgba(0, 0, 0, ";
      const telemetryColor = isDark ? "rgba(255, 255, 255, " : "rgba(0, 0, 0, ";

      // 0. Update click ripples
      for (let rIdx = ripples.length - 1; rIdx >= 0; rIdx--) {
        const rip = ripples[rIdx];
        rip.radius += rip.speed;
        rip.opacity = 1 - rip.radius / rip.maxRadius;
        if (rip.radius >= rip.maxRadius) {
          ripples.splice(rIdx, 1);
        }
      }

      // 1. Update and Draw Gravitational Grid Points
      const mouse = mouseRef.current;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        let targetX = p.baseX;
        let targetY = p.baseY;

        if (mouse.active) {
          const dx = mouse.x - p.baseX;
          const dy = mouse.y - p.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            // Gravitational pull towards mouse: scale force by distance
            const force = (1 - dist / maxDist) * gravityForce;
            targetX = p.baseX + (dx / dist) * force;
            targetY = p.baseY + (dy / dist) * force;
          }
        }

        // Apply click ripples displacement (push away from click)
        for (let rIdx = 0; rIdx < ripples.length; rIdx++) {
          const rip = ripples[rIdx];
          const rDx = p.baseX - rip.x;
          const rDy = p.baseY - rip.y;
          const rDist = Math.sqrt(rDx * rDx + rDy * rDy);
          
          const waveWidth = 45;
          if (rDist < rip.radius + waveWidth && rDist > rip.radius - waveWidth) {
            const diff = Math.abs(rDist - rip.radius);
            const factor = (1 - diff / waveWidth) * rip.opacity;
            const pushForce = factor * rip.strength;
            targetX += (rDx / (rDist || 1)) * pushForce;
            targetY += (rDy / (rDist || 1)) * pushForce;
          }
        }

        // Apply simple spring physics to pull points back to target
        const ax = (targetX - p.x) * springStiff;
        const ay = (targetY - p.y) * springStiff;

        p.vx = (p.vx + ax) * springDamp;
        p.vy = (p.vy + ay) * springDamp;

        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw Grid Lines (Horizontal & Vertical)
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      // Draw Horizontal Grid Lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const p = points[r * cols + c];
          if (c === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.stroke();
      }

      // Draw Vertical Grid Lines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const p = points[r * cols + c];
          if (r === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.stroke();
      }

      // Draw click ripple rings (minimal visual wave overlay)
      for (let rIdx = 0; rIdx < ripples.length; rIdx++) {
        const rip = ripples[rIdx];
        ctx.strokeStyle = isDark 
          ? `rgba(255, 255, 255, ${rip.opacity * 0.12})` 
          : `rgba(0, 0, 0, ${rip.opacity * 0.08})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = isDark 
          ? `rgba(255, 255, 255, ${rip.opacity * 0.04})` 
          : `rgba(0, 0, 0, ${rip.opacity * 0.03})`;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 25), 0, Math.PI * 2);
        ctx.stroke();
      }

      // 2. Draw Dust Particles
      for (let i = 0; i < dustParticles.length; i++) {
        const d = dustParticles[i];
        d.y += d.speedY;
        if (d.y < 0) {
          d.y = height;
          d.x = Math.random() * width;
        }

        ctx.fillStyle = `${particleColor}${d.opacity})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw Stark Telemetry Text (HUD Details)
      ctx.font = "9px Courier New, monospace";
      ctx.fillStyle = `${telemetryColor}0.25)`;
      ctx.textAlign = "left";

      for (let i = 0; i < telemetryItems.length; i++) {
        const item = telemetryItems[i];
        
        // Randomly "flicker" values to simulate real telemetry data
        if (timestamp - item.lastTick > item.tickRate) {
          if (item.text.startsWith("GRAVITY")) {
            const grav = (1.00 + (Math.random() - 0.5) * 0.05).toFixed(2);
            item.text = `GRAVITY / ${grav}G`;
          } else if (item.text.startsWith("COORDS")) {
            const min = Math.floor(Math.random() * 60).toString().padStart(2, "0");
            const sec = Math.floor(Math.random() * 60).toString().padStart(2, "0");
            item.text = `COORDS / 34°${min}'${sec}" N`;
          }
          item.lastTick = timestamp;
        }

        ctx.fillText(item.text, item.x, item.y);
      }

      // Time code - top right
      ctx.textAlign = "right";
      const now = new Date();
      const timecode = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}.${(now.getMilliseconds() / 100).toFixed(0)}`;
      ctx.fillText(`M_TIME / ${timecode}`, width - 30, 120);

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "normal" }}
    />
  );
};

export default InteractiveBackground;
