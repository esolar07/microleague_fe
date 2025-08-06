"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import { 
    ConnectWallet, 
    Wallet, 
    WalletDropdown, 
    WalletDropdownDisconnect,
    WalletAdvancedAddressDetails,
    WalletAdvancedTokenHoldings,
    WalletAdvancedTransactionActions,
    WalletAdvancedWalletActions,
    WalletDropdownFundLink, 
} from '@coinbase/onchainkit/wallet';
import { Address, Avatar, Name, Identity, EthBalance} from '@coinbase/onchainkit/identity';
import  BuyToken from "@/components/token/BuyToken";
import { color } from '@coinbase/onchainkit/theme';
import '@coinbase/onchainkit/styles.css';

export default function Presale() {
  return (
    <Container>
        <main className="grid min-h-screen p-8 pb-20 gap-16 sm:p-20">
            {/* <Wallet>
                <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
                </ConnectWallet>
                <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address className={color.foregroundMuted} />
                    <EthBalance />
                </Identity>
                <WalletAdvancedWalletActions />
                <WalletAdvancedAddressDetails />
                <WalletAdvancedTransactionActions />
                <WalletAdvancedTokenHoldings />
                <WalletDropdownFundLink />
                <WalletDropdownDisconnect />
                </WalletDropdown>
            </Wallet> */}
            <div className="mx-auto">
            <BuyToken />
            </div>
        </main>
    </Container>
  );
}