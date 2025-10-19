import { Accordion, ... } from "@/components/ui/accordion";
// ... other imports

const arsenalData = [ ... ]; // Your data

const ArsenalSection = () => {
  return (
    // 1. Add padding to the <section>
    <section id="arsenal" className="py-12 px-4 md:px-8"> 
    
      {/* 2. Make the <h2> a direct child */}
      <h2 className="text-display-md font-display mb-20">MY ARSENAL /</h2>

      {/* 3. Make the <Accordion> a direct child */}
      <Accordion type="single" collapsible className="w-full">
        {/* ... your .map() of accordion items ... */}
      </Accordion>
      
    </section>
  );
};

export default ArsenalSection;