import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiSquareRemove } from "react-icons/ci";
import { IoClose } from "react-icons/io5"; // Import close icon
import { removeFromCart } from '../features/cartSlice'; // Import removeFromCart action

const Cart = ({ openModal, setOpen }) => {
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch(); // Keep dispatch if needed for remove action

    const handleClose = () => {
        setOpen(false);
    };

    // Updated handler for removing item
    const handleRemoveItem = (itemToRemove) => {
        dispatch(removeFromCart(itemToRemove));
    };

    if (!openModal) return null;

    return (
        // Full screen overlay for centering and backdrop
        // Added onClick={handleClose} to close when clicking the overlay
        <div
            className='fixed inset-0 z-50 flex items-center justify-center' // Removed Tailwind bg classes
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Added inline style for background
            onClick={handleClose}
        >
            {/* Modal Container - Stop propagation to prevent closing when clicking inside */}
            <div
                className='bg-white rounded-lg shadow-xl w-full max-w-xl max-h-[80vh] flex flex-col'
                onClick={(e) => e.stopPropagation()} // Prevents overlay click when clicking inside modal
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h3 className='text-xl font-semibold text-gray-800'>Shopping Bag</h3>
                    <button 
                        onClick={handleClose} 
                        className="text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer"
                    >
                        <IoClose size={24} /> {/* Close Button */}
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 overflow-y-auto flex-grow"> {/* Added flex-grow */}
                    {cart.length > 0 ? (
                        <>
                            {/* Cart Items */}
                            <section className="space-y-4"> {/* Use space-y for spacing */}
                                {cart.map((item) => ( // Removed index as key if item.id is unique
                                    <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                                        <div className='grid grid-cols-4 gap-4 items-center'> {/* Changed to 4 cols */}
                                            {/* Image Column */}
                                            <div className="col-span-1">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className='h-20 w-20 object-cover rounded'
                                                />
                                            </div>
                                            {/* Info Column */}
                                            <div className="col-span-2 flex flex-col items-start">
                                                <h4 className='text-gray-800 text-base font-semibold tracking-normal leading-tight mb-1 line-clamp-1'>
                                                    {item.name}
                                                </h4>
                                                {/* <p className='text-gray-500 text-xs tracking-normal leading-tight mb-2 line-clamp-2'>
                                                    {item.text} // Optional: Add text back if needed
                                                </p> */}
                                                <p className='text-gray-600 text-sm font-inter tracking-normal leading-tight'>
                                                    Size: <span className='ml-1 font-medium'>{item.size}</span>
                                                </p>
                                                <p className='text-gray-600 flex items-center text-sm font-inter tracking-normal leading-tight'>
                                                    Color:
                                                    <span
                                                        className="rounded-full w-4 h-4 inline-block ml-1 border border-gray-300"
                                                        style={{ backgroundColor: item.color }}
                                                    ></span>
                                                </p>
                                            </div>
                                            {/* Price/Amount/Remove Column */}
                                            <div className="col-span-1 flex flex-col items-end justify-between h-full">
                                                <p className='text-gray-800 text-sm font-semibold tracking-normal leading-none'>
                                                    ${(item.price * item.amount).toFixed(2)} {/* Display total price for item */}
                                                </p>
                                                <p className='text-gray-600 text-xs font-inter tracking-normal leading-none mt-1'>
                                                    Qty: {item.amount}
                                                </p>
                                                <button
                                                    onClick={() => handleRemoveItem(item)} // Pass the whole item object
                                                    title="Remove item"
                                                    className="text-red-500 hover:text-red-700 mt-2"
                                                >
                                                    <CiSquareRemove size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </>
                    ) : (
                        // Empty Cart Message
                        <section className="text-center py-10 flex flex-col items-center justify-center h-full">
                            <h1 className='text-xl font-semibold text-gray-700 mb-2'>
                                Your bag is empty
                            </h1>
                            <p className='text-gray-500'>
                                Add some products to get started!
                            </p>
                        </section>
                    )}
                </div>

                {/* Modal Footer */}
                {cart.length > 0 && (
                    <footer className="p-4 border-t border-gray-200 flex justify-between items-center bg-gray-50 rounded-b-lg">
                        <p className="text-lg font-semibold text-gray-800">
                            Total: ${totalPrice.toFixed(2)}
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                            Proceed to Checkout
                        </button>
                    </footer>
                )}
            </div>
        </div>
    );
};

export default Cart;
