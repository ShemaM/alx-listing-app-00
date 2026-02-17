import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/layout/Layout"; // Make sure this path is correct
import { PROPERTYLISTINGSAMPLE } from "../constants";
import { PropertyProps } from "../interfaces";

// Pill component for filters
const Pill: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ 
  label, 
  active, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border transition-colors ${
      active 
        ? "bg-blue-600 text-white border-blue-600" 
        : "bg-white text-gray-700 border-gray-300 hover:border-blue-600"
    }`}
  >
    {label}
  </button>
);

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [results, setResults] = useState<PropertyProps[]>([]);

  // Get unique categories for filters
  const filters = ["all", ...new Set(PROPERTYLISTINGSAMPLE.flatMap(p => p.category))];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = PROPERTYLISTINGSAMPLE.filter(
      (property: PropertyProps) =>
        property.name.toLowerCase().includes(query.toLowerCase()) ||
        property.address.city.toLowerCase().includes(query.toLowerCase()) ||
        property.address.state.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === "all") {
      setResults([]);
    } else {
      const filtered = PROPERTYLISTINGSAMPLE.filter(p => 
        p.category.includes(filter)
      );
      setResults(filtered);
    }
  };

  const renderListings = () => {
    const data = results.length > 0 ? results : PROPERTYLISTINGSAMPLE;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((property: PropertyProps, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover"
              />
              {property.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                  {property.discount}% OFF
                </div>
              )}
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">{property.name}</h2>
              <p className="text-gray-500 text-sm">
                {property.address.city}, {property.address.state}
              </p>
              <div className="flex flex-wrap gap-1 my-2">
                {property.category.slice(0, 2).map((cat, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {cat}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold">${property.price}</p>
                <p className="text-yellow-500">⭐ {property.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[500px] flex flex-col items-center justify-center text-center text-white"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            The best prices for over 2 million properties worldwide.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a city, property, or region..."
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={selectedFilter === filter}
              onClick={() => handleFilterClick(filter)}
            />
          ))}
        </div>
      </section>

      {/* Listings */}
      <main className="px-4 pb-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          {selectedFilter === "all" ? "All Properties" : `${selectedFilter} Properties`}
        </h2>
        {renderListings()}
      </main>
    </Layout>
  );
};

export default HomePage;