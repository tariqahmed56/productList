import React, { useEffect } from 'react'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
import { useData } from './assets/data.jsx'

const LayOut = () => {
  const { products, loading, error, fetchData } = useData();
  useEffect(()=>{
    fetchData('https://fakestoreapi.com/products');
  },[])

  return (
    <main>
    <Navbar/>
        <Outlet/>
      <Footer/> 
  </main>
  )
}

export default LayOut
