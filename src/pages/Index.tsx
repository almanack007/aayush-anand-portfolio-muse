import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArsenalSection from "@/components/ArsenalSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProofSection from "@/components/ProofSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ArsenalSection />
        <ProjectsSection />
        <ProofSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
