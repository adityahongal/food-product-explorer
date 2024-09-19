import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductByBarcode } from '../services/api';

const ProductDetail = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await fetchProductByBarcode(barcode);
        setProduct(fetchedProduct);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
        setLoading(false);
      }
    };

    loadProduct();
  }, [barcode]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.product_name}</h2>
      <img src={product.image_front_url} alt={product.product_name} />
      <p>Barcode: {product.code}</p>
      <p>Brand: {product.brands}</p>
      <p>Category: {product.categories}</p>
      <p>Nutrition Grade: {product.nutrition_grades}</p>
      <h3>Ingredients</h3>
      <p>{product.ingredients_text}</p>
      <h3>Nutritional Values (per 100g)</h3>
      <ul>
        <li>Energy: {product.nutriments.energy_100g} kcal</li>
        <li>Fat: {product.nutriments.fat_100g}g</li>
        <li>Carbohydrates: {product.nutriments.carbohydrates_100g}g</li>
        <li>Proteins: {product.nutriments.proteins_100g}g</li>
        <li>Salt: {product.nutriments.salt_100g}g</li>
      </ul>
      <h3>Labels</h3>
      <p>{product.labels}</p>
    </div>
  );
};

export default ProductDetail;