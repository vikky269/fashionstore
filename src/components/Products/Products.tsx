import React from "react";
import ProductCard from "./ProductCard";

const tabs = ["SALE", "HOT", "NEW ARRIVALS", "ACCESSORIES"];

const products = [
  {
    id: 1,
    image: "/product1.png",
    title: "Spread Collar Shirt",
    price: "$38.99",
    rating: "5.0",
  },
  {
    id: 2,
    image: "/product2.png",
    title: "White Solid Formal Shirt",
    price: "$44.99",
    rating: "4.9",
  },
  {
    id: 3,
    image: "/product5.png",
    title: "Shine On Me Blouse",
    price: "$42.00",
    rating: "4.8",
  },
  {
    id: 4,
    image: "/product4.png",
    title: "Gray Solid Padded Jacket",
    price: "$52.99",
    rating: "4.7",
  },
  {
    id: 5,
    image: "/product5.png",
    title: "Printed Loose T-shirt",
    price: "$39.99",
    rating: "5.0",
  },
  {
    id: 6,
    image: "/product6.png",
    title: "Summer Wind Crop Shirt",
    price: "$39.99",
    rating: "4.7",
  },
  {
    id: 7,
    image: "/product7.png",
    title: "Tailored Jacket",
    price: "$46.00",
    rating: "4.5",
  },
  {
    id: 8,
    image: "/product1.png",
    title: "Solid Round Neck T-shirt",
    price: "$36.00",
    rating: "5.0",
  },
];

const OurProducts: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center  py-8 font-title mt-5">
      {/* Title */}
      <h2 className="md:text-5xl text-3xl font-semibold  text-[#224f34] mb-4">
        Our Products
      </h2>

      {/* Tabs */}
      <div className=" hidden md:flex justify-center space-x-4 mb-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium ${
              tab === "HOT"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-8">
        {products.map((product) => (
         <ProductCard  key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
