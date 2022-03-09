import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
  cartIsOpen: false,
  setcartIsOpen: () => {},
});

const CartProvider = ({ children }) => {
  const [cartIsOpen, setcartIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ cartIsOpen, setcartIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
