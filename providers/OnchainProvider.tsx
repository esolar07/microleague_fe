"use client";
// import React from 'react';
// import { OnchainKitProvider } from '@coinbase/onchainkit';
// import { baseSepolia, base } from 'wagmi/chains';
// export default function OnchainProvider({children}: {children: React.ReactNode}) {
//     const projectId = process.env.NEXT_PUBLIC_CDP_API_KEY; 

//   return (
//     <OnchainKitProvider 
//       apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY} 
//       projectId={projectId}
//       chain={baseSepolia}
//       config={{
//           appearance: {
//             name: 'Mircroleague Sports',        
//             mode: 'light',                 
//             theme: 'default',             
//           },
//           wallet: { 
//             display: 'modal', 
//             termsUrl: '', 
//             privacyUrl: '', 
//           },
//         }}
//     >
//       {children}
//     </OnchainKitProvider>
//   );
// }


import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { getConfig } from '@/config/wagmi';
import { baseSepolia, base } from 'wagmi/chains';

const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'base-sepolia';
const chain = chainName === 'base' ? base : baseSepolia;
// const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;

// const wagmiConfig = createConfig({
//   chains: [chain],
//   transports: {
//     [chain.id]: http(rpcUrl),
//   },
//   multiInjectedProviderDiscovery: true,
// });

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={getConfig()}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider 
          chain={chain}
          config={{
          appearance: {
            name: 'Mircroleague Sports',        
            mode: 'light',                 
            theme: 'default',             
          },
          wallet: { 
            display: 'modal', 
            termsUrl: '', 
            privacyUrl: '', 
          },
        }}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
