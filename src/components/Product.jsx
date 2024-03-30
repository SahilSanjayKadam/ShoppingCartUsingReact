import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { remove,add } from "../redux/Slices/CartSlice";


const Product = ({post}) => {
 
  const {cart}=useSelector( (state)=>state);
  const dispatch=useDispatch();
  function removefromcart(){
    dispatch(remove(post.id));
    toast.error("Item removed from Cart")
  }
  function addtocart(){
    dispatch(add(post));
    toast.success("Item added to Cart")
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110
    transition duration-500 ease-in hover:shadow-2xl gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div>
        <p className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
        <p>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div >
        <img src={post.image} className="h-[180px]"></img>
      </div>
      <div className="flex gap-12">
         <div>
           <p className="text-green-600 font-semibold">${post.price}</p>
         </div>
         <div>
          {
           cart.some((p)=>(p.id===post.id)) ?
           (<button onClick={removefromcart} 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">Remove Item</button>):
           (<button onClick={addtocart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">Add to Cart</button>)
          }
        </div>
      </div>
      
        
      
    </div>
  );
};

export default Product;
