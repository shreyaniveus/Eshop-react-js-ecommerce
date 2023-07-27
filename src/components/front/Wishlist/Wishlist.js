import React from "react";
import "./Wishlist.css";

const Wishlist = ({ wishlistItems }) => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card cart-card">
        <h2 className="card-header cart-items-header text-center">
          Wishlist Items
        </h2>
        {wishlistItems.length === 0 && (
          <div className="card-body cart-items-empty text-center">
            No items are added
          </div>
        )}
        <div className="card-body">
          {wishlistItems.map((item) => (
            <div key={item.id} className="cart-items-list">
              <img
                className="cart-items-image"
                src={item.image}
                alt={item.name}
              />
              <div className="cart-items-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
