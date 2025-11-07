"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
  language: string
  setLanguage: (lang: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "dark"
    const savedLanguage = localStorage.getItem("language") ?? "en"
    setIsDark(savedTheme === "dark")
    setLanguage(savedLanguage)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, language, setLanguage: handleLanguageChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
