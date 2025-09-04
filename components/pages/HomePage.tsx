"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Play, Users, Trophy } from "lucide-react"
import { useRouter } from 'next/navigation';
import { createMatchUp, sendMatchUpToDiscord } from '@/services/api';
import MatchupCard from "../MatchupCard";

export function HomePage() {
  const router = useRouter();
  const createQuickMatchup = async () => {
    const matchUpDetails = await createMatchUp({
        sport: "baseball",
        homeTeamSeason: "1986",
        homeTeamName: "Mets",
        awayTeamSeason: "1927",
        awayTeamName: "Yankees",
    });
        
    if (matchUpDetails.id) {
        sendMatchUpToDiscord(matchUpDetails);
        router.push(`/simulate/${matchUpDetails.id}`);
    }
  }
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight">MicroLeague Sports</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The original 1980s simulation classic is back—now in the cloud, across every sport, and powered by
              real-data showdowns.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="/simulate">
                Sim Your Dream Matchup
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/community">
                Join the Clubhouse
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-mono font-bold text-lg">
                1
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Select Teams</h3>
                <p className="text-muted-foreground">Pick any franchise or era—from the '86 Mets to the '23 Chiefs.</p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-mono font-bold text-lg">
                2
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Run Simulation</h3>
                <p className="text-muted-foreground">
                  Our engine crunches stats, rules, and even park factors in seconds.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-mono font-bold text-lg">
                3
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Share & Debate</h3>
                <p className="text-muted-foreground">
                  Post the box score, write a recap, and settle the "What-if?" once and for all.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Simulation */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Run a Demo Simulation</h2>
            <p className="text-xl text-muted-foreground">Choose two legendary teams, hit Sim, and preview the magic.</p>
          </div>
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Team A</label>
                  <div className="p-3 border rounded-md bg-background text-center">
                    <div className="font-semibold">1986 Mets</div>
                    <div className="text-sm text-muted-foreground">MLB • Regular Season</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Team B</label>
                  <div className="p-3 border rounded-md bg-background text-center">
                    <div className="font-semibold">1927 Yankees</div>
                    <div className="text-sm text-muted-foreground">MLB • Regular Season</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full" onClick={createQuickMatchup}>
                  Simulate Game
                  {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">From Floppies to Fantasy Metaverse</h2>
          </div>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge variant="retro">1984</Badge>
                <h3 className="text-xl font-semibold">The Beginning</h3>
                <p className="text-muted-foreground">
                  MicroLeague Baseball ships on Commodore 64; the first MLB-licensed video game.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">💾</div>
                <div className="text-sm text-muted-foreground">Original floppy disk era</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-muted rounded-lg p-8 text-center md:order-1">
                <div className="text-4xl mb-2">🤼</div>
                <div className="text-sm text-muted-foreground">Wrestling expansion</div>
              </div>
              <div className="space-y-4 md:order-2">
                <Badge variant="retro">1987</Badge>
                <h3 className="text-xl font-semibold">Beyond Baseball</h3>
                <p className="text-muted-foreground">MicroLeague Wrestling body-slams its way onto Amiga & Atari.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge variant="retro">1991</Badge>
                <h3 className="text-xl font-semibold">The Final Update</h3>
                <p className="text-muted-foreground">
                  Final DOS update drops; fans print box scores bigger than their dorm fridges.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">🖨️</div>
                <div className="text-sm text-muted-foreground">Dot-matrix printouts</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center md:order-1">
                <div className="text-4xl mb-2">🌐</div>
                <div className="text-sm text-muted-foreground">Cloud-powered revival</div>
              </div>
              <div className="space-y-4 md:order-2">
                <Badge variant="success">2025</Badge>
                <h3 className="text-xl font-semibold">The Revival</h3>
                <p className="text-muted-foreground">
                  MicroLeague is reborn online—cross-sport, cross-era, community-first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Fan Recaps */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Popular Matchups</h2>
            <p className="text-xl text-muted-foreground">See how the community is rewriting sports history.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <MatchupCard
              sport="baseball"
              homeTeamSeason="1986"
              homeTeamName="Mets"
              awayTeamSeason="1986"
              awayTeamName="Red Sox"
              badges={["MLB", "Classic"]}
              description="What if Buckner made the play? A thrilling alternate ending to the '86 World Series."
            />
            <MatchupCard
              sport="football"
              homeTeamSeason="2007"
              homeTeamName="Patriots"
              awayTeamSeason="1972"
              awayTeamName="Dolphins"
              badges={["NFL", "Dynasty", "Perfect Season"]}
              description="2007 Patriots vs. 1972 Dolphins - which undefeated team reigns supreme?"
            />
            <MatchupCard
              sport="basketball"
              homeTeamSeason="1996"
              homeTeamName="Bulls"
              awayTeamSeason="2010"
              awayTeamName="Lakers"
              badges={["NBA", "Goat"]}
              description="Championship team face-off - Jordan vs. Kobe in an epic simulation."
            />
          </div>
          {/* <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/recaps">
                View All Recaps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get Beta Invites & Early-Access Coins</h2>
            <p className="text-xl opacity-90">
              Drop your email to draft early, earn rewards, and vote on new features.
            </p>
          </div>
          <Card className="p-6 max-w-md mx-auto bg-background text-foreground">
            <form className="space-y-4">
              <Input type="email" placeholder="Enter your email address" className="w-full" />
              <Button type="submit" className="w-full">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}