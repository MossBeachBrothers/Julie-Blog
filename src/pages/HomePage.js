import React from 'react';
import blogs from '../data/blogs.json';
import BlogCard from '../components/BlogCard';
import { Grid } from '@mui/material';

const HomePage = () => (
  <div
    className="container"
    style={{
      padding: '20px',
      backgroundColor: '#e3f8ff', // Baby blue background color
      minHeight: '100vh', // Ensure the background covers the full height
    }}
  >
    <Grid container spacing={3}>
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={4} key={blog.id}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default HomePage;