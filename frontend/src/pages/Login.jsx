import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(`Logging in as ${role} with email: ${email}`);

    if (role === 'admin' && email === 'abc@gmail.com' && password === '123') {
      navigate('/admin-dashboard');
    } else if (role === 'seller') {
      navigate('/seller-dashboard');
    } else if (role === 'buyer') {
      navigate('/buyer-dashboard');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="role-selection">
          <label>Login as:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>
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
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
