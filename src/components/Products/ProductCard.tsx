import React from 'react'

interface ProductCardProps {
    product: {
        id: number;
        image: string;
        title: string;
        price: string;
        rating: string;
    }
}

const ProductCard:React.FC<ProductCardProps> = ({product}) => {
  return (
    <div className='flex flex-col items-center mb-6'>
            <img
              src={product.image}
              alt={product.title}
              className="md:h-[250px] md:w-[280px] w-[75%] mb-4 rounded-tl-md rounded-tr-md cursor-pointer transform transition-transform hover:scale-105 duration-300" 
            />
            <h3 className="text-sm font-semibold text-[#373737] text mb-2">
              {product.title}
            </h3>
          <div className='flex justify-center gap-6 items-center'>
              <p className="text-gray-800 text-sm font-medium mb-1 border-r-2 pr-5 border-black">{product.price}</p>
              <p className="text-gray-500 text-sm">{product.rating} ⭐</p>
          </div>
          </div>
  )
}

export default ProductCard
