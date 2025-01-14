import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("/assets/hero-background-placeholder.webp"); // Placeholder image

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/hero-background.webp"; 
    img.onload = () => {
      setImageSrc("/assets/hero-background.webp"); // Set the actual image source
      setImageLoaded(true);
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        backgroundImage: imageLoaded ? `url('${imageSrc}')` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: imageLoaded ? "transparent" : "#222", // Fallback background color
      }}
    >
      {/* Loading State */}
      {!imageLoaded && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dimmed overlay during loading
            zIndex: 10,
            color: "#fff",
          }}
        >
          {/* Loading Spinner */}
          <CircularProgress color="primary" />
          <Typography
            variant="h5" // Larger text variant
            sx={{
              mt: 2,
              color: "#fff",
              fontSize: { xs: "1.5rem", sm: "2rem" }, // Bigger font size
            }}
          >
            Loading...
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: imageLoaded ? 1 : -1, // Ensure the overlay is hidden after loading
        }}
      />
      {imageLoaded && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          {/* Hero Text */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Added text shadow for better readability
              padding: "0 20px", // Added padding for better spacing
            }}
          >
            Achieve Your Dreams Abroad
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: "#fff",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)", // Added text shadow for better readability
            }}
          >
            We help students and professionals navigate visa applications, study opportunities, and work placements.
          </Typography>
          {/* Get Started Button */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "uppercase" }}
            component={Link}
            to="/get-started"
          >
            Get Started
          </Button>
        </motion.div>
      )}
    </Box>
  );
};

export default React.memo(Hero);