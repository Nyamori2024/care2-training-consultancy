import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "About", path: "/about" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Container>
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#ffffff" }}>
            Care2 Training Consultancy
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <NavLink
                key={item.text}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    color: "#ffffff", // White text color
                    "&:hover": { backgroundColor: "#1565c0", color: "#ffeb3b" }, // Hover effect
                    mx: 1,
                  }}
                >
                  {item.text}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={NavLink}
              to={item.path}
              onClick={toggleDrawer(false)}
              sx={{
                "&.active": {
                  backgroundColor: "#e3f2fd",
                },
                color: "#1976d2", // Dark blue text for mobile menu
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;