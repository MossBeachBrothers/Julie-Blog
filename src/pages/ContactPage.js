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

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <div
      style={{
        padding: '40px',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#fdfdfd',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#1976d2',
          fontSize: '2rem',
        }}
      >
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <label>
          <span style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
        </label>

        <label>
          <span style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
        </label>

        <label>
          <span style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: '15px',
            backgroundColor: '#1976d2',
            color: '#fff',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>

      {status && (
        <p style={{ textAlign: 'center', marginTop: '20px', color: status.includes('successfully') ? 'green' : 'red' }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactPage;
