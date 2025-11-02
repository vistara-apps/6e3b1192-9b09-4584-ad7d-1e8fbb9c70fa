export interface AdInsight {
  id: string;
  platform: 'facebook' | 'instagram' | 'tiktok';
  title: string;
  imageUrl: string;
  engagementScore: number;
  likes: number;
  shares: number;
  comments: number;
  estimatedRevenue: string;
  productCategory: string;
  timestamp: Date;
}

export interface TrendReport {
  id: string;
  productName: string;
  trendScore: number;
  growthRate: string;
  marketDemand: 'high' | 'medium' | 'low';
  competitorCount: number;
  avgPrice: string;
}

export interface UserSubscription {
  tier: 'free' | 'pro' | 'enterprise';
  queriesRemaining: number;
  expiresAt: Date | null;
}

export interface QueryResult {
  queryId: string;
  type: 'engagement' | 'trend' | 'supplier' | 'demand';
  status: 'pending' | 'completed' | 'failed';
  data: any;
  cost: string;
  timestamp: Date;
}
