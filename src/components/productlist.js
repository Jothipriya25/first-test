import React from 'react';
import Product from './product';
import './productlist.css';

const ProductList = ({ products}) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
