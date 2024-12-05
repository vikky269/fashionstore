import React from 'react'


const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#E9F5EE] font-title min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
          Discover and Find Your Own Fashion!
        </h1>
        <p className="text-gray-600 text-lg mt-4 mb-8">
          Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
        </p>
        <button className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl hover:bg-green-700">
          Explore Now
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
        <img
          src="/heroimg.png" 
          alt="Fashion model"
          className=" bg-[#6BC785] rounded-tl-[70px] rounded-tr-[32px] rounded-bl-[32px] rounded-br-[70px] shadow-md  h-[400px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;

