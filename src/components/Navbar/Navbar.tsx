import React from 'react';
import { useState } from 'react';

const Navbar: React.FC = () => {

  const [isopen, setisopen] = useState(false)

  const togglemenu = () => {
    setisopen(!isopen)
  }

  return (
    <nav className="relative font-title flex justify-between items-center px-8 md:px-16 py-6 bg-white shadow-sm">
      <div className="text-2xl font-bold text-green-800">Rivo</div>
      <ul className="hidden md:flex space-x-8 text-gray-600">
        <li className="hover:text-green-600 cursor-pointer">Home</li>
        <li className="hover:text-green-600 cursor-pointer">Shop</li>
        <li className="hover:text-green-600 cursor-pointer">Features</li>
        <li className="hover:text-green-600 cursor-pointer">Contact</li>
      </ul>
      <button className="hidden md:block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">
        Login
      </button>

      {/* Mobile Menu */}
      <div className="md:hidden cursor-pointer bg-green-600">
       <div className=''>
        {isopen ? ( <img src="/close.png" alt="" className='w-10 ' onClick={togglemenu}  />) : (
           <img src="/burger.png" alt="" className='w-10 ' onClick={togglemenu}  />
        )}
       </div>

       {/* Menu Items */}
        {isopen && (
          <div className='absolute top-20 left-0 bg-green-400 h-screen flex items-center text-4xl font-semibold gap-5 justify-center font-title w-full py-3'>
            <ul className="cursor-pointer">
              <li className="hover:text-green-600 cursor-pointer">Home</li>
              <li className="hover:text-green-600 cursor-pointer">Shop</li>
              <li className="hover:text-green-600 cursor-pointer">Features</li>
              <li className="hover:text-green-600 cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

