import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { addToWishlist } from '../features/wishlistSlice'; // Import wishlist action
import Button from './Button'; // Import the new Button component
import Card from './Card'; // Import the new Card component
import { FaHeart } from 'react-icons/fa'; // Import heart icon

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

    const dispatch = useDispatch();
    const defaultSize = size[0];
    const defaultColor = color[0];

    // Handler to add item to wishlist
    const handleAddToWishlist = () => {
        dispatch(addToWishlist({
            id, img, name, text, size: defaultSize, price, color: defaultColor, totalPrice // Pass necessary product details
        }));
    };

    return (
    <Card className='w-[225px]'> {/* Replace outer div with Card and apply width */}
        {/* Image container needs relative positioning for the absolute button */}
        <div className="overflow-hidden relative"> 
            <img src={img} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
            {/* Wishlist Button */}
            <button
                onClick={handleAddToWishlist}
                className="absolute top-2 right-2 bg-white/70 p-1.5 rounded-full text-red-500 hover:text-red-700 hover:bg-white transition-all duration-200"
                title="Add to Wishlist"
            >
                <FaHeart size={18} />
            </button>
        </div>
        <div className="p-2"> {/* Add padding around text content */}
            <h3 className="text-xl font-medium">{name}</h3>
            <p className="text-sm"> {text} </p>
        </div>
        {/* White divider line */}
        <div className="border-t border-white"></div> 
        <div className="flex justify-between items-center p-2 text-sm"> {/* Flex container for size/color, reduced font size */}
            <div>
                Size left: {defaultSize}
            </div>
            <div className="flex items-center"> {/* Wrap Color label and swatch for alignment */}
                Color: <span className='w-4 h-4 rounded-full ml-2 inline-block border border-gray-300' style={{backgroundColor: defaultColor}}></span> {/* Fixed size, removed padding, added border */}
            </div>
        </div>
        <div className='m-4 flex justify-center'> {/* Adjusted margin and added flex for centering */}
            <Button
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
                className="w-full" // Make button take full width of its container
            >
                Add to Cart {/* Corrected text */}
            </Button>
        </div>
    </Card>
  )
}

export default ProductSectionItem
