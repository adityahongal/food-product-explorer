import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // Placeholder for product data
  const product = {};

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Ingredients: {product.ingredients}</p>
      <p>Nutritional Values: {product.nutritionalValues}</p>
      <p>Labels: {product.labels}</p>
    </div>
  );
};

export default ProductDetail;