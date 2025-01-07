
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Care2 Training Consultancy
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/services">
            Services
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;