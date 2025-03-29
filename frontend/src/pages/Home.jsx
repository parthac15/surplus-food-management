import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Surplus Food Marketplace</h1>
        <p className="description">
          Bridging the gap between food suppliers and consumers by reducing food waste.
          Buy or donate surplus food at discounted prices and help create a sustainable future.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
