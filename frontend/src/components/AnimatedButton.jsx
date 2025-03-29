import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ text, onClick }) => (
    <button className="glowing-button" onClick={onClick}>
        {text}
    </button>
);

export default AnimatedButton;
