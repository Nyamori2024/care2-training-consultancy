
import {Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const AboutUsSection = () => {
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
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          Care2 Training Consultancy offers expert advice and solutions for students, professionals, 
          and travelers wishing to study, work, or live abroad. With years of experience and a successful track record, 
          we help you navigate the complex visa processes and opportunities in multiple countries.
        </Typography>
      </motion.div>
    </Container>
  );
};

export default AboutUsSection;