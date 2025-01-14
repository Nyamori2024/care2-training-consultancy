import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material"; // Import Material-UI components
import { motion } from "framer-motion"; // Import motion for animations
import { Link } from "react-router-dom"; // Import Link for navigation
import { serviceDetails } from "../data/serviceData"; // Import service details data

const Services = () => {
  // Function to scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the window
  };

  return (
    <Box component="section" sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Our Services // Section title
      </Typography>
      <Grid container spacing={4}> // Grid layout for services
        {serviceDetails.map((service, index) => ( // Map through service details
          <Grid item xs={12} sm={6} md={4} key={index}> // Responsive grid item
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} // Initial animation state
              whileInView={{ opacity: 1, scale: 1 }} // Animation state when in view
              viewport={{ once: true }} // Animation triggers only once
              transition={{ duration: 0.5, delay: index * 0.2 }} // Animation duration and delay
            >
              <Card
                sx={{
                  textAlign: "left",
                  height: "100%",
                  transition: "0.3s", // Transition for hover effect
                  "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }, // Hover effect
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {service.title} // Display the service title
                  </Typography>
                  <Typography variant="body2" sx={{ my: 2 }}>
                    {service.description} // Display the service description
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    component={Link}
                    to={`/service/${index}`} // Link to the service detail page
                    onClick={handleScrollToTop} // Scroll to top on click
                    sx={{ mt: 2 }} // Added spacing
                  >
                    Learn More // Button text
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services; // Export the component