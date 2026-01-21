"use client"

import Link from "next/link"
import { GitHubContributors } from "@/components/github-contributors"
import { useI18n } from "@/lib/i18n-context"

export default function HomePage() {
  const { t, locale } = useI18n()

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="py-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
          {/* Left Panel */}
          <div className="panel p-5">
            <h1 className="text-3xl md:text-[44px] leading-tight font-black tracking-tight text-[#e5e7eb]">
              {t("home.hero.title")}
            </h1>
            <p className="mt-4 text-[#9ca3af] text-base leading-relaxed max-w-[60ch]">
              {t("home.hero.description")}
            </p>

            <div className="h-px bg-[rgba(255,255,255,0.10)] my-4" />

            <h2 className="text-lg font-bold text-[#e5e7eb] mb-2">{t("home.hero.khmer_title")} (ភាសាខ្មែរ)</h2>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              KhmerStack បង្កើតឧបករណ៍ Open-source សម្រាប់អ្នកអភិវឌ្ឍន៍ និងអ្នកស្រាវជ្រាវ។
              យើងផ្តោតលើកម្មវិធីតូចៗដែលងាយប្រើ មានឯកសារពេញលេញ និងចេញ Release មានកំណែច្បាស់លាស់។
              ឧបករណ៍ដំបូងរបស់យើងគឺ <strong className="text-[#e5e7eb]">ClipVault</strong> (Quantum Clipboard) សម្រាប់រក្សាទុក clipboard history ដោយស្វែងរកបានលឿន និងមាន theme ដូចមនុស្សចូលចិត្ត។
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {[
                t("home.pills.stable"),
                t("home.pills.docs"),
                t("home.pills.community"),
                t("home.pills.platform"),
              ].map((pill) => (
                <span 
                  key={pill}
                  className="text-xs px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] text-[rgba(229,231,235,0.92)]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mt-5">
              <Link href="/projects" className="btn-primary">
                {t("home.buttons.explore")}
              </Link>
              <Link href="/releases" className="btn-secondary">
                {t("home.buttons.releases")}
              </Link>
              <Link href="/contribute" className="btn-green">
                {t("home.buttons.contribute")}
              </Link>
              <Link 
                href="https://github.com/KhmerStack" 
                target="_blank"
                className="btn-secondary"
              >
                {t("home.buttons.github")}
              </Link>
            </div>
          </div>

          {/* Right Panel */}
          <div className="panel p-5">
            <h2 className="text-lg font-bold text-[#e5e7eb] mb-3">{t("home.optimize.title")}</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: t("home.optimize.quality"), v: t("home.optimize.quality_desc") },
                { k: t("home.optimize.clarity"), v: t("home.optimize.clarity_desc") },
                { k: t("home.optimize.local"), v: t("home.optimize.local_desc") },
                { k: t("home.optimize.next"), v: t("home.optimize.next_desc") },
              ].map((item) => (
                <div 
                  key={item.k}
                  className="card p-3"
                >
                  <div className="text-[#9ca3af] text-xs">{item.k}</div>
                  <div className="mt-1.5 font-bold text-sm text-[#e5e7eb]">{item.v}</div>
                </div>
              ))}
            </div>

            <div className="h-px bg-[rgba(255,255,255,0.10)] my-4" />

            <h2 className="text-lg font-bold text-[#e5e7eb] mb-2">{t("home.focus.title")}</h2>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              {t("home.focus.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <h2 className="text-lg font-bold text-[#e5e7eb] mb-2">{t("home.tools.title")}</h2>
        <p className="text-[#9ca3af] text-sm mb-4">
          {t("home.tools.description")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* ClipVault */}
          <div className="tool-card">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h3 className="font-black text-sm text-[#e5e7eb]">{t("tools.clipvault.name")}</h3>
                <p className="mt-2 text-[#9ca3af] text-[13px] leading-relaxed">
                  {t("tools.clipvault.description")}
                </p>
              </div>
              <span className="badge">{t("tools.clipvault.badge")}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="badge-blue">Electron</span>
              <span className="badge">React</span>
              <span className="badge-green">v0.1.x</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-4">
              <Link href="https://github.com/KhmerStack/quantum-clipboard" target="_blank" className="btn-primary text-xs py-2">
                {t("tools.buttons.repo")}
              </Link>
              <Link href="/releases" className="btn-secondary text-xs py-2">
                {t("tools.buttons.releases")}
              </Link>
              <Link href="/roadmap" className="btn-secondary text-xs py-2">
                {t("tools.buttons.roadmap")}
              </Link>
            </div>
          </div>

          {/* Khmer Postman */}
          <div className="tool-card">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h3 className="font-black text-sm text-[#e5e7eb]">{t("tools.postman.name")}</h3>
                <p className="mt-2 text-[#9ca3af] text-[13px] leading-relaxed">
                  {t("tools.postman.description")}
                </p>
              </div>
              <span className="badge">{t("tools.postman.badge")}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="badge">Postman</span>
              <span className="badge-green">Learning</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-4">
              <Link href="https://github.com/KhmerStack/khmer-postman" target="_blank" className="btn-primary text-xs py-2">
                {t("tools.buttons.repo")}
              </Link>
              <Link href="/contribute" className="btn-secondary text-xs py-2">
                {t("tools.buttons.contribute")}
              </Link>
            </div>
          </div>

          {/* Platform */}
          <div className="tool-card">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h3 className="font-black text-sm text-[#e5e7eb]">{t("tools.platform.name")}</h3>
                <p className="mt-2 text-[#9ca3af] text-[13px] leading-relaxed">
                  {t("tools.platform.description")}
                </p>
              </div>
              <span className="badge">{t("tools.platform.badge")}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="badge-blue">Firebase</span>
              <span className="badge-pink">Roadmap-driven</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-4">
              <Link href="/roadmap" className="btn-primary text-xs py-2">
                {t("tools.buttons.plan")}
              </Link>
              <Link href="/projects" className="btn-secondary text-xs py-2">
                {t("tools.buttons.projects")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Contributors */}
      <GitHubContributors />
    </div>
  )
}
