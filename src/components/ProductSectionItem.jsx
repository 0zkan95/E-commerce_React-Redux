import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'


const ProductSectionItem = ({
    id, 
    img, 
    name, 
    text, 
    size, 
    price, 
    color,
    totalPrice
}) => {

    const dispatch = useDispatch()
    const defaultSize = size[0];
    const defaultColor = color[0];

  return (
    <div className='w-[225px]'>
        <div>
            <img src={img} alt={name} />
        </div>
        <div>
            <h3>{name}</h3>
            <p> {text} </p>
        </div>
        <div>
            Size left: {defaultSize}
        </div>
        <div>
            Color: <span className='px-2 rounded-full ml-2' style={{backgroundColor: defaultColor}}></span>
        </div>
        <div className='m-8'>
            <button 
                className='my-2 px-2 py-4 border-[#008d27] bg-transparent rounded-tr-lg hover:bg-[#008d27] hover:duration-300 hover:scale-105 hover:cursor-pointer'
                onClick={() => dispatch(addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                    })
                   )
                }
                >
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ProductSectionItem
