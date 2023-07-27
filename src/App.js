import React, { useState } from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./components/front/Routes/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; // Import your custom CSS file

const App = () => {
  const { productItems } = data;
  
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const handleAddToCart = (item) => {
    console.log("Adding item to cart:", item);
    // Add the item to the cartItems state
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

 
 

const handleAddProduct= (product)=>{
const ProductEXist = cartItems.find((item)=> item.id===product.id);
if(ProductEXist)
{
  setCartItems(cartItems.map((item)=>item.id===product.id ? 
  {
    ...ProductEXist,quantity:ProductEXist.quantity+1}:item)
  );
}
else
{
  setCartItems([...cartItems,{...product,quantity:1}]);
}
};

const handleRemoveProduct=(product)=>{
  const ProductExist =cartItems.find((item)=>item.id === product.id);
  if(ProductExist.quantity==1)
  {
    setCartItems(cartItems.filter((item)=>item.id !=product.id));
  }
  else
  {
    setCartItems(
      cartItems.map((item)=>
      item.id===product.id 
      ?{...ProductExist,quantity:ProductExist.quantity-1}
      :item
      )
    );
  }
  };

const handleAddProduct1= (product)=>{
  const ProductEXist1 = wishlistItems.find((item)=> item.id===product.id);
  if(ProductEXist1)
  {
    setWishlistItems(wishlistItems.map((item)=>item.id===product.id ? 
    {
      ...ProductEXist1,quantity:ProductEXist1.quantity+1}:item)
    );
  }
  else
  {
    setWishlistItems([...wishlistItems,{...product,quantity:1}]);
  }
  };

const handleCartClearance = () => {
  setCartItems([]);
}

return (
  <div className="app-container">
    <Router>
      <Header />
      <div>
        <Routes 
          productItems={productItems}
          cartItems={cartItems} 
          wishlistItems={wishlistItems}
          handleAddToCart={handleAddToCart}
          handleRemoveProduct={handleRemoveProduct}
          handleAddProduct1={handleAddProduct1}
          handleAddProduct={handleAddProduct}
          handleCartClearance={handleCartClearance}
        />
        
      </div>
    </Router>
  </div>
);
};

export default App;