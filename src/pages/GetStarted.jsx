import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        py: 8,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, mt: 4, fontWeight: "bold" }}>
        Get Started with Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We are here to assist you in navigating the complexities of visa applications, study opportunities, and work placements. Follow the steps below to begin your journey:
      </Typography>
      {["Choose Your Service", "Fill Out the Application", "Schedule a Consultation"].map((step, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {index + 1}. {step}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {index === 0 && "Select the service that best fits your needs, whether it's student visa assistance, work abroad opportunities, or consultancy for living abroad."}
            {index === 1 && "Complete the application form with the necessary details to get started."}
            {index === 2 && "Book a consultation with our experts to discuss your options and get personalized advice."}
          </Typography>
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link} // Use Link to navigate back
        to="/" // Navigate back to the HeroSection or HomePage
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default React.memo(GetStarted); // Prevent unnecessary re-renders