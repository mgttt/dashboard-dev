export type MarketCategory = 'crypto' | 'us-stocks' | 'hk-stocks' | 'us-etf';

export interface MarketData {
  id: string;
  name: string;
  symbol: string;
  category: MarketCategory;
  tradingVolume24h: number;
  tradeRatio24h: number;
  weeklyTradingData: {
    date: string;
    tradeRatio: number;
  }[];
}