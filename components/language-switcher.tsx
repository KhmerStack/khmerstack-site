"use client"

import { useI18n, type Locale } from "@/lib/i18n-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const toggleLocale = () => {
    const newLocale: Locale = locale === "en" ? "km" : "en"
    setLocale(newLocale)
  }

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.10)] transition-colors text-sm"
      aria-label="Switch language"
    >
      <Globe size={16} className="text-[#60a5fa]" />
      <span className="text-[#e5e7eb] font-medium">
        {locale === "en" ? "EN" : "ខ្មែរ"}
      </span>
    </button>
  )
}
