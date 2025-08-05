import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity, AlertTriangle } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { PredictionChart } from './PredictionChart';
import { MarketOverview } from './MarketOverview';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Portfolio Value"
          value="$147,582"
          change="+12.5%"
          trend="up"
          icon={<DollarSign size={20} />}
        />
        <MetricCard
          title="AI Prediction Accuracy"
          value="87.3%"
          change="+2.1%"
          trend="up"
          icon={<Activity size={20} />}
        />
        <MetricCard
          title="Active Strategies"
          value="7"
          change="2 new"
          trend="up"
          icon={<TrendingUp size={20} />}
        />
        <MetricCard
          title="Risk Score"
          value="Medium"
          change="Stable"
          trend="neutral"
          icon={<AlertTriangle size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PredictionChart />
        </div>
        <div>
          <MarketOverview />
        </div>
      </div>
    </div>
  );
};
