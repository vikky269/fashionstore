import React from "react";

const About:React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-8 gap-8 bg-white text-black">
      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">About DWHITE</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold">DWHITE</span>, your go-to
          destination for premium fashion and jewellery. Our passion is to
          bring you the finest collections of handbags, Abayas, and jewellery.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our carefully curated designs ensure that every piece reflects
          quality, elegance, and authenticity. Whether you're dressing for a
          casual outing or a special event, we have something perfect for you.
        </p>
        <p className="text-lg leading-relaxed">
          Join us on this journey of sophistication and stay updated with our
          latest collections.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-3 gap-4 place-items-center w-fit cursor-pointer">
          {/* Row 1 - 3 images */}
          <img src="/dwhite/dw1.JPG" alt="Fashion 1" className="w-40 h-40 object-cover rounded-lg shadow-md" />
          <img src="/dwhite/dw2.JPG" alt="Fashion 2" className="w-40 h-40 object-cover rounded-lg shadow-md" />
          <img src="/dwhite/dw3.JPG" alt="Fashion 3" className="w-40 h-40 object-cover rounded-lg shadow-md" />

          {/* Row 2 - 3 images */}
          <img src="/dwhite/dw4.JPG" alt="Fashion 4" className="w-40 h-40 object-cover rounded-lg shadow-md" />
          <img src="/dwhite/dw5.JPG" alt="Fashion 5" className="w-40 h-40 object-cover rounded-lg shadow-md" />
          <img src="/dwhite/dw6.JPG" alt="Fashion 6" className="w-40 h-40 object-cover rounded-lg shadow-md" />
        </div>
      </div>

    </section>
  );
};

export default About;

