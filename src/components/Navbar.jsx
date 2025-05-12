import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import Cart from './Cart';
import Wishlist from './Wishlist'; // Import Wishlist component
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
// Consider adding icons later e.g., import { UserCircleIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';


const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const wishlistCount = wishlistItems.length;
  const navigate = useNavigate();

  const [openCart, setOpenCart] = useState(false);
  const [openWishlistModal, setOpenWishlistModal] = useState(false); // State for Wishlist modal
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleOpenWishlist = () => { // Handler to open wishlist
    setOpenWishlistModal(true);
  };

  const user = useSelector((state) => state.user.user);
  const { name } = user;
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Basic logout handler for the dropdown item
  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false); // Close dropdown after logout
  };

  return (
    <>
      <div className='bg-[#d1ded4] p-2 w-full'>
        <h3 className='text-white font-inter text-2xl my-2 font-bold tracking-normal leading-none text-center'>
          Welcome to Store All In One
        </h3>
      </div>
      <div className='flex justify-around items-center'>
        <Link to="/" className="cursor-pointer">
          <img
            className='h-28 w-full'
            src={logo}
            alt="store"
          />
        </Link>
        <div className='flex flex-row items-center space-x-4'>
          {/* Wish List Section - Now clickable */}
          <div
            className='flex flex-row items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors duration-200'
            onClick={handleOpenWishlist} // Make it clickable
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"> {/* Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              {/* Wishlist Badge */}
              {wishlistCount > 0 && (
                <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white'>
                  {wishlistCount}
                </span>
              )}
            </div>
            <p className='font-inter text-base font-medium tracking-normal leading-none text-center ml-2'>Wish List</p>
          </div>
          {/* Shopping Bag / Cart - Refactored as a button */}
          <button
            className='relative flex flex-row items-center p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 hover:cursor-pointer'
            onClick={handleOpenCart}
          >
            {/* Icon container */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {/* Badge positioned absolutely */}
              {totalAmount > 0 && (
                <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white'>
                  {totalAmount}
                </span>
              )}
            </div>
            <p className='font-inter text-base font-medium tracking-normal leading-none text-center ml-2'>Shopping Bag</p>
          </button>
          {/* User Name and Dropdown */}
          <div className="relative"> {/* Added relative positioning */}
            {/* Clickable user name area */}
            <div onClick={toggleDropdown} className="cursor-pointer">
              <p className='font-inter text-sm font-medium tracking-normal leading-none'>
                Hi, {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                {/* Dropdown Items */}
                <button
                  // onClick={() => { /* Handle Account click */ setIsDropdownOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Account {/* Add Icon here later */}
                </button>
                <button
                  // onClick={() => { /* Handle Settings click */ setIsDropdownOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings {/* Add Icon here later */}
                </button>
                <button
                  onClick={handleLogout} // Use logout handler
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout {/* Add Icon here later */}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='bg-[#d1ded4] p-4 w-full flex justify-around'>
        <div className='text-black font-inter text-md font-medium tracking-normal leading-none text-center'>
          50% OFF
        </div>
        <div className='text-black font-inter text-md font-medium tracking-normal leading-none text-center'>
          Free shipping and returns
        </div>
        <div className='text-black font-inter text-md font-medium tracking-normal leading-none text-center'>
          Different payment methods
        </div>
      </div>
      {/* Move modals outside of the button and div elements */}
      {openCart && <Cart openModal={openCart} setOpen={setOpenCart} />}
      {openWishlistModal && <Wishlist openWishlistModal={openWishlistModal} setOpenWishlistModal={setOpenWishlistModal} />}
    </>
  )
}

export default Navbar
