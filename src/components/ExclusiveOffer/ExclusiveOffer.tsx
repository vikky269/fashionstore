import React from "react";

const ExclusiveOffer: React.FC = () => {
  return (
        <section className="flex justify-center items-center font-title mb-6">

            <div className="bg-[#e0b937] px-12 flex pt-6 flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
                {/* Image Section */}
                <div className="relative mt-2">
                    <img
                        src="/dwhite/girl.png" 
                        alt="Exclusive Offer"
                        className="px-8"
                    />
                    {/* <div className="absolute top-[70%] hidden md:block">
                        <img src="/Group 37.png" alt="" className="w-[75%] px-6 " />
                    </div> */}
                </div>

                {/* Content Section */}
                <div className="text-center lg:text-left px-4">
                    <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">
                        Exclusive offer
                    </h2>
                    <p className="text-black text-lg">
                        Unlock the ultimate style upgrades with our exclusive offer.
                    </p>
                    <p className="text-black text-lg mb-6">
                     Enjoy savings of up to <strong>40% off</strong> on our latest New Arrivals.
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex justify-center lg:justify-start gap-4 mb-6 cursor-pointer">
                        <div className="bg-white rounded-lg shadow p-4">
                            <p className="text-xl font-bold text-[#1A1A1A]">06</p>
                            <p className="text-sm text-[#1A1A1A]">Days</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <p className="text-xl font-bold text-[#1A1A1A]">18</p>
                            <p className="text-sm text-[#1A1A1A]">Hours</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <p className="text-xl font-bold text-[#1A1A1A]">48</p>
                            <p className="text-sm text-[#1A1A1A]">Mins</p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="bg-[#1A1A1A] text-white px-6 py-3 mb-6 rounded-lg hover:bg-black transition">
                        BUY NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExclusiveOffer;
