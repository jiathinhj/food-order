import React, { useCallback, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import useCartContext from "../hooks/useCartContext";

const MEALS = [
  {
    id: 1,
    name: "Sushi",
    ingredients: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    name: "Schnitzel",
    ingredients: "A german specialty!",
    price: 16.5,
  },
  {
    id: 3,
    name: "Barbecue Burger",
    ingredients: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    name: "Green Bowl",
    ingredients: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  const { handleUpdateQuantity } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="meals">
      {MEALS.map((meal) => (
        <div key={meal.id} className="meal">
          <div className="meal-details">
            <h3 className="meal-name">{meal.name}</h3>
            <i className="meal-ingredients">{meal.ingredients}</i>
            <div className="meal-price">{`$${meal.price}`}</div>
          </div>
          <div className="quantifier">
            <div className="quantity">
              <h4>Quantity</h4>
              <input
                id={meal.id}
                type="number"
                min={1}
                defaultValue={1}
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
            </div>
            <button
              className="btn-add"
              onClick={() => handleUpdateQuantity(meal, "increase", quantity)}
            >
              + Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meals;
