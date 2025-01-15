import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" style={{ backgroundColor: '#1976d2', padding: '10px 0' }}>
    <Toolbar style={{ flexDirection: 'column', alignItems: 'center' }}>
      {/* Main Title */}
      <Typography
        variant="h4"
        style={{
          fontWeight: 'bold',
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2.8rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          color: '#ffffff',
        }}
      >
        Julie's Corner
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        style={{
          fontFamily: "'Indie Flower', cursive",
          fontSize: '1.6rem',
          color: '#e3f2fd',
          marginTop: '5px',
          textAlign: 'center',
        }}
      >
        Personal Blog for Education on Medical and Biological Concepts
      </Typography>

      {/* Navigation Links */}
      <div style={{ marginTop: '10px' }}>
        <Link to="/" style={{ margin: '0 10px', color: '#e3f2fd', textDecoration: 'none', fontSize: '1.2rem' }}>Home</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: '#e3f2fd', textDecoration: 'none', fontSize: '1.2rem' }}>Contact</Link>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
