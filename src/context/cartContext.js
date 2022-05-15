import { createContext } from "react";

const CartContext = createContext({
  cartIsOpen: false,
  setcartIsOpen: () => {},
  cartItems: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  clearCart: () => {},
});

export default CartContext;
