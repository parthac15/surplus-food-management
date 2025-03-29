import React, { useState } from 'react';
import axios from 'axios';

const SellerDashboard = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/seller/add-product', { productName, description, price, contact });
            alert('Product added successfully!');
            setProductName('');
            setDescription('');
            setPrice('');
            setContact('');
        } catch (error) {
            alert('Failed to add product.');
        }
    };

    return (
        <div>
            <h2>Seller Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Product Name" value={productName} onChange={e => setProductName(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
                <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
                <input type="text" placeholder="Contact Details" value={contact} onChange={e => setContact(e.target.value)} required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default SellerDashboard;
