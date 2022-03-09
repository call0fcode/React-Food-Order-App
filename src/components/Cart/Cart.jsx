import React, { useContext } from "react";
import PropTypes from "prop-types";

// Components
import Modal from "../UI/Modal";

// Context
import { CartContext } from "../../context/cartContext";

// Styles
import classes from "./Cart.module.css";

const Cart = () => {
  const context = useContext(CartContext);

  // Conditional rendering
  if (!context.cartIsOpen) return null;

  const cardItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );

  const closeCart = () => {
    context.setcartIsOpen(false);
  };

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cardItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCart}>
          Close
        </button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>
  );
};

Cart.propTypes = {};

export default Cart;
