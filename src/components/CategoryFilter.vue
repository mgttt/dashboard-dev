<template>
  <div class="flex gap-4 items-center">
    <div class="flex gap-3">
      <a
        v-for="category in categories"
        :key="category.value"
        href="#"
        @click.prevent="() => handleCategoryClick(category)"
        class="text-sm text-blue-600 hover:text-blue-800 hover:underline"
      >
        #{{ category.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MarketCategory } from '../types/market';

const emit = defineEmits<{
  (e: 'search', query: string): void
  (e: 'category-change', category: MarketCategory): void
}>();

const categories = [
  { 
    value: 'us-etf' as const, 
    label: '美ETF',
    searchPhrase: '美股ETF流动性波动性最大的20支'
  },
  { 
    value: 'us-stocks' as const, 
    label: '美股',
    searchPhrase: '科技股成交量最活跃的大盘股'
  },
  { 
    value: 'crypto' as const, 
    label: '数币',
    searchPhrase: '近期交易量暴涨的主流币'
  }
];

const handleCategoryClick = (category: typeof categories[0]) => {
  emit('category-change', category.value);
  emit('search', category.searchPhrase);
};
</script>