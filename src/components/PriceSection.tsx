
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Calendar, Phone } from 'lucide-react';

const PriceSection = () => {
  return (
    <section className="py-20 bg-nature-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center justify-center mb-6">
            <Home className="h-12 w-12 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Prodejní cena
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="text-6xl md:text-7xl font-bold mb-4">
              24 900 000 Kč
            </div>
            <p className="text-xl opacity-90 mb-6">
              Včetně kompletního vybavení a technologií
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3" />
                <span>Okamžitá dostupnost</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>Možnost prohlídky</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-nature-green hover:bg-white/90 font-semibold px-8 py-3"
            >
              Domluvit prohlídku
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
            >
              Stáhnout dokumenty
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
