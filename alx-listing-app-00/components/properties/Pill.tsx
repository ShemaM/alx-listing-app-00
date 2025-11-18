import React from 'react';

interface PillProps {
  filter: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ filter, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 px-6 py-2 border rounded-full transition-colors whitespace-nowrap ${
        isActive 
          ? 'border-blue-500 bg-blue-500 text-white' 
          : 'border-gray-300 hover:border-gray-400'
      }`}
    >
      {filter}
    </button>
  );
};

export default Pill;