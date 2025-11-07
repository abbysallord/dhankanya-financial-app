"use client"

import { useTheme } from "@/context/theme-context"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/translations"
import LanguageSelector from "./language-selector"

export default function Header() {
  const { isDark, toggleTheme, language } = useTheme()
  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">₹</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-102 transition-transform duration-300">
              Dhankanya
            </h1>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSelector />
            <div className="hover:scale-110 transition-transform duration-300 active:scale-95">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="transition-smooth hover:bg-muted"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.464 14.536l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zm10.607-9.071a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
