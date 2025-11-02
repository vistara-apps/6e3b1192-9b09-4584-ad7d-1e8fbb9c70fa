# AdScout X - AI-Powered Dropshipping Insights on X Layer

A production-ready Base Mini App built with Next.js 15, OnchainKit, and X Layer blockchain integration.

## Features

- 🎯 **Ad Analytics**: Real-time engagement scoring for social media ads
- 📈 **Trend Identification**: Discover emerging product opportunities
- 💰 **Market Intelligence**: Supplier mapping and competitor analysis
- ⚡ **X Layer Integration**: Low-cost micro-transactions with OKB
- 🔐 **Wallet Support**: OKX Wallet and WalletConnect integration
- 📱 **Mobile-First**: Responsive design optimized for all devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: X Layer (Chain ID: 196)
- **Wallet**: OnchainKit, Wagmi, OKX Wallet
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety
- **State**: React Query for data fetching

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your API keys.

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## X Layer Configuration

- **Network**: X Layer
- **Chain ID**: 196
- **RPC**: https://rpc.xlayer.tech
- **Explorer**: https://www.okx.com/explorer/xlayer
- **Gas Token**: OKB

## Project Structure

```
adscout-x/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main dashboard page
│   ├── providers.tsx       # Wagmi & OnchainKit setup
│   └── globals.css         # Global styles & BASE theme
├── components/
│   ├── WalletButton.tsx    # Wallet connection UI
│   ├── SearchBar.tsx       # Search interface
│   ├── AdCard.tsx          # Ad insight display
│   ├── TrendCard.tsx       # Trend report display
│   └── StatsCard.tsx       # Statistics display
├── lib/
│   ├── wagmi.ts            # Wagmi configuration
│   ├── types.ts            # TypeScript interfaces
│   └── mock-data.ts        # Sample data
└── public/
    └── .well-known/
        └── farcaster.json  # Mini App manifest
```

## Key Features Implementation

### Wallet Connection
- OKX Wallet integration for X Layer
- WalletConnect for broader compatibility
- Automatic network switching to X Layer

### Ad Analytics
- Engagement scoring algorithm
- Real-time metrics tracking
- Visual performance indicators

### Micro-transactions
- Pay-per-query model using OKB
- Low gas costs on X Layer
- Fast transaction finality

## Design System

The app uses the BASE theme with:
- **Primary**: #0052ff (Base blue)
- **Background**: Dark blue (hsl(220, 40%, 8%))
- **Accent**: Orange (hsl(24, 95%, 53%))
- **Success**: Green (hsl(140, 70%, 45%))

## Deployment

Build for production:
```bash
npm run build
npm start
```

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- GitHub Issues
- Twitter: @adscoutx
- Discord: [Join our community]
