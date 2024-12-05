import React from 'react'
import DesignerCard from './DesignerCard'


const Designer = [
  
    {
        id: 1,
        image: '/desi1.png',
        title: 'Accesories',
        description:"Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
        background :'#93B9A2'
    },
    {
        id: 2,
        image: '/desi2.png',
        title: 'Dresses',
        description:"Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
         background :'#A9D4BA'
    },
    {
        id: 3,
        image: '/desi3.png',
        title: 'OuterWear',
        description:"Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
        background :'#CADCD0'
    },
   
]

const DesignerClothes:React.FC = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center mt-8 md:mt-16 font-title'>
        <span className='md:text-5xl text-3xl text-green-800 font-medium  '>Designer Clothes for You</span>
        <span className='text-[#224F34] text-sm max-w-[18rem] md:max-w-none md:text-md mt-6 md:mt-9'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!.</span>

        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 md:gap-6 mt-8'>
           {Designer.map((designer)=> (
             <DesignerCard designer={designer} key={designer.id}/>
           ))}
        </div>

    </section>
  )
}

export default DesignerClothes
