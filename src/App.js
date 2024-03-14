import React from "react";
import NavBarTop from "./components/header/NavBarTop";
import NavBarBelow from "./components/header/NavBarBelow";
//import Banner from "./components/body/Banner";
import Home from "./components/body/home";
import Footer from "./components/footer/Footer";
import CategoryProducts from "./components/body/CategoryProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/body/ProductDetails";
import Cart from './ShopContext/Cart'
import ShopContextProvider from "./ShopContext/ShopContextProvider";
import Login from './components/login,signup/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ShopContextProvider>
        <NavBarTop/>
        <NavBarBelow/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/:productCategory" element={<CategoryProducts/>}/>
          <Route path="/:productCategory/:productID" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </ShopContextProvider>
        <Footer/> 
      </BrowserRouter>
    </div> 
  );
}
export default App;
