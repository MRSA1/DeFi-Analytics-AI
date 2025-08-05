import React, { useState } from 'react';
import { BarChart, LineChart, TrendingUp } from 'lucide-react';

export const PredictionChart: React.FC = () => {
  const [timeframe, setTimeframe] = useState('1D');
  
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">AI Market Predictions</h3>
            <p className="text-gray-400 text-sm">Real-time blockchain analytics</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          {['1H', '1D', '1W', '1M'].map((period) => (
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
        <div className="h-full flex items-end justify-between space-x-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div
                className="w-full bg-gradient-to-t from-blue-600 to-purple-500 rounded-t"
                style={{ height: `${Math.random() * 80 + 20}%` }}
              />
              <span className="text-xs text-gray-500 mt-2">
                {i % 3 === 0 ? `${i * 2}:00` : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-500">↗ 78%</p>
          <p className="text-gray-400 text-sm">Bull Signal</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-500">$42,150</p>
          <p className="text-gray-400 text-sm">Predicted BTC</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-500">94.2%</p>
          <p className="text-gray-400 text-sm">Confidence</p>
        </div>
      </div>
    </div>
  );
};
