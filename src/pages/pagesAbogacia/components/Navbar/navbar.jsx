import "./navbar.css";
import React, { useState } from 'react';  // Importamos useState directamente
import { RxHamburgerMenu } from "react-icons/rx";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const Navbar = () => {
  const [open, setOpen] = useState(false);  // Usamos useState directamente

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: 'Inbox', path: '/inbox', external: false },
          { text: 'Starred', url: 'https://example.com/starred', external: true },
          { text: 'Send email', path: '/send-email', external: false },
          { text: 'Drafts', url: 'https://example.com/drafts', external: true }
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            {item.external ? (
              <ListItemButton 
                component={Link} 
                href={item.url} 
                target="_blank" 
                rel="noopener"
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              <ListItemButton component={RouterLink} to={item.path}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="navbar">
        <div className="container">
          <RxHamburgerMenu className="burga" onClick={toggleDrawer(true)}/>
          <p className="logo">logo</p>
          <ul className="lista">
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
}

export default Navbar;