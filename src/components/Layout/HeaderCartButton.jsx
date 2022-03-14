import React, { useContext, useEffect, useState } from "react";

// Components
import CartIcon from "../Cart/CartIcon";

// Contexts
import CartContext from "../../context/cartContext";

// Styles
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartContext = useContext(CartContext);

  const showCart = () => {
    cartContext.setcartIsOpen(true);
  };

  const numberOfItemsInCart = cartContext.cartItems.reduce(
    (prevAmount, cartItem) => {
      return prevAmount + cartItem.amount;
    },
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // Fire button animation each time an item has been added/removed.
  useEffect(() => {
    // Only execute this if there's at least one item in the cart.
    if (cartContext.cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    // Remove animation class (bump) after 300ms.
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // Cleanup function to clear the timer.
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.cartItems]);

  return (
    <button className={btnClasses} onClick={showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
