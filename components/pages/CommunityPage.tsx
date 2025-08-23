import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MessageCircle, Users, Trophy, ExternalLink } from "lucide-react"

export function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight">Join the Clubhouse</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with fellow sports fans, share epic simulations, and debate the greatest matchups of all time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="https://discord.gg/microleague" target="_blank">
                Join Discord
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="https://t.me/microleague" target="_blank">
                Telegram Group
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <div className="space-y-2">
                <div className="text-3xl font-bold font-mono">12,500+</div>
                <h3 className="font-semibold text-lg">Community Members</h3>
                <p className="text-muted-foreground">Sports fans from around the world</p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <Trophy className="h-12 w-12 text-primary mx-auto" />
              <div className="space-y-2">
                <div className="text-3xl font-bold font-mono">50,000+</div>
                <h3 className="font-semibold text-lg">Simulations Run</h3>
                <p className="text-muted-foreground">Epic matchups and counting</p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <MessageCircle className="h-12 w-12 text-primary mx-auto" />
              <div className="space-y-2">
                <div className="text-3xl font-bold font-mono">2,500+</div>
                <h3 className="font-semibold text-lg">Fan Recaps</h3>
                <p className="text-muted-foreground">Stories and debates shared</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where We Hang Out</h2>
            <p className="text-xl text-muted-foreground">
              Multiple platforms, one amazing community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5865F2] text-white rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Discord Server</h3>
                  <p className="text-muted-foreground">Real-time chat and voice channels</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">#general-chat</Badge>
                  <span className="text-sm text-muted-foreground">Daily discussions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">#simulation-results</Badge>
                  <span className="text-sm text-muted-foreground">Share your epic matchups</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">#debates</Badge>
                  <span className="text-sm text-muted-foreground">Settle the GOAT arguments</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="https://discord.gg/microleague" target="_blank">
                  Join Discord Server
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0088cc] text-white rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Telegram Group</h3>
                  <p className="text-muted-foreground">Mobile-first community chat</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Announcements</Badge>
                  <span className="text-sm text-muted-foreground">Latest updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Quick Polls</Badge>
                  <span className="text-sm text-muted-foreground">Vote on features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Mobile Alerts</Badge>
                  <span className="text-sm text-muted-foreground">Never miss a beat</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="https://t.me/microleague" target="_blank">
                  Join Telegram
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Guidelines</h2>
            <p className="text-xl text-muted-foreground">
              Keep it fun, keep it respectful, keep it about sports.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-green-600">✅ Do This</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Share your simulation results and stories</li>
                <li>• Engage in friendly sports debates</li>
                <li>• Help newcomers get started</li>
                <li>• Suggest new features and improvements</li>
                <li>• Celebrate great plays and moments</li>
              </ul>
            </Card>
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-red-600">❌ Don't Do This</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Personal attacks or harassment</li>
                <li>• Spam or excessive self-promotion</li>
                <li>• Share unofficial token contracts</li>
                <li>• Off-topic discussions in sports channels</li>
                <li>• Spread misinformation about teams/players</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Community Content */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Amazing content created by our community members.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">Community Pick</Badge>
              </div>
              <h3 className="font-semibold">The Ultimate GOAT Debate</h3>
              <p className="text-sm text-muted-foreground">
                @SportsHistorian settles the Jordan vs. LeBron debate with a 7-game simulation series.
              </p>
              <div className="text-xs text-muted-foreground">Featured in Discord • 1 week ago</div>
            </Card>
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">Viral Simulation</Badge>
              </div>
              <h3 className="font-semibold">Dream Team Olympics</h3>
              <p className="text-sm text-muted-foreground">
                What if every NBA Dream Team faced off? Epic tournament simulation by @BasketballGuru.
              </p>
              <div className="text-xs text-muted-foreground">Shared 2.5k times • 3 days ago</div>
            </Card>
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <Badge variant="outline">Fan Favorite</Badge>
              </div>
              <h3 className="font-semibold">Underdog Stories</h3>
              <p className="text-sm text-muted-foreground">
                @CinderellaStories simulates the greatest upsets that never happened.
              </p>
              <div className="text-xs text-muted-foreground">Community voted • 5 days ago</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}