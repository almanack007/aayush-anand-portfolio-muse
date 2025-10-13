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
    demoLink: "#", // User will provide later
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
    demoLink: "#", // User will provide later
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
    demoLink: "#", // User will provide later
    imageAlt: "Talent Finder ATS Dashboard"
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

                  {/* Placeholder for demo link and image - user will provide later */}
                  <div className="mt-8 p-6 border border-foreground bg-background/5">
                    <p className="text-sm font-body opacity-60 mb-2">Product Screenshot & Demo Link</p>
                    <p className="text-xs font-body opacity-40">[To be added in next iteration]</p>
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
