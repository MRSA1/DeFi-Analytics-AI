import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Bot, 
  Briefcase, 
  Vote,
  Home
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: any) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'predictions', label: 'AI Predictions', icon: TrendingUp },
  { id: 'risk', label: 'Risk Management', icon: Shield },
  { id: 'trading', label: 'Auto Trading', icon: Bot },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'governance', label: 'Governance', icon: Vote },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold">AI DeFi</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
