import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductList() {

  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Shirt", price: 500 },
    { id: 3, name: "Watch", price: 2000 }
  ];

  return (
    <div>
      <h2 className="text-xl mb-4">Products</h2>

      {products.map((item) => (
        <div key={item.id} className="mb-3 border p-2">
          <p>{item.name} - ₹{item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className="bg-blue-500 text-white px-2 py-1 mt-1"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;