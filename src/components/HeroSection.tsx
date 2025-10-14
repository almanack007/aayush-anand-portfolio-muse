import headshot from "@/assets/headshot.jpg";
import { Button } from "@/components/ui/button";
import { Linkedin, FolderOpen, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-light min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Content Grid - Name, Description, and Circular Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Name, Description, Button and Icons */}
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-display leading-tight">
              AAYUSH<br />ANAND
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-body leading-relaxed text-muted-foreground max-w-lg">
              I've worked across Product Launches, GTM Strategy & Venture Fundraising, scaling products from 0→1.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary transition-colors text-sm tracking-wider px-8 py-6"
            >
              GET IN TOUCH
            </Button>
            
            {/* Social/Navigation Icons */}
            <div className="flex items-center gap-6 pt-2">
              <a 
                href="https://www.linkedin.com/in/aayush-anand-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <button 
                onClick={scrollToProjects}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View Projects"
              >
                <FolderOpen className="w-6 h-6" />
              </button>
              <button 
                onClick={scrollToContact}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Contact"
              >
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Column - Circular Profile Image with NOV '25 */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6 relative">
            {/* Arrow Text - Hidden on mobile/tablet */}
            <div className="hidden xl:block absolute -left-32 top-1/2 -translate-y-1/2">
              <p className="text-xl font-body text-muted-foreground whitespace-nowrap">
                Hi! I'm Aayush Anand →
              </p>
            </div>
            
            <div className="relative w-full max-w-[380px] aspect-square">
              <img 
                src={headshot}
                alt="Aayush Anand - Product & Operations Leader"
                className="w-full h-full grayscale rounded-full object-cover"
              />
            </div>
            
            {/* Available for Work & NOV '25 */}
            <div className="text-center lg:text-right space-y-1">
              <p className="text-sm tracking-wider font-medium text-muted-foreground">AVAILABLE FOR WORK</p>
              <p className="text-6xl md:text-7xl lg:text-8xl font-display leading-tight">NOV '25</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
