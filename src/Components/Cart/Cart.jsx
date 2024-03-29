import React, { useEffect } from "react";
import { useCart } from "../../assets/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity,updateCart,setCart } = useCart();
      useEffect(()=>{
        let prevCart = JSON.parse(localStorage.getItem('cart'));
      if(prevCart) updateCart(prevCart);
      },[])
      let totalMrp = cart.length > 0 ? 
      cart.reduce((accumulator, currentValue) => (currentValue.price * currentValue.amount) + accumulator, 0) : 0;

    return (
        <div className="flex flex-wrap gap-5 pt-6">
        <div className="md:w-[70%]  p-6 min-h-[90dvh] shadow-md ">
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
                                        <button 
                                        onClick={() => increaseQuantity(item.id)} 
                                        className="border w-8 h-8 mx-2 font-bold text-xl">+</button>
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
        <div className="w-[300px] max-h-[250px] border border-blue-800 shadow rounded font-semibold px-3 flex flex-col gap-3">
            <h3>Price details ({cart.length} items)</h3>
            <h3 className="flex justify-between"><span>Total MRP</span>
             <span>             {totalMrp}    </span></h3>
            <h3 className="flex justify-between"><span>Discount on MRP</span> <span className="text-green-600">-100</span></h3>
            <h3 className="flex justify-between"><span>Delivery Charges</span> <span>200</span></h3>
             <hr />
             <h3 className="flex justify-between"><span>Total amount</span><span>{(totalMrp - 100) + 200}</span></h3>
             <Link to={'/placeOrder'} className="block w-[280px]">
             <button className="bg-green-600 text-white rounded py-[5px]">Place your Order</button>
             </Link>
        </div>
        </div>
    );
};

export default React.memo(Cart);
