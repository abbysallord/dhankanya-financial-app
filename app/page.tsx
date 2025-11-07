"use client"

import { ThemeProvider } from "@/context/theme-context"
import Header from "@/components/header"
import ChatInterface from "@/components/chat-interface"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <ChatInterface />
      </div>
    </ThemeProvider>
  )
}
