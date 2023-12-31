import React, { useContext } from "react";
import { CartContext } from "../App";
const Cart = () => {
  const useCart = useContext(CartContext);
  return (
    <div>
      <p>{useCart}</p>
    </div>
  );
};

export default Cart;
