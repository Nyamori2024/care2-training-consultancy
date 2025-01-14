import { useParams, Link } from "react-router-dom"; // Import necessary hooks and components from React Router
import { Typography, Container, Button, Box } from "@mui/material"; // Import Material-UI components
import { motion } from "framer-motion"; // Import motion for animations
import { serviceDetails } from "../data/serviceData"; // Import service details data

const ServiceDetail = () => {
  const { serviceId } = useParams(); // Get the service ID from the URL parameters
  const service = serviceDetails[parseInt(serviceId, 10)]; // Retrieve the service details based on the ID

  // If the service is not found, display a message
  if (!service) {
    return (
      <Container sx={{ pt: 8 }}>
        <Typography variant="h6">Service not found.</Typography>
      </Container>
    );
  }

  // Function to return a description of why the service matters
  const whyThisServiceMatters = () => {
    switch (service.title) {
      case "Student Visa Assistance":
        return (
          <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
            Securing a student visa is a crucial step in your educational journey. Our service not only simplifies the application process but also equips you with insider knowledge about the specific requirements of your chosen country. This ensures that you avoid common pitfalls and enhances your chances of approval, allowing you to focus on what truly matters—your studies and personal growth.
          </Typography>
        );

      case "Work Abroad Opportunities":
        return (
          <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
            Finding a job abroad can be a daunting task, but our service transforms this challenge into an exciting opportunity. We connect you with a network of employers who value international talent and provide you with tailored strategies to stand out in a competitive job market. With our support, you can turn your dream of working overseas into a reality, gaining invaluable experience and cultural insights along the way.
          </Typography>
        );

      case "Consultancy for Living Abroad":
        return (
          <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
            Relocating to a new country involves more than just logistics; it’s about adapting to a new way of life. Our consultancy service offers you a comprehensive roadmap for settling in, from finding the right neighborhood to understanding local customs and legal requirements. We empower you to embrace your new environment with confidence, ensuring that your transition is as smooth and enjoyable as possible.
          </Typography>
        );

      default:
        return null; // Return null if no matching service title is found
    }
  };

  return (
    <Container sx={{ pt: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 0.5 }} // Animation duration
      >
        <Typography variant="h4" sx={{ mt: 4, fontWeight: "bold", color: "#1976d2" }}>
          {service.title} // Display the service title
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4, lineHeight: 1.6 }}>
          {service.description} // Display the service description
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            Why This Service Matters: // Section title for service importance
          </Typography>
          {whyThisServiceMatters()} // Call the function to display the importance of the service
        </Box>
        <Button
          variant="outlined"
          component={Link}
          to="/" // Link to the home page
          sx={{ mt: 4, mb: 10 }} // Margin for spacing
        >
          Back to Home // Button text
        </Button>
      </motion.div>
    </Container>
  );
};

export default ServiceDetail; // Export the component