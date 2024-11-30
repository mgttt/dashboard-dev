<template>
  <div ref="chartRef" class="h-[calc(100vh-120px)] w-full"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { MarketData } from '../types/market';
import * as echarts from 'echarts';
import { formatDate } from '../utils/dateUtils';

const props = defineProps<{
  data: MarketData[]
}>();

const chartRef = ref<HTMLElement>();
let chart: echarts.ECharts | null = null;

const colors = ['#2563eb', '#7c3aed', '#db2777', '#059669', '#d97706'];

const updateChart = () => {
  if (!chart) return;

  const series = props.data.map((market, index) => ({
    name: market.name,
    type: 'line',
    data: market.weeklyTradingData.map(d => [d.date, d.tradeRatio]),
    symbol: 'none',
    lineStyle: {
      width: 2,
      color: colors[index % colors.length]
    }
  }));

  chart.setOption({
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const date = formatDate(params[0].value[0], 'MMM d, yyyy');
        let result = `${date}<br/>`;
        params.forEach((param: any) => {
          result += `${param.seriesName}: ${param.value[1].toFixed(2)}%<br/>`;
        });
        return result;
      }
    },
    legend: {
      data: props.data.map(m => m.name)
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'time',
      axisLabel: {
        formatter: (value: string) => formatDate(value)
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: (value: number) => `${value.toFixed(1)}%`
      }
    },
    series
  });
};

onMounted(() => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value);
    updateChart();
  }
});

watch(() => props.data, updateChart, { deep: true });
</script>