import React, { useState } from 'react';
import { Brain, Target, TrendingUp, AlertCircle } from 'lucide-react';

export const MarketPredictions: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState('BTC');
  
  const predictions = [
    {
      asset: 'BTC',
      current: '$41,825',
      predicted: '$45,200',
      confidence: '89%',
      timeframe: '24h',
      signal: 'BUY',
      factors: ['Volume spike', 'Institutional interest', 'Technical breakout']
    },
    {
      asset: 'ETH',
      current: '$2,485',
      predicted: '$2,650',
      confidence: '76%',
      timeframe: '24h',
      signal: 'BUY',
      factors: ['DeFi growth', 'Network upgrades', 'Staking rewards']
    },
    {
      asset: 'UNI',
      current: '$12.45',
      predicted: '$11.80',
      confidence: '68%',
      timeframe: '24h',
      signal: 'SELL',
      factors: ['Competition increase', 'Fee structure changes']
    }
  ];
  
  const selectedPrediction = predictions.find(p => p.asset === selectedAsset) || predictions[0];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
          <Brain className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">AI Market Predictions</h2>
          <p className="text-gray-400">Advanced machine learning forecasts</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Detailed Analysis</h3>
              <div className="flex space-x-2">
                {predictions.map((pred) => (
                  <button
                    key={pred.asset}
                    onClick={() => setSelectedAsset(pred.asset)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedAsset === pred.asset
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {pred.asset}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Current Price</p>
                <p className="text-xl font-bold">{selectedPrediction.current}</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Predicted Price</p>
                <p className="text-xl font-bold text-blue-400">{selectedPrediction.predicted}</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Confidence</p>
                <p className="text-xl font-bold text-green-400">{selectedPrediction.confidence}</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Signal</p>
                <p className={`text-xl font-bold ${
                  selectedPrediction.signal === 'BUY' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {selectedPrediction.signal}
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Key Factors</h4>
              <div className="space-y-2">
                {selectedPrediction.factors.map((factor, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Target size={16} className="text-blue-400" />
                    <span className="text-gray-300">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="h-48 bg-gray-900 rounded-lg p-4">
              <div className="h-full flex items-end justify-between space-x-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-full rounded-t ${
                        i > 12 ? 'bg-gradient-to-t from-green-600 to-green-400' : 'bg-gradient-to-t from-blue-600 to-blue-400'
                      }`}
                      style={{ height: `${Math.random() * 70 + 30}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Model Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Accuracy (7 days)</span>
                  <span className="font-medium">87.3%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '87.3%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Precision</span>
                  <span className="font-medium">91.7%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91.7%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Recall</span>
                  <span className="font-medium">84.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '84.2%' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-600/20 border border-orange-500/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <AlertCircle className="text-orange-400" size={20} />
              <h4 className="font-semibold text-orange-400">Risk Warning</h4>
            </div>
            <p className="text-sm text-gray-300">
              AI predictions are based on historical data and market patterns. 
              Always conduct your own research and never invest more than you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
