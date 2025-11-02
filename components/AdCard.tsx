'use client';

import { AdInsight } from '@/lib/types';
import { ThumbsUp, Share2, MessageCircle, TrendingUp, Star } from 'lucide-react';

interface AdCardProps {
  ad: AdInsight;
  onAnalyze?: (id: string) => void;
}

export function AdCard({ ad, onAnalyze }: AdCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-success';
    if (score >= 75) return 'text-accent';
    return 'text-muted';
  };

  return (
    <div className="bg-surface rounded-lg border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        <img
          src={ad.imageUrl}
          alt={ad.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-bg/90 backdrop-blur-sm rounded-full border border-primary/20">
          <Star className="w-3.5 h-3.5 text-accent fill-accent" />
          <span className="text-xs font-semibold">Featured</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg leading-tight">{ad.title}</h3>
            <span className={`text-2xl font-bold ${getScoreColor(ad.engagementScore)}`}>
              {ad.engagementScore}
            </span>
          </div>
          <p className="text-sm text-muted">{ad.productCategory}</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{ad.likes.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Share2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{ad.shares.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{ad.comments.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-primary/10">
          <div>
            <p className="text-xs text-muted mb-0.5">Est. Revenue</p>
            <p className="text-lg font-bold text-success">{ad.estimatedRevenue}</p>
          </div>
          <button
            onClick={() => onAnalyze?.(ad.id)}
            className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 text-sm font-medium"
          >
            <TrendingUp className="w-4 h-4" />
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}
