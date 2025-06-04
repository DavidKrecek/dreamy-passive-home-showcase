
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'features', 'video', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClassName = (sectionId: string) => {
    const baseClasses = "text-gray-700 hover:text-nature-green font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nature-green after:transition-all after:duration-300";
    const activeClasses = activeSection === sectionId ? "after:w-full text-nature-green" : "after:w-0 hover:after:w-full";
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-lg font-bold text-nature-green cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            Your New Home
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={getLinkClassName('home')}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={getLinkClassName('about')}
            >
              About House
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className={getLinkClassName('features')}
            >
              Features
            </a>
            <a 
              href="#video" 
              onClick={(e) => handleNavClick(e, 'video')}
              className={getLinkClassName('video')}
            >
              Video
            </a>
            <a 
              href="#gallery" 
              onClick={(e) => handleNavClick(e, 'gallery')}
              className={getLinkClassName('gallery')}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={getLinkClassName('contact')}
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-nature-green transition-colors p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="block px-3 py-2 text-gray-700 hover:text-nature-green font-semibold transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="block px-3 py-2 text-gray-700 hover:text-nature-green font-semibold transition-colors"
              >
                About House
              </a>
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="block px-3 py-2 text-gray-700 hover:text-nature-green font-semibold transition-colors"
              >
                Features
              </a>
              <a 
                href="#video" 
                onClick={(e) => handleNavClick(e, 'video')}
                className="block px-3 py-2 text-gray-700 hover:text-nature-green font-semibold transition-colors"
              >
                Video
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => handleNavClick(e, 'gallery')}
                className="block px-3 py-2 text-gray-700 hover:text-nature-green font-semibold transition-colors"
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block px-3 py-2 text-gray-700 hover:text-nature-green font-semibold transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
