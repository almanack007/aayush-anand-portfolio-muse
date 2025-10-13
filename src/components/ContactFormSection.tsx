import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    ask: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Form URL with entry IDs
      // Note: User needs to inspect their form to get actual entry IDs
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeXr_x4Ak82V9gmndPK77Bci_RsiJ5QZslsPR7b6H4-M3_XMQ/formResponse";
      
      const formDataEncoded = new URLSearchParams();
      // These entry IDs are placeholders - user needs to replace with actual ones
      formDataEncoded.append("entry.1234567890", formData.name); // Replace with actual entry ID
      formDataEncoded.append("entry.0987654321", formData.email); // Replace with actual entry ID
      formDataEncoded.append("entry.1122334455", formData.contact); // Replace with actual entry ID
      formDataEncoded.append("entry.5544332211", formData.ask); // Replace with actual entry ID

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded.toString(),
      });

      // Since we use no-cors, we can't check the actual response
      // We assume success if no error is thrown
      toast({
        title: "Response Received!",
        description: "We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        ask: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-dark py-24 md:py-32 border-t border-dark-fg">
      <div className="container mx-auto px-6">
        <h2 className="text-display-md font-display mb-16">LET'S BUILD /</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Contact Links */}
          <div className="space-y-8">
            <a 
              href="mailto:theaayush9431@gmail.com"
              className="block text-xl md:text-2xl font-body hover:opacity-60 transition-opacity"
            >
              EMAIL →
            </a>
            <a 
              href="https://www.linkedin.com/in/aayush-anand05/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl md:text-2xl font-body hover:opacity-60 transition-opacity"
            >
              LINKEDIN →
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="NAME"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-transparent border-dark-fg text-light-fg placeholder:text-light-fg/40 font-body"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-transparent border-dark-fg text-light-fg placeholder:text-light-fg/40 font-body"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="CONTACT"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
                className="bg-transparent border-dark-fg text-light-fg placeholder:text-light-fg/40 font-body"
              />
            </div>
            <div>
              <Textarea
                placeholder="WHAT CAN I HELP YOU WITH?"
                value={formData.ask}
                onChange={(e) => setFormData({ ...formData, ask: e.target.value })}
                required
                rows={5}
                className="bg-transparent border-dark-fg text-light-fg placeholder:text-light-fg/40 font-body resize-none"
              />
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="bg-light-bg text-dark-bg hover:bg-light-bg/90 transition-colors text-sm tracking-wider px-8 py-6 w-full md:w-auto"
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </Button>
          </form>
        </div>

        <div className="border-t border-dark-fg pt-8">
          <p className="text-xs font-body tracking-wider opacity-60">
            © 2025 AAYUSH ANAND
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
