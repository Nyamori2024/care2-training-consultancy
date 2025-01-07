import { Typography, Container, List, ListItem, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

  return (
    <Container component="section" sx={{ py: 8, textAlign: "center", backgroundColor: "#e3f2fd", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Why Choose Us?
        </Typography>
        <List sx={{ listStyleType: "none", padding: 0 }}>
          {benefits.map((benefit, index) => (
            <ListItem key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
              >
                <CheckCircleIcon sx={{ color: "#1976d2", marginRight: 1 }} />
                <Typography variant="body1" sx={{ fontSize: "1.2rem", color: "#333" }}>
                  {benefit}
                </Typography>
              </motion.div>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
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
            aria-label="Get in touch with us"
          >
            Get in Touch
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default WhyChooseUsSection;