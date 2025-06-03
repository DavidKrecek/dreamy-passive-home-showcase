
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green mb-6">
            Prohlídka domu
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Podívejte se na podrobnou prezentaci tohoto výjimečného pasivního domu
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Prohlídka pasivního domu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
