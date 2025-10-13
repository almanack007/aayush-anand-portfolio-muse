const experiences = [
  {
    number: "01.",
    company: "CLARA AI",
    role: "Founding Team Member",
    period: "Feb 2024 - Present",
    tags: "AI / B2B SAAS / PRODUCT",
    highlights: [
      "Led 0-to-1 launch of CLARA AI agent, securing $100K ARR in 2 months with 55% MoM growth",
      "Generated $1.5M+ in new contract value through strategic partnerships and enterprise client acquisition",
      "Two enterprise clients became so successful with our solution, they invested in the company—proof of product-market fit"
    ],
    description: "Spearheaded product strategy and GTM for flagship AI agent in US service industries. Authored PRD, led customer discovery, and drove cross-functional teams from concept to revenue-generating product."
  },
  {
    number: "02.",
    company: "ZENTRADES.AI",
    role: "Product & Venture Fundraising",
    period: "Feb 2024 - Present",
    tags: "OPERATIONS / FUNDRAISING / GTM",
    highlights: [
      "Co-managed $2M funding round, securing $500K in strategic investments",
      "Converted customers into investors through compelling product narratives and pitch deck strategy",
      "Drove 35%+ company revenue increase in 3 months through process optimization"
    ],
    description: "Owned operational excellence and fundraising initiatives in CEO's office. Scaled team from 30 to 150+ through strategic hiring while establishing OKR frameworks and accountability structures."
  },
  {
    number: "03.",
    company: "MSDE GOVT. OF INDIA",
    role: "Project Manager & Mentor",
    period: "Dec 2023 - Feb 2024",
    tags: "EDTECH / PROGRAM MANAGEMENT",
    description: "Managed ₹50 Lakh government-funded robotics education initiative. Designed and scaled hands-on training programs impacting 300+ students, securing continued funding through measurable impact reporting."
  },
  {
    number: "04.",
    company: "ROBOGEARS (STEALTH)",
    role: "Co-Founder",
    period: "Nov 2023 - Mar 2024",
    tags: "ENTREPRENEURSHIP / HARDWARE",
    description: "Identified market gap for affordable robotics components among engineering students. Built supply chain from scratch and validated proof-of-concept with 50+ units sold in first run."
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="works" className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-display-md font-display mb-20">WORK EXPERIENCE /</h2>

        <div className="space-y-24 md:space-y-32">
          {experiences.map((exp, index) => (
            <article key={index} className="border-t border-dark-fg pt-12">
              <div className="grid grid-cols-12 gap-8 md:gap-12">
                {/* Number */}
                <div className="col-span-12 md:col-span-3">
                  <p className="text-display-lg font-display opacity-20">
                    {exp.number}
                  </p>
                </div>

                {/* Experience Details */}
                <div className="col-span-12 md:col-span-9">
                  <h3 className="text-3xl md:text-5xl font-display mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-lg md:text-xl font-body mb-4 opacity-80">
                    {exp.role}
                  </p>
                  <p className="text-xs md:text-sm font-body tracking-wider mb-2 opacity-60">
                    {exp.period}
                  </p>
                  <p className="text-xs md:text-sm font-body tracking-wider mb-6 opacity-60">
                    {exp.tags}
                  </p>

                  {exp.highlights && (
                    <ul className="mb-6 space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-base md:text-lg font-body leading-relaxed flex gap-3">
                          <span className="opacity-60">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="text-lg md:text-xl font-body leading-relaxed max-w-3xl">
                    {exp.description}
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

export default WorkExperienceSection;
