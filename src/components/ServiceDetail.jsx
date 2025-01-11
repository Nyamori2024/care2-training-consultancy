// ServiceDetail.jsx

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
  const { serviceId } = useParams(); // Get the serviceId from the URL
  const service = serviceDetails[serviceId]; // Access the corresponding service details

  if (!service) {
    return <Typography variant="h6">Service not found.</Typography>; // Handle case where serviceId is invalid
  }

  return (
    <Container>
      <Typography variant="h4">{service.title}</Typography>
      <Typography variant="body1">{service.description}</Typography>
    </Container>
  );
};

export default ServiceDetail;