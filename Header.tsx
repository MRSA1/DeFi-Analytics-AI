import React from 'react';
import { Wallet, Bell, Settings, User } from 'lucide-react';

interface HeaderProps {
  isConnected: boolean;
  onConnect: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isConnected, onConnect }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DeFi Analytics AI
          </h1>
          <p className="text-gray-400 text-sm">Powered by decentralized intelligence</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700">
            <Bell size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700">
            <Settings size={20} />
          </button>
          
          <button
            onClick={onConnect}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
              isConnected
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Wallet size={18} />
            <span>{isConnected ? 'Connected' : 'Connect Wallet'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
