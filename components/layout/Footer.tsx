import Link from "next/link"
import { SITE } from "@/config/site"

export function Footer() {
  const footerNavItems = [
    { name: "Simulate", href: "/simulate" },
    { name: "Recaps", href: "/recaps" },
    { name: "Community", href: "/community" },
    { name: "About", href: "/about" },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="font-bold text-lg font-mono">MicroLeague</div>
            <p className="text-sm text-muted-foreground">{SITE.tagline}</p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold">Navigate</h4>
            <nav className="space-y-2">
              {footerNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-semibold">Community</h4>
            <nav className="space-y-2">
              <a
                href={SITE.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Discord
              </a>
              <a
                href={SITE.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                X (Twitter)
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <p className="text-xs text-muted-foreground">
              Crypto assets are high risk. This site is informational and not financial advice. Check your local
              regulations.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">{SITE.legal}</div>
      </div>
    </footer>
  )
}