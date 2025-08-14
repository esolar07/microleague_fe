import { Buy } from '@coinbase/onchainkit/buy'; 
import type { Token } from '@coinbase/onchainkit/token';

export default function BuyToken() { 
    const handlePurchaseSuccess = (data: any) => {
        console.log('Purchase successful!', data);
        // Implement logic to display success message or fulfill order
    };
  const microleagueToken: Token = {
    name: 'Microleague Coin',
    address: '0x20fe1B30dBa3E8789cC3ceB7eFD3789C774660c6',
    symbol: 'MLC',
    decimals: 18,
    image:'',
    // chainId: 8453,
    chainId: 84532, // baseSepolia
  };

  return ( 
    <Buy toToken={microleagueToken} onStatus={handlePurchaseSuccess}/>
  ) 
}
