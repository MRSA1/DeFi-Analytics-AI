import React, { useState } from 'react';
import { Briefcase, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [timeframe, setTimeframe] = useState('1M');
  
  const holdings = [
    { symbol: 'BTC', name: 'Bitcoin', amount: '0.5234', value: '$21,890', change: '+5.2%', allocation: 45 },
    { symbol: 'ETH', name: 'Ethereum', amount: '8.234', value: '$20,456', change: '+3.1%', allocation: 42 },
    { symbol: 'UNI', name: 'Uniswap', amount: '156.78', value: '$1,952', change: '-1.5%', allocation: 4 },
    { symbol: 'AAVE', name: 'Aave', amount: '12.45', value: '$1,224', change: '+2.8%', allocation: 3 },
    { symbol: 'COMP', name: 'Compound', amount: '8.92', value: '$507', change: '+1.2%', allocation: 1 },
  ];
  
  const totalValue = holdings.reduce((sum, holding) => sum + parseFloat(holding.value.replace('$', '').replace(',', '')), 0);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Briefcase className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Portfolio Overview</h2>
          <p className="text-gray-400">Track your DeFi investments and performance</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Total Value</span>
            <DollarSign className="text-blue-400" size={20} />
          </div>
          <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
          <p className="text-green-400 text-sm font-medium">+$5,847 (12.5%)</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">24h Change</span>
            <TrendingUp className="text-green-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-green-400">+3.2%</p>
          <p className="text-gray-400 text-sm">+$1,456</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Assets</span>
            <Briefcase className="text-purple-400" size={20} />
          </div>
          <p className="text-3xl font-bold">{holdings.length}</p>
          <p className="text-gray-400 text-sm">Across 5 protocols</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Portfolio Performance</h3>
              <div className="flex space-x-2">
                {['1D', '1W', '1M', '3M', '1Y'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeframe(period)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      timeframe === period
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-64 bg-gray-900 rounded-lg p-4 mb-4">
              <div className="h-full flex items-end justify-between space-x-1">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-purple-500 rounded-t"
                      style={{ height: `${50 + (Math.sin(i * 0.3) * 30) + (i * 1.5)}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Holdings</h3>
            
            <div className="space-y-4">
              {holdings.map((holding) => (
                <div key={holding.symbol} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{holding.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{holding.name}</p>
                        <p className="text-gray-400 text-sm">{holding.amount} {holding.symbol}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold">{holding.value}</p>
                      <p className={`text-sm font-medium ${
                        holding.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {holding.change}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Allocation</span>
                      <span>{holding.allocation}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${holding.allocation}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Asset Allocation</h3>
            
            <div className="relative w-48 h-48 mx-auto mb-4">
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                {holdings.map((holding, index) => {
                  const total = holdings.reduce((sum, h) => sum + h.allocation, 0);
                  const percentage = holding.allocation / total;
                  const strokeDasharray = `${percentage * 314} 314`;
                  const rotation = holdings.slice(0, index).reduce((sum, h) => sum + (h.allocation / total) * 360, 0);
                  
                  return (
                    <circle
                      key={holding.symbol}
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={`hsl(${220 + index * 60}, 70%, 60%)`}
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={strokeDasharray}
                      style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '50px 50px' }}
                    />
                  );
                })}
              </svg>
            </div>
            
            <div className="space-y-2">
              {holdings.map((holding, index) => (
                <div key={holding.symbol} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: `hsl(${220 + index * 60}, 70%, 60%)` }}
                    />
                    <span className="text-sm">{holding.symbol}</span>
                  </div>
                  <span className="text-sm font-medium">{holding.allocation}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">AI Insights</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3">
                <p className="text-blue-400 font-medium text-sm mb-1">Rebalancing Suggestion</p>
                <p className="text-gray-300 text-sm">Consider taking profits on BTC and increasing ETH exposure.</p>
              </div>
              
              <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 font-medium text-sm mb-1">Opportunity</p>
                <p className="text-gray-300 text-sm">DeFi yield farming opportunities detected in Aave protocol.</p>
              </div>
              
              <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-400 font-medium text-sm mb-1">Risk Alert</p>
                <p className="text-gray-300 text-sm">Portfolio concentration risk in BTC/ETH. Consider diversification.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
