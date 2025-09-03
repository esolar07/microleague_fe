"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { SITE } from "@/config/site"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Image from "next/image";

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { name: "Simulate", href: "/simulate" },
    // { name: "Recaps", href: "/recaps" },
    { name: "Community", href: "/community" },
    { name: "About", href: "/about" },
    { name: "Coin", href: "/coin" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/simulate">{SITE.ctas.primary}</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/community">{SITE.ctas.secondary}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-accent",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/simulate">{SITE.ctas.primary}</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/community">{SITE.ctas.secondary}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}