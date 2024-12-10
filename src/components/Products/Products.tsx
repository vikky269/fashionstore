import React from "react";
import ProductCard from "./ProductCard";

const tabs = ["SALE", "HOT", "NEW ARRIVALS", "JEWELLERIES"];

const products = [
  {
    id: 1,
    // image: "/product1.png",
    image: "/dwhite/dw2.JPG",
    title: "Spread Collar Shirt",
    price: "$38.99",
    rating: "5.0",
  },
  {
    id: 2,
    //image: "/product2.png",
    image: "/dwhite/dw3.JPG",
    title: "White Solid Formal Shirt",
    price: "$44.99",
    rating: "4.9",
  },
  {
    id: 3,
    // image: "/product5.png",
    image: "/dwhite/dw5.JPG",
    title: "Shine On Me Blouse",
    price: "$42.00",
    rating: "4.8",
  },
  {
    id: 4,
    // image: "/product4.png",
    image: "/dwhite/dw7.JPG",
    title: "Gray Solid Padded Jacket",
    price: "$52.99",
    rating: "4.7",
  },
  {
    id: 5,
    // image: "/product5.png",
    image: "/dwhite/dw10.JPG",
    title: "Printed Loose T-shirt",
    price: "$39.99",
    rating: "5.0",
  },
  {
    id: 6,
    // image: "/product6.png",
    image: "/dwhite/dw8.JPG",
    title: "Summer Wind Crop Shirt",
    price: "$39.99",
    rating: "4.7",
  },
  {
    id: 7,
    // image: "/product7.png",
    image: "/dwhite/dw9.JPG",
    title: "Tailored Jacket",
    price: "$46.00",
    rating: "4.5",
  },
  {
    id: 8,
    // image: "/product1.png",
    image: "/dwhite/dw2.JPG",
    title: "Solid Round Neck T-shirt",
    price: "$36.00",
    rating: "5.0",
  },
];

const OurProducts: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center  py-8 font-title mt-5">
      {/* Title */}
      <h2 className="md:text-5xl text-3xl font-semibold  text-[#1A1A1A] mb-4">
        Our Products
      </h2>

      {/* Tabs */}
      <div className=" hidden md:flex justify-center space-x-4 mb-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium ${
              tab === "HOT"
                ? "text-[#B68C1E] border-b-2 border-[#B68C1E]"
                : "text-[#121212] hover:text-[#B68C1E]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-4 pt-8">
        {products.map((product) => (
         <ProductCard  key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
