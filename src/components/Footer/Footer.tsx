import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#224f34] text-white py-8 px-3 font-title md:px-12 pt-16 mt-20 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Social Media */}
        <div>
          <h1 className="text-2xl font-bold">Rivo</h1>
          <p className="mt-4">Social Media</p>
          <div className="flex space-x-4 mt-4 items-center ">
            <a href="#" aria-label="Facebook" >
             <img src="/instagram.png" alt="" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" >
              <img src="/twitter.png" alt="" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" >
            <img src="/facebbok.png" alt="" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h2 className="font-semibold mb-4">SHOP</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-300">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Releases
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="">
          <h2 className="font-semibold mb-4">STAY UP TO DATE</h2>
          <form className=" relative flex space-x-2 border-2 border-[#A3F3BE]">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-[#224f34] text-black  w-full focus:outline-none"
            />
            <button
              type="submit"
              className=" absolute right-0  top-0 px-4 py-2  bg-[#a3f3be]  text-[#224f34] "
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-8 border-t border-white pt-4 flex flex-col md:flex-row justify-between text-sm">
        <p className="mt-4">&copy; 2024 Rivo</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="hover:text-green-300">
            Terms
          </a>
          <a href="#" className="hover:text-green-300">
            Privacy
          </a>
          <a href="#" className="hover:text-green-300">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

