
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useEffect } from "react";

interface ProductDetailsProps {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: string;
}



const ProductDetails = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === Number(productId)) as ProductDetailsProps;

    const { pathname } = useLocation();

    console.log("pathname", pathname)
  useEffect(() => {
    console.log("Before scrollTo:", window.scrollY);
    window.scrollTo(0, 0);
    console.log("After scrollTo:", window.scrollY);
  }, [pathname]);
  
    const handleBuyNow = (product: ProductDetailsProps) => {
      if (!product) {
        console.error("Product data is missing!");
        return;
      }
  
      const currentProductURL = window.location.href;
  
      const message = `Hello, I'm interested in this product:\n\n*${product.title}*\n💰 Price: ${product.price}\n\n🔗 View product: ${currentProductURL}`;
  
      const whatsappUrl = `https://wa.me/2349020009346?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    };
  
    return (
      <>
        <Helmet>
          <meta property="og:title" content={product.title} />
          <meta property="og:image" content={product.image} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="product" />
        </Helmet>
  
        {/* Grid Layout */}
        <div className="container mx-auto px-4 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Product Image */}
            <div className="flex justify-center cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="w-full md:w-[500px] h-auto rounded-lg shadow-lg hover:shadow-xl"
              />
            </div>
  
            {/* Right Side - Product Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
              <p className="text-lg text-gray-700 mb-2">⭐ {product.rating} / 5</p>
              <p className="text-2xl font-semibold text-green-600 mb-4">{product.price}</p>
              {/* <p className="text-gray-600 text-base mb-6">{product.description}</p> */}
  
              {/* WhatsApp Button */}
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-green-500 text-white text-lg font-medium  w-fit py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ProductDetails;
























