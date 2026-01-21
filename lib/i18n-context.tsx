"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"

export type Locale = "en" | "km"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// English translations
const en = {
  // Navigation
  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.roadmap": "Roadmap",
  "nav.releases": "Releases",
  "nav.contribute": "Contribute",
  
  // Header
  "header.tagline": "Open-source tools from Cambodia",
  
  // Home page
  "home.hero.title": "Practical open-source tools, built for everyday workflow.",
  "home.hero.description": "KhmerStack ships small apps that feel native, ship stable releases, and are easy to contribute to. Our first flagship tool is ClipVault (Quantum Clipboard): fast search, tags, and clean theming.",
  "home.hero.khmer_title": "Khmer",
  "home.pills.stable": "Stable releases",
  "home.pills.docs": "Docs-first",
  "home.pills.community": "Community PRs",
  "home.pills.platform": "Multi-tool platform",
  "home.buttons.explore": "Explore Tools",
  "home.buttons.releases": "View Releases",
  "home.buttons.contribute": "Contribute",
  "home.buttons.github": "GitHub Org",
  "home.optimize.title": "What we optimize for",
  "home.optimize.quality": "Quality",
  "home.optimize.quality_desc": "Stable UX + fewer bugs",
  "home.optimize.clarity": "Clarity",
  "home.optimize.clarity_desc": "Changelog + roadmap",
  "home.optimize.local": "Local-first",
  "home.optimize.local_desc": "Works offline",
  "home.optimize.next": "Next",
  "home.optimize.next_desc": "Firebase sync platform",
  "home.focus.title": "Current focus",
  "home.focus.description": "v0.1.x stabilizes core UX (theme picker, settings). Next: backup/export and sync foundations, then Firebase auth + sync.",
  "home.tools.title": "Tools",
  "home.tools.description": "Multiple apps under one organization. Shared standards: releases, docs, and roadmap.",
  
  // Tools
  "tools.clipvault.name": "ClipVault (Quantum Clipboard)",
  "tools.clipvault.description": "Clipboard history popup with theming, tags, fast search, and planned Firebase sync.",
  "tools.clipvault.badge": "Desktop",
  "tools.postman.name": "Khmer Postman API Pack",
  "tools.postman.description": "Postman collections and API examples for learning, reuse, and community sharing.",
  "tools.postman.badge": "Docs",
  "tools.platform.name": "Platform (Account + Multi-tool)",
  "tools.platform.description": "A shared Firebase identity and data model so multiple KhmerStack tools can sync settings and content.",
  "tools.platform.badge": "Platform",
  "tools.buttons.repo": "Repo",
  "tools.buttons.releases": "Releases",
  "tools.buttons.roadmap": "Roadmap",
  "tools.buttons.contribute": "Contribute",
  "tools.buttons.plan": "Plan",
  "tools.buttons.projects": "All Projects",
  
  // Projects page
  "projects.title": "Projects",
  "projects.description": "A curated list of tools under the KhmerStack organization. Each project aims for stable releases and clear docs.",
  "projects.future.name": "Future Tools",
  "projects.future.description": "Planned: multi-tool launcher website + shared Firebase identity to sync across tools.",
  "projects.buttons.repository": "Repository",
  "projects.buttons.releases": "Releases",
  "projects.buttons.roadmap": "View Roadmap",
  
  // Roadmap page
  "roadmap.title": "Roadmap",
  "roadmap.description": "We release in small steps. Local-first first, then login, then sync, then multi-tool platform.",
  "roadmap.clipvault.title": "ClipVault release plan",
  "roadmap.export.title": "Why \"Export/Import\" before login?",
  "roadmap.export.description": "It prevents painful migrations later. You will already have:",
  "roadmap.export.schema": "schemaVersion to evolve local data safely",
  "roadmap.export.export": "Export JSON for backup and user trust",
  "roadmap.export.import": "Import JSON to restore after reinstall or new device",
  "roadmap.platform.title": "Platform direction",
  "roadmap.platform.description": "One account across many tools (clipboard today, other tools later). Firestore paths support multiple apps:",
  "roadmap.timeline.title": "Release Timeline",
  "roadmap.timeline.foundation": "Foundation",
  "roadmap.timeline.firebase": "Firebase Integration",
  "roadmap.timeline.platform": "Platform Launch",
  "roadmap.timeline.current": "Current",
  
  // Releases page
  "releases.title": "Releases",
  "releases.description": "View all releases and changelogs for KhmerStack tools. Each release follows semantic versioning.",
  "releases.github": "View on GitHub",
  "releases.latest": "Latest",
  "releases.upcoming.title": "Upcoming",
  "releases.upcoming.description": "v0.1.4 — Local model versioning, Export/Import JSON backup, Sync placeholder UI",
  "releases.roadmap": "View Full Roadmap",
  
  // Contribute page
  "contribute.title": "Contribute",
  "contribute.description": "We welcome PRs. Keep changes small, follow the release plan, and explain your impact clearly. KhmerStack is open-source for Khmer people and the world.",
  "contribute.pr.title": "How to submit a PR",
  "contribute.pr.fork": "Fork the repo and create a feature branch",
  "contribute.pr.issue": "Open an Issue first for big changes",
  "contribute.pr.commits": "Use clear commits and include screenshots for UI",
  "contribute.pr.style": "Follow existing code style and naming",
  "contribute.pr.changelog": "Update changelog if behavior changed",
  "contribute.first.title": "Good first contributions",
  "contribute.first.bugs": "Fix small UI bugs",
  "contribute.first.translations": "Add translations (English/Khmer)",
  "contribute.first.docs": "Improve docs and examples",
  "contribute.first.tests": "Add tests for edge cases",
  "contribute.format.title": "Suggested PR format",
  "contribute.join.title": "Request to Join KhmerStack",
  "contribute.join.description": "Want to become an official contributor? Fill out this form and we will get back to you.",
  
  // Join form
  "form.name": "Full Name",
  "form.email": "Email",
  "form.github": "GitHub Username",
  "form.skills": "Skills / Technologies",
  "form.skills_placeholder": "React, TypeScript, Electron, etc.",
  "form.message": "Why do you want to join?",
  "form.message_placeholder": "Tell us about yourself and what you'd like to contribute...",
  "form.submit": "Send Request",
  "form.sending": "Sending...",
  "form.success": "Request sent successfully!",
  "form.success_desc": "We will review your request and get back to you soon.",
  "form.error": "Failed to send request. Please try again.",
  
  // GitHub stats
  "github.title": "Organization Stats",
  "github.view": "View on GitHub",
  "github.contributors": "Contributors",
  "github.stars": "Stars",
  "github.forks": "Forks",
  "github.repos": "Repositories",
  "github.contributors_title": "Contributors",
  "github.contributors_error": "Failed to load contributors",
  "github.contributors_empty": "No contributors yet. Be the first to contribute!",
  "github.active_repos": "Active Repositories",
  
  // Footer
  "footer.copyright": "KhmerStack. Open-source for Khmer people and the world.",
  "footer.made": "Made with",
  "footer.in": "in Cambodia",
  "footer.maintained": "Maintained by Muyleang Ing",
  
  // Flag banner
  "banner.message": "Open-source for Khmer people and the world",
}

// Khmer translations
const km: typeof en = {
  // Navigation
  "nav.home": "ទំព័រដើម",
  "nav.projects": "គម្រោង",
  "nav.roadmap": "ផែនការ",
  "nav.releases": "កំណែ",
  "nav.contribute": "រួមចំណែក",
  
  // Header
  "header.tagline": "ឧបករណ៍ Open-source ពីកម្ពុជា",
  
  // Home page
  "home.hero.title": "ឧបករណ៍ Open-source ជាក់ស្តែង សម្រាប់ការងារប្រចាំថ្ងៃ។",
  "home.hero.description": "KhmerStack បង្កើតកម្មវិធីតូចៗដែលមានអារម្មណ៍ដូចកម្មវិធីដើម ចេញផ្សាយមានស្ថេរភាព និងងាយស្រួលរួមចំណែក។ ឧបករណ៍ដំបូងរបស់យើងគឺ ClipVault (Quantum Clipboard): ស្វែងរកលឿន tags និង theme ស្អាត។",
  "home.hero.khmer_title": "ភាសាខ្មែរ",
  "home.pills.stable": "កំណែមានស្ថេរភាព",
  "home.pills.docs": "ឯកសារជាមុន",
  "home.pills.community": "PRs សហគមន៍",
  "home.pills.platform": "វេទិកាពហុឧបករណ៍",
  "home.buttons.explore": "រុករកឧបករណ៍",
  "home.buttons.releases": "មើលកំណែ",
  "home.buttons.contribute": "រួមចំណែក",
  "home.buttons.github": "GitHub Org",
  "home.optimize.title": "អ្វីដែលយើងផ្តោតលើ",
  "home.optimize.quality": "គុណភាព",
  "home.optimize.quality_desc": "UX មានស្ថេរភាព + កំហុសតិច",
  "home.optimize.clarity": "ភាពច្បាស់លាស់",
  "home.optimize.clarity_desc": "Changelog + ផែនការ",
  "home.optimize.local": "Local-first",
  "home.optimize.local_desc": "ដំណើរការដោយគ្មានអ៊ីនធឺណិត",
  "home.optimize.next": "បន្ទាប់",
  "home.optimize.next_desc": "វេទិកា Firebase sync",
  "home.focus.title": "ការផ្តោតបច្ចុប្បន្ន",
  "home.focus.description": "v0.1.x ធ្វើឱ្យ UX ស្ថេរ (theme picker, settings)។ បន្ទាប់: backup/export និង sync foundations បន្ទាប់មក Firebase auth + sync។",
  "home.tools.title": "ឧបករណ៍",
  "home.tools.description": "កម្មវិធីច្រើនក្រោមអង្គការមួយ។ ស្តង់ដាររួម: releases, docs និង roadmap។",
  
  // Tools
  "tools.clipvault.name": "ClipVault (Quantum Clipboard)",
  "tools.clipvault.description": "Clipboard history popup ជាមួយ theming, tags, ស្វែងរកលឿន និងគម្រោង Firebase sync។",
  "tools.clipvault.badge": "Desktop",
  "tools.postman.name": "Khmer Postman API Pack",
  "tools.postman.description": "Postman collections និងឧទាហរណ៍ API សម្រាប់រៀន ប្រើឡើងវិញ និងចែករំលែកសហគមន៍។",
  "tools.postman.badge": "ឯកសារ",
  "tools.platform.name": "វេទិកា (គណនី + ពហុឧបករណ៍)",
  "tools.platform.description": "Firebase identity រួម និង data model ដើម្បីឱ្យឧបករណ៍ KhmerStack ច្រើន sync settings និង content។",
  "tools.platform.badge": "វេទិកា",
  "tools.buttons.repo": "Repo",
  "tools.buttons.releases": "កំណែ",
  "tools.buttons.roadmap": "ផែនការ",
  "tools.buttons.contribute": "រួមចំណែក",
  "tools.buttons.plan": "គម្រោង",
  "tools.buttons.projects": "គម្រោងទាំងអស់",
  
  // Projects page
  "projects.title": "គម្រោង",
  "projects.description": "បញ្ជីឧបករណ៍ក្រោមអង្គការ KhmerStack។ គម្រោងនីមួយៗមានគោលដៅកំណែមានស្ថេរភាព និងឯកសារច្បាស់លាស់។",
  "projects.future.name": "ឧបករណ៍អនាគត",
  "projects.future.description": "គម្រោង: គេហទំព័រ multi-tool launcher + Firebase identity រួមដើម្បី sync ឆ្លងឧបករណ៍។",
  "projects.buttons.repository": "Repository",
  "projects.buttons.releases": "កំណែ",
  "projects.buttons.roadmap": "មើលផែនការ",
  
  // Roadmap page
  "roadmap.title": "ផែនការ",
  "roadmap.description": "យើងចេញផ្សាយជាជំហានតូចៗ។ Local-first មុន បន្ទាប់មក login បន្ទាប់មក sync បន្ទាប់មកវេទិកាពហុឧបករណ៍។",
  "roadmap.clipvault.title": "គម្រោងចេញផ្សាយ ClipVault",
  "roadmap.export.title": "ហេតុអ្វី \"Export/Import\" មុន login?",
  "roadmap.export.description": "វាការពារការផ្លាស់ប្តូរឈឺចាប់ពេលក្រោយ។ អ្នកនឹងមាន:",
  "roadmap.export.schema": "schemaVersion ដើម្បីវិវត្តទិន្នន័យ local ដោយសុវត្ថិភាព",
  "roadmap.export.export": "Export JSON សម្រាប់ backup និងទំនុកចិត្តអ្នកប្រើ",
  "roadmap.export.import": "Import JSON ដើម្បីស្តារឡើងវិញបន្ទាប់ពីដំឡើងឡើងវិញ ឬឧបករណ៍ថ្មី",
  "roadmap.platform.title": "ទិសដៅវេទិកា",
  "roadmap.platform.description": "គណនីមួយឆ្លងឧបករណ៍ច្រើន (clipboard ថ្ងៃនេះ ឧបករណ៍ផ្សេងពេលក្រោយ)។ Firestore paths គាំទ្រកម្មវិធីច្រើន:",
  "roadmap.timeline.title": "កាលវិភាគចេញផ្សាយ",
  "roadmap.timeline.foundation": "មូលដ្ឋាន",
  "roadmap.timeline.firebase": "Firebase Integration",
  "roadmap.timeline.platform": "ចាប់ផ្តើមវេទិកា",
  "roadmap.timeline.current": "បច្ចុប្បន្ន",
  
  // Releases page
  "releases.title": "កំណែ",
  "releases.description": "មើលកំណែ និង changelogs ទាំងអស់សម្រាប់ឧបករណ៍ KhmerStack។ កំណែនីមួយៗអនុវត្តតាម semantic versioning។",
  "releases.github": "មើលនៅ GitHub",
  "releases.latest": "ចុងក្រោយ",
  "releases.upcoming.title": "នឹងមកដល់",
  "releases.upcoming.description": "v0.1.4 — Local model versioning, Export/Import JSON backup, Sync placeholder UI",
  "releases.roadmap": "មើលផែនការពេញលេញ",
  
  // Contribute page
  "contribute.title": "រួមចំណែក",
  "contribute.description": "យើងស្វាគមន៍ PRs។ រក្សាការផ្លាស់ប្តូរតូច អនុវត្តតាមគម្រោងចេញផ្សាយ និងពន្យល់ផលប៉ះពាល់ច្បាស់លាស់។ KhmerStack គឺ open-source សម្រាប់ប្រជាជនខ្មែរ និងពិភពលោក។",
  "contribute.pr.title": "របៀបដាក់ PR",
  "contribute.pr.fork": "Fork repo និងបង្កើត feature branch",
  "contribute.pr.issue": "បើក Issue មុនសម្រាប់ការផ្លាស់ប្តូរធំ",
  "contribute.pr.commits": "ប្រើ commits ច្បាស់លាស់ និងរួមបញ្ចូល screenshots សម្រាប់ UI",
  "contribute.pr.style": "អនុវត្តតាម code style និង naming ដែលមានស្រាប់",
  "contribute.pr.changelog": "ធ្វើបច្ចុប្បន្នភាព changelog ប្រសិនបើអាកប្បកិរិយាផ្លាស់ប្តូរ",
  "contribute.first.title": "ការរួមចំណែកដំបូងល្អ",
  "contribute.first.bugs": "ជួសជុល UI bugs តូចៗ",
  "contribute.first.translations": "បន្ថែមការបកប្រែ (អង់គ្លេស/ខ្មែរ)",
  "contribute.first.docs": "កែលម្អ docs និងឧទាហរណ៍",
  "contribute.first.tests": "បន្ថែម tests សម្រាប់ edge cases",
  "contribute.format.title": "ទម្រង់ PR ដែលណែនាំ",
  "contribute.join.title": "ស្នើសុំចូលរួម KhmerStack",
  "contribute.join.description": "ចង់ក្លាយជាអ្នករួមចំណែកផ្លូវការ? បំពេញទម្រង់នេះ ហើយយើងនឹងឆ្លើយតបអ្នកឆាប់ៗ។",
  
  // Join form
  "form.name": "ឈ្មោះពេញ",
  "form.email": "អ៊ីមែល",
  "form.github": "GitHub Username",
  "form.skills": "ជំនាញ / បច្ចេកវិទ្យា",
  "form.skills_placeholder": "React, TypeScript, Electron, ល។",
  "form.message": "ហេតុអ្វីអ្នកចង់ចូលរួម?",
  "form.message_placeholder": "ប្រាប់យើងអំពីខ្លួនអ្នក និងអ្វីដែលអ្នកចង់រួមចំណែក...",
  "form.submit": "ផ្ញើសំណើ",
  "form.sending": "កំពុងផ្ញើ...",
  "form.success": "សំណើបានផ្ញើដោយជោគជ័យ!",
  "form.success_desc": "យើងនឹងពិនិត្យសំណើរបស់អ្នក ហើយឆ្លើយតបឆាប់ៗ។",
  "form.error": "បរាជ័យក្នុងការផ្ញើសំណើ។ សូមព្យាយាមម្តងទៀត។",
  
  // GitHub stats
  "github.title": "ស្ថិតិអង្គការ",
  "github.view": "មើលនៅ GitHub",
  "github.contributors": "អ្នករួមចំណែក",
  "github.stars": "Stars",
  "github.forks": "Forks",
  "github.repos": "Repositories",
  "github.contributors_title": "អ្នករួមចំណែក",
  "github.contributors_error": "បរាជ័យក្នុងការផ្ទុកអ្នករួមចំណែក",
  "github.contributors_empty": "មិនទាន់មានអ្នករួមចំណែកទេ។ ក្លាយជាអ្នកដំបូងដើម្បីរួមចំណែក!",
  "github.active_repos": "Repositories សកម្ម",
  
  // Footer
  "footer.copyright": "KhmerStack។ Open-source សម្រាប់ប្រជាជនខ្មែរ និងពិភពលោក។",
  "footer.made": "បង្កើតដោយ",
  "footer.in": "នៅកម្ពុជា",
  "footer.maintained": "ថែរក្សាដោយ Muyleang Ing",
  
  // Flag banner
  "banner.message": "Open-source សម្រាប់ប្រជាជនខ្មែរ និងពិភពលោក",
}

const translations = { en, km }

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const saved = localStorage.getItem("khmerstack-locale") as Locale
    if (saved && (saved === "en" || saved === "km")) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("khmerstack-locale", newLocale)
  }, [])

  const t = useCallback((key: string): string => {
    return translations[locale][key as keyof typeof en] || key
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
