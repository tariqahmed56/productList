import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { useData } from '../../assets/data';
import { IoMdStar } from "react-icons/io";

const Products = () => {
  const { products, loading, allProduct } = useData();
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  const filterProduct = (cat) => {
    if (cat !== '') {
      setCurrentCategory(cat);
      setTimeout(() => {
        const filter = products.filter(item => item.category === cat);
        setFilteredData(filter);
      }, 500);
    } else {
      setCurrentCategory('');
      setTimeout(() => {
        setFilteredData(allProduct);
      }, 500);
    }
  };

  return (
    <>
      <div className="flex justify-start md:justify-center items-center gap-3 pt-3 overflow-auto bg-gray-100">
        {categories.map(cat => (
          <button
            key={cat}
            className={`text-xl font-semibold px-3 py-2 rounded ${
              currentCategory === cat ? 'bg-orange-500 text-white' : null
            }`}
            onClick={() => filterProduct(cat)}
          >
            {cat}
          </button>
        ))}
        <button
          className="text-xl font-semibold px-3 py-2 rounded underline-offset-1 underline"
          onClick={() => filterProduct('')}
        >
          Clear
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="FContainer flex flex-wrap gap-8 w-full py-4 justify-center bg-gray-100">
          {filteredData.map((item, index) => (
           <div
           key={item.id}
           className={`product w-[300px] h-[400px] relative bg-white p-3 rounded shadow-md group overflow-hidden ${
             currentCategory === '' ? 'animate-enter' : 'animate-exit'
           }`}
           style={{ animationDelay: `${index * 60}ms`}}
         >
           <Link to={`${item.id}`}>
             <img src={item.image} alt={item.title} className="w-full h-3/4 " />
             <h2 className='truncate font-semibold pl-3'>{item.title}</h2>
             <h2 className='truncate font-semibold pl-3'>Price : ${item.price}</h2>
             <h2 className='truncate font-semibold pl-3 flex gap-1 items-center'>rating: {item.rating.rate}<IoMdStar className='text-orange-600' size={25}/></h2>
           </Link>
         </div>
          ))}
        </div>
      )}

      <div className="my-4 w-full bg-slate-500">
        <img
          src="https://img.pikbest.com/origin/09/17/13/19wpIkbEsTRmV.jpg!bw700"
          alt="advertisement"
          className="h-[300px] w-full"
        />
      </div>
    </>
  );
};

export default Products;
