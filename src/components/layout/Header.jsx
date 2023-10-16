import React from "react";
import Cart from "../cart/Cart";

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="brand">ReactMeals</h1>
        <Cart />
      </nav>
    </header>
  );
};

export default Header;
