import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';


interface ProductCardProps {
  product: {
    id: number;
    image: string;
    title: string;
    price: string;
    rating: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  // const handleBuyNow = (product: ProductCardProps["product"]) => {
  //   if (!product || !product.image) {
  //     console.error("Product data is missing!");
  //     return;
  //   }

  //   // Ensure product.image is a direct Google Drive link
  //   const productImage = product.image.includes("drive.google.com")
  //     ? product.image
  //     : `${product.image}`;

  //   // Message without the image URL inside the text
  //   const message = `Hello, I'm interested in this product:\n\n*${product.title}*\n💰 Price: ${product.price}\n\n${productImage}`;

  //   // WhatsApp API link
  //   const whatsappUrl = `https://wa.me/2349020009346?text=${encodeURIComponent(message)}`;

  //   window.open(whatsappUrl, "_blank");
  // };

  // const handleBuyNow = (product: ProductCardProps["product"]) => {
  //   if (!product || !product.image) {
  //     console.error("Product data is missing!");
  //     return;
  //   }

  //   // Ensure product.image is a direct Google Drive link
  //   // const productImage = product.image.includes("drive.google.com")
  //   //   ? product.image
  //   //   : `${product.image}`;

  //   // Message without the image URL inside the text
  //   const message = `Hello, I'm interested in this product:\n\n*${product.title}*\n💰 Price: ${product.price}`;

  //   // Update meta tags dynamically
  //   const updateMetaTags = () => {
  //     document.querySelector('meta[property="og:title"]')?.setAttribute("content", product.title);
  //     // document.querySelector('meta[property="og:description"]')?.setAttribute("content", product.description);
  //     document.querySelector('meta[property="og:image"]')?.setAttribute("content", product.image);
  //     document.querySelector('meta[property="og:url"]')?.setAttribute("content", window.location.href);
  //   };

  //   updateMetaTags();

  //   // WhatsApp API link
  //   const whatsappUrl = `https://wa.me/2349020009346?text=${encodeURIComponent(message)}`;
  //   window.open(whatsappUrl, "_blank");
  // };

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
            className="md:h-[250px] w-full mb-4 rounded-md cursor-pointer transform transition-transform group-hover:scale-105 duration-300"
          />

          {/* Animated Overlay */}
          <div
            className={`absolute inset-0 bg-black/50 flex justify-center items-center rounded-md transition-all duration-300 ease-in-out 
          ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <button
              className="bg-white text-black font-semibold py-2 px-5 rounded-md shadow-lg transition-transform transform hover:scale-110"
            >
              <Link to={`/product/${product.id}`}>
              
              Buy Now
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
  );
};

export default ProductCard;























// interface ProductCardProps {
//   product: {
//       id: number;
//       image: string;
//       title: string;
//       price: string;
//       rating: string;
//   }
// }

// const ProductCard:React.FC<ProductCardProps> = ({product}) => {
// return (
//   <div className='flex flex-col items-center mb-6'>
//           <img
//             src={product.image}
//             alt={product.title}
//             className="md:h-[250px] md:w-[280px] w-[75%] mb-4 rounded-tl-md rounded-tr-md cursor-pointer transform transition-transform hover:scale-105 duration-300"
//           />
//           <h3 className="text-sm font-semibold text-[#373737] text mb-2">
//             {product.title}
//           </h3>
//         <div className='flex justify-center gap-6 items-center'>
//             <p className="text-gray-800 text-sm font-medium mb-1 border-r-2 pr-5 border-black">{product.price}</p>
//             <p className="text-gray-500 text-sm">{product.rating} ⭐</p>
//         </div>
//         </div>
// )
// }

// export default ProductCard
