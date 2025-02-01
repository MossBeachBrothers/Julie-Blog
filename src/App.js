import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

const nanoTheme = createTheme({
  spacing: 1.5,
  typography: {
    fontSize: 8,
    h1: { fontSize: '0.85rem', lineHeight: 1 },
    h2: { fontSize: '0.75rem', lineHeight: 1 },
    h3: { fontSize: '0.7rem', lineHeight: 1 },
    body1: { fontSize: '0.6rem', lineHeight: 1.1 },
    body2: { fontSize: '0.55rem', lineHeight: 1.1 },
    button: { fontSize: '0.55rem' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1px',
          border: '0.25px solid #eee',
          boxShadow: 'none'
        }
      }
    },
    MuiButton: {
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: { 
          padding: '0px 3px',
          minWidth: '45px',
          '.MuiSvgIcon-root': { fontSize: '0.6rem' }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: { padding: '1px' }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: { 
          fontSize: '0.55rem',
          padding: '4px !important'
        }
      }
    },
    MuiSelect: {
      defaultProps: { size: 'small' },
      styleOverrides: {
        select: { padding: '4px 24px 4px 6px' }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: { 
          height: '14px',
          fontSize: '0.45rem',
          '.MuiChip-label': { padding: '0 1px' }
        }
      }
    },
  },
});

const App = () => (
  <ThemeProvider theme={nanoTheme}>
    <CssBaseline />
    <Router>
      <div style={{ 
        transform: 'scale(0.85)',
        transformOrigin: 'top center',
        width: '117.65%',
        minHeight: '117.65vh'
      }}>
        <Header />
        <div style={{ 
          padding: '1px',
          marginTop: '20px' // ADDED THIS LINE
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;