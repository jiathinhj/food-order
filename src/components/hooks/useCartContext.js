import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCartContext = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const getCartItems = () => Object.values(cartItems || {});
  const handleUpdateQuantity = (item, operation, amount) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[item.id]) {
        if (operation === "increase") {
          updatedCart[item.id] = {
            ...updatedCart[item.id],
            quantity: updatedCart[item.id].quantity + parseInt(amount),
          };
        } else {
          updatedCart[item.id] = {
            ...updatedCart[item.id],
            quantity: updatedCart[item.id].quantity - 1,
          };
        }
      } else updatedCart[item.id] = { ...item, quantity: parseInt(amount) };
      return updatedCart;
    });
  };
  return { getCartItems, handleUpdateQuantity };
};
export default useCartContext;
