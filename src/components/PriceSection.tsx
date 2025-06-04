
import React from 'react';
import { Home } from 'lucide-react';

const PriceSection = () => {
  return (
    <section id="price" className="py-20 bg-nature-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center justify-center mb-6">
            <Home className="h-12 w-12 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Sale Price
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="text-6xl md:text-7xl font-bold mb-4">
              €998,000
            </div>
            <p className="text-xl opacity-90">
              Including complete equipment and technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
