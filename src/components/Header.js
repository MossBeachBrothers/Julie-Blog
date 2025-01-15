import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background_image_biology_corner.jpg'; // Import the image directly

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '300px', // Fixed height for the header
        color: '#ffffff',
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none', // Remove AppBar shadow
        }}
      >
        <Toolbar style={{ flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          {/* Main Title */}
          <Typography
            variant="h4"
            style={{
              fontWeight: 'bold',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '3rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              padding: '10px 20px',
              borderRadius: '8px',
              border: '2px solid #ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            Julie's Corner
          </Typography>

          {/* Subtitle */}
          {/* <Typography
            variant="subtitle1"
            style={{
              fontFamily: "'Indie Flower', cursive",
              fontSize: '1.8rem',
              color: '#e3f2fd',
              marginTop: '15px',
              textAlign: 'center',
              padding: '5px 15px',
              borderRadius: '8px',
              border: '2px solid #ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            Personal Blog for Education on Medical and Biological Concepts
          </Typography> */}

          {/* Navigation Links */}
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              padding: '10px',
              border: '2px solid #ffffff',
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <Link
              to="/"
              style={{
                padding: '10px 15px',
                color: '#e3f2fd',
                textDecoration: 'none',
                fontSize: '1.2rem',
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
              to="/contact"
              style={{
                padding: '10px 15px',
                color: '#e3f2fd',
                textDecoration: 'none',
                fontSize: '1.2rem',
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
