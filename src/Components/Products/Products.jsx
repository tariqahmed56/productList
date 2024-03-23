import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { useData } from '../../assets/data';

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
      <div className="flex justify-start md:justify-center items-center gap-3 pt-3 overflow-auto">
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
        <div className="FContainer flex flex-wrap gap-8 w-full my-4 justify-center">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className={`product w-[200px] h-[200px] relative shadow-md group ${
                currentCategory === '' ? 'animate-enter' : 'animate-exit'
              }`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <Link to={`${item.id}`}>
                <img src={item.image} alt={item.title} className="w-full h-3/4 bg-transparent" />
                <button className="px-10 py-2 absolute bottom-0 bg-orange-400 rounded border-none w-full hidden group-hover:block">Go to Details</button>
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
