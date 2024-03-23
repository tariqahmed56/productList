import React, { useEffect } from "react";
import { useCart } from "../../assets/CartContext";

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity,updateCart,setCart } = useCart();
      useEffect(()=>{
        let prevCart = JSON.parse(localStorage.getItem('cart'));
      if(prevCart) updateCart(prevCart);
      },[])
    return (
        <div className="md:max-w-3xl mx-auto p-6 min-h-[90dvh] shadow-md">
            {cart.length > 0 ? (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Product
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-3 py-4 whitespace-nowrap">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="md:w-16 w-8 md:h-16 h-8 object-contain shadow"
                                        />
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap">${item.price}</td>
                                    <td className="px-3 py-4 whitespace-nowrap">
                                        <button onClick={() => increaseQuantity(item.id)} className="border w-8 h-8 mx-2 font-bold text-xl">+</button>
                                        {item.amount}
                                        <button onClick={() => decreaseQuantity(item.id)} className="border w-8 h-8 mx-2 font-bold text-xl">-</button>
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap">${(item.price * item.amount).toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h1 className="text-2xl font-bold text-center">Your cart is empty</h1>
            )}
        </div>
    );
};

export default React.memo(Cart);