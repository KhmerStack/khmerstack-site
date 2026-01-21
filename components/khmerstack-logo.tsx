export function KhmerStackLogo({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 96 96" 
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="g1" x1="10" y1="10" x2="86" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" stopOpacity="0.95"/>
          <stop offset="0.52" stopColor="#34D399" stopOpacity="0.85"/>
          <stop offset="1" stopColor="#FB7185" stopOpacity="0.80"/>
        </linearGradient>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="10" floodColor="#000" floodOpacity="0.45"/>
        </filter>
      </defs>

      <rect x="8" y="8" width="80" height="80" rx="22" fill="url(#g1)" filter="url(#s)"/>
      <rect x="10" y="10" width="76" height="76" rx="20" stroke="white" strokeOpacity="0.25" strokeWidth="2"/>

      <path d="M30 66V30h8v14l12-14h10L46 49l16 17H52L38 51v15h-8Z" fill="#0B0F17" fillOpacity="0.95"/>
      <path d="M66 34c0-2.2-1.8-4-4-4H50v8h12c2.2 0 4-1.8 4-4Z" fill="#0B0F17" fillOpacity="0.25"/>
    </svg>
  )
}
