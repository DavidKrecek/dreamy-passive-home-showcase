
import React from 'react';
import { Leaf, Sun, Thermometer, Home, Droplets, Shield, Zap, Wind, TreePine, Gauge, Battery, Wifi } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Ecological Living",
      description: "Minimal carbon footprint thanks to passive standard and renewable energy sources."
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Energy",
      description: "Photovoltaic panels cover most of the household's energy needs."
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Climate Control",
      description: "Heat recovery and controlled ventilation ensure ideal temperature year-round."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Modern Design",
      description: "Clean architectural style with emphasis on functionality and aesthetics."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Pool & Terrace",
      description: "Outdoor relaxation area with swimming pool and spacious wooden terrace."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Insulation",
      description: "Advanced insulation materials guarantee energy efficiency."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Class A+",
      description: "Highest energy class with minimal energy consumption."
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Clean Air",
      description: "Air filtration system ensures healthy indoor environment."
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Natural Materials",
      description: "Wood and other ecological materials for healthy living."
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Low Operating Costs",
      description: "Save up to 90% on heating and cooling costs."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Energy Storage",
      description: "Battery system for storing excess solar energy."
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Smart Home",
      description: "Intelligent control of all systems via mobile application."
    }
  ];

  return (
    <section id="features" className="py-20 bg-soft-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-green mb-6">Key Features</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover all the benefits of modern passive living in this exceptional home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-nature-green mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-nature-green transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
