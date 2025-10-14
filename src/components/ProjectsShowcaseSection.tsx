import catchitDashboard from "@/assets/catchit-dashboard.png";
import catchitConfig from "@/assets/catchit-config.png";
import catchitAnalysis from "@/assets/catchit-analysis.png";
import catchitLogic from "@/assets/catchit-logic.png";
import resume2websiteMain from "@/assets/resume2website-main.png";
import resume2websiteCreation from "@/assets/resume2website-creation.png";
import talentfinder from "@/assets/talentfinder.png";
import youtubeLearning from "@/assets/youtube-learning.png";

const projects = [
  {
    number: "01.",
    name: "CATCHIT AI",
    voiceAgent: "Flowra AI",
    tags: "AI VOICE AGENT / LIVEKIT / CRM INTEGRATION",
    description: "Real-time voice processing agent managing inbound calls with LiveKit. Features natural language understanding, automated appointment booking, CRM integration, and seamless human escalation. Handles booking, dispatch, and customer notifications end-to-end.",
    features: [
      "LiveKit-based real-time voice processing",
      "Smart calendar integration & auto-booking",
      "Automated technician dispatch via SMS",
      "Human escalation on keyword detection"
    ],
    images: [catchitDashboard, catchitConfig, catchitAnalysis, catchitLogic],
    demoLink: "#",
    imageAlt: "Flowra AI Voice Agent Dashboard"
  },
  {
    number: "02.",
    name: "RESUME2WEBSITE",
    tags: "NO-CODE / PORTFOLIO BUILDER / AI",
    description: "Transforms resumes into beautiful portfolio websites instantly. Upload your resume, get AI-powered improvement suggestions, and launch a professional web presence in under 2 minutes. No coding required.",
    features: [
      "AI-powered resume analysis",
      "Instant portfolio generation",
      "Mobile-responsive designs",
      "Custom domain support"
    ],
    images: [resume2websiteMain, resume2websiteCreation],
    demoLink: "#",
    imageAlt: "Resume2Website Portfolio Builder"
  },
  {
    number: "03.",
    name: "TALENT FINDER",
    tags: "AI ATS / RESUME ANALYSIS / PATTERN MATCHING",
    description: "AI-enabled configurable ATS for hiring managers and investors. Analyzes resumes against ICP fit, identifies patterns based on custom keywords, and provides intelligent candidate scoring. Think smart recruiting automation.",
    features: [
      "Resume-to-ICP fit analysis",
      "Configurable keyword patterns",
      "Intelligent candidate scoring",
      "Background verification automation"
    ],
    images: [talentfinder],
    demoLink: "#",
    imageAlt: "Talent Finder ATS Dashboard"
  },
  {
    number: "04.",
    name: "YOUTUBE TO LEARNING APP",
    tags: "AI / EDTECH / NO-CODE",
    description: "Transform any YouTube video into an interactive learning experience. AI-powered content extraction creates structured courses with quizzes, summaries, and key takeaways automatically.",
    features: [
      "Automated content extraction from YouTube",
      "AI-generated quizzes and summaries",
      "Interactive learning modules",
      "Progress tracking and analytics"
    ],
    images: [youtubeLearning],
    demoLink: "https://ai.studio/apps/drive/1hDpcLGtST8gLOg2EMzSZP19CjV02XgFm",
    videoDemoLink: "https://drive.google.com/file/d/18OxGicg2alYgQ9_FwU06RUtL7ZRir5IB/view?usp=sharing",
    imageAlt: "YouTube to Learning App Dashboard"
  },
];

const ProjectsShowcaseSection = () => {
  return (
    <section id="about" className="section-light py-24 md:py-32 border-t border-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-display-md font-display mb-20">PROJECTS /</h2>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <article key={index} className="border-t border-foreground pt-12">
              <div className="grid grid-cols-12 gap-8 md:gap-12">
                {/* Number */}
                <div className="col-span-12 md:col-span-3">
                  <p className="text-display-lg font-display opacity-20">
                    {project.number}
                  </p>
                </div>

                {/* Project Details */}
                <div className="col-span-12 md:col-span-9">
                  <h3 className="text-3xl md:text-5xl font-display mb-2">
                    {project.name}
                  </h3>
                  {project.voiceAgent && (
                    <p className="text-xl md:text-2xl font-body mb-4 opacity-80">
                      Voice Agent: {project.voiceAgent}
                    </p>
                  )}
                  <p className="text-xs md:text-sm font-body tracking-wider mb-6 opacity-60">
                    {project.tags}
                  </p>
                  
                  <p className="text-lg md:text-xl font-body leading-relaxed max-w-3xl mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-display mb-3 tracking-wider">KEY FEATURES:</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-base font-body flex gap-3">
                          <span className="opacity-60">→</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Product Screenshots */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="border border-foreground overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${project.name} screenshot ${imgIndex + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Demo Links */}
                  <div className="mt-6 flex gap-4">
                    {project.demoLink && project.demoLink !== "#" && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-foreground text-sm font-body tracking-wider hover:bg-foreground hover:text-background transition-colors"
                      >
                        VIEW DEMO
                      </a>
                    )}
                    {project.videoDemoLink && (
                      <a 
                        href={project.videoDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-foreground text-sm font-body tracking-wider hover:bg-foreground hover:text-background transition-colors"
                      >
                        WATCH VIDEO
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcaseSection;
