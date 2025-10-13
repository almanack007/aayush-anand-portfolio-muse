import headshot from "@/assets/headshot.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-light min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <h1 className="text-display-xl font-display mb-8">
              AAYUSH ANAND©
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-body max-w-2xl mb-12 leading-relaxed">
              A product and operations leader who builds from 0-to-1. I craft solutions so compelling, customers become investors.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary transition-colors text-sm tracking-wider px-8 py-6"
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <img 
                src={headshot}
                alt="Aayush Anand - Product & Operations Leader"
                className="w-full h-auto grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
