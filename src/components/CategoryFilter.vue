<template>
  <div class="flex gap-2">
    <button
      v-for="{ value, label } in categories"
      :key="value"
      @click="() => emit('category-change', value)"
      :class="[
        'px-4 py-1.5 rounded-lg text-sm font-medium transition-colors',
        selectedCategory === value
          ? 'bg-blue-500 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      ]"
    >
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { MarketCategory } from '../types/market';

const props = defineProps<{
  selectedCategory: MarketCategory
}>();

const emit = defineEmits<{
  (e: 'category-change', category: MarketCategory): void
}>();

const categories = [
  { value: 'crypto' as const, label: '数币' },
  { value: 'us-stocks' as const, label: '美股' },
  { value: 'hk-stocks' as const, label: '港股' },
  { value: 'us-etf' as const, label: '美ETF' },
];
</script>