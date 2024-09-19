import React, { useState } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(''); // Reset category when searching
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search query when changing category
  };

  return (
    <div>
      <h1>Food Product Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      <ProductList searchQuery={searchQuery} category={selectedCategory} />
    </div>
  );
};

export default Homepage;