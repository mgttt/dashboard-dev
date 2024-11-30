import React from 'react';
import { MarketCategory } from '../types/market';

interface CategoryFilterProps {
  selectedCategory: MarketCategory;
  onCategoryChange: (category: MarketCategory) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories: { value: MarketCategory; label: string }[] = [
    { value: 'crypto', label: '数币' },
    { value: 'us-stocks', label: '美股' },
    { value: 'hk-stocks', label: '港股' },
    { value: 'us-etf', label: '美ETF' },
  ];

  return (
    <div className="flex gap-2">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onCategoryChange(value)}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors
            ${selectedCategory === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};