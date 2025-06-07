
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const images = [
    {
      src: '/lovable-uploads/34a7a2ae-be7f-44c8-8338-6ad840920a6e.png',
      alt: 'Modern passive house - exterior'
    },
    {
      src: '/lovable-uploads/448f7b5c-bd78-4214-9f50-12701bae73b6.png',
      alt: 'Sustainable architecture'
    },
    {
      src: '/lovable-uploads/568ff74c-c8c8-4094-afbb-7dd37012bdfd.png',
      alt: 'Energy independence - solar panels'
    },
    {
      src: '/lovable-uploads/0fe14ab5-4acf-4772-a0ed-fcb07d64259b.png',
      alt: 'Comfort and health'
    },
    {
      src: '/lovable-uploads/9e404b0e-7d97-43eb-a9c5-c13ea4714002.png',
      alt: 'Smart home technology'
    },
    {
      src: '/lovable-uploads/3539edde-8070-43b2-8b1f-f43bc15fa201.png',
      alt: 'Natural environment'
    },
    {
      src: '/lovable-uploads/b432b6aa-d779-4ac0-b6fa-af236fbf39fd.png',
      alt: 'Modern design'
    },
    {
      src: '/lovable-uploads/d4d36bfd-474c-42eb-acb0-ab23d719e890.png',
      alt: 'Thermal insulation'
    },
    {
      src: '/lovable-uploads/8bdb5481-b65c-4065-823f-04ca359d9bc7.png',
      alt: 'Quality living'
    },
    {
      src: '/lovable-uploads/16e92610-2f35-4f95-a1ab-5230710ef70d.png',
      alt: 'Future of living'
    },
    {
      src: '/lovable-uploads/98f7d7ff-d6d0-47d1-9bc6-f1783f162c4e.png',
      alt: 'Modern kitchen'
    },
    {
      src: '/lovable-uploads/114278df-7624-417c-a266-586e18155b5e.png',
      alt: 'Natural garden'
    },
    {
      src: '/lovable-uploads/b2dd4ea1-2715-42e3-8663-0422effb0aa3.png',
      alt: 'Garden with view'
    },
    {
      src: '/lovable-uploads/3b514818-aac4-4270-be8f-45418b9c2190.png',
      alt: 'Raised garden beds'
    },
    {
      src: '/lovable-uploads/a1a963c8-5683-4b15-bbbd-ac92c88692e2.png',
      alt: 'Flower garden'
    },
    {
      src: '/lovable-uploads/0ff67a38-a52e-4dc1-a5c6-cdd5af2bb8a3.png',
      alt: 'Landscape design'
    },
    {
      src: '/lovable-uploads/06e31b09-424c-46b9-b29f-f4f6fb2325d9.png',
      alt: 'Home garden'
    },
    {
      src: '/lovable-uploads/842f3a53-9083-473a-8ee6-b208bc995c07.png',
      alt: 'Relaxation zone with terrace'
    },
    // Adding placeholder images to reach 50 total
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      alt: 'Woman sitting on bed using laptop'
    },
    {
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      alt: 'Turned on gray laptop computer'
    },
    {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      alt: 'Macro photography of black circuit board'
    },
    {
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      alt: 'Monitor showing Java programming'
    },
    {
      src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      alt: 'Person using MacBook Pro'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      alt: 'Woman in white long sleeve shirt using black laptop computer'
    },
    {
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      alt: 'White robot near brown wall'
    },
    {
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      alt: 'Matrix movie still'
    },
    {
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      alt: 'Gray and black laptop computer on surface'
    },
    {
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      alt: 'Colorful software or web code on a computer monitor'
    },
    {
      src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
      alt: 'Gray concrete bridge and waterfalls during daytime'
    },
    {
      src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      alt: 'Orange flowers'
    },
    {
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      alt: 'River between mountains under white clouds'
    },
    {
      src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      alt: 'Photo of pine trees'
    },
    {
      src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
      alt: 'Low angle photography of trees at daytime'
    },
    {
      src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      alt: 'Sun light passing through green leafed tree'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      alt: 'Landscape photography of mountain hit by sun rays'
    },
    {
      src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      alt: 'Blue starry night'
    },
    {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      alt: 'Foggy mountain summit'
    },
    {
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      alt: 'Ocean wave at beach'
    },
    {
      src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
      alt: 'Landscape photo of mountain alps'
    },
    {
      src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
      alt: 'River surrounded by rock formation'
    },
    {
      src: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
      alt: 'Photo of desert sand'
    },
    {
      src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      alt: 'Landmark photography of trees near rocky mountain under blue skies daytime'
    },
    {
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
      alt: 'Forest heat by sunbeam'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      alt: 'Yellow lights between trees'
    },
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      alt: 'Body of water surrounded by trees'
    },
    {
      src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      alt: 'Birds eye view photograph of green mountains'
    },
    {
      src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3',
      alt: 'Green grass and gray rocky mountain during daytime'
    },
    {
      src: 'https://images.unsplash.com/photo-1527576539890-dfa815648363',
      alt: 'Grayscale photo of low angle view of building'
    },
    {
      src: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a',
      alt: 'Low angle photography of gray building at daytime'
    },
    {
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      alt: 'White concrete building'
    }
  ];

  const goToPrevious = () => {
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const goToNext = () => {
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const scrollToThumbnail = (index: number) => {
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const thumbnail = document.getElementById(`thumbnail-${index}`);
    
    if (thumbnailContainer && thumbnail) {
      const containerWidth = thumbnailContainer.offsetWidth;
      const thumbnailLeft = thumbnail.offsetLeft;
      const thumbnailWidth = thumbnail.offsetWidth;
      
      const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
      thumbnailContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const selectImage = (index: number) => {
    setSelectedImage(index);
    scrollToThumbnail(index);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green mb-6">Gallery</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            View photos of this exceptional passive house and its surroundings
          </p>
        </div>
        
        {/* Main Image Display */}
        <div className="mb-8 animate-slide-up">
          <div className="relative aspect-video max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="w-full h-full object-cover" 
            />
            
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrevious} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={goToNext} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
          
          {/* Image Title */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-medium text-gray-800">{images[selectedImage].alt}</h3>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="animate-slide-up">
          <div 
            id="thumbnail-container"
            className="flex overflow-x-auto space-x-3 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                id={`thumbnail-${index}`}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  selectedImage === index 
                    ? 'ring-4 ring-nature-green scale-105' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                onClick={() => selectImage(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
