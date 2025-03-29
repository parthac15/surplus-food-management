import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', { email, password });
            const { role } = res.data;

            if (role === 'buyer') navigate('/buyer');
            if (role === 'seller') navigate('/seller');
            if (role === 'admin') navigate('/admin');
        } catch (error) {
            alert('Login Failed. Try Again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
