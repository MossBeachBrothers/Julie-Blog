import React from 'react';
import aboutData from '../data/about.json';
import { Box, Paper, Typography, Divider } from '@mui/material';

const AboutPage = () => {
  // Image handling
  const imagePath = require(`../assets/images/${aboutData.image}`).default;

  // Content formatting with proper line breaks
  const formattedContent = aboutData.content.split('\n').map((line, index) => (
    <Typography 
      key={index}
      paragraph
      sx={{
        fontSize: '1.1rem',
        lineHeight: 1.8,
        color: 'text.secondary',
        mb: 3,
        textAlign: 'justify'
      }}
    >
      {line}
    </Typography>
  ));

  return (
    <Box
      sx={{
        p: 3,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          maxWidth: 800,
          width: '100%',
          borderRadius: 2,
          bgcolor: 'background.paper'
        }}
      >
        {/* Title Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h3"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            {aboutData.title}
          </Typography>
          <Divider sx={{ mb: 4, mx: 'auto', width: '60%' }} />
        </Box>

        {/* Image Section */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 4,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)'
          }
        }}>
          <Box
            component="img"
            src={imagePath}
            alt="Profile"
            sx={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid',
              borderColor: 'primary.light',
              boxShadow: 3
            }}
          />
        </Box>

        {/* Content Section */}
        <Box sx={{
          px: { xs: 0, md: 4 },
          '& p:last-child': {
            mb: 0
          }
        }}>
          {formattedContent}
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutPage;