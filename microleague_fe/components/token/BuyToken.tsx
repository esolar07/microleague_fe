import { Buy } from '@coinbase/onchainkit/buy'; 
import type { Token } from '@coinbase/onchainkit/token';

export default function BuyTo() { 
  const microleagueToken: Token = {
    name: 'Microleague Coin',
    address: '0x4ed4e862860bed51a9570b96d89af5e1b0efefed',
    symbol: 'MLC',
    decimals: 18,
    image:'',
    chainId: 8453,
  };

  return ( 
    <Buy toToken={microleagueToken} />
  ) 
}
