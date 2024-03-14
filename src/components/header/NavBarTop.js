import {React, useContext} from 'react';
import KLogo from '../../imagesAll/KLogo.png';
import SearchNavTop from './SearchNavTop';
import {HomeOutlined, UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import './header-custom.css';
import {Link} from 'react-router-dom';
import ShopContext from '../../ShopContext/ShopContext';

function NavBarTop(){
    const {totalItemsinCart}=useContext(ShopContext);
    console.log(totalItemsinCart);

    return(
        <div className=' aspect-ratio: auto bg-yellow-500'>
            <div className='flex justify-between items-center flex-wrap bg-red-200'>
                <div className='flex '>
                    <img src={KLogo} alt='K-logo' className='h-16 w-16 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20'/>
                </div>




                <div className=''>
                    <SearchNavTop/> 
                </div>




                <div className='flex justify-between items-center lg:mr-10 md:mr-5 sm:mr-1 rounded-full bg-red-500 p-1'>
                    <Link to='/'>
                         <HomeOutlined className='text-white text-2xl pr-3 pl-3 hover:scale-110'/> 
                    </Link>
                    <Link to='/login'>
                        <UserOutlined className='text-white text-2xl pr-3 pl-3 hover:scale-110'/>
                    </Link>
                    <div className='relative'>
                        <Link to='/cart'>
                        <ShoppingCartOutlined className='text-white text-3xl pr-3 pl-3 hover:scale-110'/>
                        <div className='absolute bg-green-400 rounded-full w-5 h-5 top-0 right-0'>
                            <span className='flex items-center justify-center h-full text-red-500 text-sm'>
                               <b>{totalItemsinCart()}</b>
                            </span>
                        </div>
                        </Link>
                    </div>
                    
                </div>
            </div>

        </div>
    )
    
}
export default NavBarTop;