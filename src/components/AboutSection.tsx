import abstractArchitecture from "@/assets/abstract-architecture.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-dark py-24 md:py-32 border-t border-dark-fg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h2 className="text-display-md font-display mb-8">THE ARCHITECT /</h2>
            <p className="text-lg md:text-xl font-body leading-relaxed" style={{ color: '#EAE8E2' }}>
              I operate at the intersection of a bold vision and ground-floor reality. From the CEO's office at a high-growth AI startup, my role is to translate ambition into execution—launching 0-to-1 products, architecting go-to-market strategies, and scaling the operational engines that drive growth. I thrive in the chaos of unorganized sectors, building the frameworks that create momentum. I own the outcome and bridge the gap between founder vision and market reality. Ultimately, I believe the best products are built so compellingly that your customers don't just buy them; they invest in them.
            </p>
          </div>

          {/* Right Column - Abstract Architectural Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] aspect-square">
              <img 
                src={abstractArchitecture}
                alt="Abstract architectural photograph representing structure and framework"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
