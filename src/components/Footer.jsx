import React from "react"
import logo from "../assets/images/logo.png"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="w-full  bg-gray-100 text-gray-700 pt-0 pb-8">
      {" "}
      {/* Outermost div, simple block, provides background and vertical padding */}
      {/* This div is the main content container, centered with mx-auto, with max-width and horizontal padding */}
      <div className="block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top separator line */}
        <div className="flex items-center justify-center mb-8">
          <hr className="h-px w-full bg-gray-300 opacity-75 outline-none border-none" />
        </div>

        <div className="flex flex-row justify-center items-center flex-wrap gap-12"> {/* Corrected flew-wrap to flex-wrap */}
          {/* Column 1: Logo, About Us, Contact, Personal Data Security */}
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <img
                className="h-16 mb-4 mx-auto md:mx-0"
                src={logo}
                alt="logo"
              />
            </div>
            <ul className="space-y-3">
              
              <li>
                <a href="#" className="hover:text-red-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Per. Data Sec.
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Campaigns */}
          <div className="">
            <h5 className="font-bold text-xl mb-12">Campaigns</h5>
            <ul className="space-y-3">
            
              <li>
                <a href="#" className="hover:text-red-600">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Shopping Credit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Premium Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="">
            <h5 className="font-bold text-xl mb-4">Help</h5>
            <ul className="space-y-3">
              {" "}
              {/* Increased space */}
              <li>
                <a href="#" className="hover:text-red-600">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Live Assistant
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  How can I return the product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Process Guideness
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="">
            <h5 className="font-bold text-xl mb-4">Follow Us</h5>
            <ul className="space-y-3">
              
              <li>
                <a href="#" className="flex items-center space-x-3 hover:text-red-600">
                  <FaFacebookF className="text-xl" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 hover:text-red-600">
                  <FaTwitter className="text-xl" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 hover:text-red-600">
                  <FaInstagram className="text-xl" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 hover:text-red-600">
                  <FaLinkedinIn className="text-xl" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom separator line and copyright */}
        <div className="mt-6 pt-4 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-center">
          <p className="text-sm text-gray-500 text-center">
            Copyright &copy; {year} YourCompanyName. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
