import React from 'react';

const CircleCategories = () => {
  const categories = [
    {
      name: "Cases",
      count: 51,
      image: "https://images.unsplash.com/photo-1605236453806-6ff36864818f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "MagSafe",
      count: 15,
      image: "https://images.unsplash.com/photo-1609592810793-abeb6c66bc83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Cables",
      count: 18,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Charger",
      count: 12,
      image: "https://images.unsplash.com/photo-1609592810793-abeb6c66bc83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Straps",
      count: 38,
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Power Banks",
      count: 18,
      image: "https://images.unsplash.com/photo-1609592810793-abeb6c66bc83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              {/* Circle Image */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 hover:border-blue-500 transition-colors duration-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Name */}
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>

              {/* Product Count */}
              <p className="text-sm text-gray-600">{category.count} products</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleCategories;