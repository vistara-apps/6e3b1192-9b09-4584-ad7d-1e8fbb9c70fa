'use client';

import { TrendReport } from '@/lib/types';
import { TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react';

interface TrendCardProps {
  trend: TrendReport;
}

export function TrendCard({ trend }: TrendCardProps) {
  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high':
        return 'text-success bg-success/10';
      case 'medium':
        return 'text-accent bg-accent/10';
      default:
        return 'text-muted bg-muted/10';
    }
  };

  return (
    <div className="bg-surface rounded-lg border border-primary/10 p-5 hover:border-primary/30 transition-all duration-300 shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{trend.productName}</h3>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDemandColor(trend.marketDemand)}`}>
              {trend.marketDemand.toUpperCase()}
            </span>
            <span className="text-sm text-success font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              {trend.growthRate}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-primary">{trend.trendScore}</p>
          <p className="text-xs text-muted">Score</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted">
            <Users className="w-3.5 h-3.5" />
            <span className="text-xs">Competitors</span>
          </div>
          <p className="text-lg font-semibold">{trend.competitorCount}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted">
            <DollarSign className="w-3.5 h-3.5" />
            <span className="text-xs">Avg Price</span>
          </div>
          <p className="text-lg font-semibold">{trend.avgPrice}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted">
            <BarChart3 className="w-3.5 h-3.5" />
            <span className="text-xs">Potential</span>
          </div>
          <p className="text-lg font-semibold text-success">High</p>
        </div>
      </div>
    </div>
  );
}
