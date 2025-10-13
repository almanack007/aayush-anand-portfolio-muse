const FooterSection = () => {
  return (
    <footer id="contact" className="section-dark py-24 md:py-32 border-t border-dark-fg">
      <div className="container mx-auto px-6">
        <h2 className="text-display-md font-display mb-16">LET'S BUILD /</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          <a 
            href="mailto:aayushanand070@gmail.com"
            className="text-xl md:text-2xl font-body hover:opacity-60 transition-opacity"
          >
            EMAIL
          </a>
          <a 
            href="https://www.linkedin.com/in/aayushanand07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-body hover:opacity-60 transition-opacity"
          >
            LINKEDIN
          </a>
          <a 
            href="https://alive-stallion-a3a.notion.site/Product-Portfolio-Projects-28971c0b3dba800b967ae082b18bbee0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-body hover:opacity-60 transition-opacity"
          >
            RESUME
          </a>
        </div>

        <div className="border-t border-dark-fg pt-8">
          <p className="text-xs font-body tracking-wider opacity-60">
            © 2025 AAYUSH ANAND
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
