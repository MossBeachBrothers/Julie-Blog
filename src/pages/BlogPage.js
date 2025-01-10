import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  return blog ? (
    <div className="container" style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1 style={{ fontWeight: 'bold', marginBottom: '20px' }}>{blog.title}</h1>
      {blog.image && (
        <img
          src={`${process.env.PUBLIC_URL}/images/${blog.image}`}
          alt={blog.title}
          style={{ maxWidth: '100%', marginBottom: '20px', borderRadius: '8px' }}
        />
      )}
      <p>{blog.content}</p>
    </div>
  ) : (
    <p style={{ textAlign: 'center', padding: '20px' }}>Blog not found.</p>
  );
};

export default BlogPage;
