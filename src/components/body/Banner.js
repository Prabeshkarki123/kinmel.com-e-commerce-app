import react, { useState, useEffect } from 'react';
import carousel5 from '../../imagesAll/bannerPics/carousel5.jpg';
import carousel6 from '../../imagesAll/bannerPics/carousel6.jpg';
import carousel7 from '../../imagesAll/bannerPics/carousel7.jpg';
import carousel8 from '../../imagesAll/bannerPics/carousel8.jpg';
import coffee from '../../imagesAll/bannerPics/coffee.jpg';
import iphone from '../../imagesAll/bannerPics/iphone.jpg';
import motor from '../../imagesAll/bannerPics/motor.jpg';
import waterPurifier from '../../imagesAll/bannerPics/water-purifier.jpg';

import { Carousel } from 'antd';


function Banner(){
    const bannerSidePicArr=[coffee, iphone, motor, waterPurifier];
    const [sidePicIndex, setSidePicIndex]=useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setSidePicIndex((prevValue) => (prevValue + 1) % bannerSidePicArr.length);
        }, 5000);
    
        return () => {
          // Clear the interval when the component unmounts
          clearInterval(intervalId);
        };
      }, [bannerSidePicArr.length]);

    return(
        <div className='flex flex-col lg:flex-row bg-red-200 p-1'>
         
         <div className='w-full lg:w-3/5'>
            <Carousel autoplay> 
                <img src={carousel5} alt='banner' className='rounded-lg' />
                <img src={carousel6} alt='banner' className='rounded-lg' />
                <img src={carousel7} alt='banner' className='rounded-lg' />
                <img src={carousel8} alt='banner' className='rounded-lg' />
            </Carousel>
          </div>

          <div className='w-full lg:w-2/3 flex lg:flex-row justify-between'>
              <div className='lg:px-1 ml-2 rounded-lg lg:flex pt-1'>
                  <img src={bannerSidePicArr[sidePicIndex]} alt='side-Ads' className='rounded-lg w-60 lg:w-80 aspect-square'/>
              </div>
                  
              <div className='w-2/4 m-2 pt-5'>
                  <div className='pl-3 pt-2 rounded-md bg-yellow-600 text-white tracking-tight font-extrabold text-xl lg:text-4xl shadow-md shadow-yellow-600 transform -rotate-12'>
                    <p className='shadow-xl shadow-yellow-600'>Bumper Offer!!!</p>
                  </div> 
                  
                  <div className='text-green-500 text-sm lg:text-md font-bold pt-2'>
                    <p className='mb-1'>Be ready!! Dont miss it!! </p>  
                    <p>Click this button to grab.</p>
                  </div>
                  
                  <div className='flex justify-center'>
                  <button className='bg-green-500 text-white text-md lg:text-xl rounded-lg px-2 py-1 hover:scale-110 focus:outline-none focus:scale-110'>
                    GRAB NOW!</button>
                  </div>
              </div>
          </div>
        </div>
    )
    
}
export default Banner;

//h-40 lg:h-60 