import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  // Dynamically import the image
  const imagePath = require(`../assets/images/${blog.image}`);

  return (
    <Card
      style={{
        marginBottom: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        border: '2px solid #1976d2', // Add a nicer border
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
      }}
    >
      {blog.image && (
        <CardMedia component="img" height="200" image={imagePath} alt={blog.title} />
      )}
      <CardContent>
        <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginBottom: '10px' }}>
          {blog.description}
        </Typography>
        <Box>
          <Link to={`/blog/${blog.id}`} style={{ fontWeight: 'bold', color: '#1976d2' }}>
            Read More →
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;