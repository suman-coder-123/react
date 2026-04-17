import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-xl mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="mb-3 border p-2">
            <p>{item.name} - ₹{item.price}</p>
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-2 py-1 mt-1"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;