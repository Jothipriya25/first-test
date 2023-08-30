import React from 'react';
import ProductList from '../components/productlist';

const Menu = ({ products }) => {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Menu;
