import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import catchitAiImage from '../assets/catchit-analysis.png';
import resume2websiteImage from '../assets/resume2website-main.png';
import talentfinderImage from '../assets/talentfinder.png';
import youtubeLearningImage from '../assets/youtube-learning.png';

const projectsData = [
  {
    id: "catchit",
    number: "01.",
    title: "CATCHIT AI",
    subtitle: "Voice Agent: Flowra AI",
    tags: "AI VOICE AGENT / LIVEKIT / CRM INTEGRATION",
    description: "Real-time voice processing agent managing inbound calls with LiveKit. Features natural language understanding, automated appointment booking, CRM integration, and seamless human escalation. Handles booking, dispatch, and customer notifications end-to-end.",
    features: [ "LiveKit-based real-time voice processing", "Smart calendar integration & auto-booking", "Automated technician dispatch via SMS", "Human escalation on keyword detection", ],
    imageUrl: catchitAiImage,
  },
  {
    id: "resume2website",
    number: "02.",
    title: "RESUME2WEBSITE",
    subtitle: "",
    tags: "NO-CODE / PORTFOLIO BUILDER / AI",
    description: "Transforms resumes into beautiful portfolio websites instantly. Upload your resume, get AI-powered improvement suggestions, and launch a professional web presence in under 2 minutes. No coding required.",
    features: [ "AI-powered resume analysis", "Instant portfolio generation", "Mobile-responsive designs", "Custom domain support", ],
    imageUrl: resume2websiteImage,
  },
  {
    id: "talentfinder",
    number: "03.",
    title: "TALENT FINDER",
    subtitle: "",
    tags: "AI ATS / RESUME ANALYSIS / PATTERN MATCHING",
    description: "AI-enabled configurable ATS for hiring managers and investors. Analyzes resumes against ICP fit, identifies patterns based on custom keywords, and provides intelligent candidate scoring. Think smart recruiting automation.",
    features: [ "Resume-to-ICP fit analysis", "Configurable keyword patterns", "Intelligent candidate scoring", "Background verification automation", ],
    imageUrl: talentfinderImage,
  },
  {
    id: "youtubeapp",
    number: "04.",
    title: "YOUTUBE TO LEARNING APP",
    subtitle: "",
    tags: "AI / EDTECH / NO-CODE",
    description: "Transform any YouTube video into an interactive learning experience. AI-powered content extraction creates structured courses with quizzes, summaries, and key takeaways automatically.",
    features: [ "Automated content extraction from YouTube", "AI-generated quizzes and summaries", "Interactive learning modules", "Progress tracking and analytics", ],
    imageUrl: youtubeLearningImage,
    demoUrl: "#",
    videoUrl: "#",
  },
];

const ProjectsShowcaseSection = () => {
  return (
    <section id="projects" className="py-12 px-4 md:px-8">
      <h2 className="text-display-md font-display mb-20">PROJECTS /</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {projectsData.map((project) => (
          <AccordionItem value={project.id} key={project.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="text-left w-full">
                <p className="text-gray-400">{project.number}</p>
                <h3 className="text-2xl font-medium">{project.title}</h3>
                {project.subtitle && <p className="font-medium">{project.subtitle}</p>}
                <p className="text-sm text-gray-400">{project.tags}</p>
                <p className="mt-2 text-base font-normal">{project.description}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4">
                <h4 className="font-bold mb-2">KEY FEATURES:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>→ {feature}</li>
                  ))}
                </ul>
                <img src={project.imageUrl} alt={`${project.title} showcase`} className="mt-4 rounded-lg border" />
                <div className="mt-4 flex space-x-4">
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline">VIEW DEMO</a>}
                  {project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline">WATCH VIDEO</a>}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ProjectsShowcaseSection;