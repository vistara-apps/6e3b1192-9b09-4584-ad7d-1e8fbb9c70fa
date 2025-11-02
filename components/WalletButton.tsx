'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Wallet, ChevronDown, LogOut } from 'lucide-react';
import { useState } from 'react';

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [showMenu, setShowMenu] = useState(false);

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (isConnected && address) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-200"
        >
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm font-medium">{formatAddress(address)}</span>
          <ChevronDown className="w-4 h-4 text-muted" />
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-surface rounded-lg border border-primary/20 shadow-card overflow-hidden z-50">
            <button
              onClick={() => {
                disconnect();
                setShowMenu(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-3 hover:bg-primary/10 transition-colors duration-200 text-left"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Disconnect</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-6 py-2.5 bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-button font-medium"
      >
        <Wallet className="w-4 h-4" />
        <span>Connect Wallet</span>
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-56 bg-surface rounded-lg border border-primary/20 shadow-card overflow-hidden z-50">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => {
                connect({ connector });
                setShowMenu(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors duration-200 text-left"
            >
              <Wallet className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{connector.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
