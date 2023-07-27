import React from 'react';
import Product from '../Product/Product';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import Checkout from '../../../Checkout';

const Routes = ({
  productItems,
  cartItems,
  wishlistItems,
  handleRemoveProduct,
  handleAddProduct1,
  handleAddProduct,
  handleAddToCart,
  handleCartClearance,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Product
            productItems={productItems}
            handleAddProduct={handleAddProduct}
            handleAddProduct1={handleAddProduct1}
            handleAddToCart={handleAddToCart}
          />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/wishlist" exact>
          <Wishlist
            wishlistItems={wishlistItems}
            handleAddProduct1={handleAddProduct1}
            handleAddToCart={handleAddToCart}
            handleCartClearance={handleCartClearance}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleRemoveProduct={handleRemoveProduct}
            handleAddProduct={handleAddProduct}
            handleCartClearance={handleCartClearance}
          />
        </Route>
        {/* Add the Route for the Checkout page */}
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
