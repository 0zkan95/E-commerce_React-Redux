import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../features/wishlistSlice'; // Import remove action
import { IoClose } from "react-icons/io5"; // Import close icon
import { FaTrash } from 'react-icons/fa'; // Import trash icon for remove

const Wishlist = ({ openWishlistModal, setOpenWishlistModal }) => {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpenWishlistModal(false);
    };

    if (!openWishlistModal) {
        return null;
    }

    const handleRemoveFromWishlist = (itemId) => {
        dispatch(removeFromWishlist(itemId));
    };

    return (
        // Full screen overlay
        <div
            className='fixed inset-0 z-50 flex items-center justify-center' // Removed Tailwind bg classes
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Added inline style for background
            onClick={handleClose}
        >
            {/* Modal Container */}
            <div
                className='bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[70vh] flex flex-col' // Slightly smaller than cart
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h3 className='text-xl font-semibold text-gray-800'>My Wishlist</h3>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer">
                        <IoClose size={24} />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 overflow-y-auto flex-grow">
                    {wishlistItems.length > 0 ? (
                        <section className="space-y-3">
                            {wishlistItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className='h-16 w-16 object-cover rounded'
                                        />
                                        <div>
                                            <h4 className='text-gray-800 text-sm font-semibold line-clamp-1'>
                                                {item.name}
                                            </h4>
                                            <p className='text-gray-600 text-xs'>
                                                Price: ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveFromWishlist(item.id)}
                                        title="Remove from Wishlist"
                                        className="text-red-500 hover:text-red-700 p-1"
                                    >
                                        <FaTrash size={16} />
                                    </button>
                                </div>
                            ))}
                        </section>
                    ) : (
                        <section className="text-center py-10 flex flex-col items-center justify-center h-full">
                            <h1 className='text-lg font-semibold text-gray-700 mb-2'>
                                Your wishlist is empty.
                            </h1>
                            <p className='text-gray-500 text-sm'>
                                Add items you love to your wishlist!
                            </p>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
