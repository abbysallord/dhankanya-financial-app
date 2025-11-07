export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export interface ChatRequest {
  message: string
  language: string
  history: Array<{ role: string; content: string }>
}
