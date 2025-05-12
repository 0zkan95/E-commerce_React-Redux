import React from 'react'
import { filterProducts } from '../features/productsSlice';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const CategoryButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags"
  ]

  const dispatch = useDispatch()
  const { type } = useParams(); // Get current category from URL

  return (
    <div className='flex items-center justify-center py-8'>
      {buttons.map((button) => {
        const isActive = button === type;
        return (
          <Link to={"/filteredProducts/" + button} key={button} className="m-2">
            <button
              className={`border-2 rounded-lg px-5 py-1 text-xl font-medium cursor-pointer transition-all duration-300 ease-in-out ${
                isActive 
                  ? "bg-[#008D27] text-white border-[#008D27] opacity-100 scale-110" 
                  : "bg-[#d1ded4] border-white text-black opacity-80 hover:scale-110 hover:opacity-100"
              }`}
              onClick={() => dispatch(filterProducts(button))}
            >
              {button}
            </button>
          </Link>
        )
      })}
    </div>
  )
}

export default CategoryButtons 