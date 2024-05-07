// src/components/Post.js

import React from 'react';
import '../styles/post.css'; // Import CSS file for styling

const Post = ({ title, content, author, publicationDate, tags }) => {
  return (
    <div className="post-container">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <div className="post-meta">
        <p>Author: {author}</p>
        <p>Published on: {publicationDate}</p>
        <p>Tags: {tags.join(', ')}</p>
      </div>
      <hr className="post-separator" />
    </div>
  );
};

export default Post;
