import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/editPost.css';

const EditPost = ({ postId }) => {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5230/api/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch(error => console.log(error));
  }, [postId]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...post,
      title: title,
      content: content
    };

    axios.put(`http://localhost:5230/api/posts/${postId}`, updatedPost)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div className="edit-post-container">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" value={content} onChange={handleContentChange}></textarea>
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
