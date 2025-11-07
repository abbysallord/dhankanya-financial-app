"use client"

import { useState, useCallback, useRef } from "react"

const LANGUAGE_CODES: Record<string, string[]> = {
  en: ["en-US", "en-IN", "en"],
  hi: ["hi-IN", "hi"],
  mr: ["mr-IN", "mr"],
  ta: ["ta-IN", "ta"],
  te: ["te-IN", "te"],
  kn: ["kn-IN", "kn"],
  ml: ["ml-IN", "ml"],
  gu: ["gu-IN", "gu"],
}

const LANGUAGE_VOICE_PREFERENCES: Record<string, { rate: number; pitch: number; volume: number }> = {
  en: { rate: 0.95, pitch: 1, volume: 1 },
  hi: { rate: 0.85, pitch: 1.1, volume: 1 },
  mr: { rate: 0.85, pitch: 1, volume: 1 },
  ta: { rate: 0.8, pitch: 1.05, volume: 1 },
  te: { rate: 0.8, pitch: 1.05, volume: 1 },
  kn: { rate: 0.85, pitch: 1, volume: 1 },
  ml: { rate: 0.8, pitch: 1, volume: 1 },
  gu: { rate: 0.85, pitch: 1.05, volume: 1 },
}

export const useTextToSpeech = (language: string) => {
  const [speaking, setSpeaking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const speak = useCallback(
    (text: string) => {
      try {
        setError(null)

        window.speechSynthesis.cancel()
        utteranceRef.current = null

        const utterance = new SpeechSynthesisUtterance(text)
        utteranceRef.current = utterance

        const langCodes = LANGUAGE_CODES[language] || LANGUAGE_CODES.en
        const voicePreferences = LANGUAGE_VOICE_PREFERENCES[language] || LANGUAGE_VOICE_PREFERENCES.en

        const voices = window.speechSynthesis.getVoices()
        let selectedVoice = null

        for (const langCode of langCodes) {
          selectedVoice = voices.find(
            (voice) => voice.lang === langCode || voice.lang.toLowerCase().startsWith(langCode.split("-")[0]),
          )
          if (selectedVoice) break
        }

        utterance.lang = langCodes[0]
        if (selectedVoice) {
          utterance.voice = selectedVoice
        }

        utterance.rate = voicePreferences.rate
        utterance.pitch = voicePreferences.pitch
        utterance.volume = voicePreferences.volume

        utterance.onstart = () => {
          setSpeaking(true)
          setError(null)
        }

        utterance.onend = () => {
          setSpeaking(false)
          utteranceRef.current = null
        }

        utterance.onerror = (event) => {
          setSpeaking(false)
          utteranceRef.current = null
          if (event.error !== "interrupted") {
            setError(`Speech error: ${event.error}`)
          }
        }

        window.speechSynthesis.speak(utterance)
      } catch (err) {
        setSpeaking(false)
        setError("Text-to-speech not supported")
        console.log("[v0] TTS error:", err)
      }
    },
    [language],
  )

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    utteranceRef.current = null
    setSpeaking(false)
    setError(null)
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return { speak, speaking, stop, error, clearError }
}
