import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

interface ProductProps {
    id: number;
    image: string;
    title: string;
    price: string;
    rating: string;
  }


const JewelleryCard:React.FC<{ product: ProductProps }> = ({product}) => {
      const [isHovered, setIsHovered] = useState(false);
  return (
     <>
           <Helmet>
             <meta property="og:title" content={product.title} />
             {/* <meta property="og:description" content={product.description} /> */}
             <meta property="og:image" content={product.image} />
             <meta property="og:url" content={window.location.href} />
             <meta property="og:type" content="product" />
           </Helmet>
           <div
             className="relative flex flex-col items-center mb-6 group cursor-pointer"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
           >
             {/* Product Image Container */}
             <div className="relative w-[75%] md:w-[280px]">
               {/* Product Image */}
               <img
                 src={product.image}
                 alt={product.title}
                 className="md:h-[350px] w-full mb-4 rounded-md cursor-pointer transform transition-transform group-hover:scale-105 duration-300"
               />
       
               {/* Animated Overlay */}
               <div
                 className={`absolute inset-0 bg-black/50 flex justify-center items-center rounded-md transition-all duration-300 ease-in-out 
               ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
               >
                 <button
                   className="bg-white text-black font-semibold py-2 px-5 rounded-md shadow-lg transition-transform transform hover:scale-110"
                 >
                   <Link to={`/jewellery/${product.id}`}>
                   See More
                   </Link>
                 </button>
               </div>
             </div>
       
             {/* Product Details */}
             <h3 className="text-sm font-semibold text-[#373737] mb-2">
               {product.title}
             </h3>
             <div className="flex justify-center gap-6 items-center">
               <p className="text-gray-800 text-sm font-medium mb-1 border-r-2 pr-5 border-black">
                 {product.price}
               </p>
               <p className="text-gray-500 text-sm">{product.rating} ⭐</p>
             </div>
           </div>
         </>
  )
}

export default JewelleryCard