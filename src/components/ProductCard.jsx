import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  if (!product) {
    return null; // or return a placeholder component
  }

  return (
    <div className="product-card">
      <img src={product.image_front_small_url || 'placeholder-image-url'} alt={product.product_name || 'Product'} />
      <h3>{product.product_name || 'Unknown Product'}</h3>
      <p>Category: {product.categories_tags && product.categories_tags[0] ? product.categories_tags[0] : 'Uncategorized'}</p>
      <p>Nutrition Grade: {product.nutrition_grades || 'N/A'}</p>
      <Link to={`/product/${product.code}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;