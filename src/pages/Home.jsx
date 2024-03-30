import { useEffect, useState } from "react";
import Product from '../components/Product'
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);
  async function fetchinData(){
      try{
        setLoading(true);
        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        console.log(data);
        setPosts(data);
        setLoading(false);
      }catch(e){
        console.log(e);
      }
  }

  useEffect( ()=>{
    fetchinData();
  },[])

  return (
    <div className="h-screen">
      {
        loading ? (<div className=" flex justify-center items-center mt-80"><Spinner /></div>):
                 (
                  <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {
                       posts.map( (post)=><Product key={post.id} post={post}/>)
                    }
                  </div>
                 )
       }         
    </div>
  );
};

export default Home;
