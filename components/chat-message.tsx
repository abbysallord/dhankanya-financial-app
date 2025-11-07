"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useTextToSpeech } from "@/hooks/use-text-to-speech"
import { MarkdownText } from "@/lib/markdown-parser"

interface ChatMessageProps {
  message: {
    id: string
    role: "user" | "assistant"
    content: string
    timestamp: Date
  }
  language: string
}

export default function ChatMessage({ message, language }: ChatMessageProps) {
  const [copied, setCopied] = useState(false)
  const { speak, speaking, stop } = useTextToSpeech(language)

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSpeak = () => {
    speak(message.content)
  }

  const handleStop = () => {
    stop()
  }

  return (
    <div className={`flex animate-fade-in ${message.role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs sm:max-w-md lg:max-w-xl px-4 py-3 rounded-2xl transition-all duration-200 hover:shadow-lg ${
          message.role === "user"
            ? "bg-primary text-primary-foreground rounded-br-none hover:scale-102"
            : "bg-muted text-foreground rounded-bl-none hover:scale-101"
        }`}
      >
        {message.role === "user" ? (
          <p className="text-sm sm:text-base leading-relaxed">{message.content}</p>
        ) : (
          <div className="text-sm sm:text-base leading-relaxed [&_strong]:font-bold [&_strong]:text-primary [&_em]:italic [&_code]:bg-black/20 [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-xs">
            <MarkdownText content={message.content} />
          </div>
        )}

        {message.role === "assistant" && (
          <div className="flex gap-2 mt-3 pt-2 border-t border-current/10">
            <div className="hover:scale-110 transition-transform duration-200 active:scale-95">
              <Button
                size="sm"
                variant="ghost"
                onClick={speaking ? handleStop : handleSpeak}
                className="h-7 px-2 text-xs transition-smooth hover:bg-current/10"
              >
                {speaking ? (
                  <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16A6 6 0 100 8a1 1 0 012 0 4 4 0 118 0 1 1 0 012 0 6 6 0 00-6 6z" />
                  </svg>
                )}
              </Button>
            </div>
            <div className="hover:scale-110 transition-transform duration-200 active:scale-95">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopy}
                className="h-7 px-2 text-xs transition-smooth hover:bg-current/10"
              >
                {copied ? (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
