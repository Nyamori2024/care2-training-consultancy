import { Box, Typography, Container, Link, TextField, Button, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const FooterSection = () => {
  return (
    <Box component="footer" sx={{ py: 4, backgroundColor: "#1976d2", color: "#fff", textAlign: "center" }}>
      <Container>
        <Typography variant="body2" sx={{ mb: 2 }}>
          © 2025 Care2 Training Consultancy. All Rights Reserved.
        </Typography>
        
        <Box sx={{ mt: 2 }}>
          <Link href="#" sx={{ mx: 1, color: "#fff", "&:hover": { textDecoration: "underline" } }}>Privacy Policy</Link>
          <Link href="#" sx={{ mx: 1, color: "#fff", "&:hover": { textDecoration: "underline" } }}>Terms of Service</Link>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Stay Connected</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Link href="#" sx={{ color: "#fff", mx: 1 }}><Facebook /></Link>
            <Link href="#" sx={{ color: "#fff", mx: 1 }}><Twitter /></Link>
            <Link href="#" sx={{ color: "#fff", mx: 1 }}><Instagram /></Link>
            <Link href="#" sx={{ color: "#fff", mx: 1 }}><LinkedIn /></Link>
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
              />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ textTransform: "uppercase" }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;