"use client"

import { useI18n } from "@/lib/i18n-context"

export function CambodiaFlagBanner() {
  const { t } = useI18n()
  
  return (
    <div className="relative overflow-hidden">
      {/* Cambodia Flag Stripes - Blue Red Blue */}
      <div className="flex flex-col">
        <div className="h-1.5 bg-[#032EA1]" /> {/* Blue */}
        <div className="h-3 bg-[#E00025] flex items-center justify-center gap-2"> {/* Red */}
          {/* Angkor Wat silhouette */}
          <svg 
            viewBox="0 0 100 60" 
            className="h-2.5 opacity-90"
            fill="white"
          >
            <path d="M30 55V35h40v20H30zm5-15v10h30V40H35zm10-25l5-10 5 10H45zm-15 5h40v15H30V20zm5 5v5h30v-5H35z" />
          </svg>
          <span className="text-white text-[10px] font-medium tracking-wide opacity-90">
            {t("banner.message")}
          </span>
          <svg 
            viewBox="0 0 100 60" 
            className="h-2.5 opacity-90"
            fill="white"
          >
            <path d="M30 55V35h40v20H30zm5-15v10h30V40H35zm10-25l5-10 5 10H45zm-15 5h40v15H30V20zm5 5v5h30v-5H35z" />
          </svg>
        </div>
        <div className="h-1.5 bg-[#032EA1]" /> {/* Blue */}
      </div>
    </div>
  )
}
