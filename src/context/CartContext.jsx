import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartContent, setCartContent] = useState({});
    const data = { cartContent, setCartContent };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
