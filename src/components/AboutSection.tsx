
import React from 'react';
import AboutImageSlider from './AboutImageSlider';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-nature-green mb-6">Exceptional Passive House</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We present to you a unique passive house that combines modern architectural design 
              with the most advanced technologies for energy-efficient living. This house is designed 
              to provide maximum comfort with minimal energy consumption.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Thanks to perfect thermal insulation, quality windows and controlled ventilation with heat recovery, 
              the house achieves exceptional energy parameters. Solar panels on the roof ensure 
              renewable energy production for the household.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The interior of the house is designed with emphasis on natural light and connection with the surrounding nature. 
              Large windows and glazed walls create a feeling of connection with the beautifully landscaped garden 
              and swimming pool.
            </p>
          </div>
          <div className="animate-slide-up">
            <AboutImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
