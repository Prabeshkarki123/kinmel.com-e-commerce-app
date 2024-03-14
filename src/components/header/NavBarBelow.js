import {React, useEffect, useState} from 'react';
import { MenuOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

function NavBarBelow(){
    const [openDropdown, setOpenDropdown] = useState(false);
    const [menuLinkClicked, setClicked]=useState(false);

    const handleToggle=()=>{
        setOpenDropdown((prevOpenDropdown)=>!prevOpenDropdown);
    }

    const handleLinkClick=()=>{
        setClicked(true);
        if(menuLinkClicked){
            setOpenDropdown((prevOpenDrop)=>!prevOpenDrop);
        }
    }

    return(
       <div className='align-right bg-red-500 text-white'>
        {/* for large screen devices */}
        {/* hidden lg:flex space-x-4 makes it visible only in larger screen and hide on small screen */}
        <div className= 'hidden lg:flex space-x-4 flex justify-center pt-2 text-md' >
            <Link to="/homeappliance" className="text-white hover:scale-110 active:text-green-500">
              Home Appliances
            </Link>
            
            <div className='px-2 text-xl'>
                <span>/</span>
            </div>

            <Link to='/electronics' className="text-white hover:scale-110 active:text-green-500">
              Electronics
            </Link>

            <div className='px-2 text-xl'>
                <span>/</span>
            </div>

            <a href="#" className="text-white hover:scale-110 active:text-green-500">
              Clothings
            </a>

            <div className='px-2 text-xl'>
                <span>/</span>
            </div>

            <a href="#" className="text-white hover:scale-110 active:text-green-500">
              Shoes
            </a>

            <div className='px-2 text-xl'>
                <span>/</span>
            </div>

            <a href="#" className="text-white hover:scale-110 active:text-green-500">
              Ornaments
            </a>

            <div className='px-2 text-xl'>
                <span>/</span>
            </div>

            <a href="#" className="text-white hover:scale-110 active:text-green-500">
              Furnitures
            </a>
        </div>



        {/* for small screen devices */}
        <div className='pl-4 pb-1 pt-1 lg:hidden'>
            <button onClick={handleToggle} className={`text-white focus:outline-none hover:text-green-500 flex relative ${openDropdown?'text-green-500':''}`}>
                <MenuOutlined className='text-xl'/>
                <span className='absolute pl-6 pb-1 text-md'><b>Categories</b></span>
            </button>
        </div>

        {/* for small screen devices */}
        {openDropdown && (
        <div className="lg:hidden bg-red-500 text-md">
          <Link to='/category' onClick={handleLinkClick} className="block py-1 px-6 text-white">
            Home Appliances
          </Link>
          <a href="#" onClick={handleLinkClick} className="block py-1 px-6 text-white">
            Electronics
          </a>
          <a href="#" onClick={handleLinkClick} className="block py-1 px-6 text-white">
            Clothings
          </a>
          <a href="#" onClick={handleLinkClick} className="block py-1 px-6 text-white">
            Shoes
          </a>
          <a href="#" onClick={handleLinkClick} className="block py-1 px-6 text-white">
            Ornaments
          </a>
          <a href="#" onClick={handleLinkClick} className="block py-1 px-6 text-white">
            Furnitures
          </a>
        </div>
        )}
       </div>
    )
}
export default NavBarBelow;

