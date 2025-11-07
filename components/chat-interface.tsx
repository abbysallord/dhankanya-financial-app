"use client"

import type React from "react"
import FinancialLessons from "./financial-lessons"
import { useState, useRef, useEffect } from "react"
import { useTheme } from "@/context/theme-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ChatMessage from "./chat-message"
import { translations } from "@/lib/translations"
import { useSpeechToText } from "@/hooks/use-speech-to-text"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function ChatInterface() {
  const { language } = useTheme()
  const t = translations[language as keyof typeof translations] || translations.en
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showLessons, setShowLessons] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    startListening,
    stopListening,
    listening,
    transcript,
    error: sttError,
    clearTranscript,
  } = useSpeechToText(language)

  useEffect(() => {
    if (transcript) {
      setInput(transcript.trim())
    }
  }, [transcript])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only auto-focus if the key press is a printable character and input isn't already focused
      if (inputRef.current && document.activeElement !== inputRef.current) {
        if (e.key.length === 1 || e.key === "Backspace") {
          inputRef.current.focus()
          // If it's a character, let it be typed naturally
          if (e.key.length === 1) {
            setInput((prev) => prev + e.key)
            e.preventDefault()
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  // Add welcome message on mount
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "1",
          role: "assistant",
          content: t.welcomeMessage,
          timestamp: new Date(),
        },
      ])
    }
  }, [language])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    clearTranscript()

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const historyForAPI = messages.filter((m) => m.id !== "1").map((m) => ({ role: m.role, content: m.content }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          language,
          history: historyForAPI,
        }),
      })

      const data = await response.json()

      if (data.success) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.response,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      } else {
        console.error("[v0] API error:", data.error)
      }
    } catch (error) {
      console.error("[v0] Error sending message:", error)
    } finally {
      setLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: t.welcomeMessage,
        timestamp: new Date(),
      },
    ])
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-background">
      {showLessons ? (
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto w-full">
          <Button variant="outline" onClick={() => setShowLessons(false)} className="mb-4">
            Back to Chat
          </Button>
          <FinancialLessons />
        </div>
      ) : (
        <>
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto w-full">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} language={language} />
              ))}
              {loading && (
                <div className="flex justify-center py-4">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2 mb-4">
                <Button variant="outline" size="sm" onClick={clearChat} className="transition-smooth bg-transparent">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t.clearChat}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowLessons(true)}
                  className="transition-smooth bg-transparent"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.669 0-3.218-.51-4.5-1.385A7.968 7.968 0 009 4.804z" />
                  </svg>
                  Lessons
                </Button>
              </div>

              {sttError && (
                <div className="text-xs text-destructive mb-2 px-3 py-2 bg-destructive/10 rounded-md">{sttError}</div>
              )}

              {listening && (
                <div className="text-xs text-primary mb-2 px-3 py-2 bg-primary/10 rounded-md flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Listening...
                </div>
              )}

              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  disabled={loading || listening}
                  className="bg-muted/50 border-border/40 transition-smooth focus:bg-muted"
                />

                <button
                  type="button"
                  onClick={listening ? stopListening : startListening}
                  disabled={loading}
                  className={`px-3 py-2 rounded-md transition-smooth ${
                    listening
                      ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                  title={listening ? "Stop listening" : "Start voice input"}
                >
                  {listening ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 001.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0zm-8 0a1 1 0 112 0 1 1 0 01-2 0z" />
                    </svg>
                  )}
                </button>

                <Button type="submit" disabled={loading || !input.trim()} className="transition-smooth">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-2.976 5.951 2.976a1 1 0 001.169-1.409l-7-14z" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
