import React, { useContext } from "react";
import PropTypes from "prop-types";

// Components
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

// Context
import CartContext from "../../context/cartContext";

// Styles
import classes from "./Cart.module.css";

const Cart = () => {
  const cartContext = useContext(CartContext);

  // Conditional rendering
  if (!cartContext.cartIsOpen) return null;

  const closeCart = () => {
    cartContext.setcartIsOpen(false);
  };

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.cartItems.length > 0;

  const cartItems = cartContext.cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCart}>
          Close
        </button>
        {hasItems && <button className={classes["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

Cart.propTypes = {};

export default Cart;
