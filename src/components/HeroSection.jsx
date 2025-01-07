
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

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
        backgroundImage: "url('/src/assets/images/hero-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
          Achieve Your Dreams Abroad
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: "#fff" }}>
          We help students and professionals navigate visa applications, study opportunities, and work placements.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: "uppercase" }}
        >
          Get Started
        </Button>
      </motion.div>
    </Box>
  );
};

export default HeroSection;