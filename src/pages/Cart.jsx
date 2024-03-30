import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useState,useEffect } from "react";

const Cart = () => {
  const {cart}=useSelector( (state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect( ()=>{
    setTotalAmount( ()=>{
       return cart.reduce( (acc,curr)=>(acc+curr.price),0)
    })
  },[cart])

  return (
    <div >
      {
        cart.length>0 ?
        (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
        <div>
          {
            cart.map( (item,index)=>{
              return <CartItem id={item.id} item={item} index={index}/>
            })
          }
        </div>

        <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between h-full " >

          <div className="">
             <div className="text-xl text-[#166534] uppercase font-[600]">Your Cart</div>
             <div className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</div>
             <p className="font-[600] text-xl text-slate-700">
               <span>Total Items:{cart.length}</span>
             </p>
          </div>

          <div className="text-slate-700 text-xl font-[600] mb-5 flex flex-col gap-8 ">
            <p>Total Amount: <span className="font-bold text-[#16a34a] text-lg">${totalAmount}</span></p>
            <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
              Checkout Now
            </button>
          </div>

        </div>
        </div>):
        (
          <div className="flex items-center justify-center flex-col mt-80 gap-4">
            <h1 className="font-[600] text-xl">Cart Empty</h1>
            <NavLink to='/'>
              <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
