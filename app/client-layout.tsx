"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react"
import { LanguageContext } from "./language-context"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [language, setLanguage] = useState("ar")

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
      <Analytics />
    </LanguageContext.Provider>
  )
}
