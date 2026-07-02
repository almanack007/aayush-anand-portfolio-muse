import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const workData = [
  {
    id: "neobim",
    number: "[EXP.01]",
    title: "NEOBIM",
    role: "Product & Growth Specialist",
    date: "Dec 2025 - June 2026",
    tags: "AI SAAS / CONSTRUCTION TECH / GTM & OPS",
    color: "#ffffff",
    descriptionPoints: [
      "Owned 0-to-1 execution across product, GTM, revenue metrics, and operations for NeoCheck and NeoMind - two AI-first SaaS products for the construction & architecture industry.",
      "Drove strategic initiatives across customer growth, partnerships, and direct outreach - became the top-performing closer on the team with the highest deals closed.",
      "Built and maintained operating cadences across customer feedback, product iteration, and GTM sequencing - ensuring ideas moved from decision to execution.",
      "Used AI tools (Cursor, Claude) to automate GTM workflows, outreach sequencing, and customer research synthesis, cutting manual work and compressing timelines."
    ],
    summary: "Worked directly with founders on the highest-priority weekly problems to scale GTM operations and streamline product iterations, closing 20+ paying enterprise customers and establishing ~25% MoM growth."
  },
  {
    id: "zentrades",
    number: "[EXP.02]",
    title: "ZENTRADES.AI",
    role: "Associate - Founder's Office",
    date: "Feb 2024 - Nov 2025",
    tags: "FOUNDER'S OFFICE / AI VOICE / FUNDRAISING",
    color: "#ffffff",
    descriptionPoints: [
      "Core team member for the 0-to-1 launch of CLARA AI (agentic AI Voice product) - owning PRD, customer discovery, implementation, and GTM execution driving $100K ARR in 2 months.",
      "Led GTM initiatives contributing to $1.5M+ in new ACV; co-led due diligence for a fundraising round that secured $500K from US investors.",
      "Identified broken GTM and operational processes, diagnosed root causes, and built repeatable systems contributing to 35%+ revenue growth in 3 months.",
      "Co-managed funding round, securing strategic investments and converting enterprise customers into investors ($300K+)."
    ],
    summary: "Worked directly with the Founder across product, GTM, strategic operations, and fundraising. Managed OKR frameworks, investor relations, and co-led US expansions."
  },
  {
    id: "msde",
    number: "[EXP.03]",
    title: "MSDE GOVT. OF INDIA",
    role: "Project Manager & Mentor",
    date: "Jan 2024 - Feb 2024",
    tags: "GOVERNMENT / PROGRAM MANAGEMENT / ROBOTICS",
    color: "#ffffff",
    descriptionPoints: [
      "Managed execution of a ₹50 Lakh government-funded robotics education initiative across training, operations, and stakeholder coordination.",
      "Designed and scaled hands-on robotics learning programs impacting 300+ students while supporting reporting and operational visibility."
    ],
    summary: "Led program management, operations, and reporting for public sector robotics education initiative, securing continued funding through measurable impact reporting."
  },
  {
    id: "robogears",
    number: "[EXP.04]",
    title: "ROBOGEARS (STEALTH)",
    role: "Co-Founder",
    date: "Nov 2023 - Mar 2024",
    tags: "ENTREPRENEURSHIP / HARDWARE / SUPPLY CHAIN",
    descriptionPoints: [
      "Identified market gap for affordable robotics components among engineering students.",
      "Built supply chain from scratch and validated proof-of-concept with 50+ units sold in first run."
    ],
    summary: "Co-founded hardware venture, validated student demand, and managed local sourcing and initial operations before transitioning to full-time startup operations roles."
  },
];

const WorkExperienceSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="work" className="py-24 md:py-32 px-4 md:px-8 border-t border-foreground/15 relative overflow-hidden bg-background/40 text-foreground">
      {/* Drifting background grid coordinate line */}
      <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-foreground/[0.04] hidden lg:block" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="text-display-md font-display mb-20 tracking-tighter"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          WORK EXPERIENCE /
        </motion.h2>

        <div className="w-full space-y-4">
          {workData.map((job, index) => {
            const isOpen = activeId === job.id;
            return (
              <motion.div
                key={job.id}
                className="border-b border-foreground/10 pb-6 relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
              >
                {/* Monochromatic line draw */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  style={{ originX: 0 }}
                />

                {/* Sleek hover backdrop */}
                <div 
                  className="absolute inset-0 bg-foreground/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />

                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(job.id)}
                  className="w-full text-left py-6 flex items-start justify-between group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
                    {/* EXP telemetry number */}
                    <div className="col-span-2">
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                        {job.number}
                      </span>
                    </div>

                    {/* Company info */}
                    <div className="col-span-7 space-y-1">
                      <h3 
                        className="text-2xl md:text-3xl font-display uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-1"
                        style={{ opacity: isOpen ? 1 : 0.8 }}
                      >
                        {job.title}
                      </h3>
                      <p className="font-body text-base font-semibold text-foreground/80">
                        {job.role}
                      </p>
                      <p className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
                        {job.tags}
                      </p>
                    </div>

                    {/* Dates */}
                    <div className="col-span-3 text-left md:text-right pt-1">
                      <p className="text-xs font-mono tracking-wider text-muted-foreground uppercase">{job.date}</p>
                    </div>
                  </div>

                  {/* Morphing Toggle Box */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="p-1.5 border border-foreground/20 rounded-none group-hover:border-foreground/60 self-start ml-4"
                  >
                    <Plus className="w-5 h-5 text-foreground/60" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 24 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-0 md:pl-20 pt-2 pb-6 space-y-4">
                        {job.descriptionPoints.length > 0 && (
                          <ul className="space-y-3 font-body text-sm md:text-base text-foreground/80">
                            {job.descriptionPoints.map((point, pIdx) => (
                              <motion.li 
                                key={pIdx} 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: pIdx * 0.05 }}
                              >
                                <span className="text-foreground/40 font-mono mt-0.5">•</span>
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                        <motion.p 
                          className="font-body text-sm md:text-base leading-relaxed text-muted-foreground bg-foreground/[0.02] p-4 border-l border-foreground/35"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {job.summary}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;