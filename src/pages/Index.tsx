import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArsenalSection from "@/components/ArsenalSection";
import ServicesSection from "@/components/ServicesSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import AboutSection from "@/components/AboutSection";
import ProjectsShowcaseSection from "@/components/ProjectsShowcaseSection";
import ContactFormSection from "@/components/ContactFormSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ type: "spring", stiffness: 80, damping: 15 }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative bg-background text-foreground select-none">
      {/* Bauhaus Stark Background Canvas */}
      <InteractiveBackground />

      {/* Bauhaus Morphing Cursor */}
      <CustomCursor />

      {/* Floating HUD Rocket Scroll Indicator */}
      <ScrollToTop />

      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        
        {/* Sections that handle their own entrance animations internally */}
        <ServicesSection />
        <ArsenalSection />
        <WorkExperienceSection />

        {/* Sections wrapped in global scroll reveal */}
        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>

        <ProjectsShowcaseSection />

        <SectionWrapper>
          <ContactFormSection />
        </SectionWrapper>
      </main>
    </div>
  );
};

export default Index;
