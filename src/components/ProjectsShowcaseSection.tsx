import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

import catchitAiImage from '../assets/catchit-analysis.png';
import resume2websiteImage from '../assets/resume2website-main.png';
import talentfinderImage from '../assets/talentfinder.png';
import youtubeLearningImage from '../assets/youtube-learning.png';

const projectsData = [
  {
    id: "catchit",
    number: "[PROJ.01]",
    title: "CATCHIT AI",
    subtitle: "Voice Agent: Flowra AI",
    tags: "AI VOICE AGENT / LIVEKIT / CRM INTEGRATION",
    description: "Real-time voice processing agent managing inbound calls with LiveKit. Features natural language understanding, automated appointment booking, CRM integration, and seamless human escalation. Handles booking, dispatch, and customer notifications end-to-end.",
    features: [ "LiveKit-based real-time voice processing", "Smart calendar integration & auto-booking", "Automated technician dispatch via SMS", "Human escalation on keyword detection", ],
    imageUrl: catchitAiImage,
  },
  {
    id: "resume2website",
    number: "[PROJ.02]",
    title: "RESUME2WEBSITE",
    subtitle: "",
    tags: "NO-CODE / PORTFOLIO BUILDER / AI",
    description: "Transforms resumes into beautiful portfolio websites instantly. Upload your resume, get AI-powered improvement suggestions, and launch a professional web presence in under 2 minutes. No coding required.",
    features: [ "AI-powered resume analysis", "Instant portfolio generation", "Mobile-responsive designs", "Custom domain support", ],
    imageUrl: resume2websiteImage,
  },
  {
    id: "talentfinder",
    number: "[PROJ.03]",
    title: "TALENT FINDER",
    subtitle: "",
    tags: "AI ATS / RESUME ANALYSIS / PATTERN MATCHING",
    description: "AI-enabled configurable ATS for hiring managers and investors. Analyzes resumes against ICP fit, identifies patterns based on custom keywords, and provides intelligent candidate scoring. Think smart recruiting automation.",
    features: [ "Resume-to-ICP fit analysis", "Configurable keyword patterns", "Intelligent candidate scoring", "Background verification automation", ],
    imageUrl: talentfinderImage,
  },
  {
    id: "youtubeapp",
    number: "[PROJ.04]",
    title: "YOUTUBE TO LEARNING APP",
    subtitle: "",
    tags: "AI / EDTECH / NO-CODE",
    description: "Transform any YouTube video into an interactive learning experience. AI-powered content extraction creates structured courses with quizzes, summaries, and key takeaways automatically.",
    features: [ "Automated content extraction from YouTube", "AI-generated quizzes and summaries", "Interactive learning modules", "Progress tracking and analytics", ],
    imageUrl: youtubeLearningImage,
    demoUrl: "#",
    videoUrl: "#",
  },
];

const ProjectsShowcaseSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8 border-t border-foreground/15 relative overflow-hidden bg-background/40 text-foreground">
      {/* Drifting background telemetry coordinate circle */}
      <div className="absolute right-0 bottom-0 w-[35vw] h-[35vw] rounded-full border border-foreground/[0.02] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 
          className="text-display-md font-display mb-20 tracking-tighter"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          PROJECTS /
        </motion.h2>
        
        <div className="w-full space-y-6">
          {projectsData.map((project, index) => {
            const isOpen = activeId === project.id;
            return (
              <motion.div
                key={project.id}
                className="border-b border-foreground/15 pb-6 relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
              >
                {/* Horizontal line draw */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  style={{ originX: 0 }}
                />

                {/* Hover backdrop */}
                <div 
                  className="absolute inset-0 bg-foreground/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />

                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(project.id)}
                  className="w-full text-left py-6 flex items-start justify-between group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
                    {/* Monospace project code */}
                    <div className="col-span-2">
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                        {project.number}
                      </span>
                    </div>

                    {/* Title & tags */}
                    <div className="col-span-10 space-y-1 pr-4">
                      <h3 
                        className="text-2xl md:text-3xl font-display uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-1"
                        style={{ opacity: isOpen ? 1 : 0.8 }}
                      >
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="font-body text-base font-semibold text-foreground/80">{project.subtitle}</p>
                      )}
                      <p className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">{project.tags}</p>
                      {!isOpen && (
                        <p className="text-sm font-body text-muted-foreground line-clamp-1 mt-2">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Morphing Toggle Box */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="p-1.5 border border-foreground/20 rounded-none group-hover:border-foreground/60 self-start"
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
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 pb-8 pl-0 md:pl-20">
                        {/* Left Info Column */}
                        <div className="lg:col-span-6 space-y-6">
                          <p className="font-body text-sm md:text-base leading-relaxed text-foreground/95">
                            {project.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
                              Key Features //
                            </h4>
                            <ul className="space-y-2 font-body text-sm md:text-base">
                              {project.features.map((feature, fIdx) => (
                                <motion.li 
                                  key={fIdx}
                                  className="flex items-start gap-3 text-foreground/90"
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: fIdx * 0.05 }}
                                >
                                  <span className="text-foreground/40 font-mono mt-0.5">•</span>
                                  <span>{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Interactive Buttons */}
                          {(project.demoUrl || project.videoUrl) && (
                            <div className="flex gap-4 pt-4">
                              {project.demoUrl && (
                                <motion.a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-5 py-2.5 border border-foreground font-mono text-[10px] tracking-widest uppercase flex items-center gap-2 group/btn relative overflow-hidden bg-foreground text-background hover:bg-foreground/95"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                  <span className="relative z-10 flex items-center gap-2">
                                    VIEW DEMO <ArrowUpRight className="w-3.5 h-3.5" />
                                  </span>
                                </motion.a>
                              )}
                              {project.videoUrl && (
                                <motion.a
                                  href={project.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-5 py-2.5 border border-foreground/30 hover:border-foreground font-mono text-[10px] tracking-widest uppercase flex items-center gap-2 group/btn relative overflow-hidden hover:bg-foreground/5"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                  <span className="relative z-10 flex items-center gap-2">
                                    WATCH VIDEO <ArrowUpRight className="w-3.5 h-3.5" />
                                  </span>
                                </motion.a>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Right Image Column with HUD Frame */}
                        <div className="lg:col-span-6 relative mt-4 lg:mt-0">
                          {/* Sleek backing shadow card */}
                          <div 
                            className="absolute -right-2 -bottom-2 inset-0 rounded-none border border-foreground/15 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"
                          />

                          <motion.div 
                            className="relative rounded-none border border-foreground/30 overflow-hidden bg-background/50 backdrop-blur-sm"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          >
                            <img 
                              src={project.imageUrl} 
                              alt={`${project.title} showcase`} 
                              className="w-full h-auto object-cover max-h-[280px] grayscale hover:grayscale-0 transition-all duration-500" 
                            />
                          </motion.div>
                        </div>
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

export default ProjectsShowcaseSection;