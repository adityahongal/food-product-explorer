import React, { useState } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import SortOptions from './SortOptions';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(''); // Reset category when searching
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search query when changing category
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div>
      <h1>Food Product Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      <SortOptions onSortChange={handleSortChange} />
      <ProductList 
        searchQuery={searchQuery} 
        category={selectedCategory} 
        sortOption={sortOption}
      />
    </div>
  );
};

export default Homepage;