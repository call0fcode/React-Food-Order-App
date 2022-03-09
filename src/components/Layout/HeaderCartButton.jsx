import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";

import { CartContext } from "../../context/cartContext";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const context = useContext(CartContext);

  const showCart = () => {
    context.setcartIsOpen(true);
  };

  return (
    <button className={classes.button} onClick={showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
