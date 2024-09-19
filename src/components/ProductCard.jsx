import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image_front_small_url} alt={product.product_name} />
      <h3>{product.product_name}</h3>
      <p>Category: {product.categories_tags[0]}</p>
      <p>Nutrition Grade: {product.nutrition_grades}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;