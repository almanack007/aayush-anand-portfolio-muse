import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const workData = [
  {
    id: "clara",
    number: "01.",
    title: "CLARA AI",
    role: "Founding Team Member",
    date: "Jan 2025 - Present",
    tags: "AI / B2B SAAS / PRODUCT",
    descriptionPoints: [
      "Led 0-to-1 launch of CLARA AI agent, delivering rapid growth through strategic product positioning",
      "Two enterprise clients became so successful with our solution, they invested in the company—proof of product-market fit",
    ],
    summary: "Spearheaded product strategy and GTM for flagship AI agent in US service industries. Authored PRD, led customer discovery, and drove cross-functional teams from concept to revenue-generating product.",
  },
  {
    id: "zentrades",
    number: "02.",
    title: "ZENTRADES.AI",
    role: "Product & Investor Relations - Founder's Office",
    date: "Feb 2024 - Present",
    tags: "OPERATIONS / FUNDRAISING / GTM",
    descriptionPoints: [
      "Co-managed funding round, securing strategic investments through compelling product narratives",
      "Converted customers into investors through pitch deck strategy and investor relations",
      "Drove significant revenue growth through process optimization and operational excellence",
    ],
    summary: "Worked closely with CEO and the leadership team to scale operational excellence and fundraising initiatives. Scaled team significantly through strategic hiring while establishing OKR frameworks and accountability structures.",
  },
  {
    id: "msde",
    number: "03.",
    title: "MSDE GOVT. OF INDIA",
    role: "Project Manager & Mentor",
    date: "Dec 2023 - Feb 2024",
    tags: "EDTECH / PROGRAM MANAGEMENT",
    descriptionPoints: [],
    summary: "Managed ₹50 Lakh government-funded robotics education initiative. Designed and scaled hands-on training programs impacting 300+ students, securing continued funding through measurable impact reporting.",
  },
  {
    id: "robogears",
    number: "04.",
    title: "ROBOGEARS (STEALTH)",
    role: "Co-Founder",
    date: "Nov 2023 - Mar 2024",
    tags: "ENTREPRENEURSHIP / HARDWARE",
    descriptionPoints: [],
    summary: "Identified market gap for affordable robotics components among engineering students. Built supply chain from scratch and validated proof-of-concept with 50+ units sold in first run.",
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="work" className="py-12 px-4 md:px-8">
      <h2 className="text-display-md font-display mb-20">WORK EXPERIENCE /</h2>
      <Accordion type="single" collapsible className="w-full">
        {workData.map((job) => (
          <AccordionItem value={job.id} key={job.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="text-left w-full">
                <p className="text-gray-400">{job.number}</p>
                <h3 className="text-2xl font-medium">{job.title}</h3>
                <p className="font-medium">{job.role}</p>
                <p className="text-sm text-gray-400">{job.date}</p>
                <p className="text-sm text-gray-400">{job.tags}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4">
                {job.descriptionPoints.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2">
                    {job.descriptionPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <p className="mt-4">{job.summary}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default WorkExperienceSection;