import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! 🎉');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please check your connection.');
    }
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '2rem auto',
      fontFamily: "'Inter', sans-serif",
      borderRadius: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
        paddingBottom: '1.5rem',
        borderBottom: '2px solid #f0f0f0'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '2.25rem',
          fontWeight: 700,
          color: '#1a1a1a',
          letterSpacing: '-0.025em',
        }}>
          Get in Touch
        </h1>
        <p style={{
          marginTop: '0.5rem',
          color: '#666',
          fontSize: '1rem',
          fontWeight: 400,
        }}>
          We'll get back to you within 24 hours
        </p>
      </header>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ position: 'relative' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#404040',
          }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.875rem',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              fontSize: '0.9375rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#fafafa',
            }}
            placeholder="John Doe"
          />
        </div>

        <div style={{ position: 'relative' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#404040',
          }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.875rem',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              fontSize: '0.9375rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#fafafa',
            }}
            placeholder="john@example.com"
          />
        </div>

        <div style={{ position: 'relative' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#404040',
          }}>
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              width: '100%',
              padding: '0.875rem',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              fontSize: '0.9375rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#fafafa',
              resize: 'vertical',
            }}
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            fontSize: '0.9375rem',
            fontWeight: 600,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            ':hover': {
              backgroundColor: '#1d4ed8',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
            },
          }}
        >
          Send Message
        </button>
      </form>

      {status && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: status.includes('🎉') ? '#f0fdf4' : '#fef2f2',
          border: `1px solid ${status.includes('🎉') ? '#bbf7d0' : '#fecaca'}`,
          textAlign: 'center',
          fontSize: '0.875rem',
          color: status.includes('🎉') ? '#166534' : '#991b1b',
        }}>
          {status}
        </div>
      )}
    </div>
  );
};

export default ContactPage;