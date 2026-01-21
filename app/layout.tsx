import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CambodiaFlagBanner } from '@/components/cambodia-flag-banner'
import { I18nProvider } from '@/lib/i18n-context'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'KhmerStack — Open-source tools from Cambodia',
  description: 'KhmerStack builds open-source tools for developers: ClipVault, APIs, and more. Open-source for Khmer people and the world.',
  keywords: ['KhmerStack', 'Cambodia', 'Open Source', 'Developer Tools', 'ClipVault', 'Khmer'],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <I18nProvider>
          <CambodiaFlagBanner />
          <Header />
          <main className="max-w-[1100px] mx-auto px-5 py-6">
            {children}
          </main>
          <Footer />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
