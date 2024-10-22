import React, { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
