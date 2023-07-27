import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  const productItemStyle1 = {
    padding: '0px',
    marginTop: '10px',
    paddingLeft: '0px',
  };
  const productItemStyle2 = {
    padding: '0px',
    marginTop: '10px',
    paddingLeft: '0px',
  };
  const productstyle3 = {
    paddingLeft: '10px',
  };
  const productstyle4 = {
    paddingLeft: '50px',
    paddingRight: '10px', // Add right padding to the Order button
  };

  // Use the useHistory hook to get access to the history object
  const history = useHistory();

  // Use the useLocation hook to access the location object
  const location = useLocation();

  // Use the state to retrieve the cart items and total price passed from the Signup page
  const { cartItems: signedUpCartItems, totalPrice: signedUpTotalPrice } = location.state || {};

  // Add a state to keep track of user type (registered/guest)
  const [isRegisteredUser, setIsRegisteredUser] = useState(false);

  // Handle the logic for checking if the user is a registered user or guest
  const handlePlaceOrder = () => {
    if (isRegisteredUser) {
      // Navigate to the checkout page for registered users
      history.push({
        pathname: '/checkout',
        state: {
          cartItems,
          totalPrice,
        },
      });
    } else {
      // Display a popup for guests
      const isConfirmed = window.confirm('You are currently a guest user. Please sign up to place this order.');
      if (isConfirmed) {
        history.push({
          pathname: '/signup',
          state: {
            cartItems,
            totalPrice,
          },
        });
      }
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center" style={productItemStyle1}>
        <div className="card cart-card" style={productItemStyle2}>
          <h2 className="card-header cart-items-header text-center">Cart Items</h2>
          <div className="clear-cart d-flex justify-content-end">
            {cartItems.length >= 1 && (
              <button className="clear-cart-button btn btn-danger" onClick={handleCartClearance}>
                Clear Cart
              </button>
            )}
          </div>
          {cartItems.length === 0 && (
            <div className="card-body cart-items-empty text-center">No items are added</div>
          )}
          <div className="card-body">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-items-list">
                <img className="cart-items-image" src={item.image} alt={item.name} />
                <div className="cart-items-name">{item.name}</div>
                <div className="cart-items-function">
                  <button className="cart-items-add btn btn-primary" onClick={() => handleAddProduct(item)}>
                    +
                  </button>
                  <button className="cart-items-remove btn btn-danger" onClick={() => handleRemoveProduct(item)}>
                    -
                  </button>
                </div>
                <div className="cart-items-price">
                  {item.quantity} * ₹{item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Move the total price and order button here */}
      <div className="card-footer cart-items-total-price-name" style={{ justifyContent: 'center' }}>
        <div style={{ marginRight: '50px' }}>
          {/* Add right margin to create spacing */}
          Total price:
          <div className="cart-items-total-price">₹{totalPrice}</div>
        </div>
        <div>
          {/* Show different behavior based on user type */}
          {isRegisteredUser ? (
            <button className="btn btn-success" style={{ backgroundColor: '#142c64' }} onClick={handlePlaceOrder}>
              Place Order
            </button>
          ) : (
            <button className="btn btn-success" style={{ backgroundColor: '#142c64' }} onClick={handlePlaceOrder}>
              Place Order
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
