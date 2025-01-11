// WhyChooseUsSection.jsx
import { Typography, Container, Grid, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const WhyChooseUsSection = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleLearnMore = () => {
    navigate("/learn-more"); // Navigate to the LearnMore component
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

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

  return (
    <Container 
      component="section" 
      sx={{ 
        py: 8, 
        textAlign: "center", 
        backgroundColor: "#e3f2fd", 
        borderRadius: "8px", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)", 
        maxWidth: { xs: '90%', sm: '80%', md: '70%', lg: '100%' }, // Adjust maxWidth for responsiveness
        mx: "auto" // Center the container
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
        <Box sx={{ mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={handleLearnMore} // Use onClick to handle navigation and scroll
            sx={{ 
              textTransform: "uppercase", 
              "&:hover": { 
                backgroundColor: "#1565c0", 
                transform: "scale(1.05)", 
                transition: "0.3s" 
              },
              "&:focus": {
                outline: "2px solid #1976d2", // Focus outline for accessibility
              }
            }}
            aria-label="Learn more about our services"
          >
            Learn More
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default WhyChooseUsSection;