import React from "react";
import "./Product.css";

const Product = ({ productItems, handleAddProduct, handleAddProduct1 }) => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    position: "sticky",
    
    zIndex: "0",
    paddingBottom: "20px",
  };

  const productItemStyle = {
    padding: "20px",
  };

  return (
    <div className="content-container" style={containerStyle}>
      {productItems.map((productItem) => (
        <div className="col-md-4" key={productItem.id} style={productItemStyle}>
          <div className="card">
            <img
              className="card-img-top"
              src={productItem.image}
              alt={productItem.name}
            />
            <div className="card-body">
              <h1 className="product-name">{productItem.name}</h1>
              <div className="product-price">₹{productItem.price}</div>
              <button 
                className="btn btn-success"
                onClick={() => handleAddProduct(productItem)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleAddProduct1(productItem)}
                style={{ marginLeft: "3px" }}
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
