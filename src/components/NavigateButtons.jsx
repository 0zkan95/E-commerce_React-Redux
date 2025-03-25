import React from 'react'
import Buttons from './Buttons';
import styles from '../styles/Navigate.module.css';
import clothes from '../assets/images/clothes.jpg'


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

  return (
    <div>
      <div className='flex items-center justify-center py-8'>
            {buttons.map((item, index) => {
                return (
                    <div className='m-4' key={index}>
                        <Buttons className="bg-green-300">
                            {item}
                        </Buttons>
                    </div>
                )
            })}
      </div>
      <div id={styles.sales} className='bg-green-300 mx-auto rounded-md'> 
            <h3 className='text-center text-white text-lg font-inter font-bold tracking-normal leading-none'>
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
