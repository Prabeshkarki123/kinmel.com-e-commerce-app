import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './header-custom.css';


function SearchNavTop() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    //onSearch(searchQuery);
    alert(`your search query was:${searchQuery}`);
    setSearchQuery('');
  };

  const handleKeyPress=(e)=>{
      // Check if the pressed key is Enter
      if (e.key ==='Enter') {
        // Call your specific method or perform your desired action
        handleSearch();

      }
  }

  return ( 
    <div className='pr-5 flex relative'>
       <input 
          className='w-20 lg:w-96 rounded-l-lg p-1 hover:shadow-lg focus:outline-none text-gray-400 '
          type='text' 
          placeholder='Search in Kinmel'
          onChange={(e)=>handleInputChange(e)}
          onKeyPress={(e)=>handleKeyPress(e)}
        />
       <button className='bg-red-500 text-white text-xl rounded-r-lg pl-2 pr-2 pb-2 hover:bg-green-500 focus:outline-none focus:scale-110'
       onClick={()=>handleSearch()}>
           <SearchOutlined />
       </button>
    </div>
  );
}

export default SearchNavTop;
