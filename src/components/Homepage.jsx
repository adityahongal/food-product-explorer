import React, { useState } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Food Product Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList searchQuery={searchQuery} />
    </div>
  );
};

export default Homepage;