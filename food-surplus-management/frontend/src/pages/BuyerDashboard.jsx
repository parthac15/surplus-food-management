import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BuyerDashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('http://localhost:5000/buyer/products');
            setProducts(res.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Buyer Dashboard</h2>
            <div>
                {products.map((product) => (
                    <div key={product._id}>
                        <h3>{product.productName}</h3>
                        <p>{product.description}</p>
                        <p>Price: ₹{product.price}</p>
                        <p>Contact: {product.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuyerDashboard;
