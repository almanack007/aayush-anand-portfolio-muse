import abstractArchitecture from "@/assets/abstract-architecture.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-dark py-24 md:py-32 border-t border-dark-fg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h2 className="text-display-md font-display mb-8">THE ARCHITECT /</h2>
            <div className="space-y-6" style={{ color: '#EAE8E2' }}>
              <p className="text-lg md:text-xl font-body leading-relaxed">
                I operate at the intersection of a bold vision and ground-floor reality. From the CEO's office at a high-growth AI startup, my role is to translate ambition into execution—launching 0-to-1 products, architecting go-to-market strategies, and scaling the operational engines that drive growth. I thrive in the chaos of unorganized sectors, building the frameworks that create momentum. I own the outcome and bridge the gap between founder vision and market reality. Ultimately, I believe the best products are built so compellingly that your customers don't just buy them; they invest in them.
              </p>
              
              <p className="text-lg md:text-xl font-body leading-relaxed">
                This mindset was forged long before my current role. It started at the Birla Institute of Technology, where my engineering education was paralleled by a hands-on obsession with building. I co-founded the college's Entrepreneurship Cell and led the IEEE student branch, but the real test was RoboGears—a stealth venture I co-founded to solve a market gap for affordable robotics components. Building a supply chain from scratch and selling over 50 units with a scrappy, solution-first approach taught me more than any textbook could.
              </p>
              
              <p className="text-lg md:text-xl font-body leading-relaxed">
                Every role, from managing government initiatives to leading social impact projects, has been a step towards a singular goal: to be an entrepreneur who builds disruptive, high-impact companies. I am not just building a career; I am building a foundation for my own venture.
              </p>
            </div>
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
