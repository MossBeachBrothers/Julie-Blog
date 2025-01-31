import React, { useState } from 'react';
import blogs from '../data/blogs.json';
import BlogCard from '../components/BlogCard';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const HomePage = () => {
  const [sortOrder, setSortOrder] = useState('mostRecent');

  const sortedBlogs = [...blogs].sort((a, b) => 
    sortOrder === 'mostRecent' ? b.id - a.id : a.id - b.id
  );

  return (
    <div
      className="container"
      style={{
        padding: '10px',
        backgroundColor: '#e3f8ff',
        minHeight: '100vh',
      }}
    >
      <FormControl variant="outlined" style={{ marginBottom: '10px', minWidth: 180 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="mostRecent">Most Recent</MenuItem>
          <MenuItem value="leastRecent">Least Recent</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={1.5}>
        {sortedBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;