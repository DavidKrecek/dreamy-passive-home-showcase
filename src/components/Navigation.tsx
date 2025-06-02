
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-nature-green">
            Pasivní Dům
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-nature-green transition-colors">
              Domů
            </a>
            <a href="#about" className="text-gray-700 hover:text-nature-green transition-colors">
              O domě
            </a>
            <a href="#features" className="text-gray-700 hover:text-nature-green transition-colors">
              Vlastnosti
            </a>
            <a href="#contact" className="text-gray-700 hover:text-nature-green transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
