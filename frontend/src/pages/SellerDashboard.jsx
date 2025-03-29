import React, { useState } from 'react';
import axios from 'axios';
import './SellerDashboard.css';

const SellerDashboard = () => {
  const [products, setProducts] = useState([
    { name: 'TOMATO', quantity: 0 },
    { name: 'ONION', quantity: 0 },
    { name: 'PADDY', quantity: 0 },
    { name: 'WATERMELON', quantity: 0 },
    { name: 'FLOWERS', quantity: 0 },
    { name: 'GROCERIES', quantity: 0 }
  ]);

  const handleQuantityChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = value;
    setProducts(updatedProducts);
  };

  const addProducts = async () => {
    try {
      for (let product of products) {
        if (product.quantity > 0) {
          await axios.post('http://localhost:5000/api/products/add', {
            name: product.name,
            quantity: product.quantity
          });
        }
      }
      alert('Products added successfully!');
    } catch (error) {
      console.error('Error adding products:', error);
    }
  };

  return (
    <div className="seller-dashboard">
      <h1>Seller Dashboard</h1>
      <div className="card-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h2>{product.name}</h2>
            <input
              type="number"
              min="0"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
              placeholder="Enter quantity"
            />
            <button onClick={addProducts}>Add Product</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerDashboard;
