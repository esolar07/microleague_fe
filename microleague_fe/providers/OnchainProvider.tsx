"use client";
import React from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { baseSepolia, base } from 'wagmi/chains';
export default function OnchainProvider({children}: {children: React.ReactNode}) {
    const projectId = process.env.NEXT_PUBLIC_CDP_API_KEY; 

  return (
    <OnchainKitProvider 
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY} 
      projectId={projectId}
      chain={baseSepolia}
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
  );
}