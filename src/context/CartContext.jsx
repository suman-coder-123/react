import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Add to cart
  function addToCart(product) {
    setCart([...cart, product]);
  }

  // Remove from cart
  function removeFromCart(index) {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  }
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;