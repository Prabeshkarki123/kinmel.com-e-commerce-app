import {React, useState, useContext} from "react";
//import { homeApplianceArr } from "./CategoryProObj";
import { useParams } from "react-router-dom";
import { Image, Rate } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
//import CartContext from "../cart/CartContext";
import ShopContext from '../../ShopContext/ShopContext.js';

function ProductDetails(){
    const {productID}=useParams();

   // const {cartItemsArr, setCartItemsArr}=useContext(CartContext);
    const {homeApplianceArr, cartItemsArr, addToCart, increaseQuantity, decreaseQuantity} = useContext(ShopContext);

    // const handleAddToCart=()=>{
    //     const newCartItemArr=[...cartItemsArr,{...productObjCurr, productCount}];
    //     setCartItemsArr(newCartItemArr);
    // }

    const [productCount1, setProductCount1]=useState(1);

    const handleIncreCount=()=>{
        setProductCount1((prevCount)=>prevCount+1);
    }
    const handleDecreCount=()=>{
            if(productCount1>1){
                setProductCount1((prevCount)=>prevCount-1);
            }
    };

    function getObjectById(array, id) {
        return array.find((objEle) => objEle.id === id);
    }

    const productObjCurr=getObjectById(homeApplianceArr, productID);

    const slideLeft=()=>{
        let slider=document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 300;
    }

    const slideRight=()=>{
        let slider=document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 300;
    }

    return(
        <div className="flex mx-1 lg:mx-10 my-5 p-1 lg:p-4 shadow-lg shadow-red-500">
           
           {/* Image part */}
            <div className="w-1/2 lg:w-1/3 rounded-lg shadow-md shadow-red-200">
                {/* Image displayer*/}
                <div className="flex justify-center m-1 border-1 border-red-500">
                    {/* this <Image> element is an antdesign component used for preview options for users */}
                    <Image src={productObjCurr.picUrl[1]} alt={productObjCurr.name} className="w-full"/>
                </div>
            
                {/* Image slider and picker */}
                <div className="flex items-center">
                  <button onClick={slideLeft}><LeftOutlined className="text-lg lg:text-3xl text-red-500 mx-2 opacity-70 hover:opacity-100"/></button>
                    <div id='slider' className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                        {productObjCurr.picUrl.map((ele, index)=>{
                                return(
                                  <div className="shadow-md shadow-red-200 rounded-lg ease-in-out duration-300 inline-block m-2  hover:scale-110">
                                    <div className="flex justify-center my-0">
                                        <img src={ele} alt={`top-brand-pic-${index}`} className="cursor-pointer hover:scale:110 w-[50px] lg:w-[80px] aspect-square"/>
                                    </div>
                                  </div>
                            )
                        })}
                    </div>
                  <button onClick={slideRight}><RightOutlined className="text-lg lg:text-3xl text-red-500 mx-2 opacity-70 hover:opacity-100"/></button>
                </div>
            </div>






            {/* product details part */}
            <div className="mx-2 lg:mx-5 w-1/2 lg:w-2/3">
               <div className="text-lg lg:text-2xl">
                    <b className="text-red-500">{productObjCurr.name}</b><b className="text-green-500">  |  </b>{productObjCurr.description}
               </div>
               
               <div className="text-sm lg:text-md my-5">
                    <p>Ratings: <Rate disabled defaultValue ={2}/> <br/>
                    Brand: {productObjCurr.Brand}</p>
               </div>
               
               <div className="text-lg lg:text-2xl">
                    <p className="text-red-500">Price: Rs. {productObjCurr.price}</p>
               </div>

               {/* quantity taker */}
               <div className="flex items-center">
                    <span className="text-sm lg:text-md">Quantity:</span>
                    <button onClick={handleDecreCount} className=" rounded-full w-7 ml-10 mr-3 lg:w-8 text-lg lg:text-2xl text-gray-700 aspect-square bg-gray-300 hover:bg-gray-400">-</button>
                    <span className="text-green-500 text-lg lg:text-2xl font-bold">{productCount1}</span>
                    <button onClick={handleIncreCount} className=" rounded-full ml-3 w-7 lg:w-8 text-lg lg:text-2xl text-gray-700 aspect-square bg-gray-300 hover:bg-gray-400">+</button>
               </div>

                 {/* add to cart and buy now buttons */}
                 <div className="lg:flex items-center">
                    <button className="w-40 lg:w-60 p-2 mr-8 my-2 lg:my-6 text-sm lg:text-lg text-white bg-blue-500 focus:bg-blue-700 hover:scale-110">Buy Now</button>
                    <button onClick={()=>addToCart(productObjCurr, productCount1)} className="w-40 lg:w-60 p-2 mr-8 my-2 lg:my-6 text-sm lg:text-lg text-white bg-green-500 focus:bg-green-600 hover:scale-110">Add to Cart</button>
               </div>

            </div>

        </div>
    )
}
export default ProductDetails;