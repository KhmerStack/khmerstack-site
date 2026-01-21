"use client"

import { JoinRequestForm } from "@/components/join-request-form"
import { GitHubContributors } from "@/components/github-contributors"
import { useI18n } from "@/lib/i18n-context"

export default function ContributePage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <section>
        <div className="panel">
          <h1 className="text-lg font-bold text-[#e5e7eb]">{t("contribute.title")}</h1>
          <p className="text-[#9ca3af] text-sm mt-2 leading-relaxed">
            {t("contribute.description")}
          </p>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="panel">
            <h2 className="text-lg font-bold text-[#e5e7eb] mb-3">{t("contribute.pr.title")}</h2>
            <ul className="list-disc pl-5 text-[#9ca3af] text-sm leading-relaxed space-y-2">
              <li>{t("contribute.pr.fork")}</li>
              <li>{t("contribute.pr.issue")}</li>
              <li>{t("contribute.pr.commits")}</li>
              <li>{t("contribute.pr.style")}</li>
              <li>{t("contribute.pr.changelog")}</li>
            </ul>
          </div>

          <div className="panel">
            <h2 className="text-lg font-bold text-[#e5e7eb] mb-3">{t("contribute.first.title")}</h2>
            <ul className="list-disc pl-5 text-[#9ca3af] text-sm leading-relaxed space-y-2">
              <li>{t("contribute.first.bugs")}</li>
              <li>{t("contribute.first.translations")}</li>
              <li>{t("contribute.first.docs")}</li>
              <li>{t("contribute.first.tests")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="panel">
          <h2 className="text-lg font-bold text-[#e5e7eb] mb-3">{t("contribute.format.title")}</h2>
          <div className="code-block text-xs">
{`Title: Fix: [short summary]

What changed:
- ...
- ...

Why:
- ...

Testing:
- macOS:
- Windows (if relevant):
- Screenshots:`}
          </div>
        </div>
      </section>

      {/* GitHub Contributors */}
      <GitHubContributors />

      {/* Join Request Form */}
      <section>
        <div className="panel bg-[rgba(52,211,153,0.08)] border-[rgba(52,211,153,0.25)]">
          <h2 className="text-lg font-bold text-[#e5e7eb] mb-2">{t("contribute.join.title")}</h2>
          <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">
            {t("contribute.join.description")}
          </p>
          <JoinRequestForm />
        </div>
      </section>
    </div>
  )
}
