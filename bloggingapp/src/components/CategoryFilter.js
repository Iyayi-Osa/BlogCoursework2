// src/components/CategoryFilter.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/categoryFilter.css';

const CategoryFilter = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://localhost:5230/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSelectCategory = (categoryId) => {
    onSelectCategory(categoryId);
  };

  return (
    <div>
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.categoryId}>
            <button onClick={() => handleSelectCategory(category.categoryId)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
