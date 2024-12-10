import React from 'react'
import DesignerCard from './DesignerCard'


const Designer = [
  
    {
        id: 1,
        // image: '/desi1.png',
        image:"/dwhite/dw1.JPG",
        title: 'Accesories',
        description:"Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
        background :'#93B9A2'
    },
    {
        id: 2,
        // image: '/desi2.png',
        image:"/dwhite/dw4.JPG",
        title: 'Dresses',
        description:"Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
         background :'#A9D4BA'
    },
    {
        id: 3,
        // image: '/desi3.png',
        image:"/dwhite/dw1.JPG",
        title: 'OuterWear',
        description:"Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
        background :'#CADCD0'
    },
   
]

const DesignerClothes:React.FC = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center mt-8 md:mt-16 font-title mb-12'>
        <span className='md:text-5xl px-3  text-3xl flex-wrap text-[#121212] font-medium'>Designer Jewellery just for You</span>
        <span className='text-[#121212] px-3 md:text-md mt-6 md:mt-9'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!.</span>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 mt-8'>
           {Designer.map((designer)=> (
             <DesignerCard designer={designer} key={designer.id}/>
           ))}
        </div>

    </section>
  )
}

export default DesignerClothes
