import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { MarketPredictions } from './components/MarketPredictions';
import { RiskManagement } from './components/RiskManagement';
import { AutomatedTrading } from './components/AutomatedTrading';
import { Portfolio } from './components/Portfolio';
import { Governance } from './components/Governance';
import { Header } from './components/Header';

type ActiveTab = 'dashboard' | 'predictions' | 'risk' | 'trading' | 'portfolio' | 'governance';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isConnected, setIsConnected] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'predictions':
        return <MarketPredictions />;
      case 'risk':
        return <RiskManagement />;
      case 'trading':
        return <AutomatedTrading />;
      case 'portfolio':
        return <Portfolio />;
      case 'governance':
        return <Governance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 flex flex-col">
          <Header isConnected={isConnected} onConnect={() => setIsConnected(!isConnected)} />
          <main className="flex-1 p-6 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
