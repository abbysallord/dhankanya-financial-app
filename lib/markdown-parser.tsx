"use client"

/**
 * Simple markdown parser for basic formatting
 * Supports: **bold**, *italic*, `code`
 */
export const parseMarkdown = (text: string) => {
  // Escape HTML special characters first
  let parsed = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

  // Parse bold (**text**)
  parsed = parsed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

  // Parse italic (*text* but not **text**)
  parsed = parsed.replace(/\*([^*]+?)\*/g, "<em>$1</em>")

  // Parse code (`text`)
  parsed = parsed.replace(/`([^`]+?)`/g, "<code>$1</code>")

  // Parse line breaks
  parsed = parsed.replace(/\n/g, "<br />")

  return parsed
}

/**
 * Component to render markdown content
 */
export const MarkdownText = ({ content }: { content: string }) => {
  return (
    <div
      className="prose prose-sm dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  )
}
