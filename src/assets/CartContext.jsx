import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // Function to update local storage and set cart state
    const updateCart = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        let arr = JSON.parse(localStorage.getItem('cart'));
        console.log(arr)
        setCart(arr);
    };

    // Function to add an item to the cart
    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        updateCart(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? {...item, amount: item.amount + 1} : item
        );
        updateCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? {...item, amount: Math.max(item.amount - 1, 1)} : item
        );
        updateCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,setCart,updateCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
