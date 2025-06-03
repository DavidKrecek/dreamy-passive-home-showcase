
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
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
        <div className="flex justify-between items-center h-7.25">
          <div 
            className="text-lg font-bold text-nature-green cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            Vaše nové bydlení
          </div>
          <div className="hidden md:flex space-x-6">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={getLinkClassName('home')}
            >
              Domů
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={getLinkClassName('about')}
            >
              O domě
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className={getLinkClassName('features')}
            >
              Vlastnosti
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
              Galerie
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={getLinkClassName('contact')}
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
