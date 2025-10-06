import React from 'react';
import { Sliders, Eye, Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({
  image,
  name,
  price,
  type,
  compatibleDevices,
  isHot,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <div className="group relative w-full bg-transparent border border-transparent rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hot Badge */}
        {isHot && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
            HOT
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Add to Cart Button - Show on hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
          <button
            onClick={onAddToCart}
            className="w-full bg-gray-900 hover:bg-black text-white py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold uppercase tracking-wide flex items-center justify-center transition-all duration-300 group/btn"
          >
            <span className="transition-all duration-300 group-hover/btn:opacity-0 group-hover/btn:scale-75 group-hover/btn:-translate-y-2 whitespace-nowrap">
              ADD TO CART
            </span>
            <ShoppingCart
              size={16}
              className="absolute transition-all duration-300 opacity-0 scale-75 translate-y-2 group-hover/btn:opacity-100 group-hover/btn:scale-100 group-hover/btn:translate-y-0"
            />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 left-3 flex flex-col items-center gap-1 sm:gap-2">
          {/* Heart Button - Always visible on mobile, others hidden */}
          <button
            onClick={onAddToWishlist}
            className={`bg-white/90 backdrop-blur-sm text-gray-700 hover:text-blue-600 p-1.5 sm:p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 sm:transform sm:-translate-x-4 sm:group-hover:translate-x-0`}
            aria-label="Wishlist"
          >
            <Heart size={14} className="sm:w-4 sm:h-4" />
          </button>

          {/* Other Action Buttons - Hidden on mobile, visible on hover on desktop */}
          <div className="hidden sm:flex sm:flex-col sm:items-center sm:gap-2 sm:transform sm:-translate-x-12 sm:group-hover:translate-x-0 sm:transition-transform sm:duration-300">
            {[
              { icon: Sliders, label: 'Compare', delay: '0' },
              { icon: Eye, label: 'Quick View', delay: '75' }
            ].map(({ icon: Icon, label, onClick, delay }) => (
              <button
                key={label}
                onClick={onClick}
                className={`bg-white/90 backdrop-blur-sm text-gray-700 hover:text-blue-600 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 transform -translate-x-4 group-hover:translate-x-0 delay-${delay}`}
                aria-label={label}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3 sm:p-4">
        <h3 className="font-medium text-gray-900 text-xs sm:text-sm uppercase tracking-wide line-clamp-2 leading-tight min-h-[2.8rem] text-center">
          {name}
        </h3>

        {/* Centered Compatible Devices */}
        <div className="mt-1 sm:mt-2 flex justify-center">
          <span className="text-xs text-gray-500 uppercase tracking-wide text-center line-clamp-1">
            {compatibleDevices.join(', ')}
          </span>
        </div>

        {/* Centered Price */}
        <div className="flex items-center justify-center mt-1 sm:mt-2">
          <span className="text-blue-500 font-normal text-base sm:text-lg">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;