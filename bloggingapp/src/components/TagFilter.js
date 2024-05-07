// src/components/TagFilter.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/tagfilter.css';

const TagFilter = ({ onChange }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Fetch tags from backend API
    axios.get('http://localhost:5230/api/tags')
      .then(response => {
        setTags(response.data);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  }, []);

  const handleTagChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="tag-filter-container">
      <select className="tag-dropdown" onChange={handleTagChange}>
        <option value="">All Tags</option>
        {tags.map(tag => (
          <option key={tag.id} value={tag.name}>{tag.name}</option>
        ))}
      </select>
    </div>
  );
};

export default TagFilter;