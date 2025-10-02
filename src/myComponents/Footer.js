import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';
import logo from "../logo/logoWhite.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Footer - Fixed at bottom */}
      <footer className="bg-black text-white px-4 sm:px-6 py-6 md:py-8 mt-auto">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left - Logo */}
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="BlackWave Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="text-xl sm:text-2xl font-bold">BlackWave.</span>
            </div>

            {/* Center - Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium uppercase">
  <button className="hover:text-gray-400 transition-colors duration-200" onClick={() => {/* handle About Us click */}}>
    About Us
  </button>
  <button className="hover:text-gray-400 transition-colors duration-200" onClick={() => {/* handle Privacy Policy click */}}>
    Privacy Policy
  </button>
  <button className="hover:text-gray-400 transition-colors duration-200" onClick={() => {/* handle Shipping click */}}>
    Shipping
  </button>
  <button className="hover:text-gray-400 transition-colors duration-200" onClick={() => {/* handle Track Order click */}}>
    Track Order
  </button>
  <button className="hover:text-gray-400 transition-colors duration-200" onClick={() => {/* handle FAQs click */}}>
    FAQs
  </button>
</nav>


            {/* Right - Copyright and Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-sm text-gray-300">
                <span className="text-white font-medium">Xtemos Studio</span> Copyright © 2025
              </p>
              <button
                className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Chat support"
              >
                <BsChatDots size={18} />
              </button>
            </div>
          </div>

          {/* Bottom Separator */}
          <div className="border-t border-gray-800 mt-6 pt-6 text-center">
            <p className="text-xs text-gray-500">
              Premium accessories for your digital lifestyle. Fast shipping & excellent customer service.
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Up Arrow Button - Improved Styling */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl z-50 group"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={20} className="group-hover:scale-110 transition-transform" />
      </button>


    </div>
  );
};

export default Footer;