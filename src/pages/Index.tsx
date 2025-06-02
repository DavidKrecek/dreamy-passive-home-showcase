
import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroCarousel />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
