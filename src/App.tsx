import React, { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { MarketTable } from './components/MarketTable';
import { TradingChart } from './components/TradingChart';
import { mockMarketData } from './data/mockData';
import { MarketCategory } from './types/market';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MarketCategory>('crypto');

  const filteredData = useMemo(() => {
    return mockMarketData
      .filter(market => market.category === selectedCategory)
      .filter(market =>
        market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        market.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-2 py-2">
        <div className="flex items-center gap-4 mb-2">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        
        <div className="flex gap-2">
          <div className="w-[37%] bg-white p-3 rounded-lg shadow-sm">
            <MarketTable data={filteredData} />
          </div>
          
          <div className="w-[61%] bg-white p-3 rounded-lg shadow-sm">
            <TradingChart data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;