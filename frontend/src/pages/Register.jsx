import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Buyer');
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [, setLastCaptchaTime] = useState(Date.now());
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCaptcha(generateCaptcha());
      setLastCaptchaTime(Date.now());
    }, 60000); // Change captcha every 1 minute

    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    if (captchaInput !== captcha) {
      alert('Incorrect captcha, try again!');
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
    } else if (name && email && password) {
      console.log(`Registering: ${name}, ${email}, Role: ${role}`);
      alert('Registration successful!');
      navigate('/login');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>
        <div className="captcha-container">
          <div className="captcha">{captcha}</div>
          <input
            type="text"
            placeholder="Enter Captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
        <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
      </div>
    </div>
  );
};

export default Register;
