import { Box, TextField, Button, Container, Typography, Paper, Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import useFormContext from "../hooks/useFormContext";
import React, { useState } from 'react';
import { motion } from "framer-motion";

// Alert component for Snackbar notifications
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactForm = () => {
  const { formData, handleChange, handleSubmit } = useFormContext();
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Function to validate email format
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to validate form fields
  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setNameError('');
    setMessageError('');

    if (!formData.name.trim()) {
      setNameError('Name is required.');
      isValid = false;
    }
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }
    if (!formData.message.trim()) {
      setMessageError('Message cannot be empty.');
      isValid = false;
    }

    return isValid;
  };

  // Enhanced submit handler with validation
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      handleSubmit(); // Call the original submit handler
      setOpenSnackbar(true); // Show success message
    }
  };

  // Function to close the Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container component="section" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4, 
            textAlign: "center", 
            fontWeight: "bold", 
            color: "#1976d2" // Blue for trust and professionalism
          }}
        >
          Contact Us
        </Typography>
        <Paper 
          elevation={3} 
          sx={{ 
            padding: 4, 
            borderRadius: 2, 
            maxWidth: 600, 
            mx: "auto", 
            backgroundColor: "#f5f5f5" // Light gray for balance
          }}
        >
          <Box component="form" onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 3 }}
              required
              error={!!nameError}
              helperText={nameError}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 3 }}
              required
              error={!!emailError}
              helperText={emailError}
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
              required
              error={!!messageError}
              helperText={messageError}
            />
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              fullWidth 
              type="submit"
              sx={{ 
                "&:hover": { backgroundColor: "#1565c0" } // Darker blue for hover
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </motion.div>

      {/* Snackbar for success message */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default React.memo(ContactForm); // Prevent unnecessary re-renders