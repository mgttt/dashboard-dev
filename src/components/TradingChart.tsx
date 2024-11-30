import React from 'react';
import { CryptoData } from '../types/crypto';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatDate } from '../utils/dateUtils';

interface TradingChartProps {
  data: CryptoData[];
}

export const TradingChart: React.FC<TradingChartProps> = ({ data }) => {
  const colors = ['#2563eb', '#7c3aed', '#db2777', '#059669', '#d97706'];

  return (
    <div className="h-[calc(100vh-120px)] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => formatDate(date)}
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis
            tickFormatter={(value) => `${value.toFixed(1)}%`}
          />
          <Tooltip
            labelFormatter={(label) => formatDate(label, 'MMM d, yyyy')}
            formatter={(value: number) => [`${value.toFixed(2)}%`]}
          />
          <Legend />
          {data.map((crypto, index) => (
            <Line
              key={crypto.id}
              data={crypto.weeklyTradingData}
              type="monotone"
              dataKey="tradeRatio"
              name={crypto.name}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};