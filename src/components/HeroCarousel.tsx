import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroCarousel = () => {
  const slides = [
    {
      image: '/lovable-uploads/34a7a2ae-be7f-44c8-8338-6ad840920a6e.png',
      title: 'Modern Passive House',
      subtitle: 'Energy-efficient living in harmony with nature'
    },
    {
      image: '/lovable-uploads/448f7b5c-bd78-4214-9f50-12701bae73b6.png',
      title: 'Sustainable Architecture',
      subtitle: 'Natural materials and innovative design in perfect symbiosis'
    },
    {
      image: '/lovable-uploads/568ff74c-c8c8-4094-afbb-7dd37012bdfd.png',
      title: 'Energy Independence',
      subtitle: 'Solar panels and heat pumps for minimal operating costs'
    },
    {
      image: '/lovable-uploads/0fe14ab5-4acf-4772-a0ed-fcb07d64259b.png',
      title: 'Comfort and Health',
      subtitle: 'Clean air and optimal temperature throughout the year'
    },
    {
      image: '/lovable-uploads/9e404b0e-7d97-43eb-a9c5-c13ea4714002.png',
      title: 'Smart Home Technology',
      subtitle: 'Intelligent home control for maximum convenience'
    },
    {
      image: '/lovable-uploads/3539edde-8070-43b2-8b1f-f43bc15fa201.png',
      title: 'Natural Environment',
      subtitle: 'Perfect integration into the landscape with ecological considerations'
    },
    {
      image: '/lovable-uploads/b432b6aa-d779-4ac0-b6fa-af236fbf39fd.png',
      title: 'Modern Design',
      subtitle: 'Clean lines and functional spaces for contemporary lifestyle'
    },
    {
      image: '/lovable-uploads/d4d36bfd-474c-42eb-acb0-ab23d719e890.png',
      title: 'Thermal Insulation',
      subtitle: 'Latest insulation materials for zero energy loss'
    },
    {
      image: '/lovable-uploads/8bdb5481-b65c-4065-823f-04ca359d9bc7.png',
      title: 'Quality Living',
      subtitle: 'Spaces designed for maximum utilization and life comfort'
    },
    {
      image: '/lovable-uploads/16e92610-2f35-4f95-a1ab-5230710ef70d.png',
      title: 'Future of Living',
      subtitle: 'Investment in sustainable future for next generations'
    },
    {
      image: '/lovable-uploads/98f7d7ff-d6d0-47d1-9bc6-f1783f162c4e.png',
      title: 'Modern Kitchen',
      subtitle: 'Functional spaces with natural materials and LED lighting'
    },
    {
      image: '/lovable-uploads/114278df-7624-417c-a266-586e18155b5e.png',
      title: 'Natural Garden',
      subtitle: 'Stone garden with diverse plants and herbs'
    },
    {
      image: '/lovable-uploads/b2dd4ea1-2715-42e3-8663-0422effb0aa3.png',
      title: 'Garden with View',
      subtitle: 'Beautiful landscape view with diverse vegetation'
    },
    {
      image: '/lovable-uploads/3b514818-aac4-4270-be8f-45418b9c2190.png',
      title: 'Raised Garden Beds',
      subtitle: 'Practical solution for growing your own vegetables'
    },
    {
      image: '/lovable-uploads/a1a963c8-5683-4b15-bbbd-ac92c88692e2.png',
      title: 'Flower Garden',
      subtitle: 'Colorful palette with purple flowering plants'
    },
    {
      image: '/lovable-uploads/0ff67a38-a52e-4dc1-a5c6-cdd5af2bb8a3.png',
      title: 'Landscape Design',
      subtitle: 'Thoughtful garden arrangement for maximum utilization'
    },
    {
      image: '/lovable-uploads/06e31b09-424c-46b9-b29f-f4f6fb2325d9.png',
      title: 'Home Garden',
      subtitle: 'Harmonious connection of architecture with nature'
    },
    {
      image: '/lovable-uploads/842f3a53-9083-473a-8ee6-b208bc995c07.png',
      title: 'Relaxation Zone',
      subtitle: 'Wooden terrace with swings and garden views'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    // Create and play background music
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.1; // Low volume for background music
    
    const playMusic = () => {
      audio.play().catch(console.error);
    };

    // Try to play immediately
    playMusic();

    // Also try to play on first user interaction
    const handleUserInteraction = () => {
      playMusic();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index < 3 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {slides[currentIndex].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            {slides[currentIndex].subtitle}
          </p>
        </div>
      </div>

      {/* Slower bounce arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 rounded-full w-16 h-16 flex items-center justify-center"
          style={{
            animation: 'bounce 2.3s infinite'
          }}
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
