import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isGuest, setIsGuest] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert('Please fill in all the required fields.');
      return;
    }

    if (isGuest) {
      // Signup as guest
      alert('Signed up as a guest!');
      history.push('/checkout'); // Move to the Checkout page for guests
    } else {
      // Signup as a registered user
      // You can implement your authentication logic here
      // For simplicity, we'll just store the name, email, and password in local storage
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      // Retrieve cart items and total price from location state
      const { cartItems, totalPrice } = location.state || {};

      alert('Signed up as a registered user!');
      history.push({
        pathname: '/checkout',
        state: {
          cartItems,
          totalPrice,
          name, // Pass the name here
          email, // Pass the email here
        },
      }); // Move to the Checkout page passing cart items, total price, name, and email as state
    }
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Signup</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isGuest}
              onChange={(e) => setIsGuest(e.target.checked)}
            />
            <label className="form-check-label">Sign up as a guest</label>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
