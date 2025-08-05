import React, { useState } from 'react';
import { Bot, Play, Pause, Settings, TrendingUp } from 'lucide-react';

export const AutomatedTrading: React.FC = () => {
  const [activeStrategies, setActiveStrategies] = useState([
    {
      id: 1,
      name: 'AI Momentum',
      status: 'active',
      profit: '+$2,847',
      trades: 156,
      winRate: '73%'
    },
    {
      id: 2,
      name: 'DeFi Arbitrage',
      status: 'paused',
      profit: '+$1,234',
      trades: 89,
      winRate: '68%'
    },
    {
      id: 3,
      name: 'Mean Reversion',
      status: 'active',
      profit: '-$345',
      trades: 45,
      winRate: '42%'
    }
  ]);
  
  const toggleStrategy = (id: number) => {
    setActiveStrategies(strategies =>
      strategies.map(strategy =>
        strategy.id === id
          ? { ...strategy, status: strategy.status === 'active' ? 'paused' : 'active' }
          : strategy
      )
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
          <Bot className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Automated Trading</h2>
          <p className="text-gray-400">AI-powered trading strategies</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Active Strategies</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <Settings size={16} />
                <span>New Strategy</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {activeStrategies.map((strategy) => (
                <div key={strategy.id} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        strategy.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                      <h4 className="font-semibold">{strategy.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        strategy.status === 'active'
                          ? 'bg-green-600/20 text-green-400'
                          : 'bg-yellow-600/20 text-yellow-400'
                      }`}>
                        {strategy.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => toggleStrategy(strategy.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        strategy.status === 'active'
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      {strategy.status === 'active' ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Total Profit</p>
                      <p className={`font-bold ${
                        strategy.profit.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {strategy.profit}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Trades</p>
                      <p className="font-bold">{strategy.trades}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Win Rate</p>
                      <p className="font-bold text-blue-400">{strategy.winRate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Performance Chart</h3>
            
            <div className="h-64 bg-gray-900 rounded-lg p-4">
              <div className="h-full flex items-end justify-between space-x-1">
                {Array.from({ length: 30 }).map((_, i) => {
                  const isProfit = Math.random() > 0.4;
                  return (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-full rounded-t ${
                          isProfit
                            ? 'bg-gradient-to-t from-green-600 to-green-400'
                            : 'bg-gradient-to-t from-red-600 to-red-400'
                        }`}
                        style={{ height: `${Math.random() * 70 + 30}%` }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">+$3,736</p>
                <p className="text-gray-400 text-sm">Total P&L</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-500">290</p>
                <p className="text-gray-400 text-sm">Total Trades</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-500">67%</p>
                <p className="text-gray-400 text-sm">Overall Win Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">2.3x</p>
                <p className="text-gray-400 text-sm">Profit Factor</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Play size={16} />
                <span>Start All Strategies</span>
              </button>
              
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Pause size={16} />
                <span>Pause All Strategies</span>
              </button>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Settings size={16} />
                <span>Strategy Builder</span>
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Market Conditions</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Volatility</span>
                <span className="text-yellow-400 font-medium">HIGH</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Trend</span>
                <span className="text-green-400 font-medium">BULLISH</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Volume</span>
                <span className="text-blue-400 font-medium">ABOVE AVG</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Sentiment</span>
                <span className="text-purple-400 font-medium">OPTIMISTIC</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <TrendingUp className="text-green-400" size={20} />
              <h4 className="font-semibold text-green-400">Opportunity Alert</h4>
            </div>
            <p className="text-sm text-gray-300">
              AI detected a high-probability arbitrage opportunity between Uniswap and Sushiswap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
