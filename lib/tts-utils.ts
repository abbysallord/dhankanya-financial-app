"use client"

export const getAvailableVoices = (): SpeechSynthesisVoice[] => {
  if (typeof window === "undefined") return []
  return window.speechSynthesis.getVoices()
}

export const getVoicesForLanguage = (language: string): SpeechSynthesisVoice[] => {
  const voices = getAvailableVoices()
  const langCode = language.split("-")[0]
  return voices.filter((voice) => voice.lang.startsWith(langCode))
}

export const isTTSSupported = (): boolean => {
  if (typeof window === "undefined") return false
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window
}

export const isLanguageSupported = (language: string): boolean => {
  return getVoicesForLanguage(language).length > 0
}

export const cancelAllSpeech = () => {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel()
  }
}
