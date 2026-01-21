"use client"

import Link from "next/link"
import { Github, Heart } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useI18n()
  
  return (
    <footer className="border-t border-[rgba(255,255,255,0.10)] mt-8">
      <div className="max-w-[1100px] mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#9ca3af] text-sm">
            © {year} {t("footer.copyright")}
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/KhmerStack" 
              target="_blank"
              className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              <span className="text-sm">GitHub</span>
            </Link>
            <span className="text-[#9ca3af] text-sm flex items-center gap-1">
              {t("footer.made")} <Heart size={14} className="text-[#fb7185]" /> {t("footer.in")}
            </span>
          </div>
        </div>
        <div className="text-xs text-[rgba(156,163,175,0.85)] mt-4 text-center">
          {t("footer.maintained")}
        </div>
      </div>
    </footer>
  )
}
