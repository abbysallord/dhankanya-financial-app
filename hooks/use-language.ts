"use client"

import { useTheme } from "@/context/theme-context"
import { translations } from "@/lib/translations"

export const useLanguage = () => {
  const { language } = useTheme()

  const t = translations[language as keyof typeof translations] || translations.en

  return {
    t,
    language,
    isIndianLanguage: ["hi", "mr", "ta", "te", "kn", "ml", "gu"].includes(language),
  }
}
