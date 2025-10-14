import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    ask: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Form URL with entry IDs
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeXr_x4Ak82V9gmndPK77Bci_RsiJ5QZslsPR7b6H4-M3_XMQ/formResponse";
      
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append("entry.1826182394", formData.name);
      formDataEncoded.append("entry.1562027025", formData.email);
      formDataEncoded.append("entry.1510006801", formData.contact);
      formDataEncoded.append("entry.1867320212", formData.ask);

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
      setIsSubmitted(true);
      
      toast({
        title: "✓ Message Sent Successfully!",
        description: "We'll get back to you soon.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          contact: "",
          ask: ""
        });
        setIsSubmitted(false);
      }, 3000);
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
              disabled={isSubmitting || isSubmitted}
              size="lg"
              className="bg-light-fg text-dark-bg hover:bg-light-fg/90 border-2 border-light-fg transition-colors text-sm tracking-wider px-8 py-6 w-full md:w-auto font-medium [&>*]:text-dark-bg"
            >
              {isSubmitted ? (
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  MESSAGE SENT
                </span>
              ) : isSubmitting ? (
                "SENDING..."
              ) : (
                "SEND MESSAGE"
              )}
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
