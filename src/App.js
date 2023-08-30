// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
// import React from 'react';
import Navbar from './components/navbar';
import About from './pages/about';
// import Menu from './pages/menu'; // Import the Menu component
import ProductList from './components/productlist';
import Cart from './components/cart'; 

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet.',
    imageUrl: 'https://images.zoomin.com/colour_inside_mug/1.1.0/product_images/web/detail-1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    description: 'Consectetur adipiscing elit jbsdgvu jhvyufgewyf jugyfewtfyu jbkugftwefu jugfytwefu hjgfetw6f',
    imageUrl: 'https://homafy.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-04-at-6.41.28-PM_11zon.jpeg',
  },
  {
    id: 3,
    name: 'Product 1',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet.',
    imageUrl: 'https://images.zoomin.com/colour_inside_mug/1.1.0/product_images/web/detail-1.jpg',
  },
  {
    id: 4,
    name: 'Product 2',
    price: 29.99,
    description: 'Consectetur adipiscing elit.',
    imageUrl: 'https://homafy.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-04-at-6.41.28-PM_11zon.jpeg',
  },
  {
    id: 5,
    name: 'Product 1',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet.',
    imageUrl: 'https://images.zoomin.com/colour_inside_mug/1.1.0/product_images/web/detail-1.jpg',
  },
  {
    id: 6,
    name: 'Product 2',
    price: 29.99,
    description: 'Consectetur adipiscing elit.',
    imageUrl: 'https://homafy.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-04-at-6.41.28-PM_11zon.jpeg',
  },
  // Add more products here
];

function App() {
  let components;
  switch (window.location.pathname) {
    case '/':
      components = (
        <div>
          <Navbar />
          <img
            src="https://img.freepik.com/free-vector/flat-boxing-day-sales-background_23-2149863662.jpg"
            alt="Your"
            width="100%"
            height="550"
            className="image-below-navbar"
          />
        </div>
      );
      break;
    case '/menu':
      components = (
        <div>
          <Navbar />
          <ProductList products={products}/>
        </div>
      ); 
      break;
    case '/about':
      components = (
        <div>
          <Navbar />
          <About />
        </div>
      );
      break;
      case '/cart':
        components = (
          <div>
            <Navbar />
            <Cart />
          </div>
        );
        break;
    default:
      components = <Navbar /> ;
  }
  return <>{components}
  </>;
}

export default App;

