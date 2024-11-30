import React from 'react';
import { CryptoData } from '../types/crypto';

interface CryptoTableProps {
  data: CryptoData[];
}

export const CryptoTable: React.FC<CryptoTableProps> = ({ data }) => {
  const calculateAverageRatio = (weeklyData: { tradeRatio: number }[]) => {
    const sum = weeklyData.reduce((acc, curr) => acc + curr.tradeRatio, 0);
    return sum / weeklyData.length;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Symbol
            </th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h Ratio
            </th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              7d Avg Ratio
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((crypto) => (
            <tr key={crypto.id} className="hover:bg-gray-50">
              <td className="px-3 py-2 whitespace-nowrap font-medium text-gray-900">
                {crypto.name}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-gray-500">
                {crypto.symbol}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-right text-gray-900">
                {crypto.tradeRatio24h.toFixed(2)}%
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-right text-gray-900">
                {calculateAverageRatio(crypto.weeklyTradingData).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};