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

export const useSpeechToText = (language: string) => {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<any>(null)
  const finalTranscriptRef = useRef("")

  const startListening = useCallback(() => {
    try {
      setError(null)
      setTranscript("")
      finalTranscriptRef.current = ""

      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (!SpeechRecognition) {
        setError("Speech recognition not supported in this browser")
        return
      }

      recognitionRef.current = new SpeechRecognition()
      const recognition = recognitionRef.current

      const langCodes = LANGUAGE_CODES[language] || LANGUAGE_CODES.en
      recognition.lang = langCodes[0]

      recognition.continuous = false
      recognition.interimResults = true
      recognition.maxAlternatives = 1

      recognition.onstart = () => {
        setListening(true)
        setError(null)
      }

      recognition.onresult = (event: any) => {
        let interimTranscript = ""

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript

          if (event.results[i].isFinal) {
            finalTranscriptRef.current += transcript + " "
          } else {
            interimTranscript += transcript
          }
        }

        const displayTranscript = finalTranscriptRef.current + interimTranscript
        setTranscript(displayTranscript.trim())
      }

      recognition.onerror = (event: any) => {
        if (event.error !== "no-speech") {
          setError(`Speech recognition error: ${event.error}`)
        }
      }

      recognition.onend = () => {
        setListening(false)
      }

      recognition.start()
    } catch (err) {
      setListening(false)
      setError("Failed to start speech recognition")
      console.log("[v0] STT error:", err)
    }
  }, [language])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setListening(false)
    }
  }, [])

  const clearTranscript = useCallback(() => {
    setTranscript("")
    finalTranscriptRef.current = ""
    setError(null)
  }, [])

  return { startListening, stopListening, listening, transcript, error, clearTranscript }
}
