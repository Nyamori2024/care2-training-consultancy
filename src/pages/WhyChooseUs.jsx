import { Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React, { useEffect } from "react"; // Import useEffect for side effects

const WhyChooseUsSection = () => {
  const benefits = [
    "Expert guidance from experienced consultants",
    "Personalized services tailored to your needs",
    "Comprehensive support throughout your journey",
    "Proven track record of successful placements",
    "Access to exclusive resources and opportunities",
  ];

  // Animation variants for staggered effects
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }, // Staggered delay
    }),
  };

  // Effect to scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8, 
        textAlign: "center", 
        backgroundColor: "#e3f2fd", 
        borderRadius: "8px", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)", 
        width: '100%', // Full width
        px: 0, // Remove horizontal padding
        mx: 0 // Remove margin to touch edges
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} key={index}> {/* Two columns on small screens and above */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }} // Center icon and text
              >
                <CheckCircleIcon sx={{ color: "#1976d2", marginRight: 1 }} />
                <Typography variant="body1" sx={{ fontSize: "1.2rem", color: "#333", lineHeight: 1.5 }}>
                  {benefit}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default React.memo(WhyChooseUsSection); // Prevent unnecessary re-renders