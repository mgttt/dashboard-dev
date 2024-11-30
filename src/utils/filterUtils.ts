import type { MarketData, MarketCategory } from '../types/market';

interface FilterOptions {
  category: MarketCategory;
  searchQuery: string;
}

export function filterMarketData(data: MarketData[], options: FilterOptions): MarketData[] {
  const { category, searchQuery } = options;
  
  // First filter by category
  let filtered = data.filter(market => market.category === category);
  
  // If search query includes volume or trading related terms
  if (searchQuery.includes('交易量') || searchQuery.includes('流动性')) {
    filtered = filtered.sort((a, b) => b.tradingVolume24h - a.tradingVolume24h);
  }
  
  // If search query includes volatility related terms
  if (searchQuery.includes('波动') || searchQuery.includes('活跃')) {
    filtered = filtered.sort((a, b) => b.tradeRatio24h - a.tradeRatio24h);
  }
  
  // If search query includes specific market terms
  if (searchQuery.includes('主流')) {
    filtered = filtered.filter(market => market.tradingVolume24h > 1000000000);
  }
  
  if (searchQuery.includes('大盘')) {
    filtered = filtered.filter(market => market.tradingVolume24h > 10000000000);
  }
  
  // Also filter by name/symbol if the search query doesn't contain any special terms
  if (!searchQuery.match(/(交易量|流动性|波动|活跃|主流|大盘)/)) {
    filtered = filtered.filter(market =>
      market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  // Limit results if the query mentions a specific number
  const numberMatch = searchQuery.match(/(\d+)支/);
  if (numberMatch) {
    const limit = parseInt(numberMatch[1]);
    filtered = filtered.slice(0, limit);
  }
  
  return filtered;
}