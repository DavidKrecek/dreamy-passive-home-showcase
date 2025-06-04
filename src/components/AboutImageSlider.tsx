
import React, { useState, useEffect } from 'react';

const AboutImageSlider = () => {
  const images = [
    '/lovable-uploads/3539edde-8070-43b2-8b1f-f43bc15fa201.png',
    '/lovable-uploads/06e31b09-424c-46b9-b29f-f4f6fb2325d9.png',
    '/lovable-uploads/0fe14ab5-4acf-4772-a0ed-fcb07d64259b.png',
    '/lovable-uploads/34a7a2ae-be7f-44c8-8338-6ad840920a6e.png',
    '/lovable-uploads/448f7b5c-bd78-4214-9f50-12701bae73b6.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image}
            alt={`Passive house view ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutImageSlider;
