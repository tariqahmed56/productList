// DataContext.js
import React, { createContext, useState } from 'react';

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [allProduct, setAllProuct] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setAllProuct(data)
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ products,  loading, error, fetchData , allProduct}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
