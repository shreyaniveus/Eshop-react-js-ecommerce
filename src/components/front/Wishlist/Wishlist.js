import React from "react";
import "./Wishlist.css";

const Wishlist = ({ wishlistItems, handleAddToCart, handleRemoveFromWishlist }) => {
  return (
    <div className="wishlist-container">
      <div className="container">
        <h1 className="wishlist-header">Your Wishlist</h1>
        <div className="row">
          {wishlistItems.length === 0 ? (
            <div className="col text-center">
              <p className="wishlist-empty-message">No items are currently on your wishlist.</p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                <div className="wishlist-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="wishlist-card-img-top"
                  />
                  <div className="wishlist-card-body">
                    <h5 className="wishlist-card-title">{item.name}</h5>
                    <div className="wishlist-button-row">
                      <button
                        className="btn product-button black-button"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn product-button black-button1"
                        onClick={() => handleRemoveFromWishlist(item)}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
