// This import is now fixed: all components are named explicitly.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// I've created this data based on your screenshot.
const arsenalData = [
  {
    id: "strategy",
    number: "01.",
    title: "Strategy & Operations",
    // TODO: Add your description points inside the quotes
    content: "Add your details about Strategy & Operations here. You can include bullet points or paragraphs.",
  },
  {
    id: "product",
    number: "02.",
    title: "Product Management",
    // TODO: Add your description points inside the quotes
    content: "Add your details about Product Management here. You can include bullet points or paragraphs.",
  },
];

const ArsenalSection = () => {
  return (
    // This <section> tag includes the fix for the left-alignment
    <section id="arsenal" className="py-12 px-4 md:px-8">
      
      <h2 className="text-display-md font-display mb-20">MY ARSENAL /</h2>

      <Accordion type="single" collapsible className="w-full">
        {arsenalData.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="text-left w-full">
                <p className="text-gray-400">{item.number}</p>
                {/* We use font-medium here for consistency with your other sections */}
                <h3 className="text-2xl font-medium">{item.title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4">
                {/* This is placeholder content. You can replace it with your actual text or bullet points. */}
                <p className="mt-4">{item.content}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
    </section>
  );
};

export default ArsenalSection;