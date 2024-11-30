<template>
  <div class="overflow-x-auto">
    <table class="w-full bg-white rounded-lg overflow-hidden text-sm">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Symbol
          </th>
          <th class="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            24h Ratio
          </th>
          <th class="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            7d Avg Ratio
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="market in data" :key="market.id" class="hover:bg-gray-50">
          <td class="px-3 py-2 whitespace-nowrap font-medium text-gray-900">
            {{ market.name }}
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-gray-500">
            {{ market.symbol }}
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-right text-gray-900">
            {{ market.tradeRatio24h.toFixed(2) }}%
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-right text-gray-900">
            {{ calculateAverageRatio(market.weeklyTradingData).toFixed(2) }}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { MarketData } from '../types/market';

defineProps<{
  data: MarketData[]
}>();

const calculateAverageRatio = (weeklyData: { tradeRatio: number }[]) => {
  const sum = weeklyData.reduce((acc, curr) => acc + curr.tradeRatio, 0);
  return sum / weeklyData.length;
};
</script>