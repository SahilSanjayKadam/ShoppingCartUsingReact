import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
     <div className='h-screen w-screen '>
       <div className="bg-slate-900">
         <Navbar/>
       </div>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
       </Routes>
     </div>
    )
  
};

export default App;
