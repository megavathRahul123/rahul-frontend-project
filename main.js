// main.js
import './style.css';
/*import products from "./API/product.json";*/
/*import products from './product.json' assert { type: 'json' };*/

import('./product.json')
  .then(module => {
    const products = module.default; // Access the data
    console.log(products);
  })
  .catch(error => console.error('Error importing JSON:', error));
import { showproductsContainter } from './homeproductscarts.js/Homeproductscart';

showproductsContainter(products);
