import React, {  useState } from "react";
import { BsCartFill } from "react-icons/bs";
import CartModal from "./CartModal";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
  const { getCartItems } = useCartContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalQuantity = getCartItems().reduce((t, e) => t + e.quantity, 0);

  const closeModal = () => setIsCartOpen(false);

  return (
    <>
      <div className="cart" onClick={() => setIsCartOpen(true)}>
        <BsCartFill />
        <h3>Your Cart</h3>
        <span className="cart-total-items">{totalQuantity}</span>
      </div>
      <CartModal onOpen={isCartOpen} onClose={closeModal} />
    </>
  );
};

export default Cart;
