import React, { useContext } from "react";
import PropTypes from "prop-types";

// Contexts
import CartContext from "../../context/cartContext";

// Styles
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext);

  const price = `$${item.price.toFixed(2)}`;

  const addCartItem = (item) => {
    cartContext.addItemToCart({ ...item, amount: 1 });
  };

  const removeCartItem = (id) => {
    cartContext.removeItemFromCart(id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => removeCartItem(item.id)}>−</button>
        <button onClick={() => addCartItem(item)}>+</button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
