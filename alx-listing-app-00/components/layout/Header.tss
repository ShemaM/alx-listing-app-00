import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800">LuxuryEstates</span>
          </div>

          {/* Navigation - Types of accommodation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Rooms</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Mansion</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Countryside</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Beach</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">City</a>
          </nav>

          {/* Search Bar & Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">Sign in</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;