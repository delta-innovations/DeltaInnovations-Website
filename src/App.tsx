import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
export function App() {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="services">
        <ServicesSection />
      </Element>
      <Element name="why-us">
        <WhyChooseUsSection />
      </Element>
      <Element name="contact">
        <ContactSection />
      </Element>
      <Footer />
    </div>;
}