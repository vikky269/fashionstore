import React from 'react'
import BestSellingCard from './BestSellingCard'
import { Link } from 'react-router-dom'

const BestSeller = [
  
    {
        id: 1,
        // image: '/seller1.png',
        image: '/dwhite/dw8.JPG',
        title: 'Top Selling Abayas',
        price: "₦95k - ₦180k",
        rating: '5.0',
        ratingimg: '/rating.png',
        background :'#93B9A2'
    },
    {
        id: 2,
        // image: '/seller2.png',
        image: '/dwhite/dw9.JPG',
        title: 'Zirconia Necklaces',
        price: '₦180k - ₦250k',
        rating: '4.9',
        ratingimg: '/rating.png',
         background :'#A9D4BA'
    },
    {
        id: 3,
        image: '/dwhite/dw10.JPG',
        // image: '/seller3.png',
        title: 'Ethereal Radiance Zirconia Set',
        price: '₦230k - ₦250k',
        rating: '5.0',
        ratingimg: '/rating.png',
        background :'#CADCD0'
    },
   
]

const BestSelling:React.FC = () => {
  return (
    <section className=' flex flex-col items-center text-center mt-8 md:mt-12 font-title'>
        <span className='md:text-5xl text-3xl text-black font-bold '>Best Selling</span>
        <span className='text-[#1a1a1a] px-3 text-lg mt-6 md:mt-8'>Get in on the trend with our curated selection of best-selling styles.</span>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8  md:grid-cols-3 md:gap-6 mt-8'>
           {BestSeller.map((seller)=> (
             <BestSellingCard seller={seller} key={seller.id}/>
           ))}
        </div>

        <button className="mt-12  mb-3 px-6 py-2 text-black border-gray-800 border-2 rounded-md transition hover:text-white hover:bg-[#121212]">
         <Link to="/Shop">
            See all →
         </Link>
      </button>

    </section>
  )
}

export default BestSelling
