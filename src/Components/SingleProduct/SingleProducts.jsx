import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import { useData } from '../../assets/data';
import { useCart , CartProvider } from '../../assets/CartContext';


const SingleProducts = () => {
  let { id } = useParams();
  let { products, loading } = useData();
  const {cart,setCart} = useCart();
  const [Product, setProduct] = useState([]);
  function addToCart() {
    let isAlreadyInCart;
    if(cart) isAlreadyInCart = cart.find(item => item.id === parseInt(id));
    console.log(isAlreadyInCart)
    if (isAlreadyInCart) {
      setCart(prevCart => prevCart.map(item =>
        item.id === parseInt(id) ? { ...item, amount: item.amount + 1 } : item
      ));
    } else {
      setCart(prev => {
        const newItem = { ...Product[0], amount: 1 };
        return [...prev, newItem]; 
      });
    }
  }
  
  useEffect(() => {
    const filteredProduct = products.filter(item => item.id == id);
    setProduct(filteredProduct);
  }, [id, products]); 
  useEffect(()=>{
    if(cart.length > 0) localStorage.setItem('cart',JSON.stringify(cart));

  },[id,products,setCart,cart])
  useEffect(()=>{
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  },[]);



  return (
 

    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-xs md:max-w-[60%] my-8 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full object-contain h-80" src={Product[0]?.image} alt={Product[0]?.title} />
          <div className="px-4 py-2">
            <h2 className="font-bold text-@xl text-gray-800">{Product[0]?.title}</h2>
            <p className="text-gray-600 text-xl">{Product[0]?.description}</p>
            <div className="flex items-center mt-2">
              <div className="text-xl font-bold text-gray-800">${Product[0]?.price}</div>
              <div className="ml-2 text-sm text-gray-600">Rating: {Product[0]?.rating.rate} ({Product[0]?.rating.count} reviews)</div>
            </div>
            <button onClick={addToCart}
            className='bg-orange-500 font-bold text-white px-2 py-1 rounded-xl w-40 
            hover:bg-black hover:text-orange-600 transition'>{ 'add To Cart'}</button>
          </div>
        </div>
      )}
      <div className="my-4 w-[100vw] bg-slate-500">
        <img src="https://img.pikbest.com/origin/09/17/13/19wpIkbEsTRmV.jpg!bw700" alt="advertisement" className="h-[300px] w-full" />
      </div>
    </>
    

  );
};

export default SingleProducts;
