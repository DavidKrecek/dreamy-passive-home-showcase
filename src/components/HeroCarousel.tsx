
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const slides = [
    {
      image: '/lovable-uploads/34a7a2ae-be7f-44c8-8338-6ad840920a6e.png',
      title: 'Moderní pasivní dům',
      subtitle: 'Energeticky efektivní bydlení v harmonii s přírodou'
    },
    {
      image: '/lovable-uploads/448f7b5c-bd78-4214-9f50-12701bae73b6.png',
      title: 'Udržitelná architektura',
      subtitle: 'Přírodní materiály a inovativní design v dokonalé symbióze'
    },
    {
      image: '/lovable-uploads/568ff74c-c8c8-4094-afbb-7dd37012bdfd.png',
      title: 'Energetická nezávislost',
      subtitle: 'Solární panely a tepelná čerpadla pro minimální náklady'
    },
    {
      image: '/lovable-uploads/0fe14ab5-4acf-4772-a0ed-fcb07d64259b.png',
      title: 'Komfort a zdraví',
      subtitle: 'Čistý vzduch a optimální teplota po celý rok'
    },
    {
      image: '/lovable-uploads/9e404b0e-7d97-43eb-a9c5-c13ea4714002.png',
      title: 'Smart home technologie',
      subtitle: 'Inteligentní řízení domácnosti pro maximální pohodlí'
    },
    {
      image: '/lovable-uploads/3539edde-8070-43b2-8b1f-f43bc15fa201.png',
      title: 'Přírodní prostředí',
      subtitle: 'Dokonalé začlenění do krajiny s ohledem na ekologii'
    },
    {
      image: '/lovable-uploads/b432b6aa-d779-4ac0-b6fa-af236fbf39fd.png',
      title: 'Moderní design',
      subtitle: 'Čisté linie a funkční prostory pro současný životní styl'
    },
    {
      image: '/lovable-uploads/d4d36bfd-474c-42eb-acb0-ab23d719e890.png',
      title: 'Tepelná izolace',
      subtitle: 'Nejmodernější izolační materiály pro nulovou energetickou ztrátu'
    },
    {
      image: '/lovable-uploads/8bdb5481-b65c-4065-823f-04ca359d9bc7.png',
      title: 'Kvalitní bydlení',
      subtitle: 'Prostory navržené pro maximální využití a životní pohodu'
    },
    {
      image: '/lovable-uploads/16e92610-2f35-4f95-a1ab-5230710ef70d.png',
      title: 'Budoucnost bydlení',
      subtitle: 'Investice do udržitelné budoucnosti pro další generace'
    },
    {
      image: '/lovable-uploads/98f7d7ff-d6d0-47d1-9bc6-f1783f162c4e.png',
      title: 'Moderní kuchyň',
      subtitle: 'Funkční prostory s přírodními materiály a LED osvětlením'
    },
    {
      image: '/lovable-uploads/114278df-7624-417c-a266-586e18155b5e.png',
      title: 'Přírodní zahrada',
      subtitle: 'Kamínková zahrada s rozmanitými rostlinami a bylinkami'
    },
    {
      image: '/lovable-uploads/b2dd4ea1-2715-42e3-8663-0422effb0aa3.png',
      title: 'Zahrada s výhledem',
      subtitle: 'Krásný výhled na krajinu s pestrou vegetací'
    },
    {
      image: '/lovable-uploads/3b514818-aac4-4270-be8f-45418b9c2190.png',
      title: 'Vyvýšené záhony',
      subtitle: 'Praktické řešení pro pěstování vlastní zeleniny'
    },
    {
      image: '/lovable-uploads/a1a963c8-5683-4b15-bbbd-ac92c88692e2.png',
      title: 'Květinová zahrada',
      subtitle: 'Pestrá paleta barev s česnekově fialovými květy'
    },
    {
      image: '/lovable-uploads/0ff67a38-a52e-4dc1-a5c6-cdd5af2bb8a3.png',
      title: 'Terénní úpravy',
      subtitle: 'Promyšlené uspořádání zahrady pro maximální využití'
    },
    {
      image: '/lovable-uploads/06e31b09-424c-46b9-b29f-f4f6fb2325d9.png',
      title: 'Domácí zahrada',
      subtitle: 'Harmonické propojení architektury s přírodou'
    },
    {
      image: '/lovable-uploads/842f3a53-9083-473a-8ee6-b208bc995c07.png',
      title: 'Relaxační zóna',
      subtitle: 'Dřevěná terasa s houpačkami a výhledem do zahrady'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
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

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 rounded-full w-12 h-12 flex items-center justify-center"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 rounded-full w-12 h-12 flex items-center justify-center"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

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
    </section>
  );
};

export default HeroCarousel;
