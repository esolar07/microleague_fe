import React from 'react';
import Image from "next/image";
import Container from "@/components/layout/Container";
import { 
    ConnectWallet, 
    Wallet, 
    WalletDropdownFundLink,
    WalletDropdown,
    WalletDropdownDisconnect
} from '@coinbase/onchainkit/wallet';
import { Avatar, Identity, Name, EthBalance, Address } from '@coinbase/onchainkit/identity';

const NavBar = () => {
    return (
        <nav className="sticky top-0 border-b z-50 bg-gray-700">
            <Container>
                <div className="flex justify-between items-center gap-8">
                    <div className={"flex items-center gap-1 cursor-pointer"}>
                        <Image
                            src="/microleague-sports-logo.png"
                            alt="Microleague Sport Logo"
                            width={200}
                            height={100}
                            style={{objectFit: "contain"}}
                            priority
                        ></Image>
                    </div>
                    <div className="flex gap-5 sm:gap-8 items-center text-white">
                        <Wallet>
                            <WalletDropdown>
                            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                                <Avatar />
                                <Name />
                                <Address />
                                <EthBalance />
                            </Identity>
                            <WalletDropdownDisconnect />
                            </WalletDropdown>
                            <ConnectWallet />
                        </Wallet>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;