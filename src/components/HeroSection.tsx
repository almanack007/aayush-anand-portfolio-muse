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
        <div className="text-center mb-12">
          <h1 className="text-display-xl font-display">
            AAYUSH ANAND<span className="text-5xl align-super">©</span>
          </h1>
        </div>

        {/* Content Grid - Description and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left Column - Description and Button */}
          <div className="order-2 lg:order-1 space-y-8">
            <p className="text-lg md:text-xl lg:text-2xl font-body leading-relaxed text-muted-foreground">
              I've worked across Product Launches, GTM Strategy & Venture Fundraising, scaling products from 0→1.
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
