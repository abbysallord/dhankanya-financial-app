"use client"

import { useTextToSpeech } from "@/hooks/use-text-to-speech"
import { Volume2, AlertCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface TTSStatusProps {
  text: string
  language: string
}

export function TTSStatus({ text, language }: TTSStatusProps) {
  const { speak, speaking, error, clearError } = useTextToSpeech(language)
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-2">
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
          <button onClick={clearError} className="ml-auto text-xs hover:underline">
            Dismiss
          </button>
        </div>
      )}
      <button
        onClick={() => speak(text)}
        disabled={speaking}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-smooth text-sm"
      >
        {speaking ? (
          <>
            <Volume2 className="w-4 h-4 animate-pulse" />
            Listening...
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4" />
            {t.speakButton}
          </>
        )}
      </button>
    </div>
  )
}
