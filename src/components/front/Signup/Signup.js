import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Signup.css'; // Import the Signup.css file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Check if the user is already registered based on email and password
    const registeredEmail = localStorage.getItem('email');
    const registeredPassword = localStorage.getItem('password');

    if (registeredEmail === email && registeredPassword === password) {
      // Redirect to the checkout page passing the necessary information
      alert('Logged in successfully.');
      history.push({
        pathname: '/checkout',
        state: {
          cartItems: location.state.cartItems,
          totalPrice: location.state.totalPrice,
          email,
          name,
        },
      });
    } else {
      window.confirm('Please check the entered email or password. If you are a new user, please proceed to register.');

      
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-card-body">
          <h2 className="signup-card-title">Login</h2>
          <div className="form-group">
            <label className="signup-label">Name:</label>
            <input
              type="text"
              className="form-control signup-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="signup-label">Email:</label>
            <input
              type="email"
              className="form-control signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="signup-label">Password:</label>
            <input
              type="password"
              className="form-control signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="signup-button" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
