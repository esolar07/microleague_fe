'use client';

import { useMemo, useState } from 'react';
import { useAccount, useReadContract, useWalletClient, useWriteContract } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { base, baseSepolia } from 'wagmi/chains';
import { presaleUsdAbi } from '@/lib/abis/presaleUsd';
import { erc20Abi } from '@/lib/abis/erc20';
import { Transaction, TransactionButton } from '@coinbase/onchainkit/transaction';

const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'base-sepolia';
const chainId = chainName === 'base' ? base.id : baseSepolia.id;

const PRESALE = process.env.NEXT_PUBLIC_PRESALE_ADDRESS as `0x${string}`;
const STABLE  = process.env.NEXT_PUBLIC_STABLE_ADDRESS as `0x${string}`;

const TOKEN_DECIMALS  = Number(process.env.NEXT_PUBLIC_TOKEN_DECIMALS || 18);
const STABLE_DECIMALS = Number(process.env.NEXT_PUBLIC_STABLE_DECIMALS || 6);
const tokenScale = 10n ** BigInt(TOKEN_DECIMALS);

export default function PresaleBuyUsd() {
  const { address, chain } = useAccount();
  const [tokensStr, setTokensStr] = useState('100'); // desired tokens

  // Reads (same as your code)
  const { data: price } = useReadContract({
    address: PRESALE, abi: presaleUsdAbi, functionName: 'pricePerToken', chainId,
  });
  const { data: sold } = useReadContract({
    address: PRESALE, abi: presaleUsdAbi, functionName: 'tokensSold', chainId,
  });
  const { data: cap } = useReadContract({
    address: PRESALE, abi: presaleUsdAbi, functionName: 'hardCapTokens', chainId,
  });
  const { data: start } = useReadContract({
    address: PRESALE, abi: presaleUsdAbi, functionName: 'start', chainId,
  });
  const { data: end } = useReadContract({
    address: PRESALE, abi: presaleUsdAbi, functionName: 'end', chainId,
  });
  const { data: finalized } = useReadContract({
    address: PRESALE, abi: presaleUsdAbi, functionName: 'finalized', chainId,
  });

  // Stable token metadata for Permit domain
  const { data: tokenName } = useReadContract({
    address: STABLE,
    abi: [{ type:'function', name:'name', stateMutability:'view', inputs:[], outputs:[{ type:'string' }]}] as const,
    functionName: 'name',
    chainId,
  });

  // ERC20Permit nonce
  const { data: nonce } = useReadContract({
    address: STABLE,
    abi: [{ type:'function', name:'nonces', stateMutability:'view', inputs:[{ type:'address'}], outputs:[{ type:'uint256'}]}] as const,
    functionName: 'nonces',
    args: [address ?? '0x0000000000000000000000000000000000000000'],
    chainId,
    query: { enabled: !!address },
  });

  // Allowance (for fallback approve flow)
  const { data: allowance } = useReadContract({
    address: STABLE, abi: erc20Abi, functionName: 'allowance',
    args: [address ?? '0x0000000000000000000000000000000000000000', PRESALE], chainId,
    query: { enabled: !!address },
  });

  const tokenAmount = useMemo(() => {
    try { return parseUnits(tokensStr || '0', TOKEN_DECIMALS); } catch { return 0n; }
  }, [tokensStr]);

  const costStable = useMemo(() => {
    const p = (price as bigint) || 0n;
    if (p === 0n) return 0n;
    return (tokenAmount * p) / tokenScale;
  }, [tokenAmount, price]);

  const liveNow = useMemo(() => {
    const now = Math.floor(Date.now()/1000);
    return Number(start ?? 0n) <= now && now <= Number(end ?? 0n);
  }, [start, end]);

  const needsApproval = (allowance as bigint ?? 0n) < costStable;

  // Permit signing + buy
  const { data: walletClient } = useWalletClient();
  const { writeContractAsync } = useWriteContract();

  async function buyWithPermit() {
    if (!address || !walletClient || !chain?.id) return;
    if (!price) return;
    if (tokenAmount === 0n || costStable === 0n) return;

    const deadline = BigInt(Math.floor(Date.now() / 1000) + 10 * 60); // 10 min

    // Build EIP-712 domain
    const domainBase = {
      name: (tokenName as string) ?? 'USDC',
      chainId: chain.id,
      verifyingContract: STABLE,
    } as const;

    // USDC variants often use version "2". Try "2", fallback to "1".
    const types = {
      Permit: [
        { name: 'owner',   type: 'address' },
        { name: 'spender', type: 'address' },
        { name: 'value',   type: 'uint256' },
        { name: 'nonce',   type: 'uint256' },
        { name: 'deadline',type: 'uint256' },
      ],
    } as const;

    const message = {
      owner: address,
      spender: PRESALE,
      value: costStable,
      nonce: (nonce as bigint) ?? 0n,
      deadline,
    } as const;

    let signature: `0x${string}` | undefined;

    // Try version "2" then "1"
    try {
      signature = await walletClient.signTypedData({
        account: address,
        domain: { ...domainBase, version: '2' },
        types,
        primaryType: 'Permit',
        message,
      });
    } catch (e) {
      signature = await walletClient.signTypedData({
        account: address,
        domain: { ...domainBase, version: '1' },
        types,
        primaryType: 'Permit',
        message,
      });
    }

    // Split signature
    const r = `0x${signature.slice(2, 66)}` as `0x${string}`;
    const s = `0x${signature.slice(66, 130)}` as `0x${string}`;
    const v = Number(`0x${signature.slice(130, 132)}`);
    console.log(chainId)
    // Single-tx buy with permit
    await writeContractAsync({
      address: PRESALE,
      abi: presaleUsdAbi,
      functionName: 'buyExactWithStablePermit',
      args: [tokenAmount, deadline, v, r, s],
      chainId,
    });
  }

  return (
    <div style={{maxWidth:560, margin:'24px auto', padding:16, border:'1px solid #eee', borderRadius:12}}>
      <h3>Buy MLC with USDC</h3>

      <div style={{display:'grid', gap:8}}>
        <label>Tokens to buy</label>
        <input
          value={tokensStr}
          onChange={(e)=>setTokensStr(e.target.value)}
          placeholder="100"
          style={{padding:8, border:'1px solid #ccc', borderRadius:8}}
        />
        <div style={{fontSize:12, color:'#666'}}>
          Price: {formatUnits((price as bigint) ?? 0n, STABLE_DECIMALS)} USDC per token
        </div>
        <div style={{fontSize:12, color:'#666'}}>
          Cost: {formatUnits(costStable, STABLE_DECIMALS)} USDC
        </div>
        <div style={{fontSize:12, color:'#666'}}>
          Sold: {(sold as bigint ?? 0n).toString()} / {(cap as bigint ?? 0n).toString()}
        </div>
        <div style={{fontSize:12, color: liveNow ? '#0a0' : '#a00'}}>
          Status: {finalized ? 'Finalized' : liveNow ? 'Live' : 'Not live'}
        </div>
      </div>

      {/* One-click Permit buy */}
      <div style={{marginTop:16, display:'flex', gap:8, flexWrap:'wrap'}}>
        <button
          onClick={buyWithPermit}
          disabled={!address}
          style={{padding:'10px 14px', borderRadius:8, background:'#111', color:'#fff'}}
        >
          Buy with USDC (Permit)
        </button>

        {/* Fallback: Approve + Buy using OCK */}
        {needsApproval && address && (
          <Transaction
            chainId={chainId}
            contracts={[{
              address: STABLE,
              abi: erc20Abi as any,
              functionName: 'approve',
              args: [PRESALE, costStable],
            }]}
            disabled={!liveNow || Boolean(finalized) || costStable === 0n}
          >
            <TransactionButton text="Approve USDC" />
          </Transaction>
        )}
        <Transaction
          chainId={chainId}
          contracts={[{
            address: PRESALE,
            abi: presaleUsdAbi as any,
            functionName: 'buyExact',
            args: [tokenAmount],
          }]}
          disabled={!address || !liveNow || Boolean(finalized) || tokenAmount === 0n || costStable === 0n}
        >
          <TransactionButton text="Buy (fallback)" />
        </Transaction>
      </div>
    </div>
  );
}
