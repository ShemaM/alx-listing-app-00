import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import { PropertyProps } from "../interfaces";

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PropertyProps[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = PROPERTYLISTINGSAMPLE.filter(
      (property) =>
        property.name.toLowerCase().includes(query.toLowerCase()) ||
        property.address.city.toLowerCase().includes(query.toLowerCase()) ||
        property.address.state.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            The best prices for over 2 million properties worldwide.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a city, property, or region..."
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Search Results */}
      <main className="px-4 py-8 max-w-7xl mx-auto">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((property: PropertyProps) => (
              <div
                key={property.name}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={property.image}
                  alt={property.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg">{property.name}</h2>
                  <p className="text-gray-500 text-sm">
                    {property.address.city}, {property.address.state}
                  </p>
                  <p className="mt-2 font-semibold">${property.price}</p>
                  <p className="text-yellow-400">⭐ {property.rating}</p>
                </div>
              </div>
            ))}
          </div>
        ) : query.length > 0 ? (
          <p className="text-center text-gray-500">No properties found.</p>
        ) : null}
      </main>
    </div>
  );
};

export default HomePage;
