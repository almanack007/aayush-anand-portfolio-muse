const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 section-light border-b border-foreground">
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Name - Left */}
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-sm md:text-base font-display tracking-tight">
              AAYUSH ANAND
            </h2>
          </div>

          {/* Location - Center */}
          <div className="hidden md:block md:col-span-4 text-center">
            <p className="text-xs font-body tracking-wider">
              BASED IN PUNE, MAHARASHTRA
            </p>
          </div>

          {/* Navigation - Right */}
          <nav className="col-span-12 md:col-span-4">
            <ul className="flex gap-6 md:justify-end justify-start text-xs font-body tracking-wider">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:opacity-60 transition-opacity"
                >
                  SERVICES
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('works')}
                  className="hover:opacity-60 transition-opacity"
                >
                  WORKS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:opacity-60 transition-opacity"
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:opacity-60 transition-opacity"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
