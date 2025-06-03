import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [{
    src: '/lovable-uploads/34a7a2ae-be7f-44c8-8338-6ad840920a6e.png',
    alt: 'Moderní pasivní dům - exteriér'
  }, {
    src: '/lovable-uploads/448f7b5c-bd78-4214-9f50-12701bae73b6.png',
    alt: 'Udržitelná architektura'
  }, {
    src: '/lovable-uploads/568ff74c-c8c8-4094-afbb-7dd37012bdfd.png',
    alt: 'Energetická nezávislost - solární panely'
  }, {
    src: '/lovable-uploads/0fe14ab5-4acf-4772-a0ed-fcb07d64259b.png',
    alt: 'Komfort a zdraví'
  }, {
    src: '/lovable-uploads/9e404b0e-7d97-43eb-a9c5-c13ea4714002.png',
    alt: 'Smart home technologie'
  }, {
    src: '/lovable-uploads/3539edde-8070-43b2-8b1f-f43bc15fa201.png',
    alt: 'Přírodní prostředí'
  }, {
    src: '/lovable-uploads/b432b6aa-d779-4ac0-b6fa-af236fbf39fd.png',
    alt: 'Moderní design'
  }, {
    src: '/lovable-uploads/d4d36bfd-474c-42eb-acb0-ab23d719e890.png',
    alt: 'Tepelná izolace'
  }, {
    src: '/lovable-uploads/8bdb5481-b65c-4065-823f-04ca359d9bc7.png',
    alt: 'Kvalitní bydlení'
  }, {
    src: '/lovable-uploads/16e92610-2f35-4f95-a1ab-5230710ef70d.png',
    alt: 'Budoucnost bydlení'
  }, {
    src: '/lovable-uploads/98f7d7ff-d6d0-47d1-9bc6-f1783f162c4e.png',
    alt: 'Moderní kuchyně'
  }, {
    src: '/lovable-uploads/114278df-7624-417c-a266-586e18155b5e.png',
    alt: 'Přírodní zahrada'
  }, {
    src: '/lovable-uploads/b2dd4ea1-2715-42e3-8663-0422effb0aa3.png',
    alt: 'Zahrada s výhledem'
  }, {
    src: '/lovable-uploads/3b514818-aac4-4270-be8f-45418b9c2190.png',
    alt: 'Vyvýšené záhony'
  }, {
    src: '/lovable-uploads/a1a963c8-5683-4b15-bbbd-ac92c88692e2.png',
    alt: 'Květinová zahrada'
  }, {
    src: '/lovable-uploads/0ff67a38-a52e-4dc1-a5c6-cdd5af2bb8a3.png',
    alt: 'Terénní úpravy'
  }, {
    src: '/lovable-uploads/06e31b09-424c-46b9-b29f-f4f6fb2325d9.png',
    alt: 'Domácí zahrada'
  }, {
    src: '/lovable-uploads/842f3a53-9083-473a-8ee6-b208bc995c07.png',
    alt: 'Relaxační zóna s terasou'
  }];
  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  };
  React.useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);
  return <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green mb-6">Gallery</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Prohlédněte si fotografie tohoto výjimečného pasivního domu a jeho okolí
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-slide-up">
          {images.map((image, index) => <div key={index} className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group hover:scale-105 transition-transform duration-300" onClick={() => openLightbox(index)}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {selectedImage !== null && <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button onClick={closeLightbox} className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/20 backdrop-blur-sm">
            <X className="w-8 h-8" />
          </button>
          
          <button onClick={goToPrevious} className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/20 backdrop-blur-sm">
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button onClick={goToNext} className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/20 backdrop-blur-sm">
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <img src={images[selectedImage].src} alt={images[selectedImage].alt} className="max-w-[95vw] max-h-[95vh] object-contain" />
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-lg font-medium">{images[selectedImage].alt}</p>
            <p className="text-sm opacity-75 mt-1">
              {selectedImage + 1} / {images.length}
            </p>
          </div>
        </div>}
    </section>;
};
export default Gallery;