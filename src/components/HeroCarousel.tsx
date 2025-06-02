
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const images = [
    '/lovable-uploads/34a7a2ae-be7f-44c8-8338-6ad840920a6e.png',
    '/lovable-uploads/448f7b5c-bd78-4214-9f50-12701bae73b6.png',
    '/lovable-uploads/568ff74c-c8c8-4094-afbb-7dd37012bdfd.png',
    '/lovable-uploads/0fe14ab5-4acf-4772-a0ed-fcb07d64259b.png',
    '/lovable-uploads/9e404b0e-7d97-43eb-a9c5-c13ea4714002.png',
    '/lovable-uploads/3539edde-8070-43b2-8b1f-f43bc15fa201.png',
    '/lovable-uploads/b432b6aa-d779-4ac0-b6fa-af236fbf39fd.png',
    '/lovable-uploads/d4d36bfd-474c-42eb-acb0-ab23d719e890.png',
    '/lovable-uploads/8bdb5481-b65c-4065-823f-04ca359d9bc7.png',
    '/lovable-uploads/16e92610-2f35-4f95-a1ab-5230710ef70d.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Pasivní dům - ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Moderní Pasivní Dům
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Energeticky efektivní bydlení v harmonii s přírodou
          </p>
          <Button 
            size="lg" 
            className="bg-nature-green hover:bg-nature-green/90 text-white px-8 py-3 text-lg"
          >
            Zjistit více
          </Button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
