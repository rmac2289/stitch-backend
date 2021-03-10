import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocaleStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // this is our own custom provider
  const [cartOpen, setCartOpen] = useState(false);
  function toggleCart() {
    setCartOpen(!cartOpen);
  }
  function closeCart() {
    setCartOpen(false);
  }
  function openCart() {
    setCartOpen(true);
  }
  return (
    <LocaleStateProvider
      value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}
    >
      {children}
    </LocaleStateProvider>
  );
}

// custom hook for accessing cart state
function useCart() {
  // use consumer to access local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };
