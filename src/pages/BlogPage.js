import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogs from '../data/blogs.json';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  // Dynamically import the image like in BlogCard
  const imagePath = blog && require(`../assets/images/${blog.image}`);

  // Function to handle PDF generation
  const saveAsPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    doc.setFont('Arial', 'bold');
    doc.setFontSize(20);
    doc.text(blog.title, 10, 20);

    if (blog.content) {
      doc.setFont('Arial', 'normal');
      doc.setFontSize(12);
      const content = doc.splitTextToSize(blog.content, 180);
      doc.text(content, 10, 40);
    }

    doc.save(`${blog.title}.pdf`);
  };

  return blog ? (
    <div
      className="container"
      style={{ padding: '20px', lineHeight: '1.8', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}
    >
      {/* Buttons */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          style={{ fontWeight: 'bold', padding: '10px 20px' }}
        >
          Home
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={saveAsPDF}
          style={{ fontWeight: 'bold', padding: '10px 20px' }}
        >
          Save as PDF
        </Button>
      </div>

      {/* Blog Title */}
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#2c3e50',
        }}
      >
        {blog.title}
      </h1>

      {/* Blog Image */}
      {blog.image && (
        <img
          src={imagePath}
          alt={blog.title}
          style={{
            display: 'block',
            maxWidth: '100%',
            margin: '0 auto 30px',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      )}

      {/* Blog Content */}
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          fontSize: '1.1rem',
          color: '#333',
          lineHeight: '1.8',
        }}
      >
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
        ))}
      </div>
    </div>
  ) : (
    <p style={{ textAlign: 'center', padding: '20px' }}>Blog not found.</p>
  );
};

export default BlogPage;
