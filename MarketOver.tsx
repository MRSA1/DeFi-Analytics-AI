import React from 'react';
import { Circle } from 'lucide-react';

const markets = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$41,825', change: '+2.5%', trend: 'up' },
  { name: 'Ethereum', symbol: 'ETH', price: '$2,485', change: '+1.8%', trend: 'up' },
  { name: 'Uniswap', symbol: 'UNI', price: '$12.45', change: '-0.5%', trend: 'down' },
  { name: 'Aave', symbol: 'AAVE', price: '$98.32', change: '+3.2%', trend: 'up' },
  { name: 'Compound', symbol: 'COMP', price: '$56.78', change: '+1.1%', trend: 'up' },
];

export const MarketOverview: React.FC = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Market Overview</h3>
      
      <div className="space-y-4">
        {markets.map((market) => (
          <div key={market.symbol} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                market.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
              }`} />
              <div>
                <p className="font-medium">{market.symbol}</p>
                <p className="text-gray-400 text-sm">{market.name}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-medium">{market.price}</p>
              <p className={`text-sm ${
                market.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {market.change}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Circle size={8} className="text-blue-400 fill-current" />
          <span className="text-blue-400 font-medium">AI Insight</span>
        </div>
        <p className="text-sm text-gray-300">
          Market sentiment is bullish with high DeFi activity. Consider increasing exposure to governance tokens.
        </p>
      </div>
    </div>
  );
};
