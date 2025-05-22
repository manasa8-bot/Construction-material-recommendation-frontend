import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/login', form);
      if (res.data.status === 'success') {
        setMessage('Login successful!');
        navigate('/dashboard');
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
  <h2 className="login-title">Admin Login</h2>
  <form onSubmit={handleSubmit} className="login-form">
    <div>
      <label className="input-label">Username</label>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        required
        className="input-field"
      />
    </div>
    <div>
      <label className="input-label">Password</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
        className="input-field"
      />
    </div>
    <button type="submit" className="login-btn">Login</button>
    {message && (
      <p className={`login-message ${message.includes('success') ? 'success' : 'error'}`}>
        {message}
      </p>
    )}
  </form>
</div>

  );
};

export default Login;
