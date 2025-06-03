
import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import VideoSection from '../components/VideoSection';
import Gallery from '../components/Gallery';
import PriceSection from '../components/PriceSection';
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
      <VideoSection />
      <Gallery />
      <PriceSection />
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Index;
