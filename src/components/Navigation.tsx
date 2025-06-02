
import React from 'react';

const Navigation = () => {
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="text-xl font-bold text-nature-green">
            Pasivní Dům
          </div>
          <div className="hidden md:flex space-x-6">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-gray-700 hover:text-nature-green font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nature-green after:transition-all after:duration-300 hover:after:w-full"
            >
              Domů
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-700 hover:text-nature-green font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nature-green after:transition-all after:duration-300 hover:after:w-full"
            >
              O domě
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-gray-700 hover:text-nature-green font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nature-green after:transition-all after:duration-300 hover:after:w-full"
            >
              Vlastnosti
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-700 hover:text-nature-green font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-nature-green after:transition-all after:duration-300 hover:after:w-full"
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
