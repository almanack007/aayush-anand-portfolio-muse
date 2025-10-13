import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArsenalSection from "@/components/ArsenalSection";
import ServicesSection from "@/components/ServicesSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ProjectsShowcaseSection from "@/components/ProjectsShowcaseSection";
import ContactFormSection from "@/components/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ArsenalSection />
        <WorkExperienceSection />
        <ProjectsShowcaseSection />
        <ContactFormSection />
      </main>
    </div>
  );
};

export default Index;
