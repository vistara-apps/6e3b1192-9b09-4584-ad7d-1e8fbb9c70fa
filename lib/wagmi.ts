import { http, createConfig } from 'wagmi';
import { xlayer } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo-project-id';

export const config = createConfig({
  chains: [xlayer],
  connectors: [
    injected({ target: 'metaMask' }),
    walletConnect({ projectId }),
  ],
  transports: {
    [xlayer.id]: http('https://rpc.xlayer.tech'),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
