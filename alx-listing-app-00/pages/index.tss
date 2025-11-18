import React from 'react';
import { PROPERTYLISTINGSAMPLE, FILTER_CATEGORIES } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">     
          <h1 className="text-4xl md:text-6xl font-bold mb-4">   
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The best prices for over 2 million properties worldwide.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">      
            Explore Properties
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4 pb-4">  
            {FILTER_CATEGORIES.map((filter) => (
              <button
                key={filter}
                className="flex-shrink-0 px-6 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors whitespace-nowrap"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTYLISTINGSAMPLE.map((property) => (
              <div key={property.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Property Image */}
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  {property.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">   
                      {property.discount}% OFF
                    </div>
                  )}
                </div>

                {/* Property Details - THIS IS THE PART YOU HAVE */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{property.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-500">⭐</span>
                      <span className="ml-1">{property.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {property.address.city}, {property.address.state}, {property.address.country}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">    
                    {property.category.slice(0, 2).map((cat: string) => (
                      <span key={cat} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold">${property.price}</span>
                      <span className="text-gray-600"> / night</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;