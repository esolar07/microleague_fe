import Link from "next/link"
import { SITE } from "@/config/site"
import Image from "next/image";

export function Footer() {
  const footerNavItems = [
    { name: "Simulate", href: "/simulate" },
    { name: "Coin", href: "/coin" },
    { name: "Community", href: "/community" },
    { name: "About", href: "/about" },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 text-center md:text-justify">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">

          {/* Brand */}
          <Link href="/" className="flex flex-col items-center space-y-3">
            <Image
              src="/microleague-sports-beta-logo.png"
              alt="Microleague Sport Logo"
              width={150}
              height={75}
              style={{objectFit: "contain"}}
              priority
            ></Image>
            <div className="text-sm text-muted-foreground hidden sm:block">{SITE.tagline}</div>
          </Link>

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