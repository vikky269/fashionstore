import React from 'react'

interface BestSellingCardProps {
     seller: {
        id: number;
        image: string;
        title: string;
        price: string;
        rating: string;
        ratingimg: string;
        background:string;
    }
    
}

const BestSellingCard:React.FC<BestSellingCardProps> = ({seller}) => {
  return (
    <div className='flex flex-col items-center md:shadow-lg cursor-pointer'>
      <img
        src={seller.image}
        alt={seller.title}
        className="h-[70%] md:w-[350px] w-[70%] mb-4 rounded-tl-md rounded-tr-md  transform transition-transform duration-300 hover:scale-105"
        style={{ backgroundColor: seller.background }}
      />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        {seller.title}
      </h3>
      <div className='flex justify-center gap-6 items-center'>
        <p className="text-gray-800 font-medium mb-1 border-r-2 pr-5 border-black">{seller.price}</p>
        <p className="text-gray-500 text-sm">{seller.rating} ⭐</p>
      </div>
    </div>
  )
}

export default BestSellingCard
