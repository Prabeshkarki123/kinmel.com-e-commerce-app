import {React, useEffect, useState, useContext} from "react";
//import {homeApplianceArr, electronicsArr} from '../../CategoryProObj';
import { useParams, Link } from "react-router-dom";
import ShopContext from '../../ShopContext/ShopContext.js';

function CategoryProducts(){
    const {productCategory} =useParams();
    const [currentArr, setCurrArr]=useState([]);

    const {homeApplianceArr}=useContext(ShopContext);

    useEffect(()=>{
        if(productCategory==='homeappliance'){
            setCurrArr(homeApplianceArr);
        }
        // else{
        //     setCurrArr(electronicsArr);
        // }
    },[productCategory]);
    
    return(
        <div>
            <div>
                <p className=" ml-2 mb-1 mt-4 text-lg lg:text-2xl font-sans-serif font-bold text-red-500"></p>
               
                <div className="flex flex-wrap justify-start items-center bg-red-200 rounded-md shadow-md shadow-red-500 p-2 ml-3 mr-3 mb-2">
                    {currentArr.map((ele)=>{
                        return(
                        <Link to={`${ele.id.toLowerCase()}`}>
                        <div className="bg-white pt-1 mx-2 lg:mx-2 mb-4 w-[130px] md:w-[140px] lg:w-[155px] xl:w-1/10 rounded-md shadow-md shadow-red-200 hover:shadow-red-500">
                            <div className="flex justify-center">
                                 <img src={ele.picUrl[0]} alt={`top-brand-pic-${ele.id}`} className="w-[110px] lg:w-[150px] aspect-square"/>
                            </div>
                            <div className="flex justify-center h-[50px] bg-white rounded-b-lg">
                                <p className="text-red-700 text-xs lg:text-sm px-2 py-1">{ele.name} | Rs.{ele.price}</p>
                            </div>
                        </div>
                        </Link>
                      )
                    })}
                </div>
            </div>
        </div>
    )
}
export default CategoryProducts;