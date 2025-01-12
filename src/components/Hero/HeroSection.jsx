import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url('./assets/hero-background.webp')", // Ensure the path is correct
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Hero Text */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            color: "#fff",
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
    </Box>
  );
};

export default React.memo(HeroSection); // Prevent unnecessary re-renders