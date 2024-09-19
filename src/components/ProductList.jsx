import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts, searchProducts } from '../services/api';

const ProductList = ({ searchQuery }) => {
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
  }, [searchQuery]);

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