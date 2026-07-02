import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (id: string) => {
    // If id is 'works', it should scroll to 'work' (the actual ID in WorkExperienceSection)
    const targetId = id === 'works' ? 'work' : id;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: "SERVICES", target: "services" },
    { label: "WORKS", target: "works" },
    { label: "ABOUT", target: "about" },
    { label: "CONTACT", target: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 section-light h-16 md:h-20 flex items-center bg-background/80 backdrop-blur-md">
      {/* Sleek monochromatic bottom border line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground/10" 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        style={{ originX: 0 }}
      />

      <div className="container mx-auto px-6 w-full">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Name - Left */}
          <div className="col-span-4 md:col-span-4 overflow-hidden">
            <motion.h2 
              className="text-xs font-mono tracking-widest cursor-pointer hover:opacity-75 transition-opacity text-foreground/80"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            >
              AA // 007
            </motion.h2>
          </div>

          {/* Location - Center */}
          <div className="hidden md:block md:col-span-4 text-center overflow-hidden">
            <motion.p 
              className="text-xs font-body tracking-wider text-muted-foreground"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            >
              BASED IN PUNE, MAHARASHTRA
            </motion.p>
          </div>

          {/* Navigation - Right */}
          <nav className="col-span-8 md:col-span-4">
            <ul className="flex gap-3 md:gap-6 md:justify-end justify-end text-[10px] md:text-xs font-body tracking-wider">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <button 
                    onClick={() => scrollToSection(item.target)}
                    className="relative py-2 group hover:text-foreground transition-colors font-medium text-muted-foreground"
                  >
                    <span>{item.label}</span>
                    
                    {/* Sleek silver/currentColor kinetic underline */}
                    <span 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
