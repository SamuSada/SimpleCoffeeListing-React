import React, { useState, useEffect } from 'react';
import Product from './Product';
import Button from './Buttons';
import './ProductList.css';
import BackgroundSVG from '../images/vector.svg';

const ProductList = ({ products }) => {
  const [activeButton, setActiveButton] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [fadeInOut, setFadeInOut] = useState(false);

  useEffect(() => {
    filterProducts(activeButton);
  }, [activeButton, products]);

  const filterProducts = (buttonType) => {
    if (buttonType === 'available') {
      setFilteredProducts(products.filter(product => product.available));
    } else {
      setFilteredProducts(products);
    }
    setFadeInOut(true);
    setTimeout(() => {
      setFadeInOut(false);
    }, 500);
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className="product-list">
      <img src={BackgroundSVG} className="background-svg" alt="Background SVG" />
      <section className="product-header">
        <h1 className="product-head-title">Our Collection</h1>
        <p className="product-head-description">
          Introducing our Coffee Collection, 
          a selection of unique coffees from 
          different roast types and origins, 
          expertly roasted in small batches 
          and shipped fresh weekly.
        </p>
        <Button
          isActive={activeButton === 'all'}
          onClick={() => {
            handleButtonClick('all');
            filterProducts('all');
          }}
        >
          All Products
        </Button>
        <Button
          isActive={activeButton === 'available'}
          onClick={() => {
            handleButtonClick('available');
            filterProducts('available');
          }}
        >
          Available Now
        </Button>
      </section>
      <section className={`products ${fadeInOut ? 'fade-in-out' : ''}`}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductList;
