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
    <section className="section-light min-h-screen pt-32 pb-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Heading - Centered */}
        <div className="text-center mb-16">
          <h1 className="text-display-xl font-display mb-4">
            AAYUSH ANAND©
          </h1>
          <div className="text-2xl">↘</div>
        </div>

        {/* Content Grid - Description and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Description and Button */}
          <div className="order-2 lg:order-1 space-y-8">
            <p className="text-lg md:text-xl lg:text-2xl font-body leading-relaxed">
              Associate Product Manager and Business Strategist helping Startups gain their unfair advantage. If you're as passionate about startups as I am, let's connect.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary transition-colors text-sm tracking-wider px-8 py-6"
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[350px]">
              <img 
                src={headshot}
                alt="Aayush Anand - Product & Operations Leader"
                className="w-full h-auto grayscale rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Available for Work - Bottom Right */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <p className="text-sm tracking-wider font-medium">AVAILABLE FOR WORK</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
