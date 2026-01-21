"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

export default function ProjectsPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <section>
        <div className="panel">
          <h1 className="text-lg font-bold text-[#e5e7eb]">{t("projects.title")}</h1>
          <p className="text-[#9ca3af] text-sm mt-2 leading-relaxed">
            {t("projects.description")}
          </p>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* ClipVault */}
          <div className="card">
            <h2 className="font-black text-sm text-[#e5e7eb]">{t("tools.clipvault.name")}</h2>
            <p className="mt-2 text-[#9ca3af] text-[13px] leading-relaxed">
              {t("tools.clipvault.description")}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="badge-blue">Electron</span>
              <span className="badge">React</span>
              <span className="badge-green">v0.1.x</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-4">
              <Link 
                href="https://github.com/KhmerStack/quantum-clipboard" 
                target="_blank" 
                className="btn-primary text-xs py-2"
              >
                {t("projects.buttons.repository")}
              </Link>
              <Link 
                href="https://github.com/KhmerStack/quantum-clipboard/releases" 
                target="_blank"
                className="btn-secondary text-xs py-2"
              >
                {t("projects.buttons.releases")}
              </Link>
            </div>
          </div>

          {/* Khmer Postman */}
          <div className="card">
            <h2 className="font-black text-sm text-[#e5e7eb]">{t("tools.postman.name")}</h2>
            <p className="mt-2 text-[#9ca3af] text-[13px] leading-relaxed">
              {t("tools.postman.description")}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="badge">Postman</span>
              <span className="badge-green">{t("tools.postman.badge")}</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-4">
              <Link 
                href="https://github.com/KhmerStack/khmer-postman" 
                target="_blank"
                className="btn-primary text-xs py-2"
              >
                {t("projects.buttons.repository")}
              </Link>
            </div>
          </div>

          {/* Future Tools */}
          <div className="card">
            <h2 className="font-black text-sm text-[#e5e7eb]">{t("projects.future.name")}</h2>
            <p className="mt-2 text-[#9ca3af] text-[13px] leading-relaxed">
              {t("projects.future.description")}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="badge-blue">Firebase</span>
              <span className="badge-pink">{t("nav.roadmap")}</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-4">
              <Link href="/roadmap" className="btn-secondary text-xs py-2">
                {t("projects.buttons.roadmap")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
