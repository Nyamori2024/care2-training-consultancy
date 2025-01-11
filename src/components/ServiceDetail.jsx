
import { useParams } from 'react-router-dom';
import { Typography, Container } from "@mui/material";

const serviceDetails = [
  {
    title: "Student Visa Assistance",
    description: "Detailed information about student visa assistance, including application processes, required documents, and tips for success.",
  },
  {
    title: "Work Abroad Opportunities",
    description: "Explore various job opportunities abroad, including work permits, job search strategies, and employer connections.",
  },
  {
    title: "Consultancy for Living Abroad",
    description: "Get comprehensive advice on moving and settling in another country, including housing, culture, and legal requirements.",
  },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  return (
    <Container>
      <Typography variant="h4">{service.title}</Typography>
      <Typography variant="body1">{service.description}</Typography>
    </Container>
  );
};

export default ServiceDetail;