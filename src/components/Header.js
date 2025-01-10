import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" style={{ backgroundColor: '#1976d2', padding: '10px 0' }}>
    <Toolbar style={{ flexDirection: 'column', alignItems: 'center' }}>
      {/* Main Title */}
      <Typography
        variant="h4"
        style={{
          fontWeight: 'bold',
          fontFamily: "'Dancing Script', cursive", // Fully artistic font for the title
          fontSize: '2.8rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for effect
          color: '#ffffff',
        }}
      >
        Julie's Corner
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        style={{
          fontFamily: "'Playfair Display', serif", // Stylish, semi-artistic font for subtitle
          fontSize: '1.5rem',
          color: '#e3f2fd', // Light pastel blue for contrast
          marginTop: '5px',
          textAlign: 'center',
        }}
      >
        Personal Blog for Education on Medical and Biological Concepts
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
