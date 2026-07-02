import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const services = [
  {
    title: "AI Product Strategy",
    description: "Turn ambiguous customer problems into validated product decisions through research, prioritization, and rapid iteration.",
    tags: ["Strategy", "Discovery", "Systems"],
    focus: ["Customer discovery", "Problem framing", "PRDs", "Roadmapping", "Experimentation"],
    code: "[PM.01]",
  },
  {
    title: "AI Workflows & Agents",
    description: "Design and implement production-ready agentic workflows, LLM integrations, and voice agents that solve real-world problems.",
    tags: ["AI", "Execution", "Systems"],
    focus: ["Voice agents", "LLM products", "Prompt engineering", "Automation", "Evaluation"],
    code: "[PM.02]",
  },
  {
    title: "Product Discovery",
    description: "Validate assumptions and prototype solutions rapidly through user interviews, JTBD frameworks, and target validation.",
    tags: ["Discovery", "Strategy", "Execution"],
    focus: ["User interviews", "JTBD", "Research", "Validation", "Rapid prototyping"],
    code: "[PM.03]",
  },
  {
    title: "GTM & Product Launch",
    description: "Lead cross-functional product launches, drive customer activation, and optimize growth loops for new product introductions.",
    tags: ["Growth", "Strategy", "Execution"],
    focus: ["Launch strategy", "Activation", "Adoption", "Growth loops", "Cross-functional execution"],
    code: "[PM.04]",
  },
  {
    title: "Rapid MVP Development",
    description: "Build and deploy working proofs-of-concept from 0-to-1 using high-velocity tools, custom code, and database backends.",
    tags: ["Execution", "AI", "Systems"],
    focus: ["Lovable", "Bolt", "React & Firebase", "Vite & GitHub", "n8n & Supabase"],
    code: "[PM.05]",
  },
  {
    title: "Founder & Product Operations",
    description: "Establish operational cadences, GTM operations, and fundraising materials for early-stage startup scalability.",
    tags: ["Systems", "Growth", "Strategy"],
    focus: ["Cross-functional execution", "Fundraising support", "Business strategy", "Operational systems", "0→1 execution"],
    code: "[PM.06]",
  },
];

// Individual Interactive Card Component with Interstellar warp & hover
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for subtle 3D hover tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Springs for smooth movement
  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 20 });
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Viewport entrance
  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15,
        delay: index * 0.06
      } 
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ perspective: 1000 }}
    >
      {/* Sleek backing shadow card (displacement offset on hover, no glow) */}
      <div 
        className="absolute inset-0 rounded-2xl border border-white/[0.03] group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300 pointer-events-none -z-10"
      />

      {/* Main Card Element */}
      <motion.article 
        className="p-8 rounded-2xl border border-white/10 group-hover:border-white/20 relative z-10 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 bg-[#111111]/70 backdrop-blur-md h-full flex flex-col justify-between"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="space-y-4">
          {/* Header Row */}
          <div className="flex justify-between items-start" style={{ transform: "translateZ(10px)" }}>
            <h3 className="text-xl md:text-2.5xl font-display uppercase tracking-tight text-white/90">
              {service.title}
            </h3>
            <span className="font-mono text-[9px] text-white/30">{service.code}</span>
          </div>
          
          {/* Outcome-Oriented Labels */}
          <div className="flex gap-2 flex-wrap" style={{ transform: "translateZ(15px)" }}>
            {service.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="text-[9px] font-mono tracking-widest text-white/40 uppercase bg-white/[0.03] px-2 py-0.5 border border-white/[0.05]">
                {tag}
              </span>
            ))}
          </div>
          
          {/* One-Line Impact Statement */}
          <p className="text-sm md:text-base font-semibold leading-relaxed text-white" style={{ transform: "translateZ(12px)" }}>
            {service.description}
          </p>
        </div>

        {/* Focus Area Bullets (at bottom) */}
        <div className="mt-6 space-y-2 border-t border-white/[0.05] pt-4" style={{ transform: "translateZ(10px)" }}>
          <span className="font-mono text-[8px] tracking-widest text-white/30 uppercase block mb-2">Focus Areas //</span>
          <div className="flex gap-x-3 gap-y-1.5 flex-wrap">
            {service.focus.map((item, focusIndex) => (
              <span key={focusIndex} className="font-body text-xs text-white/70 flex items-center gap-1.5">
                <span className="text-white/30 font-mono text-[9px]">•</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-black py-24 md:py-32 border-t border-foreground/20 px-4 md:px-8 relative overflow-hidden text-white">
      {/* Subtle tesseract grid line */}
      <div className="absolute right-24 top-0 bottom-0 w-[1px] bg-white/[0.04] hidden md:block" />

      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-display-md font-display mb-20 text-white tracking-tighter"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          PRODUCT EXPERTISE /
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;