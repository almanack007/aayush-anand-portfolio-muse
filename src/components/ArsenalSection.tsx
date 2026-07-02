import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "strategy",
    label: "STRATEGY & OPS",
    num: "01",
    skills: [
      "Strategic Operations & Scalability",
      "Go-to-Market (GTM) Strategy",
      "Business & Financial Projections",
      "OKR Planning & Execution",
      "Cross-Functional Team Leadership",
      "Stakeholder & Advisory Board Relations",
      "Fundraising Support & Due Diligence",
      "Investor Communications & PRDs",
    ],
  },
  {
    id: "product",
    label: "PRODUCT & GROWTH",
    num: "02",
    skills: [
      "Zero-to-One Product Launches",
      "Product-Led Growth (PLG) Strategy",
      "Customer Discovery & Discovery Loops",
      "Product Requirements (PRDs) & Roadmaps",
      "User-Centered Design & Prototyping",
      "A/B Testing & Feedback Systems",
      "Competitor Analysis & Market Positioning",
      "Intelligent Candidate ATS Scoring",
    ],
  },
  {
    id: "tools",
    label: "TOOLS & AUTOMATION",
    num: "03",
    skills: [
      "AI Workflow Automations (Make, Zapier)",
      "LLM & Agentic AI Prototyping",
      "Jira, Asana, & Agile PM Frameworks",
      "Figma (User Experience Mockups)",
      "HubSpot CRM & Pipeline Sync",
      "Data Analytics (Power BI, Tableau)",
      "Airtable, Trello, & Workflow Sheets",
      "Cursor, VS Code, & Code editors",
    ],
  },
];

// 3D Isometric SVG Illustrations representing PM & Systems thinking
const StrategyIllustration = () => (
  <motion.svg 
    viewBox="0 0 400 400" 
    className="w-64 h-64 md:w-80 md:h-80 opacity-80"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.8, scale: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
  >
    {/* Central Pillar Line */}
    <motion.line 
      x1="200" y1="80" x2="200" y2="320" 
      stroke="rgba(255,255,255,0.15)" 
      strokeWidth="2" 
      strokeDasharray="4 4"
    />

    {/* Layer 1 - Top (Strategy) */}
    <motion.g
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
      <path d="M 200 100 L 290 140 L 200 180 L 110 140 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <path d="M 200 115 L 260 142 L 200 169 L 140 142 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="200" cy="142" r="4" fill="white" className="animate-pulse" />
    </motion.g>

    {/* Layer 2 - Middle (GTM / Operations) */}
    <motion.g
      animate={{ y: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
    >
      <path d="M 200 180 L 290 220 L 200 260 L 110 220 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      {/* Grid cells inside the middle roadmap layer */}
      <line x1="155" y1="200" x2="245" y2="240" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="245" y1="200" x2="155" y2="240" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="245" cy="200" r="3" fill="rgba(255,255,255,0.6)" />
    </motion.g>

    {/* Layer 3 - Bottom (Scale / Execution) */}
    <motion.g
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
    >
      <path d="M 200 260 L 290 300 L 200 340 L 110 300 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <circle cx="160" cy="290" r="3" fill="rgba(255,255,255,0.4)" />
      <circle cx="200" cy="300" r="3" fill="rgba(255,255,255,0.4)" />
      <circle cx="240" cy="310" r="3" fill="rgba(255,255,255,0.4)" />
    </motion.g>
  </motion.svg>
);

const ProductIllustration = () => (
  <motion.svg 
    viewBox="0 0 400 400" 
    className="w-64 h-64 md:w-80 md:h-80 opacity-80"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.8, scale: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
  >
    {/* Base Grid */}
    <path d="M 200 280 L 320 330 L 200 380 L 80 330 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Main Product Cube (Modular Blocks representing GTM, Discovery, MVP) */}
    <motion.g
      animate={{ 
        y: [0, -10, 0],
        rotateY: [0, 5, 0]
      }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      style={{ transformOrigin: "200px 220px" }}
    >
      {/* Central Base Block */}
      <path d="M 200 160 L 280 200 L 200 240 L 120 200 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M 120 200 L 200 240 L 200 310 L 120 270 Z" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M 200 240 L 280 200 L 280 270 L 200 310 Z" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* Floating Feature Block (MVP iteration module) */}
      <motion.g
        animate={{ y: [-15, -25, -15] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <path d="M 200 90 L 250 115 L 200 140 L 150 115 Z" fill="rgba(255,255,255,0.05)" stroke="white" strokeWidth="1.5" />
        <path d="M 150 115 L 200 140 L 200 180 L 150 155 Z" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1.5" />
        <path d="M 200 140 L 250 115 L 250 155 L 200 180 Z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5" />
      </motion.g>

      {/* Connective Node Lines */}
      <line x1="200" y1="140" x2="200" y2="160" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
    </motion.g>
  </motion.svg>
);

const ToolsIllustration = () => (
  <motion.svg 
    viewBox="0 0 400 400" 
    className="w-64 h-64 md:w-80 md:h-80 opacity-80"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.8, scale: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
  >
    {/* Automation Node Grid */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      style={{ transformOrigin: "200px 200px" }}
    >
      <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
      <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      
      {/* Outer Orbit Nodes (Representing Zapier, HubSpot, Figma) */}
      <circle cx="200" cy="80" r="5" fill="white" />
      <circle cx="320" cy="200" r="5" fill="rgba(255,255,255,0.4)" />
      <circle cx="200" cy="320" r="5" fill="white" />
      <circle cx="80" cy="200" r="5" fill="rgba(255,255,255,0.4)" />
    </motion.g>

    {/* Central Core Processor Plate (AI workflow engine) */}
    <motion.g
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
      <path d="M 200 160 L 260 190 L 200 220 L 140 190 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <path d="M 140 190 L 200 220 L 200 235 L 140 205 Z" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <path d="M 200 220 L 260 190 L 260 205 L 200 235 Z" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Floating Chip Code Core */}
      <motion.g
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ transformOrigin: "200px 190px" }}
      >
        <path d="M 200 170 L 240 190 L 200 210 L 160 190 Z" fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx="200" cy="190" r="3" fill="white" className="animate-ping" />
      </motion.g>
    </motion.g>
  </motion.svg>
);

const ArsenalSection = () => {
  const [activeTab, setActiveTab] = useState("strategy");

  // Map to select the illustration based on active tab
  const getIllustration = () => {
    switch (activeTab) {
      case "strategy":
        return <StrategyIllustration />;
      case "product":
        return <ProductIllustration />;
      case "tools":
        return <ToolsIllustration />;
      default:
        return <StrategyIllustration />;
    }
  };

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="arsenal" className="section-dark py-24 md:py-32 px-4 md:px-8 border-t border-foreground/15 relative overflow-hidden bg-black text-white">
      {/* Drifting horizontal HUD line */}
      <div className="absolute left-0 right-0 h-[1px] bg-white/[0.04] top-[30%] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 gap-6">
          <motion.h2 
            className="text-display-md font-display tracking-tighter"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            CORE ARSENAL /
          </motion.h2>

          {/* Google-Style Sliding Pill Navigation Bar */}
          <div className="relative flex p-1.5 bg-white/[0.03] border border-white/10 rounded-full select-none self-start md:self-auto">
            {categories.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-6 py-2 rounded-full font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 z-10 text-white/60 hover:text-white"
                  style={{ color: isActive ? "white" : "" }}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white/[0.08] border border-white/20 rounded-full -z-0"
                      layoutId="activeTabPill"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Grid (Split layout like Vite features screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[400px]">
          
          {/* Left Side: Skills list */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-white/40">{currentCategory.num}.</span>
              <h3 className="text-xl md:text-2xl font-display uppercase tracking-tight text-white/90">
                {currentCategory.label} SERVICES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="wait">
                {currentCategory.skills.map((skill, index) => (
                  <motion.div
                    key={`${currentCategory.id}-${skill}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.04 }}
                    className="flex items-start gap-3 bg-white/[0.02] hover:bg-white/[0.04] p-4 rounded-xl border border-white/[0.05] hover:border-white/15 transition-all duration-300 group"
                  >
                    <span className="font-mono text-xs text-white/30 group-hover:text-white/80 transition-colors mt-0.5">+</span>
                    <span className="font-body text-sm md:text-base text-white/80 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Animated 3D Isometric Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            {/* HUD frame coordinates box */}
            <div className="absolute top-0 left-0 text-[8px] font-mono text-white/20">TARGET_MESH // SEC_{currentCategory.num}</div>
            <div className="absolute bottom-0 right-0 text-[8px] font-mono text-white/20">GRID_LOCK // LAT_34.05</div>
            
            {/* Decorative background crosshairs */}
            <div className="absolute w-8 h-8 border-t border-l border-white/[0.08] top-0 left-0" />
            <div className="absolute w-8 h-8 border-b border-r border-white/[0.08] bottom-0 right-0" />

            <div className="relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, rotate: -15, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 15, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  className="relative z-10"
                >
                  {getIllustration()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ArsenalSection;