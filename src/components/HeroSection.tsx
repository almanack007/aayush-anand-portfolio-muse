import headshot from "@/assets/headshot.png";
import { Button } from "@/components/ui/button";
import { Linkedin, FolderOpen, Mail, ArrowUpRight, ArrowRight } from "lucide-react";

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

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-light min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Name, Description, Button and Icons */}
          <div className="order-2 lg:order-1 space-y-10">
            {/* Name with Hi! I'm above and arrow below */}
            <div className="space-y-3">
              <p className="text-lg font-body text-muted-foreground">Hi! I'm</p>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-display leading-tight">
                AAYUSH<br />ANAND
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl font-body leading-relaxed text-muted-foreground max-w-lg">
              I've worked across Product Launches, GTM Strategy & Venture Fundraising, scaling products from 0→1.
            </p>

            {/* Button with diagonal arrow */}
            <div className="flex items-center gap-3">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary transition-colors text-sm tracking-wider px-8 py-6"
              >
                GET IN TOUCH
              </Button>
              <ArrowUpRight className="w-6 h-6" />
            </div>
            
            {/* Social/Navigation Icons - aligned left */}
            <div className="flex items-center gap-6">
              <a 
                href="https://www.linkedin.com/in/aayush-anand05/" 
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
                onClick={scrollToAbout}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="About"
              >
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Column - Circular Profile Image */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[380px] aspect-square rounded-full border-[12px] border-foreground p-2">
              <img 
                src={headshot}
                alt="Aayush Anand - Product & Operations Leader"
                className="w-full h-full rounded-full object-cover object-center"
                style={{ boxShadow: 'inset 0 0 0 2px #4d4d4d' }}
              />
            </div>
          </div>
        </div>

        {/* Available for Work & NOV '25 - Bottom Right */}
        <div className="absolute bottom-8 right-8 hidden lg:block text-right space-y-1">
          <p className="text-sm tracking-wider font-medium text-muted-foreground">AVAILABLE FOR WORK</p>
          <p className="text-6xl md:text-7xl font-display leading-tight">NOV '25</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
