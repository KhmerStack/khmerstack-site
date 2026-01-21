"use client"

import { useI18n } from "@/lib/i18n-context"

export default function RoadmapPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <section>
        <div className="panel">
          <h1 className="text-lg font-bold text-[#e5e7eb]">{t("roadmap.title")}</h1>
          <p className="text-[#9ca3af] text-sm mt-2 leading-relaxed">
            {t("roadmap.description")}
          </p>
        </div>
      </section>

      <section>
        <div className="panel">
          <h2 className="text-lg font-bold text-[#e5e7eb] mb-3">{t("roadmap.clipvault.title")}</h2>
          <div className="code-block">
{`v0.1.3 (Now) — UX stability + theme picker fix
v0.1.4 — Local model versioning + Export JSON backup + Sync placeholder
v0.2.0 — Firebase Auth (Google + GitHub), profile in Firestore (no sync yet)
v0.2.1 — Firestore sync (text only) + last-write-wins
v0.2.2 — Image sync (Storage + Firestore paths) + lazy download
v0.2.3 — Multi-device + sync status + improved conflicts
v0.3.0 — Main website + multi-tool launcher + shared account`}
          </div>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="panel">
            <h2 className="text-lg font-bold text-[#e5e7eb] mb-3">{t("roadmap.export.title")}</h2>
            <p className="text-[#9ca3af] text-sm mb-3">
              {t("roadmap.export.description")}
            </p>
            <ul className="list-disc pl-5 text-[#9ca3af] text-sm leading-relaxed space-y-1.5">
              <li><strong className="text-[#e5e7eb]">schemaVersion</strong> {t("roadmap.export.schema")}</li>
              <li><strong className="text-[#e5e7eb]">Export JSON</strong> {t("roadmap.export.export")}</li>
              <li><strong className="text-[#e5e7eb]">Import JSON</strong> {t("roadmap.export.import")}</li>
            </ul>
          </div>

          <div className="panel">
            <h2 className="text-lg font-bold text-[#e5e7eb] mb-3">{t("roadmap.platform.title")}</h2>
            <p className="text-[#9ca3af] text-sm mb-3 leading-relaxed">
              {t("roadmap.platform.description")}
            </p>
            <div className="code-block text-xs">
{`users/{uid}/apps/clipvault/...
users/{uid}/apps/another-tool/...`}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section>
        <h2 className="text-lg font-bold text-[#e5e7eb] mb-4">{t("roadmap.timeline.title")}</h2>
        <div className="space-y-4">
          {[
            { version: "v0.1.x", title: t("roadmap.timeline.foundation"), status: "current", items: ["Theme picker", "Settings UI", "UX stability"] },
            { version: "v0.2.x", title: t("roadmap.timeline.firebase"), status: "upcoming", items: ["Auth (Google + GitHub)", "Firestore sync", "Image sync"] },
            { version: "v0.3.x", title: t("roadmap.timeline.platform"), status: "planned", items: ["Main website", "Multi-tool launcher", "Shared account"] },
          ].map((phase) => (
            <div key={phase.version} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${
                  phase.status === "current" ? "bg-[#34d399]" : 
                  phase.status === "upcoming" ? "bg-[#60a5fa]" : "bg-[#9ca3af]"
                }`} />
                <div className="w-0.5 h-full bg-[rgba(255,255,255,0.10)]" />
              </div>
              <div className="panel flex-1 mb-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-sm font-mono font-bold ${
                    phase.status === "current" ? "text-[#34d399]" : 
                    phase.status === "upcoming" ? "text-[#60a5fa]" : "text-[#9ca3af]"
                  }`}>
                    {phase.version}
                  </span>
                  <span className="text-[#e5e7eb] font-bold">{phase.title}</span>
                  {phase.status === "current" && (
                    <span className="badge-green text-[10px]">{t("roadmap.timeline.current")}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {phase.items.map((item) => (
                    <span key={item} className="badge text-xs">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
