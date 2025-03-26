import React from 'react'

interface DesignerCardProps  {
    designer: {
        id: number;
        image: string;
        title: string;
        description: string;
        background: string;
    }
}

const DesignerCard:React.FC<DesignerCardProps> = ({designer}) => {
  return (
    <div className='flex flex-col items-center pt-5 cursor-pointer' >
    <img
      src={designer.image}
      alt={designer.title}
      className="md:h-[400px] w-[65%] mb-4 border-2 border-[#997b18] px-1 py-1 hover:scale-105 transition-transform transform"
      // style={{ backgroundColor: designer.background }}
    />
    <h3 className="text-lg font-semibold text-gray-700 mb-2">
      {designer.title}
    </h3>
     <p className='md:max-w-[20rem] text-sm max-w-[18rem]'>{designer.description}</p>
  </div>
  )
}

export default DesignerCard
