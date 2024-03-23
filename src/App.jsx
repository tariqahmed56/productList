import { useEffect, useState } from 'react'
import './App.css'
import LayOut from './LayOut.jsx'
import Home from './Components/Home/Home.jsx'
import Products from './Components/Products/Products.jsx'
import SingleProducts from './Components/SingleProduct/SingleProducts.jsx'
import { BrowserRouter, Routes , Route  } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { DataProvider } from './assets/data.jsx'
import { CartProvider } from './assets/CartContext.jsx'
import Cart from './Components/Cart/Cart.jsx'
import AuthProvider from './assets/authContext.jsx'
import Login from './Components/Auth/Login.jsx'
import SignUp from './Components/Auth/SignUp.jsx'
function App() {
  
  return (
    <AuthProvider>
      <DataProvider>
        <CartProvider>
        <BrowserRouter>
      <Routes >
       <Route path='/' element={<LayOut/>}>
        <Route index  element= {<Home/>}/>
        <Route path='products'  element= {<Products/>}/>
        <Route path='products/:id' element={<SingleProducts/>}/>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='login' element={<Login/>} />
        <Route path='SignUp' element={<SignUp/>}/>
       </Route>
      </Routes>
      </BrowserRouter>

        </CartProvider>
      </DataProvider>
      </AuthProvider>
  )
}

export default App
