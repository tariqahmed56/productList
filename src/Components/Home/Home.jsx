import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom';
import {useData} from '../../assets/data.jsx';
import Loader from '../Loader.jsx'
const Home = () => {
  const { products, loading, error, fetchData } = useData();
  

  return (

    <div className="container">
    <div 
    className='md:px-12 w-[100vw] h-[60vh] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center
     bg-[url("./assets/R.jpeg")] relative'>
        <div className='absolute w-full h-full bg-black opacity-45'></div>
   <h1 className='text-[yellow] text-[4.5rem] tracking-none leading-[50px] md:mb-4 mb-2 text-center font-bold font-sarif z-30'>Bold street style.</h1>
   <p className='md:w-[40%] w-[80%] text-white text-xl z-10 text-center mb-2'>They can bring your vision to life and ensure your brand stands out. You can hire a designer directly or host a design contest to get ideas from designers worldwide.</p>
   <button className='px-4 py-2 bg-black border-none rounded-md text-white z-20 font-bold w-[250px] text-2xl'>Go to Products</button>
    </div>
    <h1 className='text-[3.5rem] font-semibold font-sarif z-30 font-sans px-[60px] py-4 text-black'>Our Featured Products</h1>
    <div className="FContainer flex flex-wrap gap-8 w-[100vw]  justify-center">
       {loading ? <Loader/> : products.slice(12).map(item=>(
        <div className="product w-[350px] h-[400px] relative shadow-md group pb-2" key={item.id} >
         <img src={item.image} alt={item.title} className='w-full h-3/4 bg-transparent' />
         <Link to='/products' className=' text-2xl'>
         <button className='px-10 py-2 bg-orange-400 rounded border-none w-full '>GO to Store
          </button>
          </Link>
        </div>
       ))}
    </div>
    <div className=" my-4 w-[100vw] bg-slate-500">
      <img src="https://img.pikbest.com/origin/09/17/13/19wpIkbEsTRmV.jpg!bw700" alt="advertisement" className=' h-[300px] w-full '/>
    </div>
    </div>
  )
}

export default Home
