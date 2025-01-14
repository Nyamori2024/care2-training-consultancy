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
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, memo, useCallback } from "react";
import debounce from "lodash.debounce";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage Drawer open/close

  // Debounce drawer toggle to improve performance
  const toggleDrawer = useCallback(
    debounce((open) => setDrawerOpen(open), 200), // Adjust debounce time as needed
    []
  );

  // Menu items for navigation
  const menuItems = [
    { text: "Home", path: "hero" },
    { text: "About", path: "about" },
    { text: "Services", path: "services" },
    { text: "Portfolio", path: "portfolio" },
    { text: "Contact", path: "contact" },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1976d2", zIndex: 10 }}>
      <Container>
        <Toolbar>
          {/* Menu Icon for Small Screens */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Navbar Title */}
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#ffffff" }}>
            Care2 Training Consultancy
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <ScrollLink
                key={item.text}
                to={item.path}
                smooth={true}
                duration={300} // Adjusted duration for smoother scrolling
                offset={-64} // Adjust for navbar height
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

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "250px",
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        {/* Close Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Menu Items for Drawer */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={ScrollLink}
              to={item.path}
              onClick={() => toggleDrawer(false)}
              smooth={true}
              duration={300} // Adjusted duration for smoother scrolling
              offset={-64} // Adjust for navbar height
              sx={{
                "&:hover": {
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

export default memo(Navbar);