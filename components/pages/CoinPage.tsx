"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Coins, Users, Zap } from "lucide-react"
import { 
    ConnectWallet, 
    Wallet, 
    WalletDropdownFundLink,
    WalletDropdown,
    WalletDropdownDisconnect
} from '@coinbase/onchainkit/wallet';
import { Avatar, Identity, Name, EthBalance, Address } from '@coinbase/onchainkit/identity';
import Link from "next/link"

export function CoinPage() {
  return (
    <div className="flex flex-col">
      {/* Security Banner */}
      <div className="bg-destructive/10 border-destructive/20 border-b px-4 py-3">
        <div className="container max-w-6xl mx-auto flex items-center gap-2 text-center">
          <AlertTriangle className="h-4 w-4" />
          <span className="text-sm">
            <strong>Security Notice:</strong> Official MicroLeague Coin (MLC) presale. Beware of impostor sites and contracts.
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="retro" className="mb-4">
                  MLC PRESALE LIVE
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight">MicroLeague Coin</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Power the future of sports simulation. Earn rewards for creating content, vote on new features, and
                  own a piece of gaming history.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl">Buy MLC Now</Button>
              </div>
            </div>
            <div className="lg:order-2">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Presale Active</h3>
                  <div className="text-4xl font-mono">$0.10</div>
                  <p className="text-muted-foreground">per MLC token</p>
                      <Wallet className="w-full">
                      <WalletDropdown>
                      <Identity hasCopyAddressOnClick>
                          <Name className="text-white"/>
                          <Address className="text-white"/>
                          <EthBalance className="text-white"/>
                      </Identity>
                      <WalletDropdownDisconnect />
                      </WalletDropdown>
                      <ConnectWallet className="w-full text-center bg-primary text-primary-foreground hover:bg-primary/90" />
                    </Wallet>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why MicroLeague Coin?</h2>
            <p className="text-xl text-muted-foreground">
              More than just a token—it's your key to the sports simulation ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                <Coins className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Creator Rewards</h3>
                <p className="text-muted-foreground">
                  Earn MLC for writing recaps, creating viral simulations, and engaging the community.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Governance Rights</h3>
                <p className="text-muted-foreground">
                  Vote on new sports, features, and platform decisions. Your voice shapes MicroLeague's future.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Premium Features</h3>
                <p className="text-muted-foreground">
                  Access advanced simulation modes, exclusive tournaments, and early feature previews.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
            <p className="text-xl text-muted-foreground">
              Transparent distribution designed for long-term community growth.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Token Distribution</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Community Rewards</span>
                  <span className="font-mono">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Presale</span>
                  <span className="font-mono">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Development</span>
                  <span className="font-mono">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team</span>
                  <span className="font-mono">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Marketing</span>
                  <span className="font-mono">5%</span>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Supply</span>
                  <span className="font-mono">1,000,000,000 MLC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Presale Price</span>
                  <span className="font-mono">$0.10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Launch Price</span>
                  <span className="font-mono">$0.15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Blockchain</span>
                  <span className="font-mono">Base</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Buy MLC</h2>
            <p className="text-xl text-muted-foreground">Get started in just a few simple steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-mono font-bold text-lg">
                1
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Connect Wallet</h3>
                <p className="text-sm text-muted-foreground">
                  Use MetaMask, WalletConnect, or any supported wallet.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-mono font-bold text-lg">
                2
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Choose Currency</h3>
                <p className="text-sm text-muted-foreground">
                  Pay with ETH, USDT, or USDC.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-mono font-bold text-lg">
                3
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Confirm Purchase</h3>
                <p className="text-sm text-muted-foreground">
                  Review and confirm in your wallet.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-mono font-bold text-lg">
                4
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Claim Tokens</h3>
                <p className="text-sm text-muted-foreground">
                  Available after presale ends.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-16 px-4 bg-destructive/5">
        <div className="container max-w-4xl mx-auto">
          <Card className="p-8 border-destructive/20">
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-destructive mt-1" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Important Security Information</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Risk Warning:</strong> Crypto assets are high risk. This site is informational and not
                    financial advice.
                  </p>
                  <p>
                    <strong>Never share:</strong> Your private keys, seed phrases, or wallet passwords with anyone.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}