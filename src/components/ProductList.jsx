import React, { useState, useEffect, useCallback, useRef } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts, searchProducts, fetchProductsByCategory } from '../services/api';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const ProductList = ({ searchQuery, category, sortOption }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreRef = useRef(null);

  const loadProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      let fetchedProducts;
      if (searchQuery) {
        fetchedProducts = await searchProducts(searchQuery, page);
      } else if (category) {
        fetchedProducts = await fetchProductsByCategory(category, page);
      } else {
        fetchedProducts = await fetchProducts(page);
      }

      if (fetchedProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prevProducts => [...prevProducts, ...fetchedProducts]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [searchQuery, category, page, loading, hasMore]);

  useInfiniteScroll(loadMoreRef, loadProducts);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
    setError(null);
    loadProducts();
  }, [searchQuery, category]);

  useEffect(() => {
    if (sortOption) {
      const sortedProducts = [...products].sort((a, b) => {
        switch (sortOption) {
          case 'name_asc':
            return a.product_name.localeCompare(b.product_name);
          case 'name_desc':
            return b.product_name.localeCompare(a.product_name);
          case 'grade_asc':
            return (a.nutrition_grades || '').localeCompare(b.nutrition_grades || '');
          case 'grade_desc':
            return (b.nutrition_grades || '').localeCompare(a.nutrition_grades || '');
          default:
            return 0;
        }
      });
      setProducts(sortedProducts);
    }
  }, [sortOption, products]);

  if (error) return <div>{error}</div>;

  return (
    <div>
      {products.length === 0 && !loading ? (
        <div>No products found</div>
      ) : (
        products.map((product, index) => (
          <ProductCard key={`${product.code}-${index}`} product={product} />
        ))
      )}
      {loading && <div>Loading...</div>}
      {!loading && hasMore && <div ref={loadMoreRef}>Load more</div>}
      {!hasMore && <div>No more products to load</div>}
    </div>
  );
};

export default ProductList;