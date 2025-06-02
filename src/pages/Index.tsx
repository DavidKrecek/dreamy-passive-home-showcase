
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
      <section id="home">
        <HeroCarousel />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Index;
