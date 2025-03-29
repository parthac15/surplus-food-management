import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userRes = await axios.get('http://localhost:5000/admin/users');
            const productRes = await axios.get('http://localhost:5000/admin/products');
            setUsers(userRes.data);
            setProducts(productRes.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Users</h3>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.email} - {user.role}</li>
                ))}
            </ul>

            <h3>Products</h3>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.productName} - ₹{product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
