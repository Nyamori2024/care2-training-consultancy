
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import useFormContext from "../hooks/useFormContext";

const ContactFormSection = () => {
  const { formData, handleChange, handleSubmit } = useFormContext();

  return (
    <Container component="section" sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: "auto" }}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />
        <Button variant="contained" color="primary" size="large" fullWidth type="submit">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactFormSection;