import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background_image_biology_corner.jpg';

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200px',
        color: '#ffffff',
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          height: '100%', // Add this to contain all elements
        }}
      >
        <Toolbar style={{ 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: '10px 20px', // Reduced vertical padding
          height: '100%',
          justifyContent: 'center' // Center content vertically
        }}>
          <Typography
            variant="h4"
            style={{
              fontWeight: 'bold',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2.5rem', // Slightly reduced font size
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              padding: '8px 16px', // Reduced padding
              borderRadius: '8px',
              border: '2px solid #ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            Julie's Corner
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.2rem', // Reduced font size
              color: '#e3f2fd',
              marginTop: '10px', // Reduced margin
              textAlign: 'center',
              padding: '4px 12px', // Reduced padding
              borderRadius: '8px',
              border: '2px solid #ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            Personal Blog for Education on Medical and Biological Concepts
          </Typography>

          <div
            style={{
              marginTop: '15px', // Reduced margin
              display: 'flex',
              gap: '12px', // Reduced gap
              justifyContent: 'center',
              padding: '8px', // Reduced padding
              border: '2px solid #ffffff',
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <Link
              to="/"
              style={{
                padding: '8px 12px', // Reduced padding
                color: '#e3f2fd',
                textDecoration: 'none',
                fontSize: '1rem', // Reduced font size
                border: '2px solid #e3f2fd',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                padding: '8px 12px',
                color: '#e3f2fd',
                textDecoration: 'none',
                fontSize: '1rem',
                border: '2px solid #e3f2fd',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{
                padding: '8px 12px',
                color: '#e3f2fd',
                textDecoration: 'none',
                fontSize: '1rem',
                border: '2px solid #e3f2fd',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Contact
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;