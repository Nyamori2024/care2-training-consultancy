import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const services = [
  {
    title: "Student Visa Assistance",
    description: "Expert guidance to make your student visa process seamless.",
  },
  {
    title: "Work Abroad Opportunities",
    description: "Find job opportunities and placements abroad with ease.",
  },
  {
    title: "Consultancy for Living Abroad",
    description: "Comprehensive advice for moving and settling in another country.",
  },
];

const ServicesSection = () => {
  return (
    <Box component="section" sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ textAlign: "left", height: "100%", transition: "0.3s", "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.2)" } }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ my: 2 }}>
                    {service.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="small" 
                    component={Link} // Use Link to navigate
                    to={`/service/${index}`} // Navigate to the service detail page
                  >
                    Learn More
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

export default ServicesSection;