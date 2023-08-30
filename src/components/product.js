import React from 'react';
import './product.css';

const Product = ({ product}) => {
  
  return (
    // <div className='product-gap'>
    <div className="product-card">
      <img
        src={product.imageUrl} // Add the URL for the product image
        alt={product.name}
        className="product-image"
      />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="customizable">
          Customizable
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Product;

