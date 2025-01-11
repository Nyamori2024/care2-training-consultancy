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
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
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
    { text: "Home", path: "hero" },
    { text: "About", path: "about" },
    { text: "Services", path: "services" },
    { text: "Portfolio", path: "portfolio" },
    { text: "Contact", path: "contact" },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}> {/* Changed to fixed */}
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, color: "#ffffff" }}>
            Care2 Training Consultancy
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <ScrollLink
                key={item.text}
                to={item.path}
                smooth={true} // Enable smooth scrolling
                duration={500} // Duration of the scroll
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    color: "#ffffff",
                    "&:hover": { backgroundColor: "#1565c0", color: "#ffeb3b" },
                    mx: 1,
                  }}
                >
                  {item.text}
                </Button>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={ScrollLink} // Use ScrollLink for mobile menu
              to={item.path}
              onClick={toggleDrawer(false)}
              smooth={true}
              duration={500}
              sx={{
                "&.active": {
                  backgroundColor: "#e3f2fd",
                },
                color: "#1976d2",
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