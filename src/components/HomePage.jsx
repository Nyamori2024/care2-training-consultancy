import React from 'react';
import HeroSection from './Hero/HeroSection';
import AboutUsSection from './AboutUsSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import ContactFormSection from './ContactFormSection';
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const HomePage = () => {
  // Define animation variants for staggered loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 }, // Start slightly above and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Slide down and fade in
  };

  return (
    <Box>
      {/* Motion container to control staggered animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Each section is a child with its own animation */}
        <motion.div variants={childVariants}>
          <div id="hero">
            <HeroSection />
          </div>
        </motion.div>
        <motion.div variants={childVariants}>
          <div id="about">
            <AboutUsSection />
          </div>
        </motion.div>
        <motion.div variants={childVariants}>
          <div id="services">
            <ServicesSection />
          </div>
        </motion.div>
        <motion.div variants={childVariants}>
          <div id="portfolio">
            <PortfolioSection />
          </div>
        </motion.div>
        <motion.div variants={childVariants}>
          <div id="contact">
            <ContactFormSection />
          </div>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default React.memo(HomePage);