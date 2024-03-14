import {React, useContext} from "react";
import ShopContext from "../../ShopContext/ShopContext";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import Banner from "./Banner";

function Home(){
    const {topBrandPicsArr, winterPicsArr}=useContext(ShopContext);

    const slideLeft=()=>{
        let slider=document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 300;
    }

    const slideRight=()=>{
        let slider=document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 300;
    }
    
    return(
        <div>
                <Banner/>
                
                <p className="ml-2 mb-1 mt-4 text-lg lg:text-2xl font-sans-serif font-bold text-red-500">Top Deals</p>

                <div className="relative flex items-center">
                  <button onClick={slideLeft}><LeftCircleFilled className="text-5xl text-red-500 mx-2 opacity-70 hover:opacity-100"/></button>
                    <div id='slider' className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                        {topBrandPicsArr.map((ele, index)=>{
                                return(
                                  <div className="shadow-md shadow-red-200 rounded-lg ease-in-out duration-300 inline-block m-2  hover:scale-110">
                                    <div className="flex justify-center my-0">
                                        <img src={ele} alt={`top-brand-pic-${index}`} className="cursor-pointer hover:scale:110 w-[90px] lg:w-[120px] aspect-square"/>
                                    </div>
                                    <div className="flex justify-center my-0">
                                        <button className="bg-red-500 text-white text-xs lg:text-sm rounded-lg px-2 py-1 hover:scale-110 focus:outline-none focus:scale-110">Add to Cart</button>
                                    </div>
                                  </div>
                            )
                        })}
                    </div>
                  <button onClick={slideRight}><RightCircleFilled className="text-5xl text-red-500 mx-2 opacity-70 hover:opacity-100"/></button>
                </div>
                


               
                
                


                <p className="ml-2 mb-1 mt-4 text-lg lg:text-2xl font-sans-serif font-bold text-red-500">Winter Essentials</p>
               
                <div className="flex bg-red-200 flex-wrap justify-start items-center rounded-md shadow-md shadow-red-500 p-2 ml-3 mr-3 mb-2">
                    {winterPicsArr.map((ele, index)=>{
                        return(
                        <div className="pt-1 mx-2 lg:mx-2 mb-4 w-[130px] md:w-[140px] lg:w-[155px] xl:w-1/10 rounded-md shadow-md shadow-red-200 hover:shadow-red-500">
                            <div className="flex justify-center">
                                 <img src={ele} alt={`top-brand-pic-${index}`} className="w-[110px] lg:w-[150px] aspect-square"/>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-red-500 text-white text-xs lg:text-sm rounded-lg px-2 py-1 hover:scale-110 focus:outline-none focus:scale-110">Add to Cart</button>
                            </div>
                        </div>
                      )
                    })}
                </div>
        </div>
    )
}
export default Home;