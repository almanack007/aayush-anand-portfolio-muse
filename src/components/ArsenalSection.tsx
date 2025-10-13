import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArsenalSection = () => {
  return (
    <section className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-display-md font-display mb-16">MY ARSENAL /</h2>

        <Accordion type="single" collapsible className="w-full max-w-4xl space-y-6">
          <AccordionItem value="strategy" className="border-dark-fg">
            <AccordionTrigger className="text-2xl md:text-4xl font-display hover:no-underline py-6">
              01. Strategy & Operations
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg font-body space-y-3 pt-4 pb-6">
              <div className="pl-6 space-y-2">
                <p>• Go-to-Market Execution</p>
                <p>• Business Architecture & OKRs</p>
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
                <p>• Agile & Sprint Execution</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default ArsenalSection;
