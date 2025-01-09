import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Container>
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Care2 Training Consultancy
          </Typography>
          <div className="desktop-menu">
            {menuItems.map((item) => (
              <NavLink 
                key={item.text} 
                to={item.path} 
                style={{ textDecoration: 'none' }} 
                activeStyle={{ fontWeight: 'bold', color: '#ffeb3b' }} // Active link styling
              >
                <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#1565c0' } }}>
                  {item.text}
                </Button>
              </NavLink>
            ))}
          </div>
        </Toolbar>
      </Container>

      {/* Drawer for mobile menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={NavLink} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;