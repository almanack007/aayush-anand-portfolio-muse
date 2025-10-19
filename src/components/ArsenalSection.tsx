import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArsenalSection = () => {
  return (
    // Corrected alignment and padding
    <section id="arsenal" className="section-dark py-24 md:py-32 px-4 md:px-8 border-t border-foreground">
      
      <h2 className="text-display-md font-display mb-16">MY ARSENAL /</h2>

      <Accordion type="single" collapsible className="w-full max-w-4xl space-y-6">
        <AccordionItem value="strategy" className="border-dark-fg">
          <AccordionTrigger className="text-2xl md:text-4xl font-display hover:no-underline py-6">
            01. GTM & Fundraising
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg font-body space-y-3 pt-4 pb-6">
            <div className="pl-6 space-y-2">
              <p>• Go-to-Market Strategy</p>
              <p>• Project Management</p>
              <p>• Business Process Improvement</p>
              <p>• Resource Allocation & Change Management</p>
              <p>• Risk Mitigation </p>
              <p>• Operational Scalability</p>
              <p>• Strategic Planning</p>
              <p>• KPI Development & Tracking </p>
              <p>• Cross-Functional Team Leadership </p>
              <p>• Venture Narrative & Fundraising</p>
              <p>• Building High-Ownership Teams</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="product" className="border-dark-fg">
          <AccordionTrigger className="text-2xl md:text-4xl font-display hover:no-underline py-6">
            02. Product Management
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg font-body space-y-3 pt-4 pb-6">
            <div className="pl-6 space-y-2">
              <p>• Zero-to-One Product Builds</p>
              <p>• Product-Led Growth (PLG)</p>
              <p>• Customer Discovery & Validation</p>
              <p>• Roadmap Development</p>
              <p>• User-Centered Design</p>
              <p>• Agile / Scrum / Kanban</p>
              <p>• MVP Developments</p>
              <p>• A/B Testing</p>
              <p>• Product Segmenatation & Target Setting</p>
              <p>• MVP Development </p>
              <p>• Feature Prioritization</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    </section>
  ); // <-- This was missing
}; // <-- This was missing

export default ArsenalSection;