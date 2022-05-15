import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

// Components
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

// Context
import CartContext from "../../context/cartContext";

// Styles
import classes from "./Cart.module.css";

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const cartContext = useContext(CartContext);

  // Conditional rendering
  if (!cartContext.cartIsOpen) return null;

  const closeCart = () => {
    cartContext.setcartIsOpen(false);
    setIsCheckout(false);
    setDidSubmit(false);
  };

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.cartItems.length > 0;

  const cartItems = cartContext.cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://c0c-react-db-connection-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItems: cartContext.cartItems,
          }),
        }
      );

      if (!response.ok) {
        setIsSubmitting(false);
        throw new Error("Something went wrong while submitting the order!");
      }

      setIsSubmitting(false);
      setDidSubmit(true);
      cartContext.clearCart();
    } catch (error) {
      setSubmitError(error.message);
    }
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={closeCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes["button"]} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && cartContext.cartItems.length > 0 && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={closeCart}
          submitError={submitError}
        />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={closeCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

Cart.propTypes = {};

export default Cart;
