import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MatchUpForm from "@/components/MatchUpForm"
import Link from "next/link"
import { ArrowLeft, Zap, Trophy, Users } from "lucide-react"

export function SimulatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-background to-secondary/20">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">Dream Matchup Simulator</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pick any two teams from any era and watch history unfold. Our AI-powered engine simulates every play.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 px-4 bg-secondary/10">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-4 text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Lightning Fast</h3>
              <p className="text-xs text-muted-foreground">Results in seconds</p>
            </Card>
            <Card className="p-4 text-center">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Real Stats</h3>
              <p className="text-xs text-muted-foreground">Authentic team data</p>
            </Card>
            <Card className="p-4 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Share Results</h3>
              <p className="text-xs text-muted-foreground">Post & debate outcomes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="flex-1 py-8 px-4">
        <div className="container max-w-4xl mx-auto">
            <MatchUpForm />
        </div>
      </section>

      {/* Popular Matchups */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Popular Matchups</h2>
            <p className="text-muted-foreground">See what the community is simulating</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">MLB</Badge>
                <Badge variant="outline">Classic</Badge>
              </div>
              <h3 className="font-semibold">1986 Mets vs 1927 Yankees</h3>
              <p className="text-sm text-muted-foreground">
                The Amazin' Mets take on Murderers' Row in this cross-era showdown.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Link href="/matchups/62">Try This Matchup</Link>
              </Button>
            </Card>
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">NFL</Badge>
                <Badge variant="outline">Dynasty</Badge>
              </div>
              <h3 className="font-semibold">2007 Patriots vs 1985 Bears</h3>
              <p className="text-sm text-muted-foreground">
                Perfect season offense meets legendary defense in this epic clash.
              </p>
             <Button variant="outline" size="sm" className="w-full">
                <Link href="/matchups/63">Try This Matchup</Link>
              </Button>
            </Card>
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">NBA</Badge>
                <Badge variant="outline">GOAT</Badge>
              </div>
              <h3 className="font-semibold">1996 Bulls vs 2017 Warriors</h3>
              <p className="text-sm text-muted-foreground">
                Jordan's championship team faces Curry's record-breaking squad.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Link href="/matchups/62">Try This Matchup</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}