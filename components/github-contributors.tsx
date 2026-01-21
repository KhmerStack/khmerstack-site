"use client"

import useSWR from "swr"
import Image from "next/image"
import Link from "next/link"
import { Users, GitFork, Star, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

interface Contributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

interface RepoInfo {
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
}

interface OrgInfo {
  public_repos: number
  followers: number
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function GitHubContributors() {
  const { t } = useI18n()
  
  const { data: contributors, error: contribError } = useSWR<Contributor[]>(
    "https://api.github.com/repos/KhmerStack/.github/contributors",
    fetcher,
    { revalidateOnFocus: false }
  )

  const { data: repos } = useSWR<RepoInfo[]>(
    "https://api.github.com/orgs/KhmerStack/repos?sort=updated&per_page=10",
    fetcher,
    { revalidateOnFocus: false }
  )

  const { data: orgInfo } = useSWR<OrgInfo>(
    "https://api.github.com/orgs/KhmerStack",
    fetcher,
    { revalidateOnFocus: false }
  )

  const totalContributors = contributors?.length ?? 0
  const totalStars = repos?.reduce((acc, repo) => acc + repo.stargazers_count, 0) ?? 0
  const totalForks = repos?.reduce((acc, repo) => acc + repo.forks_count, 0) ?? 0
  const totalRepos = orgInfo?.public_repos ?? repos?.length ?? 0

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#e5e7eb]">{t("github.title")}</h2>
        <Link 
          href="https://github.com/KhmerStack"
          target="_blank"
          className="text-[#60a5fa] text-sm hover:underline flex items-center gap-1"
        >
          {t("github.view")}
          <ExternalLink size={14} />
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="panel text-center">
          <Users className="w-6 h-6 mx-auto text-[#60a5fa] mb-2" />
          <div className="text-2xl font-bold text-[#e5e7eb]">{totalContributors}</div>
          <div className="text-xs text-[#9ca3af]">{t("github.contributors")}</div>
        </div>
        <div className="panel text-center">
          <Star className="w-6 h-6 mx-auto text-[#fbbf24] mb-2" />
          <div className="text-2xl font-bold text-[#e5e7eb]">{totalStars}</div>
          <div className="text-xs text-[#9ca3af]">{t("github.stars")}</div>
        </div>
        <div className="panel text-center">
          <GitFork className="w-6 h-6 mx-auto text-[#34d399] mb-2" />
          <div className="text-2xl font-bold text-[#e5e7eb]">{totalForks}</div>
          <div className="text-xs text-[#9ca3af]">{t("github.forks")}</div>
        </div>
        <div className="panel text-center">
          <div className="w-6 h-6 mx-auto text-[#fb7185] mb-2 flex items-center justify-center font-bold text-lg">
            {totalRepos}
          </div>
          <div className="text-2xl font-bold text-[#e5e7eb]">{totalRepos}</div>
          <div className="text-xs text-[#9ca3af]">{t("github.repos")}</div>
        </div>
      </div>

      {/* Contributors */}
      <div className="panel">
        <h3 className="text-sm font-bold text-[#e5e7eb] mb-3">{t("github.contributors_title")}</h3>
        {contribError ? (
          <p className="text-[#9ca3af] text-sm">{t("github.contributors_error")}</p>
        ) : !contributors ? (
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.06)] animate-pulse" />
            ))}
          </div>
        ) : contributors.length === 0 ? (
          <p className="text-[#9ca3af] text-sm">{t("github.contributors_empty")}</p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {contributors.map((contributor) => (
              <Link
                key={contributor.login}
                href={contributor.html_url}
                target="_blank"
                className="group flex flex-col items-center"
                title={`${contributor.login} (${contributor.contributions} contributions)`}
              >
                <Image
                  src={contributor.avatar_url || "/placeholder.svg"}
                  alt={contributor.login}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-transparent group-hover:border-[#60a5fa] transition-colors"
                />
                <span className="text-[10px] text-[#9ca3af] mt-1 group-hover:text-[#e5e7eb] transition-colors truncate max-w-[60px]">
                  {contributor.login}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Active Repos */}
      {repos && repos.length > 0 && (
        <div className="panel">
          <h3 className="text-sm font-bold text-[#e5e7eb] mb-3">{t("github.active_repos")}</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {repos.slice(0, 4).map((repo) => (
              <Link
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                className="p-3 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(15,23,42,0.50)] hover:bg-[rgba(15,23,42,0.70)] transition-colors"
              >
                <div className="font-bold text-sm text-[#e5e7eb]">{repo.name}</div>
                {repo.description && (
                  <p className="text-[#9ca3af] text-xs mt-1 line-clamp-2">{repo.description}</p>
                )}
                <div className="flex gap-3 mt-2">
                  <span className="flex items-center gap-1 text-[#9ca3af] text-xs">
                    <Star size={12} className="text-[#fbbf24]" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-[#9ca3af] text-xs">
                    <GitFork size={12} className="text-[#34d399]" />
                    {repo.forks_count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
