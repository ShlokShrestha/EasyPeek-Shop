import React, { createContext, useContext, useReducer, useState, useEffect } from "react";
import { cartReducer } from "./Reducer";

const Cart = createContext();
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(state.cart.reduce((acc, curr) => acc + Number(curr.price*curr.qtn), 0));
  }, [state.cart]);

  return (
    <Cart.Provider value={{ state, dispatch, total }}>{children}</Cart.Provider>
  );
};

export default CartContext;
export const CartState = () => {
  return useContext(Cart);
};
