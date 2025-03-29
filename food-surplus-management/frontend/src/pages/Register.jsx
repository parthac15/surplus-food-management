import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('buyer');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', { email, password, role });
            alert('Registration Successful! Please Login.');
        } catch (error) {
            alert('Registration Failed. Try Again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <select value={role} onChange={e => setRole(e.target.value)}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
