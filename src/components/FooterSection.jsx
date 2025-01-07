
import { Box, Typography, Container, Link } from "@mui/material";

const FooterSection = () => {
  return (
    <Box component="footer" sx={{ py: 4, backgroundColor: "#1976d2", color: "#fff", textAlign: "center" }}>
      <Container>
        <Typography variant="body2">
          © 2025 Care2 Training Consultancy. All Rights Reserved.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href="#" sx={{ mx: 1, color: "#fff", "&:hover": { textDecoration: "underline" } }}>Privacy Policy</Link>
          <Link href="#" sx={{ mx: 1, color: "#fff", "&:hover": { textDecoration: "underline" } }}>Terms of Service</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;