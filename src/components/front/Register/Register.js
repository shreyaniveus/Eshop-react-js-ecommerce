import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Register.css'; // Import the Register.css file

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Implement your registration logic here
    // For simplicity, we'll just store the name, email, and password in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Retrieve cart items and total price from location state
    const { cartItems, totalPrice } = location.state || {};

    alert('Registered successfully!');

    // Redirect to the home page
    history.push('/');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-card-body">
          <h2 className="register-card-title">Register</h2>
          <div className="form-group">
            <label className="register-label">Name:</label>
            <input
              type="text"
              className="form-control register-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="register-label">Email:</label>
            <input
              type="email"
              className="form-control register-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="register-label">Password:</label>
            <input
              type="password"
              className="form-control register-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
