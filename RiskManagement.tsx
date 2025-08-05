import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export const RiskManagement: React.FC = () => {
  const [riskProfile, setRiskProfile] = useState('moderate');
  
  const riskMetrics = [
    { name: 'Portfolio Diversification', score: 85, status: 'good' },
    { name: 'Volatility Exposure', score: 65, status: 'moderate' },
    { name: 'Liquidity Risk', score: 40, status: 'high' },
    { name: 'Smart Contract Risk', score: 78, status: 'good' },
    { name: 'Market Correlation', score: 55, status: 'moderate' },
  ];
  
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };
  
  const getScoreBg = (score: number) => {
    if (score >= 75) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
          <Shield className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Risk Management</h2>
          <p className="text-gray-400">AI-powered risk assessment and mitigation</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-6">
            <h3 className="text-lg font-semibold mb-4">Risk Assessment</h3>
            
            <div className="space-y-4">
              {riskMetrics.map((metric) => (
                <div key={metric.name} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{metric.name}</span>
                    <span className={`font-bold ${getScoreColor(metric.score)}`}>
                      {metric.score}/100
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full ${getScoreBg(metric.score)}`}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {metric.score >= 75 ? (
                      <CheckCircle size={16} className="text-green-400" />
                    ) : metric.score >= 50 ? (
                      <AlertTriangle size={16} className="text-yellow-400" />
                    ) : (
                      <XCircle size={16} className="text-red-400" />
                    )}
                    <span className="text-sm text-gray-400 capitalize">
                      {metric.status} risk level
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Risk Mitigation Strategies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2">Diversification</h4>
                <p className="text-sm text-gray-300">
                  Spread investments across different protocols and asset classes to reduce correlation risk.
                </p>
              </div>
              
              <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Stop Loss Orders</h4>
                <p className="text-sm text-gray-300">
                  Automatically execute trades to limit losses when prices move against your position.
                </p>
              </div>
              
              <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">Position Sizing</h4>
                <p className="text-sm text-gray-300">
                  Allocate capital based on risk-reward ratios and confidence levels.
                </p>
              </div>
              
              <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 mb-2">Hedging</h4>
                <p className="text-sm text-gray-300">
                  Use derivatives and correlated assets to offset potential losses.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Overall Risk Score</h3>
            
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-700"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${65 * 2.51} 251`}
                    className="text-yellow-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">65</span>
                </div>
              </div>
              <p className="text-yellow-400 font-semibold">MODERATE RISK</p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => setRiskProfile('conservative')}
                className={`w-full p-3 rounded-lg text-left transition-all ${
                  riskProfile === 'conservative'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <p className="font-medium">Conservative</p>
                <p className="text-sm opacity-80">Low risk, steady returns</p>
              </button>
              
              <button
                onClick={() => setRiskProfile('moderate')}
                className={`w-full p-3 rounded-lg text-left transition-all ${
                  riskProfile === 'moderate'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <p className="font-medium">Moderate</p>
                <p className="text-sm opacity-80">Balanced risk-reward</p>
              </button>
              
              <button
                onClick={() => setRiskProfile('aggressive')}
                className={`w-full p-3 rounded-lg text-left transition-all ${
                  riskProfile === 'aggressive'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <p className="font-medium">Aggressive</p>
                <p className="text-sm opacity-80">High risk, high reward</p>
              </button>
            </div>
          </div>
          
          <div className="bg-red-600/20 border border-red-500/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <AlertTriangle className="text-red-400" size={20} />
              <h4 className="font-semibold text-red-400">High Risk Alert</h4>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Your liquidity risk is currently high. Consider rebalancing your portfolio.
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
              View Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
