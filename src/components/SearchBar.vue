<template>
  <div class="relative w-full max-w-xl">
    <div class="relative">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="过滤词：近七天交易高的数字货币"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next';

const emit = defineEmits<{
  (e: 'search', query: string): void
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('search', target.value);
};
</script>