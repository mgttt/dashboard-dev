<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-[1600px] mx-auto px-2 py-2">
      <div class="flex items-center gap-4 mb-2">
        <SearchBar 
          :value="searchQuery"
          @search="setSearchQuery" 
        />
        <CategoryFilter
          @category-change="setSelectedCategory"
          @search="setSearchQuery"
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
import { filterMarketData } from './utils/filterUtils';

const searchQuery = ref('近期交易量暴涨的主流币');
const selectedCategory = ref<MarketCategory>('crypto');

const filteredData = computed(() => {
  return filterMarketData(mockMarketData, {
    category: selectedCategory.value,
    searchQuery: searchQuery.value
  });
});

const setSearchQuery = (query: string) => {
  searchQuery.value = query;
};

const setSelectedCategory = (category: MarketCategory) => {
  selectedCategory.value = category;
};
</script>