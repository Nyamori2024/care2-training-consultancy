import { Box, Typography, Container, Link, TextField, Button, Grid, Snackbar } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import React, { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { motion } from "framer-motion";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    // Here you would typically send the email to your backend service
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
    setError('');
    setOpenSnackbar(true); // Show success message
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box component="footer" sx={{ py: 4, backgroundColor: "#1976d2", color: "#fff", textAlign: "center" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="body2" sx={{ mb: 2 }}>
            © 2025 Care2 Training Consultancy. All Rights Reserved.
          </Typography>
          
          <Box sx={{ mt: 2 }}>
            <Link href="#" sx={{ mx: 1, color: "#fff", "&:hover": { textDecoration: "underline" } }} aria-label="Privacy Policy">Privacy Policy</Link>
            <Link href="#" sx={{ mx: 1, color: "#fff", "&:hover": { textDecoration: "underline" } }} aria-label="Terms of Service">Terms of Service</Link>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Stay Connected</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              {[
                { icon: <Facebook />, label: "Facebook" },
                { icon: <Twitter />, label: "Twitter" },
                { icon: <Instagram />, label: "Instagram" },
                { icon: <LinkedIn />, label: "LinkedIn" }
              ].map(({ icon, label }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" sx={{ color: "#fff", mx: 1 }} aria-label={label}>
                    {icon}
                  </Link>
                </motion.div>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Subscribe to our Newsletter</Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={8} md={6}>
                <TextField 
                  variant="outlined" 
                  placeholder="Enter your email" 
                  fullWidth 
                  sx={{ backgroundColor: "#fff", borderRadius: "4px" }} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address for newsletter subscription"
                  error={!!error}
                  helperText={error}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  sx={{ textTransform: "uppercase" }}
                  onClick={handleSubscribe}
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>

      {/* Snackbar for success message */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Thank you for subscribing!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default React.memo(FooterSection); // Prevent unnecessary re-renders