// 'use client';

// import { useEffect, useMemo, useState } from 'react';
// import { useAccount, useReadContract } from 'wagmi';
// import { formatEther, parseUnits } from 'viem';
// import { base, baseSepolia } from 'wagmi/chains';
// import { presaleAbi } from '@/lib/abis/presale';
// import { Transaction, TransactionButton } from '@coinbase/onchainkit/transaction';

// const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'base-sepolia';
// const chainId = chainName === 'base' ? base.id : baseSepolia.id;

// const PRESALE = process.env.NEXT_PUBLIC_PRESALE_ADDRESS as `0x${string}`;
// const PRICE  = BigInt(process.env.NEXT_PUBLIC_PRICE_WEI_PER_TOKEN || '0');
// const CAP    = BigInt(process.env.NEXT_PUBLIC_CAP_TOKENS || '0');

// export default function PresaleBuy() {
//   const { address } = useAccount();
//   const [decimals, setDecimals] = useState<number>(18); // we’ll fetch scale from contract read if you expose it
//   const tokenScale = useMemo(() => BigInt(10) ** BigInt(decimals), [decimals]);

//   const [tokensInput, setTokensInput] = useState<string>('1'); // desired tokens (whole units)
//   const tokensWei = useMemo(() => {
//     try { return parseUnits(tokensInput || '0', decimals); } catch { return 0n; }
//   }, [tokensInput, decimals]);

//   // reads
//   const { data: pricePerTokenWei } = useReadContract({
//     address: PRESALE,
//     abi: presaleAbi,
//     functionName: 'pricePerTokenWei',
//     chainId,
//   });

//   const { data: cap } = useReadContract({
//     address: PRESALE, abi: presaleAbi, functionName: 'hardCapTokens', chainId,
//   });

//   const { data: sold } = useReadContract({
//     address: PRESALE, abi: presaleAbi, functionName: 'tokensSold', chainId,
//   });

//   const { data: start } = useReadContract({
//     address: PRESALE, abi: presaleAbi, functionName: 'start', chainId,
//   });

//   const { data: end } = useReadContract({
//     address: PRESALE, abi: presaleAbi, functionName: 'end', chainId,
//   });

//   const { data: finalized } = useReadContract({
//     address: PRESALE, abi: presaleAbi, functionName: 'finalized', chainId,
//   });

//   // spend = tokens * price / scale
//   const spendWei = useMemo(() => {
//     const p = (pricePerTokenWei as bigint) ?? PRICE;
//     if (tokensWei === 0n || p === 0n) return 0n;
//     return (tokensWei * p) / tokenScale;
//   }, [tokensWei, tokenScale, pricePerTokenWei]);

//   const remaining = useMemo(() => {
//     if (!cap || !sold) return undefined;
//     return (cap as bigint) - (sold as bigint);
//   }, [cap, sold]);

//   const liveNow = useMemo(() => {
//     const now = Math.floor(Date.now()/1000);
//     return Number(start ?? 0n) <= now && now <= Number(end ?? 0n);
//   }, [start, end]);

//   return (
//     <div style={{maxWidth:560, margin:'24px auto', padding:16, border:'1px solid #eee', borderRadius:12}}>
//       <h3>Buy MLC (Presale)</h3>

//       <div style={{display:'grid', gap:8}}>
//         <label>Tokens to buy</label>
//         <input
//           value={tokensInput}
//           onChange={(e)=>setTokensInput(e.target.value)}
//           placeholder="1.0"
//           style={{padding:8, border:'1px solid #ccc', borderRadius:8}}
//         />
//         <div style={{fontSize:12, color:'#666'}}>
//           Price: {formatEther((pricePerTokenWei as bigint) ?? PRICE)} ETH per token
//         </div>
//         <div style={{fontSize:12, color:'#666'}}>
//           You’ll send: {formatEther(spendWei)} ETH
//         </div>
//         <div style={{fontSize:12, color:'#666'}}>
//           Sold: {sold?.toString() ?? '…'} / {cap?.toString() ?? '…'}
//         </div>
//         <div style={{fontSize:12, color: liveNow ? '#0a0' : '#a00'}}>
//           Sale status: {finalized ? 'Finalized' : liveNow ? 'Live' : 'Not live'}
//         </div>
//       </div>

//       <div style={{marginTop:16}}>
//         {/* OCK Transaction – constructs a single call to presale.buy() with value */}
//         <Transaction
//           chainId={chainId}
//           // You can add onStatusChange={(s)=>...} to handle UI state
//           contracts={[{
//             address: PRESALE,
//             abi: presaleAbi as any,
//             functionName: 'buy',
//             args: [],
//             value: spendWei.toString(), // in wei
//           }]}
//           disabled={!address || spendWei === 0n || !liveNow || Boolean(finalized)}
//         >
//           <TransactionButton
//             text={!address ? 'Connect Wallet' : !liveNow ? 'Not Live' : 'Buy'}
//           />
//         </Transaction>
//       </div>
//     </div>
//   );
// }
