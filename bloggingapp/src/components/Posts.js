// src/components/Posts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import '../styles/posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend API
    axios.get('http://localhost:5230/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="posts-container">
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          publicationDate={post.publicationDate}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

export default Posts