import { Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const AboutUs = () => {
  return (
    <Container component="section" sx={{ py: 8, textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          About Us
        </Typography>
        
        {/* Paragraphs */}
        {[
          "Care2 Training Consultancy offers expert advice and solutions for students, professionals, and travelers wishing to study, work, or live abroad. With years of experience and a successful track record, we help you navigate the complex visa processes and opportunities in multiple countries.",
          "Our mission is to empower individuals by providing them with the knowledge and resources they need to achieve their international aspirations. We understand that the journey to studying or working abroad can be overwhelming, which is why we are dedicated to offering personalized support tailored to each client's unique needs.",
          "At Care2, we pride ourselves on our comprehensive services, which include student visa assistance, work placement opportunities, and consultancy for living abroad. Our team of experienced consultants is committed to guiding you every step of the way, ensuring a smooth transition to your new environment.",
          "Join us at Care2 Training Consultancy, and let us help you turn your dreams of studying or working abroad into a reality. Together, we can navigate the complexities of international education and employment, opening doors to a world of opportunities."
        ].map((text, index) => (
          <Typography key={index} variant="body1" sx={{ lineHeight: 1.6, mb: 4, textAlign: "justify" }}>
            {text}
          </Typography>
        ))}
      </motion.div>
    </Container>
  );
};

export default React.memo(AboutUs); // Prevent unnecessary re-renders