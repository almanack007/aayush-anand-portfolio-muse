import newPasscardImage from "@/assets/new_passcard_image.png";
import { motion } from "framer-motion";

const Barcode = () => {
  const bars = [2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 1, 4, 2, 3, 1, 2, 1, 3, 2, 1, 4, 1, 2, 1, 3, 2, 1, 1, 4, 2];
  return (
    <div className="flex flex-col items-center gap-1.5 mt-4">
      <div className="flex items-stretch h-8 w-full bg-transparent justify-between px-2">
        {bars.map((width, idx) => (
          <div 
            key={idx} 
            className="bg-[#FFF8F1]" 
            style={{ width: `${width * 0.75}px` }} 
          />
        ))}
      </div>
      <span className="font-mono text-[8px] tracking-[0.25em] text-[#FFF8F1]/70">AAYUSH.ANAND.2026</span>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-8 border-t border-foreground/15 relative overflow-hidden bg-[#111111] text-white">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", 
          backgroundSize: "20px 20px" 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.h2 
          className="text-display-md font-display mb-20 text-white tracking-tighter"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          BUILDER PROFILE /
        </motion.h2>

        {/* Blueprint Layout Container */}
        <div className="relative flex flex-col items-center justify-center w-full py-10 min-h-[580px]">
          
          {/* SVG Funky Arrow Connectors (Visible on desktop only) */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600">
            <defs>
              <marker id="funky-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#FFF8F1" />
              </marker>
            </defs>

            {/* AI Enthusiast connector - Funky curved solid line */}
            <path d="M 120 70 Q 210 60 260 140" fill="none" stroke="#FFF8F1" strokeWidth="1.5" markerEnd="url(#funky-arrow)" />
            
            {/* Ships Fast connector - Funky curved solid line */}
            <path d="M 100 280 Q 160 270 220 280" fill="none" stroke="#FFF8F1" strokeWidth="1.5" markerEnd="url(#funky-arrow)" />
            
            {/* Gym Maniac connector - Funky curved solid line */}
            <path d="M 880 150 Q 770 140 710 170" fill="none" stroke="#FFF8F1" strokeWidth="1.5" markerEnd="url(#funky-arrow)" />
            
            {/* Musician connector - Funky curved solid line */}
            <path d="M 860 480 Q 790 480 705 405" fill="none" stroke="#FFF8F1" strokeWidth="1.5" markerEnd="url(#funky-arrow)" />
          </svg>

          {/* 1. FLOATING DESKTOP LABELS (Positioned relative to container) */}
          {/* Top Left - AI Enthusiast */}
          <div className="hidden lg:block absolute left-[3%] top-[45px] text-xs font-mono tracking-widest text-[#FFF8F1]/65">
            AI ENTHUSIAST
          </div>

          {/* Left - Ships Fast */}
          <div className="hidden lg:block absolute left-[1%] top-[270px] text-xs font-mono tracking-widest text-[#FFF8F1]/65">
            SHIPS FAST
          </div>

          {/* Top Right - Gym Maniac */}
          <div className="hidden lg:block absolute right-[10%] top-[140px] text-xs font-mono tracking-widest text-[#FFF8F1]/65">
            GYM MANIAC
          </div>

          {/* Bottom Right - Musician */}
          <div className="hidden lg:block absolute right-[12%] bottom-[110px] text-xs font-mono tracking-widest text-[#FFF8F1]/65">
            MUSICIAN
          </div>

          {/* 2. PRODUCT BUILDER CARD (The main badge element) */}
          <motion.div 
            className="w-full max-w-[620px] rounded-3xl p-[6px] z-10 relative"
            style={{ backgroundColor: "#B23A2B" }} // Outer Border (Deep Red)
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            {/* Inner Border (Deep Orange) */}
            <div className="w-full h-full rounded-[20px] p-[6px] bg-[#D35400]">
              
              {/* Card Body (Warm Orange) */}
              <div 
                className="w-full h-full rounded-[14px] p-6 md:p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden select-none"
                style={{ backgroundColor: "#F28C28" }}
              >
                {/* Holographic grid shading overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-repeat" 
                  style={{ backgroundImage: "radial-gradient(#FFF8F1 20%, transparent 20%)", backgroundSize: "6px 6px" }} 
                />

                {/* Left Side: Side Profile Image & Barcode */}
                <div className="w-full md:w-[42%] flex flex-col justify-between z-10 relative">
                  
                  {/* Photo container with orange side profile silhouette */}
                  <div className="w-full aspect-[4/5] bg-[#D35400] border-2 border-[#FFF8F1]/40 overflow-hidden relative rounded-md">
                    <img 
                      src={newPasscardImage} 
                      alt="Aayush Anand Profile"
                      className="w-full h-full object-cover object-center grayscale contrast-[1.3] brightness-[0.85] mix-blend-multiply"
                    />
                    
                    {/* Small AI node icon floating near the photo inside the card */}
                    <div className="absolute top-2 right-2 bg-black/20 p-1 rounded backdrop-blur-[2px] border border-[#FFF8F1]/20">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#FFF8F1]" strokeWidth="2.5">
                        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                  </div>

                  {/* Barcode */}
                  <Barcode />
                </div>

                {/* Vertical Divider line */}
                <div className="hidden md:block w-[1.5px] bg-[#FFF8F1]/30 self-stretch my-2 z-10" />

                {/* Right Side: Metadata Fields */}
                <div className="w-full md:w-[58%] flex flex-col justify-between text-[#FFF8F1] z-10 relative">
                  
                  {/* Card Title & Gym Dumbbell Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-display text-2xl tracking-tighter text-[#FFF8F1] font-black">
                      PASS CARD
                    </span>
                    
                    {/* Dumbbell Icon representing Gym Maniac */}
                    <div className="bg-black/20 p-1.5 rounded backdrop-blur-[2px] border border-[#FFF8F1]/20">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#FFF8F1]" strokeWidth="2.5">
                        <rect x="2" y="9" width="3" height="6" rx="1" />
                        <rect x="19" y="9" width="3" height="6" rx="1" />
                        <rect x="5" y="7" width="1.5" height="10" rx="0.5" />
                        <rect x="17" y="7" width="1.5" height="10" rx="0.5" />
                        <line x1="6.5" y1="12" x2="17.5" y2="12" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Metadata Content fields */}
                  <div className="space-y-4 font-mono text-xs">
                    <div>
                      <span className="text-[#FFF8F1]/50 text-[9px] uppercase tracking-widest block">NAME</span>
                      <span className="font-display text-base tracking-wide uppercase font-bold">AAYUSH ANAND</span>
                    </div>

                    <div>
                      <span className="text-[#FFF8F1]/50 text-[9px] uppercase tracking-widest block">ROLE</span>
                      <span className="text-sm font-semibold uppercase">AI PRODUCT MANAGER</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-[#FFF8F1]/50 text-[9px] uppercase tracking-widest block">FOCUS</span>
                        <span className="text-xs uppercase font-medium">0→1 AI PRODUCTS</span>
                      </div>
                      <div>
                        <span className="text-[#FFF8F1]/50 text-[9px] uppercase tracking-widest block">EXPERTISE</span>
                        <span className="text-xs uppercase font-medium">AI • PRODUCT • GTM</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[#FFF8F1]/50 text-[9px] uppercase tracking-widest block">CURRENTLY</span>
                      <span className="text-xs uppercase font-medium">BUILDING AI WORKFLOWS</span>
                    </div>

                    <div>
                      <span className="text-[#FFF8F1]/50 text-[9px] uppercase tracking-widest block">STATUS</span>
                      <span className="text-xs uppercase font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                        AVAILABLE FOR WORK
                      </span>
                    </div>
                  </div>

                  {/* Bottom Icons (Musician Record Player) */}
                  <div className="flex justify-between items-center mt-6 pt-3 border-t border-[#FFF8F1]/10">
                    
                    {/* Telemetry mark */}
                    <div className="flex items-center gap-1 bg-black/10 px-2 py-0.5 rounded border border-[#FFF8F1]/10">
                      <span className="text-[8px] font-mono text-[#FFF8F1]/70">SYS.007</span>
                    </div>

                    {/* Musician Record Player Icon */}
                    <div className="bg-black/20 p-1.5 rounded backdrop-blur-[2px] border border-[#FFF8F1]/20">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#FFF8F1]" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="11" cy="11" r="5" />
                        <circle cx="11" cy="11" r="1.5" fill="currentColor" />
                        <path d="M16 11l2-7h3" />
                      </svg>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </motion.div>

          {/* 3. MOBILE ONLY ANNOTATIONS LIST (Visible only on mobile/tablet) */}
          <div className="lg:hidden w-full max-w-[500px] mt-6 grid grid-cols-2 gap-3 text-center">
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs font-mono uppercase text-white/80">
              ⚡ AI ENTHUSIAST
            </div>
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs font-mono uppercase text-white/80">
              🏋️‍♂️ GYM MANIAC
            </div>
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs font-mono uppercase text-white/80">
              🎹 MUSICIAN
            </div>
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs font-mono uppercase text-[#FFF8F1]/80" style={{ borderColor: "#D35400" }}>
              🟢 AVAILABLE FOR WORK
            </div>
          </div>

        </div>

        {/* 5. BOTTOM CAPTIONS (Editorial quotes pointing to execution) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-4xl mx-auto text-center md:text-left">
          <div className="space-y-1">
            <span className="font-mono text-[9px] text-white/30 uppercase block">OUTCOME // 01</span>
            <p className="font-body text-base text-white/85">Build → Learn → Iterate</p>
          </div>
          <div className="space-y-1 sm:text-center">
            <span className="font-mono text-[9px] text-white/30 uppercase block">EXECUTION // 02</span>
            <p className="font-body text-base text-white/85">Ships Fast</p>
          </div>
          <div className="space-y-1 sm:text-right">
            <span className="font-mono text-[9px] text-white/30 uppercase block">MINDSET // 03</span>
            <p className="font-body text-base text-white/85">Customer First</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;