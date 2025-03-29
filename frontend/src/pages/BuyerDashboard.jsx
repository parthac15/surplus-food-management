import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/all');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;   // Add loading screen
  }

  return (
    <div className="buyer-dashboard">
      <h1>Available Products</h1>
      <div className="card-container">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-card">
              <h2>{product.name}</h2>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>   // Handle empty data case
        )}
      </div>
    </div>
  );
};

export default BuyerDashboard;
