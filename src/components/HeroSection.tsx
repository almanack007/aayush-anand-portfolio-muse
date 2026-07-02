import headshot from "@/assets/headshot.png";
import { Button } from "@/components/ui/button";
import { Linkedin, FolderOpen, Mail, ArrowUpRight, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Custom detailed line-art Laptop SVG matching the vintage look
// Custom detailed line-art Laptop SVG matching the Bauhaus look
const VintageLaptop = () => (
  <svg 
    viewBox="0 0 100 80" 
    className="absolute -bottom-[2px] -left-[10px] w-[52px] h-[42px] opacity-95 drop-shadow-sm pointer-events-none z-20"
    filter="url(#crayon-texture)"
  >
    {/* Base / Chassis */}
    <polygon 
      points="5,60 95,60 85,72 15,72" 
      fill="#FFFDF9" 
      stroke="#3D3A35" 
      strokeWidth="1.75" 
      strokeLinejoin="round" 
    />
    {/* Screen Frame */}
    <polygon 
      points="20,15 80,15 80,58 20,58" 
      fill="#FFFDF9" 
      stroke="#3D3A35" 
      strokeWidth="1.75" 
      strokeLinejoin="round" 
    />
    {/* Abstract code/interface lines on screen */}
    <line x1="30" y1="25" x2="70" y2="25" stroke="#3D3A35" strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="30" y1="33" x2="60" y2="33" stroke="#3D3A35" strokeWidth="1.5" />
    <line x1="30" y1="41" x2="65" y2="41" stroke="#3D3A35" strokeWidth="1.5" />
    {/* Glowing cursor dot on screen */}
    <circle cx="68" cy="41" r="1.5" fill="#B23A2B" />
    {/* Keyboard lines */}
    <line x1="20" y1="64" x2="80" y2="64" stroke="#3D3A35" strokeWidth="1" strokeDasharray="4 2" />
    <line x1="25" y1="68" x2="75" y2="68" stroke="#3D3A35" strokeWidth="1.5" />
  </svg>
);

// Bauhaus Geometric Telemetry widget to replace the guitar
const BauhausWidget = () => (
  <svg 
    viewBox="0 0 80 120" 
    className="absolute bottom-2 -right-[16px] w-[46px] h-[72px] opacity-95 drop-shadow-sm pointer-events-none z-20"
    filter="url(#crayon-texture)"
  >
    {/* Vertical Axis line */}
    <line x1="40" y1="10" x2="40" y2="110" stroke="#3D3A35" strokeWidth="1.5" />
    {/* Tick marks along axis */}
    <line x1="35" y1="30" x2="45" y2="30" stroke="#3D3A35" strokeWidth="1" />
    <line x1="32" y1="60" x2="48" y2="60" stroke="#3D3A35" strokeWidth="1.5" />
    <line x1="35" y1="90" x2="45" y2="90" stroke="#3D3A35" strokeWidth="1" />
    
    {/* Terracotta solid circle */}
    <circle cx="40" cy="60" r="16" fill="#B23A2B" opacity="0.85" stroke="#3D3A35" strokeWidth="1.5" />
    
    {/* Intersecting outline Triangle */}
    <polygon 
      points="40,25 62,75 18,75" 
      fill="none" 
      stroke="#3D3A35" 
      strokeWidth="1.75" 
      strokeLinejoin="round" 
    />
    
    {/* Concentric telemetry orbit rings */}
    <circle cx="40" cy="60" r="26" fill="none" stroke="#3D3A35" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

// Vintage Red Postmark Seal overlay
const PostmarkSeal = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#B23A2B] fill-none" filter="url(#crayon-texture)">
    <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="3 2" />
    <circle cx="50" cy="50" r="39" strokeWidth="1" />
    <circle cx="50" cy="50" r="32" strokeWidth="0.5" strokeDasharray="1 1" />
    <path id="curve" d="M 22 50 A 28 28 0 0 1 78 50" />
    <text className="font-mono text-[5px] fill-[#B23A2B] tracking-[0.2em]">
      <textPath href="#curve" startOffset="50%" textAnchor="middle">
        PUNE POSTAL SEALS
      </textPath>
    </text>
    <line x1="23" y1="50" x2="77" y2="50" strokeWidth="0.75" />
    <text x="50" y="47" className="font-mono text-[5px] fill-[#B23A2B] font-bold text-center" textAnchor="middle">
      03.JULY.2026
    </text>
    <text x="50" y="56" className="font-mono text-[5px] fill-[#B23A2B] text-center" textAnchor="middle">
      MISSION // 007
    </text>
    <line x1="26" y1="59" x2="74" y2="59" strokeWidth="0.5" strokeDasharray="2 1" />
  </svg>
);

// Looped typewriter effect component for welcome greeting
const TypewriterText = () => {
  const text = "hey there! I'm";
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let isMounted = true;
    const runTypewriter = async () => {
      while (isMounted) {
        // Type out
        for (let i = 0; i <= text.length; i++) {
          if (!isMounted) return;
          setDisplayedText(text.substring(0, i));
          await new Promise((r) => setTimeout(r, 110));
        }
        // Pause at the end
        await new Promise((r) => setTimeout(r, 2200));
        // Backspace/delete
        for (let i = text.length; i >= 0; i--) {
          if (!isMounted) return;
          setDisplayedText(text.substring(0, i));
          await new Promise((r) => setTimeout(r, 50));
        }
        // Pause before restart
        await new Promise((r) => setTimeout(r, 800));
      }
    };
    runTypewriter();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="font-mono text-xs tracking-widest text-[#B23A2B] uppercase flex items-center h-4 select-none">
      <span>[ {displayedText}</span>
      <span className="w-1.5 h-3 bg-[#B23A2B] ml-0.5 animate-pulse" />
      <span className="ml-0.5"> ]</span>
    </div>
  );
};

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
      },
    },
  };

  const letterRevealVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="section-light min-h-screen pt-28 pb-24 lg:pb-28 relative flex items-center overflow-hidden">
      {/* Drifting horizontal orbital line in the background */}
      <motion.div 
        className="absolute left-0 right-0 h-[1px] bg-foreground/5 top-[45%] pointer-events-none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 0.2 }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Headline details */}
          <motion.div 
            className="order-2 lg:order-1 space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name Details */}
            <div className="space-y-3">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-display leading-none tracking-tighter">
                <div className="overflow-hidden h-[1.1em] flex items-center">
                  <motion.span 
                    className="block text-foreground"
                    variants={letterRevealVariants}
                  >
                    AAYUSH
                  </motion.span>
                </div>
                <div className="overflow-hidden h-[1.1em] flex items-center">
                  <motion.span 
                    className="block text-foreground/45"
                    variants={letterRevealVariants}
                  >
                    ANAND
                  </motion.span>
                </div>
              </h1>

              <motion.div 
                className="flex items-center gap-3 pt-2"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center cursor-pointer hover:border-foreground"
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 90
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <ArrowRight className="w-5 h-5 text-foreground/60" />
                </motion.div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl font-body leading-relaxed text-muted-foreground max-w-lg"
              variants={itemVariants}
            >
              I scale products from 0→1 across Product Strategy, GTM Operations & Venture Fundraising.
            </motion.p>

            {/* Buttons: Contact & Download Resume */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              variants={itemVariants}
            >
              {/* Get in Touch CTA */}
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm tracking-wider px-8 py-6 rounded-none relative overflow-hidden group"
              >
                <span className="relative z-10">GET IN TOUCH</span>
              </Button>

              {/* Download Resume CTA */}
              <a 
                href="https://drive.google.com/file/d/1fO33bXFuPFEaAWxIHeME1HWQKZL_bHsy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-transparent border border-foreground/30 text-foreground hover:bg-foreground/5 hover:text-foreground transition-all text-sm tracking-wider px-8 py-6 rounded-none flex items-center gap-2 shadow-none"
                >
                  <Download className="w-4 h-4" />
                  <span>ACCESS RESUME</span>
                </Button>
              </a>

              <motion.div
                animate={{ 
                  y: [0, -4, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut" 
                }}
                className="hidden sm:block ml-2"
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </motion.div>
            
            {/* Social/Navigation Links */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              variants={itemVariants}
            >
              <motion.a 
                href="https://www.linkedin.com/in/aayush-anand05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.button 
                onClick={scrollToProjects}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View Projects"
                whileHover={{ scale: 1.1 }}
              >
                <FolderOpen className="w-5 h-5" />
              </motion.button>
              <motion.a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=theaayush9431@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Endurance Gravitational Rings */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end relative pt-12 pb-24 lg:py-12">
            
            {/* Stamp & Typewriter Unified Wrapper (Guarantees perfect centering and spacing) */}
            <div className="flex flex-col items-center w-[320px] md:w-[360px] relative z-10">
              
              {/* Typewriter animated greeting centered directly above the card wrapper */}
              <TypewriterText />

              <motion.div 
                className="relative w-full aspect-square flex items-center justify-center mt-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
              >
              {/* Endurance Orbital Outer Ring */}
              <motion.div 
                className="absolute rounded-full border border-foreground/[0.06] w-[130%] h-[130%]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              />

              {/* Endurance Segmented Middle Ring */}
              <motion.div 
                className="absolute rounded-full border border-dashed border-foreground/[0.08] w-[115%] h-[115%]"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
              />

              {/* Telemetry Inner Ring */}
              <motion.div 
                className="absolute rounded-full border border-foreground/[0.04] w-[102%] h-[102%] flex items-center justify-center"
              >
                <div className="absolute top-0 w-2 h-2 rounded-full bg-foreground/15" />
                <div className="absolute bottom-0 w-2 h-2 rounded-full bg-foreground/15" />
              </motion.div>

              {/* Perforated Postage Stamp Container (Semi-transparent cream) */}
              <div 
                className="relative w-[320px] h-[380px] bg-[#F4EFE6]/85 backdrop-blur-[1.5px] border border-[#3D3A35]/20 shadow-xl p-3.5 overflow-hidden rounded-none z-10 flex flex-col justify-between text-[#3D3A35]"
              >
                {/* Global SVG Filters for crayon/rough hand-drawn texture */}
                <svg className="absolute w-0 h-0 pointer-events-none">
                  <defs>
                    <filter id="crayon-texture" x="-10%" y="-10%" width="120%" height="120%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </defs>
                </svg>



                {/* Perforated holes around the stamp edge (Extremely realistic, fine, close-spaced teeth) */}
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={`t-${i}`} className="absolute w-[10px] h-[10px] rounded-full bg-background -top-[5px]" style={{ left: `${(i + 1) * 3.84}%`, transform: 'translateX(-50%)' }} />
                ))}
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={`b-${i}`} className="absolute w-[10px] h-[10px] rounded-full bg-background -bottom-[5px]" style={{ left: `${(i + 1) * 3.84}%`, transform: 'translateX(-50%)' }} />
                ))}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={`l-${i}`} className="absolute w-[10px] h-[10px] rounded-full bg-background -left-[5px]" style={{ top: `${(i + 1) * 3.22}%`, transform: 'translateY(-50%)' }} />
                ))}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={`r-${i}`} className="absolute w-[10px] h-[10px] rounded-full bg-background -right-[5px]" style={{ top: `${(i + 1) * 3.22}%`, transform: 'translateY(-50%)' }} />
                ))}

                {/* Stamp Inner Border */}
                <div className="w-full h-full border border-dashed border-[#B23A2B]/40 flex flex-col justify-between p-3.5">
                  
                  {/* Top stamp header */}
                  <div className="flex justify-between items-center text-[8px] font-mono text-[#3D3A35]/70 tracking-wider">
                    <span>POSTAGE //</span>
                    <span>SYS // 007</span>
                  </div>

                  {/* Photo & Barcode block (Photo centered, barcode absolute on the left margin) */}
                  <div className="my-2 relative w-full h-[176px] flex items-center justify-center">
                    
                    {/* Vertical Barcode on Left Margin */}
                    <div className="absolute left-1 top-0 bottom-0 w-5 flex flex-col items-center justify-between py-1 z-20">
                      <div className="flex flex-col justify-between h-28 w-4 px-0.5">
                        {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 1, 4, 2, 3].map((width, idx) => (
                          <div 
                            key={idx} 
                            className="bg-[#3D3A35] w-full" 
                            style={{ height: `${width * 0.65}px` }} 
                          />
                        ))}
                      </div>
                      {/* Vertical labels */}
                      <span 
                        className="font-mono text-[5.5px] text-[#3D3A35]/65 tracking-[0.25em] origin-top-left -rotate-90 absolute left-2.5 bottom-1.5 whitespace-nowrap uppercase"
                      >
                        CRAFTING • SOLVING • SHIPPING
                      </span>
                    </div>

                    {/* Centered Stamp Photo (Enlarged - Original Color) */}
                    <div className="w-[205px] h-[176px] border border-[#3D3A35]/30 bg-transparent overflow-visible relative z-10">
                      <img 
                        src={headshot} 
                        alt="Aayush Anand Stamp" 
                        className="w-full h-full object-cover object-center" 
                      />

                      <BauhausWidget />
                    </div>

                  </div>

                  {/* Bottom stamp footer details */}
                  <div className="border-t border-[#3D3A35]/30 pt-2 flex flex-col gap-1.5">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="font-display text-base font-black tracking-tight text-[#B23A2B] uppercase leading-none">
                          AAYUSH ANAND
                        </div>
                        <div className="text-[8px] font-mono text-[#3D3A35]/70 tracking-widest uppercase mt-0.5">
                          AI PRODUCT BUILDER
                        </div>
                      </div>
                      
                      <div className="font-mono text-[6.5px] text-[#3D3A35]/85 space-y-0.5 text-right pl-2 border-l border-[#3D3A35]/20">
                        <div><span className="text-[#3D3A35]/50">FOCUS //</span> 0→1 PRODUCTS</div>
                        <div><span className="text-[#3D3A35]/50">TOOLS //</span> IDEAS TO IMPACT</div>
                      </div>
                    </div>

                    {/* Bottom annotation text */}
                    <div className="border-t border-[#3D3A35]/15 pt-1.5 flex justify-between text-[6.5px] font-mono text-[#3D3A35]/50 tracking-wider">
                      <span>DESIGNING SOLUTIONS.</span>
                      <span>★</span>
                      <span>BUILDING FUTURE.</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>

        {/* Available for Work telemetry info - Bottom Right */}
        <div className="absolute bottom-4 right-8 hidden lg:block text-right space-y-1 z-30">
          <motion.div 
            className="flex items-center justify-end gap-2 text-xs font-mono tracking-widest text-muted-foreground uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Blinking telemetry green indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>STATUS // ACTIVE</span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.p 
              className="text-3xl md:text-4xl font-display leading-none text-foreground uppercase tracking-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              AVAILABLE FOR WORK
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
