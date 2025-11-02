'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { WalletButton } from '@/components/WalletButton';
import { SearchBar } from '@/components/SearchBar';
import { AdCard } from '@/components/AdCard';
import { TrendCard } from '@/components/TrendCard';
import { StatsCard } from '@/components/StatsCard';
import { mockAdInsights, mockTrendReports } from '@/lib/mock-data';
import { 
  TrendingUp, 
  Zap, 
  Target, 
  DollarSign,
  BarChart3,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'ads' | 'trends'>('ads');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleAnalyze = (id: string) => {
    console.log('Analyzing ad:', id);
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-lg border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">AdScout X</h1>
                <p className="text-xs text-muted hidden sm:block">X Layer Powered</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <WalletButton />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-surface rounded-lg transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Discover Winning Products with{' '}
              <span className="gradient-text">AI-Powered Insights</span>
            </h2>
            <p className="text-lg text-muted mb-8">
              Analyze social media ads, identify trends, and validate market demand on X Layer
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Active Ads Tracked"
              value="12.4K"
              change="+23%"
              icon={BarChart3}
              trend="up"
            />
            <StatsCard
              title="Avg Engagement"
              value="87.5"
              change="+12%"
              icon={TrendingUp}
              trend="up"
            />
            <StatsCard
              title="Queries Today"
              value="1,247"
              change="+8%"
              icon={Zap}
              trend="up"
            />
            <StatsCard
              title="Success Rate"
              value="94%"
              change="+5%"
              icon={Target}
              trend="up"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 p-1 bg-surface rounded-lg border border-primary/10 w-fit">
          <button
            onClick={() => setActiveTab('ads')}
            className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${
              activeTab === 'ads'
                ? 'bg-primary text-white shadow-button'
                : 'text-muted hover:text-fg'
            }`}
          >
            Top Ads
          </button>
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${
              activeTab === 'trends'
                ? 'bg-primary text-white shadow-button'
                : 'text-muted hover:text-fg'
            }`}
          >
            Trending Products
          </button>
        </div>

        {/* Content Grid */}
        {activeTab === 'ads' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAdInsights.map((ad) => (
              <AdCard key={ad.id} ad={ad} onAnalyze={handleAnalyze} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockTrendReports.map((trend) => (
              <TrendCard key={trend.id} trend={trend} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted">
              <span>Powered by</span>
              <span className="font-semibold text-primary">X Layer</span>
              <span>•</span>
              <span>Built with OnchainKit</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Docs
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Support
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
