import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Trophy, Clock, ThumbsUp, MessageCircle } from "lucide-react"

export function RecapsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight">Fan Recaps</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive into epic game stories written by our community. Every simulation tells a tale worth sharing.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search recaps..." 
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-secondary/10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="default" size="sm">All Sports</Button>
            <Button variant="outline" size="sm">MLB</Button>
            <Button variant="outline" size="sm">NFL</Button>
            <Button variant="outline" size="sm">NBA</Button>
            <Button variant="outline" size="sm">NHL</Button>
            <Button variant="outline" size="sm">Most Popular</Button>
            <Button variant="outline" size="sm">Recent</Button>
          </div>
        </div>
      </section>

      {/* Featured Recap */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge variant="retro" className="mb-4">Featured Recap</Badge>
            <h2 className="text-2xl font-bold">Community Spotlight</h2>
          </div>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  <Badge variant="outline">MLB</Badge>
                  <Badge variant="outline">1986</Badge>
                  <Badge variant="outline">World Series</Badge>
                </div>
                <h3 className="text-2xl font-bold">The Buckner Redemption: Game 7 Alternate History</h3>
                <p className="text-muted-foreground">
                  What if Bill Buckner made that play? In this thrilling alternate timeline, the 1986 Red Sox 
                  complete their championship run in a nail-biting Game 7 against the Mets. A masterpiece 
                  of sports storytelling that had the entire community on the edge of their seats.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>1.2k likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>89 comments</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  by @BaseballHistorian • 3 days ago
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-6 border">
                  <h4 className="font-semibold mb-3">Final Score</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Boston Red Sox</span>
                      <span className="font-mono text-lg font-bold">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>New York Mets</span>
                      <span className="font-mono text-lg">6</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Read Full Recap
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Recaps Grid */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Recaps</h2>
            <p className="text-xl text-muted-foreground">
              Fresh stories from our community of sports storytellers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">NFL</Badge>
                <Badge variant="outline">2007</Badge>
              </div>
              <h3 className="font-semibold">Perfect Season Showdown</h3>
              <p className="text-sm text-muted-foreground">
                2007 Patriots vs. 1972 Dolphins - which undefeated team reigns supreme in this epic cross-era battle?
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>5 min read</span>
                <span>892 likes</span>
                <span>67 comments</span>
              </div>
              <div className="text-xs text-muted-foreground">by @GridironGuru • 1 day ago</div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">NBA</Badge>
                <Badge variant="outline">1996</Badge>
              </div>
              <h3 className="font-semibold">Bulls vs. Warriors: Era Clash</h3>
              <p className="text-sm text-muted-foreground">
                Jordan's 72-win Bulls take on Curry's record-breaking Warriors in a simulation for the ages.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>7 min read</span>
                <span>1.1k likes</span>
                <span>134 comments</span>
              </div>
              <div className="text-xs text-muted-foreground">by @CourtVision • 2 days ago</div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">MLB</Badge>
                <Badge variant="outline">1927</Badge>
              </div>
              <h3 className="font-semibold">Murderers' Row Meets Modern Power</h3>
              <p className="text-sm text-muted-foreground">
                The legendary 1927 Yankees face off against the 2019 Astros in a battle of offensive juggernauts.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>6 min read</span>
                <span>743 likes</span>
                <span>92 comments</span>
              </div>
              <div className="text-xs text-muted-foreground">by @DiamondDreamer • 3 days ago</div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">NHL</Badge>
                <Badge variant="outline">1980</Badge>
              </div>
              <h3 className="font-semibold">Miracle on Ice: The Sequel</h3>
              <p className="text-sm text-muted-foreground">
                What if the 1980 US Olympic team faced the Soviet Union again? A heartwarming alternate history.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>9 min read</span>
                <span>2.1k likes</span>
                <span>201 comments</span>
              </div>
              <div className="text-xs text-muted-foreground">by @IceHistorian • 4 days ago</div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">NFL</Badge>
                <Badge variant="outline">1985</Badge>
              </div>
              <h3 className="font-semibold">The Super Bowl Shuffle Showdown</h3>
              <p className="text-sm text-muted-foreground">
                The dominant 1985 Bears defense meets the high-powered 2013 Broncos offense in Denver.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>4 min read</span>
                <span>567 likes</span>
                <span>78 comments</span>
              </div>
              <div className="text-xs text-muted-foreground">by @DefenseWins • 5 days ago</div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">NBA</Badge>
                <Badge variant="outline">2016</Badge>
              </div>
              <h3 className="font-semibold">The Block Heard 'Round the World</h3>
              <p className="text-sm text-muted-foreground">
                Reliving LeBron's legendary Game 7 performance, but this time against the 1996 Bulls.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>8 min read</span>
                <span>1.8k likes</span>
                <span>156 comments</span>
              </div>
              <div className="text-xs text-muted-foreground">by @KingJamesFan • 6 days ago</div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Recaps
            </Button>
          </div>
        </div>
      </section>

      {/* Write Your Own */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Got a Story to Tell?</h2>
            <p className="text-xl opacity-90">
              Run a simulation and share your epic recap with the community. Earn MLC tokens for popular stories!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary">
              <Link href="/simulate">Start Simulating</Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn About Rewards
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}