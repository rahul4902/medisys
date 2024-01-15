import React from "react";
import { CustomClientContext } from "./context/clientContext";
import { CartProvider } from "./context/CartContext";

const ContextProvider = ({ children }) => {
  return (
    <CustomClientContext>
      <CartProvider>{children}</CartProvider>
    </CustomClientContext>
  );
};

export default ContextProvider;
