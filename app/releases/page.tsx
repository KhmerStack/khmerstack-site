"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const releases = [
  {
    version: "v0.1.3",
    date: "2024-01-15",
    title: "UX Stability & Theme Fixes",
    highlights: [
      "Fixed theme picker persistence",
      "Improved settings panel layout",
      "Better keyboard navigation",
      "Fixed clipboard paste timing issues",
    ],
    breaking: false,
  },
  {
    version: "v0.1.2",
    date: "2024-01-10",
    title: "Search Improvements",
    highlights: [
      "Faster fuzzy search",
      "Added tag filtering",
      "Improved search result highlighting",
    ],
    breaking: false,
  },
  {
    version: "v0.1.1",
    date: "2024-01-05",
    title: "Initial Public Release",
    highlights: [
      "Clipboard history tracking",
      "Basic theming support",
      "Keyboard shortcuts",
      "System tray integration",
    ],
    breaking: false,
  },
]

export default function ReleasesPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <section>
        <div className="panel">
          <h1 className="text-lg font-bold text-[#e5e7eb]">{t("releases.title")}</h1>
          <p className="text-[#9ca3af] text-sm mt-2 leading-relaxed">
            {t("releases.description")}
          </p>
          <div className="mt-4">
            <Link 
              href="https://github.com/KhmerStack/quantum-clipboard/releases"
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t("releases.github")}
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="space-y-4">
          {releases.map((release, index) => (
            <div 
              key={release.version} 
              className={`panel ${index === 0 ? 'border-[rgba(52,211,153,0.35)]' : ''}`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`font-mono font-bold ${index === 0 ? 'text-[#34d399]' : 'text-[#60a5fa]'}`}>
                  {release.version}
                </span>
                {index === 0 && <span className="badge-green text-[10px]">{t("releases.latest")}</span>}
                <span className="text-[#9ca3af] text-xs">{release.date}</span>
              </div>
              <h2 className="font-bold text-[#e5e7eb] mb-3">{release.title}</h2>
              <ul className="space-y-2">
                {release.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-[#9ca3af] text-sm">
                    <span className="text-[#34d399] mt-1">{"•"}</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="panel bg-[rgba(96,165,250,0.08)]">
          <h2 className="text-lg font-bold text-[#e5e7eb] mb-2">{t("releases.upcoming.title")}</h2>
          <p className="text-[#9ca3af] text-sm leading-relaxed">
            <strong className="text-[#60a5fa]">v0.1.4</strong> — {t("releases.upcoming.description")}
          </p>
          <Link href="/roadmap" className="btn-secondary inline-block mt-4 text-sm">
            {t("releases.roadmap")}
          </Link>
        </div>
      </section>
    </div>
  )
}
