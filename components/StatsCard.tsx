'use client';

import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatsCard({ title, value, change, icon: Icon, trend = 'neutral' }: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-error';
      default:
        return 'text-muted';
    }
  };

  return (
    <div className="bg-surface rounded-lg border border-primary/10 p-5 hover:border-primary/30 transition-all duration-300 shadow-card">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2.5 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {change && (
          <span className={`text-sm font-semibold ${getTrendColor()}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-sm text-muted">{title}</p>
    </div>
  );
}
