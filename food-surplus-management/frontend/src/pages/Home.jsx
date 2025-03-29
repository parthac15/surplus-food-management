import React from 'react';
import { Link } from 'react-router-dom';
import './Home































































































.css';

const Home = () => (
    <div className="container">
        <h1>Food Surplus Management Platform</h1>
        <div className="buttons-container">
            <Link to="/login"><button className="glowing-button">Login</button></Link>
            <Link to="/register"><button className="glowing-button">Register</button></Link>
        </div>
    </div>
);

export default Home;
