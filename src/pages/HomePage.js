import React, { useState } from 'react';
import blogs from '../data/blogs.json';
import BlogCard from '../components/BlogCard';
import { Grid, FormControl, InputLabel, Select, MenuItem, Box, TextField } from '@mui/material';

const HomePage = () => {
  const [sortOrder, setSortOrder] = useState('mostRecent');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedBlogs = [...blogs]
    .filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => 
      sortOrder === 'mostRecent' ? b.id - a.id : a.id - b.id
    );

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ 
            flexGrow: 1,
            maxWidth: 400,
            backgroundColor: 'white',
            borderRadius: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: 1
            }
          }}
        />

        <FormControl 
          variant="outlined" 
          size="small" 
          sx={{ 
            minWidth: 180,
            backgroundColor: 'white',
            borderRadius: 1
          }}
        >
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
      </Box>

      <Grid container spacing={1.5}>
        {filteredAndSortedBlogs.map((blog) => (
          <Grid item key={blog.id} xs={6} sm={4} md={3} lg={2}>
            <BlogCard 
              blog={blog}
              sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 2
                }
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;