import { IoMdCart } from "react-icons/io";
import logo from '../Assets/logo.png'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Navbar = () => {
  const {cart}=useSelector((state)=>(state))
  const [count,setCount]=useState();
  useEffect( ()=>{
   setCount(cart.length)
  },[cart])
  return (
    <div className="flex justify-between items-center h-20 max-w-5xl mx-auto">
      <NavLink to="/">
         <div>
          <img src={logo} className="lg:h-14 md:h-10 h-8"/>
         </div>
      </NavLink>
      
      
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-5">
        <NavLink to='/'>
           <p>Home</p>
        </NavLink>
        <NavLink to='/cart'>
            <div className="relative">
              <IoMdCart className="text-2xl"/>
              <div className="absolute  -top-1 -right-1 text-xs text-white bg-green-500 rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">{cart.length}</div>
            </div>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Navbar;
