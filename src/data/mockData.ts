import { MarketData } from '../types/market';
import { subDays } from 'date-fns';

export const mockMarketData: MarketData[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    category: 'crypto',
    tradingVolume24h: 28500000000,
    tradeRatio24h: 12.5,
    weeklyTradingData: Array.from({ length: 7 }, (_, i) => ({
      date: subDays(new Date(), i).toISOString(),
      tradeRatio: 10 + Math.random() * 5
    })).reverse()
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    category: 'crypto',
    tradingVolume24h: 15700000000,
    tradeRatio24h: 15.8,
    weeklyTradingData: Array.from({ length: 7 }, (_, i) => ({
      date: subDays(new Date(), i).toISOString(),
      tradeRatio: 13 + Math.random() * 6
    })).reverse()
  },
  {
    id: '3',
    name: 'Solana',
    symbol: 'SOL',
    category: 'crypto',
    tradingVolume24h: 8900000000,
    tradeRatio24h: 18.2,
    weeklyTradingData: Array.from({ length: 7 }, (_, i) => ({
      date: subDays(new Date(), i).toISOString(),
      tradeRatio: 15 + Math.random() * 7
    })).reverse()
  },
  {
    id: '4',
    name: 'NEAR Protocol',
    symbol: 'NEAR',
    category: 'crypto',
    tradingVolume24h: 450000000,
    tradeRatio24h: 9.5,
    weeklyTradingData: Array.from({ length: 7 }, (_, i) => ({
      date: subDays(new Date(), i).toISOString(),
      tradeRatio: 8 + Math.random() * 4
    })).reverse()
  },
  {
    id: '5',
    name: 'Uniswap',
    symbol: 'UNI',
    category: 'crypto',
    tradingVolume24h: 320000000,
    tradeRatio24h: 11.3,
    weeklyTradingData: Array.from({ length: 7 }, (_, i) => ({
      date: subDays(new Date(), i).toISOString(),
      tradeRatio: 9 + Math.random() * 5
    })).reverse()
  },
  {
    id: '6',
    name: 'Apple',
    symbol: 'AAPL',
    category: 'us-stocks',
    tradingVolume24h: 42500000000,
    tradeRatio24h: 8.2,
    weeklyTradingData: Array.from({ length: 7 }, (_, i) => ({
      date: subDays(new Date(), i).toISOString(),
      tradeRatio: 7 + Math.random() * 3
    })).reverse()
  },
  {
    id: '7',
    name: 'Tencent',
    symbol: '0700.HK',
    category: 'hk-stocks',
    tradingVolume24h: 8900000000,
    tradeRatio24h: 6.7,
    weeklyTradingData: Array.from({ length: 7 }, (_, i) => ({
      date: subDays(new Date(), i).toISOString(),
      tradeRatio: 5 + Math.random() * 4
    })).reverse()
  },
  {
    id: '8',
    name: 'SPY ETF',
    symbol: 'SPY',
    category: 'us-etf',
    tradingVolume24h: 32100000000,
    tradeRatio24h: 5.4,
    weeklyTradingData: Array.from({ length: 7 }, (_, i) => ({
      date: subDays(new Date(), i).toISOString(),
      tradeRatio: 4 + Math.random() * 3
    })).reverse()
  }
];