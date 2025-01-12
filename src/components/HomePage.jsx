
import React from 'react';
import HeroSection from './Hero/HeroSection';
import AboutUsSection from './AboutUsSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import ContactFormSection from './ContactFormSection';
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div id="hero">
          <HeroSection />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div id="about">
          <AboutUsSection />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div id="services">
          <ServicesSection />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div id="portfolio">
          <PortfolioSection />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div id="contact">
          <ContactFormSection />
        </div>
      </motion.div>
    </Box>
  );
};

export default React.memo(HomePage); // Prevent unnecessary re-renders