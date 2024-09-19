import React from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Food Product Explorer</h1>
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default Homepage;