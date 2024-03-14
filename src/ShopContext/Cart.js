import React, { useContext, useEffect, useState } from "react";
import ShopContext from "./ShopContext";
import {Link} from "react-router-dom";

function Cart(){
    const {homeApplianceArr, cartItemsArr, removeFromCart, increaseQuantity, decreaseQuantity}=useContext(ShopContext);
    const [totalAmount, setTotalAmount]=useState(0);
    
    useEffect(()=>{
        if(cartItemsArr.length!=0){
            let tAmount=0;
            cartItemsArr.forEach((ele)=> {
                tAmount=tAmount+ele.price*ele.productCount;
            })
            setTotalAmount(tAmount);
        }
    }, [cartItemsArr]);
    
    
    
    
    
    //console.log(cartItemsArr);
    // console.log(cartItemsArr[0]);
    //console.log(cartItemsArr[0].name);
    //console.log(totalAmount);
    
    if(cartItemsArr.length===0){
        return(
            <div className="mt-5 h-screen flex justify-center  text-3xl text-red-500">
                <b>Empty Cart! Nothing to Show...</b>
                
            </div>
        )
    }
    else{
    return(
        <div className="grid place-items-center mb-2 lg:mb-4">
            <div className="my-2 lg:my-4 text-red-500 text-3xl"><b>My Cart</b></div>
            <div className="p-1 lg:p-6 rounded-lg shadow-lg shadow-red-500">
                {cartItemsArr.map((ele, id)=>{
                    return(
                        <div className="p-1 lg:p-3 mb-2 lg:mb-4 flex items-center border border-red-500 rounded-lg">
                            <div>
                                 <img src={ele.picUrl[0]} alt={`top-brand-pic-${id}`} className="cursor-pointer hover:scale:110 w-[90px] lg:w-[120px] aspect-square"/>
                            </div>
                            <div className="p-1 lg:p-2 text-[12px] lg:text-[15px]">
                                <p><b>Product Name:</b> {ele.name}</p>
                                <p><b>Per Price:</b> Rs.{ele.price}</p>
                                <div className="flex items-center">
                                    <b>No. of items:</b>
                                    {/* quantity displayer and manager */}
                                    <div className="flex items-center">
                                            <button onClick={()=>decreaseQuantity(ele.id)} className="rounded-full ml-5 mr-3 w-7 lg:w-8 text-lg lg:text-2xl text-gray-700 aspect-square bg-gray-300 hover:bg-gray-400">-</button>
                                            <span className="text-green-500 text-lg lg:text-xl font-bold">{ele.productCount}</span>
                                            <button onClick={()=>increaseQuantity(ele.id)} className="rounded-full ml-3 w-7 lg:w-8 text-lg lg:text-2xl text-gray-700 aspect-square bg-gray-300 hover:bg-gray-400">+</button>
                                    </div>
                                </div>
                            </div>

                            {/*to remove item from cart */}
                            <div className=" w-1/4 ml-3 lg:ml-8">
                                <button onClick={()=>removeFromCart(ele.id)} className=" rounded-lg w-30 lg:w-50 p-2 my-2 lg:my-6 text-sm lg:text-md text-white bg-red-600 hover:scale-110">Remove from Cart</button>
                            </div>

                            
                        </div>
                    )
                })}

                <div className="mt-2 grid place-items-center">
                    <div className="flex">
                        <p className="text-red-500 text-lg lg:text-xl font-bold mb-0">Total Amount:</p>
                        <p className="text-green-500 text-lg lg:text-xl font-bold mb-0">{totalAmount}/-</p>
                    </div>
                </div>
            </div>

            <div className=" flex mt-5 w-1/3">
                <button className="p-3 w-full bg-green-500 text-white mr-5 hover:scale-110">Check Out</button>
                <button className="p-3 w-full bg-red-500 text-white hover:scale-110">Continue Shopping</button>
            </div>

        </div>
    )
}
}
export default Cart;