import React, { useState } from 'react';
import ProductCard from '../myComponents/ProductCard';

const ProductsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('CASES');
  
  const products = [
    {
      id: 1,
      name: "iPhone 12 Pro Moment Case - Blue",
      price: 149.00,
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
      type: "CASES",
      compatibleDevices: ["iPhone 12 Pro"],
      rating: 4
    },
    {
      id: 2,
      name: "Full Aquarelle iPhone XR",
      price: 169.00,
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
      type: "CASES",
      compatibleDevices: ["iPhone XR"],
      rating: 5
    },
    {
      id: 3,
      name: "iPhone 12 Pro Moment Case - Olive",
      price: 149.00,
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
      type: "CASES",
      compatibleDevices: ["iPhone 12 Pro"],
      rating: 5,
      isHot: true
    },
    {
      id: 4,
      name: "Leather Case iPhone 12 Deep Violet",
      price: 230.00,
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
      type: "CASES",
      compatibleDevices: ["iPhone 12"],
      rating: 4
    },
    {
      id: 5,
      name: "iPhone 13 Case Luxe - Dusty Pink",
      price: 149.00,
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
      type: "CASES",
      compatibleDevices: ["iPhone 13"],
      rating: 4
    },
    {
      id: 6,
      name: "Premium Leather Strap - Brown",
      price: 89.00,
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
      type: "STRAPS",
      compatibleDevices: ["Universal"],
      rating: 5
    },
    {
      id: 7,
      name: "Magnetic MagSafe Charger",
      price: 79.00,
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
      type: "MAGSAFE",
      compatibleDevices: ["iPhone 12+"],
      rating: 4,
      isHot: true
    },
    {
      id: 8,
      name: "Silicone Sport Strap - Black",
      price: 49.00,
      image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
      type: "STRAPS",
      compatibleDevices: ["Universal"],
      rating: 4
    }
  ];

  const filters = [
    { key: 'CASES', label: 'CASES' },
    { key: 'STRAPS', label: 'STRAPS' },
    { key: 'MAGSAFE', label: 'MAGSAFE' }
  ];

  const filteredProducts = products.filter(product => {
    return product.type === activeFilter;
  });

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const handleAddToWishlist = (product) => {
    console.log('Added to wishlist:', product);
  };

  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  {/* Filter Tabs */}
  <div className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
    {filters.map((filter) => (
      <button
        key={filter.key}
        onClick={() => setActiveFilter(filter.key)}
        className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 border-b-2 ${
          activeFilter === filter.key
            ? 'border-blue-600 text-blue-600 bg-blue-50'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`}
      >
        {filter.label}
      </button>
    ))}
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">
    {filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        type={product.type}
        compatibleDevices={product.compatibleDevices}
        rating={product.rating}
        isHot={product.isHot}
        onAddToCart={() => handleAddToCart(product)}
        onAddToWishlist={() => handleAddToWishlist(product)}
      />
    ))}
  </div>

  {/* Empty State */}
  {filteredProducts.length === 0 && (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">No products found for this category.</p>
    </div>
  )}
</div>

  );
};

export default ProductsGrid;