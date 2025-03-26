import React from 'react'
import DesignerCard from './DesignerCard'


const Designer = [
  
    {
        id: 1,
        // image: '/desi1.png',
        image: "https://res.cloudinary.com/dhoecxgs7/image/upload/v1742646006/Screenshot_2025-03-22_113902_amyjst.png",
        title: 'HandBags',
        description:"Complete your ensemble with  our designer handbags and find your fashion",
        background :'#93B9A2'
    },
    {
        id: 2,
        // image: '/desi2.png',
        image: "https://res.cloudinary.com/dhoecxgs7/image/upload/v1742643586/Screenshot_2025-03-22_113656_guvllw.png",
        title: 'Abayas',
        description:"Explore a stunning range of designer dresses, including evening gowns and  abayas.",
         background :'#A9D4BA'
    },
    {
        id: 3,
        // image: '/desi3.png',
        image: "https://res.cloudinary.com/dhoecxgs7/image/upload/v1742647094/Screenshot_2025-03-22_112631_jcgxdu.png",
        title: 'Jewelleries',
        description:"Browse luxurious designer jewelleries and Necklaces to style up your fashion.",
        background :'#CADCD0'
    },
   
]

const DesignerClothes:React.FC = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center mt-8 md:mt-16 font-title mb-12'>
        <span className='md:text-5xl px-3  text-3xl flex-wrap text-[#121212] font-medium'>Designer Jewellery just for You</span>
        <span className='text-[#121212] px-3 md:text-md mt-6 md:mt-9'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer Jewelleries!.</span>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 mt-8'>
           {Designer.map((designer)=> (
             <DesignerCard designer={designer} key={designer.id}/>
           ))}
        </div>

    </section>
  )
}

export default DesignerClothes
