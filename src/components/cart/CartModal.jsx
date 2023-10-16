import React from "react";
import useCartContext from "../hooks/useCartContext";

const CartModal = ({ onOpen, onClose }) => {
  const { getCartItems, handleUpdateQuantity } = useCartContext();

  const totalPrice = getCartItems()
    .reduce((t, e) => t + e.quantity * e.price, 0)
    .toFixed(2);

  return (
    <div className="cart-modal">
      <dialog open={onOpen}>
        <ul className="cart-items">
          {getCartItems() &&
            getCartItems().map((item) =>
              item.quantity > 0 ? (
                <li key={`cart-item-${item.id}`} className="cart-item">
                  <div className="cart-item-descriptions">
                    <h2 className="cart-item-name">{item.name}</h2>
                    <div className="cart-item-amount">
                      <div className="cart-item-price">{`$${item.price}`}</div>
                      <div className="cart-item-quantity">{`x ${item.quantity}`}</div>
                    </div>
                  </div>
                  <div className="cart-item-btn">
                    <button
                      onClick={() => handleUpdateQuantity(item, "decrease", 1)}
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleUpdateQuantity(item, "increase", 1)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ) : null
            )}
        </ul>
        <div className="cart-modal-footer">
          <div className="total-price">
            <h2>Total Amount</h2>
            <h2>{`$${totalPrice}`}</h2>
          </div>
          <div className="cart-modal-btn">
            <button className="btn-close" onClick={onClose}>
              Close
            </button>
            <button className="btn-order">Order</button>
          </div>
        </div>
      </dialog>
      {onOpen ? <div className="backdrop" /> : null}
    </div>
  );
};

export default CartModal;
