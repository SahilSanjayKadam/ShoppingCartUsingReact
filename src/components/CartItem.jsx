import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item,index}) => {
  const dispatch=useDispatch();
  function removefromcart(){
      dispatch(remove(item.id));
      toast.success("Item Removed");
  }
  return (
    <div>
       <div className="flex py-3.5 px-2.5 gap-20 flex-col md:flex-row ">
          <div className="md:w-[30%] w-full flex justify-center items-center">
            <img src={item.image} className="w-[40%] md:w-[30%] lg:w-[50%]"/>
          </div>
          <div className="flex flex-col justify-between max-w-80">
            <div className="text-xl font-[600] text-slate-700">
            <h1>{item.title.split(" ").slice(0,10).join(" ")}</h1>
            <h1>{item.title.split(" ").slice(11).join(" ")}</h1>
            </div>
            
            <div className="text-slate-700 ">
            <h1>{item.description}</h1>
           
            </div>
            
            <div className="flex items-center justify-between">
              <p className="font-bold text-[#16a34a] text-lg">${item.price}</p>
              <div 
              className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
              hover:bg-red-400 group transition-all"
              onClick={removefromcart}>
               <MdDelete />
              </div>
            </div>
          </div>
         
       </div>
       <div className="w-[100%] bg-black h-0.5"></div>
    </div>
  );
};

export default CartItem;
