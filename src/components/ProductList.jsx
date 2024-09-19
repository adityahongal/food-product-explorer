import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts, searchProducts, fetchProductsByCategory } from '../services/api';

const ProductList = ({ searchQuery, category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        let fetchedProducts;
        if (searchQuery) {
          fetchedProducts = await searchProducts(searchQuery);
        } else if (category) {
          fetchedProducts = await fetchProductsByCategory(category);
        } else {
          fetchedProducts = await fetchProducts();
        }
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };

    loadProducts();
  }, [searchQuery, category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
};

export default ProductList;