import React from 'react'
import { storeData } from '../assets/data/data'
import ProductSectionItem from './ProductSectionItem'



const ProductSection = () => {
  return (
    <div className="my-8"> {/* Add some margin to the section */}
      {/* Updated banner styling */}
      <div className='bg-[#d1ded4] py-4 px-2 w-full mx-auto mb-8'> {/* Changed bg, padding, width, added bottom margin */}
            <h2 className='text-black text-center text-2xl font-inter font-bold leading-relaxed'> {/* Changed text color, size, leading */}
                SUMMER T-SHIRT SALE 30%
            </h2>
      </div>
      <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
        {storeData.slice(0,6).map((product, index) => {
            return (
                <ProductSectionItem
                    key={index} // Move key to the actual item being mapped
                    id={product.id} 
                    name={product.name} 
                    img={product.img} 
                    text={product.text} 
                    price={product.price} 
                    totalPrice={product.totalPrice} 
                    color={product.color} 
                    size={product.size}
                />
        )
        })}
      </div>
    </div>
  )
}

export default ProductSection
