<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-[1600px] mx-auto px-2 py-2">
      <div class="flex items-center gap-4 mb-2">
        <SearchBar @search="setSearchQuery" />
        <CategoryFilter
          :selected-category="selectedCategory"
          @category-change="setSelectedCategory"
        />
      </div>
      
      <div class="flex gap-2">
        <div class="w-[37%] bg-white p-3 rounded-lg shadow-sm">
          <MarketTable :data="filteredData" />
        </div>
        
        <div class="w-[61%] bg-white p-3 rounded-lg shadow-sm">
          <TradingChart :data="filteredData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SearchBar from './components/SearchBar.vue';
import CategoryFilter from './components/CategoryFilter.vue';
import MarketTable from './components/MarketTable.vue';
import TradingChart from './components/TradingChart.vue';
import { mockMarketData } from './data/mockData';
import type { MarketCategory } from './types/market';

const searchQuery = ref('');
const selectedCategory = ref<MarketCategory>('crypto');

const filteredData = computed(() => {
  return mockMarketData
    .filter(market => market.category === selectedCategory.value)
    .filter(market =>
      market.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      market.symbol.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const setSearchQuery = (query: string) => {
  searchQuery.value = query;
};

const setSelectedCategory = (category: MarketCategory) => {
  selectedCategory.value = category;
};
</script>