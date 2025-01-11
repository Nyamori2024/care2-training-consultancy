// GetStarted.jsx

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation

const GetStarted = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, mt:4, fontWeight: "bold" }}>
        Get Started with Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We are here to assist you in navigating the complexities of visa applications, study opportunities, and work placements. Follow the steps below to begin your journey:
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        1. Choose Your Service
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        Select the service that best fits your needs, whether it's student visa assistance, work abroad opportunities, or consultancy for living abroad.
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        2. Fill Out the Application
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        Complete the application form with the necessary details to get started.
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        3. Schedule a Consultation
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        Book a consultation with our experts to discuss your options and get personalized advice.
      </Typography>
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

export default GetStarted;