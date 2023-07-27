import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const location = useLocation();

  // Retrieve user details, cart items, and total price from location state
  const { name, email, cartItems, totalPrice } = location.state || {};

  const handleCheckout = () => {
    if (!address || !district || !pincode) {
      alert('Please fill in all the required fields.');
      return;
    }

    const confirmationMessage = `Confirm your order.`;

    if (window.confirm(confirmationMessage)) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mt-5">
        <h2>Thank you for shopping, {name}!</h2>
        <p>Your order will be delivered to {address}, {district}, {pincode}.</p>
        <h3>Order Details:</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>
              Item: {item.name}, Quantity: {item.quantity}, Price: ₹{item.price}
            </p>
          </div>
        ))}
        <p>Total Price: ₹{totalPrice}</p>
        <button className="btn btn-primary" onClick={() => history.push('/')}>
          Continue with Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={name || ''}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email || ''}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>District:</label>
        <input
          type="text"
          className="form-control"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Pincode:</label>
        <input
          type="text"
          className="form-control"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>
      <h3>Selected Items:</h3>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            Item: {item.name}, Quantity: {item.quantity}, Price: ₹{item.price}
          </p>
        </div>
      ))}
      <p>Total Price: ₹{totalPrice}</p>
      <button className="btn btn-primary" onClick={handleCheckout}>
        Submit
      </button>
    </div>
  );
};

export default Checkout;
