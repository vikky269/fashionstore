import React from 'react';
import { useState } from 'react';

const Navbar: React.FC = () => {

  const [isopen, setisopen] = useState(false)

  const togglemenu = () => {
    setisopen(!isopen)
  }

  return (
    <nav className="relative font-title flex justify-between items-center px-8 md:px-16 bg-black shadow-sm">
       <div className='flex items-center justify-start cursor-pointer'>
        <img src="/dwhite/logo.png" alt="" className='h-[120px] w-35 cursor-pointer' />
           <div className='hidden md:block'>
              <div className="text-xl font-medium text-white">DWHITE</div>
              <div className="text-md font-medium text-white">Fashion and Jewellery</div>
           </div>
       </div>
      <ul className="hidden md:flex space-x-8 text-gray-100">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Shop</li>
        <li className="hover:text-gray-300 cursor-pointer">Features</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
      <button className="hidden md:block bg-[#B68C1E] text-white py-2 px-6 rounded-lg hover:bg-[#dbc63a]">
        Login
      </button>

      {/* Mobile Menu */}
      <div className="md:hidden cursor-pointer">
       <div className=''>
        {isopen ? ( <img src="/close.png" alt="" className='w-10 ' onClick={togglemenu}  />) : (
           <img src="/burger.png" alt="" className='w-10 ' onClick={togglemenu}  />
        )}
       </div>

       {/* Menu Items */}
        {isopen && (
          <div className='absolute top-[75%] left-0 bg-black text-white h-screen  text-2xl  font-medium   font-title w-full pt-20'>
            <ul className="cursor-pointer flex flex-col items-center gap-12 justify-center">
              <li className="hover:text-[#B68C1E] cursor-pointer">Home</li>
              <li className=" hover:text-[#B68C1E] cursor-pointer">Shop</li>
              <li className=" hover:text-[#B68C1E] cursor-pointer">Features</li>
              <li className=" hover:text-[#B68C1E] cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;

