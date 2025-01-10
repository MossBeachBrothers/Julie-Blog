import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Header from './components/Header';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
