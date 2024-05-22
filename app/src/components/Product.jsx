import React from 'react';
import './Product.css';
import StarFill from '../images/Star_fill.svg';
import Star from '../images/Star.svg';

const Product = ({ product }) => {
  const { name, price, rating, votes, available, image, popular } = product;

  return (
    <div className="product-card">
      {popular && <div className="popular-label">Popular</div>}
      <img src={image} alt={name} />
      <div className="product-details">
        <div className="product-info">
          <span className="product-name">{name}</span>
          <span className="product-price">{price}</span>
        </div>
        <div className="product-rating">
          <span className="rating">
            <img src={rating === null ? Star : StarFill} alt={rating === null ? "Estrella vacía" : "Estrella llena"} />
            {rating}
          </span>
          <span className="product-votes">
            {votes === 0 ? "No ratings" : `(${votes} votes)`}
          </span>
          {!available && <span className="product-unavailable">Sold out</span>}
        </div>
      </div>
    </div>
  );
};

export default Product;
