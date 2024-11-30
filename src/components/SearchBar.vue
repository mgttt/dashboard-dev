<template>
  <div class="relative w-full max-w-xl">
    <div class="relative">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        :value="value"
        @input="handleInput"
        placeholder="输入关键词搜索..."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next';

defineProps<{
  value: string
}>();

const emit = defineEmits<{
  (e: 'search', query: string): void
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('search', target.value);
};
</script>