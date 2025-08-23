import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Gamepad2, Users, Zap } from "lucide-react"

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight">About MicroLeague</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From 1980s floppy disks to modern cloud computing—we're bringing the legendary sports simulation back to life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 1984, MicroLeague Baseball revolutionized sports gaming as the first MLB-licensed computer game. 
                  Fans would spend hours simulating dream matchups, printing box scores on dot-matrix printers, 
                  and debating "what-if" scenarios.
                </p>
                <p>
                  After decades in the vault, we're reviving this beloved franchise for the modern era. 
                  Same authentic simulation engine, now powered by cloud computing, AI-generated content, 
                  and a vibrant online community.
                </p>
                <p>
                  Whether you're a nostalgic fan from the original era or discovering MicroLeague for the first time, 
                  welcome to where legends meet data.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🏆</div>
                  <h3 className="text-xl font-semibold">Gaming Pioneer</h3>
                  <p className="text-sm text-muted-foreground">
                    First MLB-licensed video game in history
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
          </div>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge variant="retro">1984</Badge>
                <h3 className="text-xl font-semibold">The Beginning</h3>
                <p className="text-muted-foreground">
                  MicroLeague Baseball launches on Commodore 64, becoming the first MLB-licensed video game.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">💾</div>
                <div className="text-sm text-muted-foreground">Commodore 64 Era</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-muted rounded-lg p-8 text-center md:order-1">
                <div className="text-4xl mb-2">🤼</div>
                <div className="text-sm text-muted-foreground">Multi-Sport Expansion</div>
              </div>
              <div className="space-y-4 md:order-2">
                <Badge variant="retro">1987-1991</Badge>
                <h3 className="text-xl font-semibold">Golden Years</h3>
                <p className="text-muted-foreground">
                  Expansion to wrestling, football, and basketball. Millions of simulations run worldwide.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge variant="outline">1991-2024</Badge>
                <h3 className="text-xl font-semibold">The Vault Years</h3>
                <p className="text-muted-foreground">
                  MicroLeague goes dormant, but the community keeps the spirit alive through forums and memories.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">📦</div>
                <div className="text-sm text-muted-foreground">Preservation Mode</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center md:order-1">
                <div className="text-4xl mb-2">🌐</div>
                <div className="text-sm text-muted-foreground">Cloud-Powered Revival</div>
              </div>
              <div className="space-y-4 md:order-2">
                <Badge variant="success">2025</Badge>
                <h3 className="text-xl font-semibold">The Revival</h3>
                <p className="text-muted-foreground">
                  MicroLeague returns with modern technology, blockchain integration, and a global community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-xl text-muted-foreground">
              Not just another sports game—we're building the future of sports simulation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center space-y-4">
              <Gamepad2 className="h-12 w-12 text-primary mx-auto" />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Authentic Simulation</h3>
                <p className="text-muted-foreground">
                  Real player stats, historical accuracy, and physics-based gameplay that honors the original.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Community-First</h3>
                <p className="text-muted-foreground">
                  Built by fans, for fans. Your feedback shapes every feature and update we release.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <Zap className="h-12 w-12 text-primary mx-auto" />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Modern Technology</h3>
                <p className="text-muted-foreground">
                  Cloud computing, AI-generated content, and blockchain rewards bring MicroLeague into 2025.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground">
              Sports fans and tech veterans bringing MicroLeague back to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
                <p className="text-xs text-muted-foreground">
                  Original MicroLeague fan since '84. 20+ years in gaming industry.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                SM
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Sarah Miller</h3>
                <p className="text-sm text-muted-foreground">CTO</p>
                <p className="text-xs text-muted-foreground">
                  Former Google engineer. Expert in cloud architecture and AI systems.
                </p>
              </div>
            </Card>
            <Card className="p-6 text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                MJ
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Mike Johnson</h3>
                <p className="text-sm text-muted-foreground">Head of Community</p>
                <p className="text-xs text-muted-foreground">
                  Sports journalist turned community builder. Knows every stat since 1950.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Make History?</h2>
            <p className="text-xl opacity-90">
              Join thousands of sports fans already simulating their dream matchups.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild>
              <Link href="/simulate">
                Start Simulating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/community">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}