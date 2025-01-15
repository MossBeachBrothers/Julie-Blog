import React from 'react';
import aboutData from '../data/about.json'; // Import JSON directly
import '../assets/images/default.jpg'; // Import assets for proper build inclusion

const AboutPage = () => {
  // Replace \n with <br /> for proper line breaks
  const formattedContent = aboutData.content.split('\n').map((line, index) => (
    <p key={index} style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: '#333' }}>
      {line}
    </p>
  ));

  // Construct image path
  const imagePath = require(`../assets/images/${aboutData.image}`);

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: "'Arial', sans-serif",
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#1976d2', marginBottom: '20px' }}>
        {aboutData.title}
      </h1>
      <img
        src={imagePath}
        alt="About Me"
        style={{
          display: 'block',
          margin: '0 auto 20px',
          maxWidth: '200px',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      />
      <div style={{ lineHeight: '1.8', textAlign: 'justify' }}>{formattedContent}</div>
    </div>
  );
};

export default AboutPage;
