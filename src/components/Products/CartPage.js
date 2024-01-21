import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import AddToCart from "./addToCart";

const CartPage = () => {
  

  return (
    <div>
      <Header/>
      <AddToCart/>
    </div>
  );
};

export default CartPage;
