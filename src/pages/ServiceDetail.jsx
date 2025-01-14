import { useParams, Link } from "react-router-dom";
import { Typography, Container, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { serviceDetails } from "../data/serviceData";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[parseInt(serviceId, 10)];

  if (!service) {
    return (
      <Container sx={{ pt: 8 }}>
        <Typography variant="h6">Service not found.</Typography>
      </Container>
    );
  }

  const whyThisServiceMatters = () => {
    switch (service.title) {
      case "Student Visa Assistance":
        return (
          <>
            <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
              Securing a student visa is a crucial step in your educational journey. Our service not only simplifies the application process but also equips you with insider knowledge about the specific requirements of your chosen country. This ensures that you avoid common pitfalls and enhances your chances of approval, allowing you to focus on what truly matters—your studies and personal growth.
            </Typography>
          </>
        );

      case "Work Abroad Opportunities":
        return (
          <>
            <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
              Finding a job abroad can be a daunting task, but our service transforms this challenge into an exciting opportunity. We connect you with a network of employers who value international talent and provide you with tailored strategies to stand out in a competitive job market. With our support, you can turn your dream of working overseas into a reality, gaining invaluable experience and cultural insights along the way.
            </Typography>
          </>
        );

      case "Consultancy for Living Abroad":
        return (
          <>
            <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
              Relocating to a new country involves more than just logistics; it’s about adapting to a new way of life. Our consultancy service offers you a comprehensive roadmap for settling in, from finding the right neighborhood to understanding local customs and legal requirements. We empower you to embrace your new environment with confidence, ensuring that your transition is as smooth and enjoyable as possible.
            </Typography>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Container sx={{ pt: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ mt: 4, fontWeight: "bold", color: "#1976d2" }}>
          {service.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4, lineHeight: 1.6 }}>
          {service.description}
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            Why This Service Matters:
          </Typography>
          {whyThisServiceMatters()}
        </Box>
        <Button
          variant="outlined"
          component={Link}
          to="/"
          sx={{ mt: 4, mb: 10 }}
        >
          Back to Home
        </Button>
      </motion.div>
    </Container>
  );
};

export default ServiceDetail;