import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaAlignRight, FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../assets/CartContext';
import { useContext } from 'react';
import { authContext } from '../../assets/authContext';

const Navbar = () => {
  const { cart } = useCart();
  const {signOut,user} = useContext(authContext);
  const [count, setCount] = useState(cart.length);
  console.log(count)
  useEffect(() => {
    setCount(cart.length);
  }, [cart]);
  
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="h-20 flex justify-between md:px-20 px-5 text-white bg-black items-center">
      <h1 className="text-4xl font-semibold">
        Cloth<span className="text-orange-500">Store</span>
      </h1>

      {/* Desktop navigation */}
      <ul className="xl:flex xl:flex-row gap-[4rem] hidden">
        <li className="text-xl font-mono font-bold">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="text-xl font-mono font-bold">
          <NavLink to={'/products'}>Products</NavLink>
        </li>
        <li className="text-xl font-mono font-bold">
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li className="text-xl font-mono font-bold">
          <NavLink to={'/contact'}>Contact us</NavLink>
        </li>
      </ul>

      {/* Mobile navigation toggle */}
      <div className="xl:hidden">
        <FaAlignRight
          onClick={(e) => {
            e.stopPropagation();
            setToggle((prev) => !prev);
          }}
        />
      </div>

      {/* Mobile navigation menu */}
      {toggle && (
        <>
          <ul className="xl:hidden flex flex-col gap-4 absolute top-20 left-0 z-50 right-0 bg-black text-white p-4">
            <NavLink to={'/'}>
              {' '}
              <li className="text-xl font-mono font-bold">Home</li>
            </NavLink>
            <NavLink to={'/products'}>
              <li className="text-xl font-mono font-bold">Products</li>
            </NavLink>
            <NavLink to={'/about'}>
              <li className="text-xl font-mono font-bold">About</li>
            </NavLink>
            <NavLink to={'/contact'}>
              <li className="text-xl font-mono font-bold">Contact us</li>
            </NavLink>
            <div className="buttons xl:hidden flex items-center">
              <Link to={'cart'}>
                <button className="w-25 border-none px-3  relative rounded-lg py-3 hover:bg-orange-800 text-xl font-mono font-bold">
                  <FaCartPlus size={30} />
                  <span className="w-6 h-6 block absolute top-0 right-0 rounded-full bg-green-600 text-white text-xl font-bold">
                    {count > 0 && count}
                  </span>
                </button>
              </Link>
              <Link to={'login'}>
        <button className="w-25 border-none px-3 rounded-lg py-1 ml-2 hover:bg-orange-500 text-xl font-mono font-bold">
          login
        </button>
        </Link>
            </div>
          </ul>
        </>
      )}

      {/* Buttons */}
      <div className="buttons hidden xl:flex items-center">
       {
       !user ? <Link to={'login'}>
        <button className="w-25 border-none px-3 rounded-lg py-1 ml-2 hover:bg-orange-500 text-xl font-mono font-bold">
          login
        </button>
        </Link> : <button onClick={signOut}>LogOut</button>
        }
         <Link to={'SignUp'}>
        <button className="w-25 border-none px-3 rounded-lg py-1 ml-2 hover:bg-orange-500 text-xl font-mono font-bold">
          Sign Up
        </button>
        </Link> 
      
        <Link to={'cart'}>
          <button className="w-25 border-none px-3 relative rounded-lg py-3 hover:bg-orange-800 text-xl font-mono font-bold">
            <FaCartPlus size={30} />
           {count > 0 &&
            <span className="w-6 h-6 block absolute top-0 right-0 rounded-full bg-green-600 text-white text-xl font-bold">
             {count}
            </span>}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
