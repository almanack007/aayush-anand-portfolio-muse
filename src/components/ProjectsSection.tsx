const projects = [
  {
    number: "01.",
    title: "CLARA AI",
    tags: "AI / B2B SAAS / GTM STRATEGY",
    description: "Launched a flagship AI agent from the ground up, generating over $1.5M in new contract value and converting our largest clients into strategic investors.",
  },
  {
    number: "02.",
    title: "MSDE GOVT. OF INDIA",
    tags: "EDTECH / PROGRAM MANAGEMENT",
    description: "Commanded a 50 Lakh government initiative to deliver hands-on robotics education, scaling the program to empower over 300 students and securing continued funding.",
  },
  {
    number: "03.",
    title: "ROBOGEARS (STEALTH)",
    tags: "ENTREPRENEURSHIP / HARDWARE",
    description: "Co-founded a stealth venture to fix a market gap for robotics hardware. Built the supply chain from scratch and validated a proof-of-concept with 50+ units sold in the first run.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-display-md font-display mb-20">SELECTED WORKS / (3)</h2>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <article key={index} className="border-t border-dark-fg pt-12">
              <div className="grid grid-cols-12 gap-8 md:gap-12">
                {/* Huge Number */}
                <div className="col-span-12 md:col-span-3">
                  <p className="text-display-lg font-display opacity-20">
                    {project.number}
                  </p>
                </div>

                {/* Project Details */}
                <div className="col-span-12 md:col-span-9">
                  <h3 className="text-3xl md:text-5xl font-display mb-4">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm font-body tracking-wider mb-6 opacity-60">
                    {project.tags}
                  </p>
                  <p className="text-lg md:text-xl font-body leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
