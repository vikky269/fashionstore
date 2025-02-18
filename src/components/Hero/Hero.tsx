import React from 'react'


const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#121212] font-title min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-[#B68C1E] leading-tight">
          Discover and Find Your Own Fashion!
        </h1>
        <p className="text-white text-lg mt-4 mb-8">
          Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
        </p>
        <button className="bg-[#B68C1E] text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#8A6F16]">
          Explore Now
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
        <img
          // src="/heroimg.png" 
          src='/dwhite/dw1.JPG'
          alt="Fashion model"
          className="rounded-tl-[60px] rounded-tr-[32px] rounded-bl-[32px] rounded-br-[60px] shadow-md  h-[400px]"
        />
      </div>
    </section>
  )
}

export default HeroSection;

