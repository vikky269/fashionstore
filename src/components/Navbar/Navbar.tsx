import React from 'react';
import { useState } from 'react';
 import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  const [isopen, setisopen] = useState(false)

  const togglemenu = () => {
    setisopen(!isopen)
  }

  return (
    <nav className="relative font-title flex justify-between items-center px-8 md:px-10 bg-black shadow-sm">
       <div className='flex items-center justify-start cursor-pointer'>
       <a href="/">
          <img src="/dwhite/logo.png" alt="" className='h-[150px] w-35 cursor-pointer' />
       </a>
           <div className='hidden md:block'>
              <div className="text-xl font-medium text-white">DWHITE</div>
              <div className="text-md font-medium text-white">Fashion and Jewellery</div>
           </div>
       </div>
      <ul className="hidden md:flex space-x-8 text-gray-100">
        <li className="hover:text-[#B68C1E] cursor-pointer"><a href="/">Home</a></li>
        <li className="hover:text-[#B68C1E] cursor-pointer">
          <Link to="/Shop">Shop</Link>
        </li>
        <li className="hover:text-[#B68C1E] cursor-pointer">
          <Link to="/About">About</Link>
        </li>
      </ul>
      <button className="hidden md:block bg-[#B68C1E] text-white py-2 px-6 rounded-lg hover:bg-[#dbc63a]">
        <a href="https://linktr.ee/dwhiteluxury" target='_blank'>Contact us</a>
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
          <div className='absolute top-[75%] left-0 bg-black text-white h-screen  text-2xl  font-medium z-50  font-title w-full pt-20'>
            <ul className="cursor-pointer flex flex-col items-center gap-12 justify-center">
              <li className="hover:text-[#B68C1E] cursor-pointer" onClick={()=>setisopen(!isopen)}>
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:text-[#B68C1E] cursor-pointer"  onClick={()=>setisopen(!isopen)}>
                <Link to="/Shop">Shop</Link>
              </li>
              <li className=" hover:text-[#B68C1E] cursor-pointer"  onClick={()=>setisopen(!isopen)}>
                <Link to="/About">About</Link>
              </li>
              <li className="bg-[#B68C1E] cursor-pointer px-4 py-2 rounded-lg"  onClick={()=>setisopen(!isopen)}>
                <Link to={'https://linktr.ee/dwhiteluxury'}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;

