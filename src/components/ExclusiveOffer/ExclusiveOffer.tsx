import React from "react";

const ExclusiveOffer: React.FC = () => {
  return (
        <section className="flex justify-center items-center font-title mb-6">

            <div className="bg-[#c2efd4] px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
                {/* Image Section */}
                <div className="relative mt-2">
                    <img
                        src="/exclusive.png" 
                        alt="Exclusive Offer"
                        className="px-8"
                    />
                    <div className="absolute top-[70%] hidden md:block">
                        <img src="/Group 37.png" alt="" className="w-[75%] px-6" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-center lg:text-left px-4">
                    <h2 className="text-2xl lg:text-4xl font-bold text-[#224f34] mb-4">
                        Exclusive offer
                    </h2>
                    <p className="text-[#224f34] text-lg">
                        Unlock the ultimate style upgrades with our exclusive offer.
                    </p>
                    <p className="text-[#224f34] text-lg mb-6">
                     Enjoy savings of up to <strong>40% off</strong> on our latest New Arrivals.
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex justify-center lg:justify-start gap-4 mb-6">
                        <div className="bg-white rounded-lg shadow p-4">
                            <p className="text-xl font-bold text-[#224f34]">06</p>
                            <p className="text-sm text-[#224f34]">Days</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <p className="text-xl font-bold text-[#224f34]">18</p>
                            <p className="text-sm text-[#224f34]">Hours</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <p className="text-xl font-bold text-[#224f34]">48</p>
                            <p className="text-sm text-[#224f34]">Mins</p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="bg-[#224f34] text-white px-6 py-3 mb-6 rounded-lg hover:bg-gray-700 transition">
                        BUY NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExclusiveOffer;
