// @noErrors: 2554
import { ReactNode } from 'react';
import { http, cookieStorage, createStorage, createConfig } from 'wagmi';
import { baseSepolia, base } from 'wagmi/chains';
import { coinbaseWallet,injected, walletConnect } from 'wagmi/connectors';

const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'base-sepolia';
const chain = chainName === 'base' ? base : baseSepolia;
const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;
const wcProjectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;
const appName = 'Microleague Presale';
const transports = {
  [base.id]: http(rpcUrl),
  [baseSepolia.id]: http(rpcUrl),
} as const;

export function getConfig() {
  return  createConfig({
  chains: [baseSepolia],
  storage: createStorage({
      storage: cookieStorage,
    }),
  ssr: true,
  transports,
  multiInjectedProviderDiscovery: true,
  connectors: [
    injected(),
    coinbaseWallet({ appName, preference: 'all' }),
    walletConnect({ projectId: wcProjectId, showQrModal: true }),
  ],
});
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}