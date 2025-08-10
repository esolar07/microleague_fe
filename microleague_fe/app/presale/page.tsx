"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import { Address, Avatar, Name, Identity, EthBalance} from '@coinbase/onchainkit/identity';
import  BuyToken from "@/components/token/BuyToken";
import { color } from '@coinbase/onchainkit/theme';
import '@coinbase/onchainkit/styles.css';
import PresaleBuy from '@/components/token/PresaleBuy';

export default function Presale() {
  return (
    <Container>
        <main className="grid min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <PresaleBuy />
        </main>
    </Container>
  );
}