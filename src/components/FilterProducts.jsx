import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import styles from '../styles/FilterProducts.module.css'; // Comment out or remove CSS module import
import { useDispatch } from 'react-redux';
import { singleProduct } from '../features/productsSlice';
import { addToWishlist } from '../features/wishlistSlice'; // Import wishlist action
import Card from './Card'; // Import Card component
import { FaHeart } from 'react-icons/fa'; // Import heart icon
import Navbar from './Navbar';
import Footer from './Footer';
import CategoryButtons from './CategoryButtons';

const FilterProducts = () => {
    const products = useSelector((state) => state.products.filteredProducts);
    const { type } = useParams();
    const dispatch = useDispatch();

    const handleProductClick = (productId) => {
        dispatch(singleProduct(productId));
    };

    return (
        <>
            <Navbar />
            <CategoryButtons />
            <div className="p-4"> {/* Add some padding to the main container */}
                {/* Force 4 columns for testing */}
                <div className='grid grid-cols-4 justify-items-center py-8 gap-4 mx-auto max-w-7xl'> 
                    {products.filter((product) => product.type === type).map((product) => {
                        return (
                            <Link 
                                to={`/filteredProducts/${type}/${product.id}`} 
                                key={product.id} 
                                className="w-full max-w-sm"
                                onClick={() => handleProductClick(product.id)}
                            >
                                <Card className='w-full'>
                                    {/* Image Section - Add relative positioning */}
                                    <div className="overflow-hidden relative">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-48 object-cover rounded-t-lg" // Consistent image styling
                                        />
                                        {/* Wishlist Button */}
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                dispatch(addToWishlist(product));
                                            }}
                                            className="absolute top-2 right-2 bg-white/70 p-1.5 rounded-full text-red-500 hover:text-red-700 hover:bg-white transition-all duration-200"
                                            title="Add to Wishlist"
                                        >
                                            <FaHeart size={18} />
                                        </button>
                                    </div>
                                    {/* Name Section */}
                                    <div className="p-2">
                                        <h4 className="text-xl font-medium truncate">{product.name}</h4> {/* Truncate long names */}
                                        <p className="text-sm text-gray-600 mt-1">{product.text}</p> {/* Removed truncate class */}
                                    </div>
                                    {/* Divider */}
                                    <div className="border-t border-white my-2"></div>
                                    {/* Footer Section */}
                                    <div className="flex justify-between items-center p-2 text-sm">
                                        {/* Price */}
                                        <div>
                                            <p className="font-semibold">${product.price}</p>
                                        </div>
                                        {/* Colors */}
                                        <div className="flex gap-1">
                                            {product.color?.map((color, index) => {
                                                return (
                                                    <span // Use span instead of i
                                                        key={index}
                                                        className="w-4 h-4 rounded-full inline-block border border-gray-300" // Consistent color swatch style
                                                        style={{ backgroundColor: color }}
                                                    ></span>
                                                )
                                            })}
                                        </div> {/* Corrected closing tag */}
                                    </div>
                                </Card> {/* Corrected closing tag */}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FilterProducts
