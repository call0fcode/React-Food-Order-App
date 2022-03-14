import React, { useState, useReducer } from "react";
import PropTypes from "prop-types";

import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const itemAlreadyInCartIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const itemAlreadyInCart = state.items[itemAlreadyInCartIndex];

    let updatedCart;

    if (itemAlreadyInCart) {
      const updatedItem = {
        ...itemAlreadyInCart,
        amount: itemAlreadyInCart.amount + action.item.amount,
      };
      updatedCart = [...state.items];
      updatedCart[itemAlreadyInCartIndex] = updatedItem;
    } else {
      updatedCart = state.items.concat(action.item);
    }

    // Updated state
    return {
      items: updatedCart,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const itemAlreadyInCartIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const itemAlreadyInCart = state.items[itemAlreadyInCartIndex];
    const updatedTotalAmount = state.totalAmount - itemAlreadyInCart.price;

    let updatedCart;

    if (itemAlreadyInCart.amount === 1) {
      updatedCart = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...itemAlreadyInCart,
        amount: itemAlreadyInCart.amount - 1,
      };
      updatedCart = [...state.items];
      updatedCart[itemAlreadyInCartIndex] = updatedItem;
    }

    // Updated state
    return {
      items: updatedCart,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartIsOpen, setcartIsOpen] = useState(false);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  ``;

  // Actual provided (shared) context
  const cartContext = {
    cartIsOpen,
    setcartIsOpen,
    cartItems: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart,
    removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
