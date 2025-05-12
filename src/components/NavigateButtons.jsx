import React from 'react'
import styles from '../styles/Navigate.module.css';
import clothes from '../assets/images/clothes.jpg'
import { filterProducts } from '../features/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const NavigateButtons = () => {
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

  return (
    <div>
      <div className='flex items-center justify-center py-8'>
        {buttons.map((button) => { // No need for index if button name is unique key
          return (
            // Removed outer div, apply margin directly to Link/Button if needed
            <Link to={"/filteredProducts/" + button} key={button} className="m-2"> 
                <button
                  className="bg-[#d1ded4] border-2 border-white rounded-lg px-5 py-1 text-xl opacity-80 font-medium text-black cursor-pointer hover:scale-110 hover:opacity-100 transition-all duration-300 ease-in-out" 
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </button>
              </Link>
          )
        })}
      </div>
      <div id={styles.sales} className='bg-[#d1ded4] w-full mx-auto '>
        <h3 className='text-center text-white text-2xl font-inter font-bold tracking-normal leading-none'>
          SALES UP TO 50%
        </h3>
      </div>
      <div className={styles.clothes}>
        <img
          className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600'
          src={clothes}
          alt="clothes" />
      </div>
    </div>
  )
}

export default NavigateButtons
