import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const Cart = ({ children }) => {
  const getInitialCart = () => JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const initialCart = getInitialCart();
    if (initialCart) {
      setCart(initialCart);
    }
  }, []);

  useEffect(() => {
    // write to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (product, qty = 1) => {
    localStorage.setItem("cart-status", "")
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      console.log(product.leftover , exist.qty)
      setCart(
        cart.map((x) =>
          (product.leftover > exist.qty && 
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };


  const decreaseItemQty = (id) => {    
    const exist = cart.find((x) => x.id === id);
    if (exist) {
      if(exist.qty<2){
        removeItemFromCart(id);
      }
      setCart(
        cart.map((x) =>
          (exist.qty>1 && x.id === id ? { ...exist, qty: exist.qty - 1 } : x
          )
        )
      );
    }
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const EmptyCart = () => {
    setCart([]);
  };

  const exposed = {
    cart,
    addItemToCart,
    removeItemFromCart,
    decreaseItemQty,
    EmptyCart,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default Cart;