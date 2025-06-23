'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchIcon from '@mui/icons-material/Search'; 
import theme from '../themes/theme';
import Image from 'next/image';
const navItems = [
  'HOME',
  'SPACES',
  'PRODUCTS & SERVICES',
  'SHOWROOMS',
  'COMPANY',
  'MEDIA',
  'CONTACT'
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <StorefrontOutlinedIcon
          sx={{
            fontSize: 40,
            color: 'black',
            borderRadius: '50%',
            p: 1
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            sx={{
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'white',
          color: 'black',
          py: { xs: 1, md: 2 }
        }}
      >
        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          pt: 2
        }}>
          <Image 
            src="/Vector2.png"
            alt="Logo"
            width={100}
            height={50}
            style={{ objectFit: 'contain' }}
            />
        </Box>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            justifyContent: { xs: 'space-between', md: 'center' },
            alignItems: 'center',
            maxWidth: 'lg',
            mx: 'auto',
            width: '100%',
            px: { xs: 2, md: 4 },
            minHeight: { md: 0 }
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: { md: '1.5rem', lg: '2rem' },
              flex: 1,
              justifyContent: 'center'
            }}
          >
            <IconButton color="inherit" aria-label="search" sx={{ mr: 1 }}>
              <SearchIcon />
            </IconButton>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: 'black',
                  textTransform: 'uppercase',
                  fontWeight: theme.typography.fontWeightMedium,
                  fontSize: theme.typography.button.fontSize,
                  fontFamily: theme.typography.button.fontFamily,
                  minWidth: 'auto',
                  px: 1,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    opacity: 0.8
                  }
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    fontFamily: theme.typography.button.fontFamily,
                    fontWeight: theme.typography.fontWeightMedium,
                    fontSize: theme.typography.button.fontSize,
                    letterSpacing: theme.typography.button.letterSpacing,
                    textTransform: 'uppercase'
                  }}
                >
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>
            <IconButton
            color="inherit"
            aria-label="search"
            sx={{
              display: { xs: 'flex', md: 'none' },
              ml: 1
            }}
          >
            <SearchIcon />
          </IconButton>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            ml: { xs: 0, md: 2 },
            marginLeft: 'auto',
          }}>
            <IconButton color="inherit" aria-label="cart">
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="favourite">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="profile">
              <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: 'black'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 250
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;