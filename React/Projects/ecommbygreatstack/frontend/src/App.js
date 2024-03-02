import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory category="Men"/>}></Route>
        <Route path='/womens' element={<ShopCategory category="womens"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kid"/>}></Route>
        <Route path='/product' element={<Product/>} ></Route>
        <Route path=':productid' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
