"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { KhmerStackLogo } from "./khmerstack-logo"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useI18n } from "@/lib/i18n-context"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useI18n()

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/roadmap", label: t("nav.roadmap") },
    { href: "/releases", label: t("nav.releases") },
    { href: "/contribute", label: t("nav.contribute") },
  ]

  return (
    <header className="sticky top-0 z-20 bg-[rgba(11,15,23,0.72)] backdrop-blur-[14px] border-b border-[rgba(255,255,255,0.10)]">
      <nav className="flex items-center justify-between max-w-[1100px] mx-auto px-5 py-3.5">
        <Link href="/" className="flex items-center gap-3.5">
          <KhmerStackLogo className="w-11 h-11" />
          <div>
            <div className="font-black tracking-tight text-[#e5e7eb]">KhmerStack</div>
            <div className="text-[#9ca3af] text-xs mt-0.5">{t("header.tagline")}</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-xl border text-sm transition-all ${
                pathname === link.href
                  ? "border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] text-[#e5e7eb]"
                  : "border-transparent text-[#9ca3af] hover:text-[#e5e7eb] hover:border-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.04)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button 
            className="p-2 text-[#9ca3af]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.10)] bg-[rgba(11,15,23,0.95)]">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl border text-sm transition-all ${
                  pathname === link.href
                    ? "border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] text-[#e5e7eb]"
                    : "border-transparent text-[#9ca3af]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
