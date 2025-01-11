// src/components/HomePage.jsx

import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import ContactFormSection from './ContactFormSection';

const HomePage = () => {
  return (
    <div>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutUsSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="contact">
        <ContactFormSection />
      </div>
    </div>
  );
};

export default HomePage;