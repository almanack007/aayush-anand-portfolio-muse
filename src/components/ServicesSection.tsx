const services = [
  {
    title: "Pitch Deck Strategy",
    description: "Raised $1M+ crafting compelling pitch decks with strategic appendix and content strategy. Every slide tells a story that converts.",
    tags: ["FUNDRAISING", "STRATEGY"],
  },
  {
    title: "Website Design",
    description: "Modern, responsive websites that convert visitors into customers. Clean design meets powerful functionality.",
    tags: ["DESIGN", "DEVELOPMENT"],
  },
  {
    title: "Portfolio Design",
    description: "Stand out with a portfolio that showcases your best work. Professional, polished, and uniquely you.",
    tags: ["DESIGN", "BRANDING"],
  },
  {
    title: "Resume Tailoring",
    description: "ATS-optimized resumes that get you interviews. Strategic positioning for maximum impact.",
    tags: ["CAREER", "STRATEGY"],
  },
  {
    title: "No-Code App Development",
    description: "Build powerful applications without writing code. Leverage Figma, Make, Lovable, and Supabase to bring ideas to life fast.",
    tags: ["NO-CODE", "APPS"],
    tools: ["Figma", "Make", "Lovable", "Supabase"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-light py-24 md:py-32 border-t border-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-display-md font-display mb-20">SERVICES /</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => (
            <article key={index} className="border-t border-foreground pt-8">
              <h3 className="text-2xl md:text-3xl font-display mb-4">
                {service.title}
              </h3>
              <div className="flex gap-2 mb-4 flex-wrap">
                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs font-body tracking-wider opacity-60">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-base md:text-lg font-body leading-relaxed mb-4">
                {service.description}
              </p>
              {service.tools && (
                <div className="flex gap-3 mt-6">
                  {service.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="px-3 py-1 border border-foreground text-xs font-body tracking-wider">
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
