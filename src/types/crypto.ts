export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  tradingVolume24h: number;
  tradeRatio24h: number;
  weeklyTradingData: {
    date: string;
    tradeRatio: number;
  }[];
}