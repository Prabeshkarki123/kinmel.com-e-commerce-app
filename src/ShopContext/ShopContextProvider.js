import React, { useEffect, useState } from "react";
import {homeApplianceArr, topBrandPicsArr, winterPicsArr} from '../ProductData';
import ShopContext from "./ShopContext";

function ShopContextProvider(props){
    
    const [cartItemsArr, setCartItemsArr]= useState([]);

    const addToCart = (item, proCount) => {
        const existingItemIndex=cartItemsArr.findIndex((ele)=>ele.id===item.id);
        if(existingItemIndex!=-1){
            cartItemsArr[existingItemIndex].productCount +=proCount;
        }
        else{
            setCartItemsArr((prevCart) => [...prevCart, {...item, productCount:proCount}]);
        }
      };
    
      const removeFromCart = (productId) => {
        setCartItemsArr((prevCart) => prevCart.filter((item) => item.id !== productId));
      };
    
      const increaseQuantity = (productId) => {
        setCartItemsArr((prevCart) =>
          prevCart.map((item) =>
            item.id === productId ? { ...item, productCount: item.productCount + 1 } : item
          )
        );
      };
    
      const decreaseQuantity = (productId) => {
        setCartItemsArr((prevCart) =>
          prevCart.map((item) =>
            item.id === productId? { ...item, productCount: Math.max(1, item.productCount - 1) }: item
          )
        );
      };

      const totalItemsinCart=()=>{
        let totalItems=0;
        cartItemsArr.forEach((ele)=>{
            totalItems+=ele.productCount;
        })
        return totalItems;
      };
      
     
    return(
        <ShopContext.Provider value={{homeApplianceArr, topBrandPicsArr, winterPicsArr, cartItemsArr, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalItemsinCart}}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;