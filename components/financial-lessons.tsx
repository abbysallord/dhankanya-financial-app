"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { financialLessons } from "@/lib/financial-content"
import { useState } from "react"

export default function FinancialLessons() {
  const { t, language } = useLanguage()
  const [expandedCategory, setExpandedCategory] = useState<string | null>("budgeting")

  const getTranslation = (item: Record<string, string>, defaultKey = "en"): string => {
    return item[language as keyof typeof item] || item[defaultKey]
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2 mb-6 animate-fade-in">
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.669 0-3.218-.51-4.5-1.385A7.968 7.968 0 009 4.804z" />
        </svg>
        <h2 className="text-2xl font-bold">Financial Education</h2>
      </div>

      <div className="grid gap-4">
        {Object.entries(financialLessons).map(([categoryKey, category]) => (
          <div key={categoryKey} className="animate-fade-in">
            <div>
              <Card className="cursor-pointer hover:shadow-lg transition-smooth border-border/50 hover:border-primary/30">
                <CardHeader onClick={() => setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey)}>
                  <div className="flex items-center justify-between">
                    <CardTitle>{getTranslation(category.title)}</CardTitle>
                    <div
                      className={`transition-transform duration-200 ${
                        expandedCategory === categoryKey ? "rotate-90" : ""
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </CardHeader>

                {expandedCategory === categoryKey && (
                  <div className="animate-fade-in overflow-hidden">
                    <CardContent className="space-y-4">
                      {category.lessons?.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="p-4 rounded-lg bg-muted/50 space-y-2 hover:bg-muted/70 transition-smooth"
                        >
                          <h3 className="font-semibold">{getTranslation(lesson.title)}</h3>
                          <p className="text-sm text-muted-foreground">{getTranslation(lesson.description)}</p>
                          <p className="text-sm leading-relaxed">{getTranslation(lesson.content)}</p>
                          {lesson.tips && lesson.tips.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-border/50">
                              <p className="text-xs font-semibold mb-2 text-primary">Quick Tips:</p>
                              <ul className="text-xs space-y-1">
                                {lesson.tips.map((tip, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    <span>{getTranslation(tip)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </div>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>

      <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Card className="bg-primary/5 border-primary/20 hover:bg-primary/10 transition-smooth">
          <CardHeader>
            <CardTitle className="text-base">Learning Tip</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            Start with one lesson at a time and practice the concepts with your own finances. Real-world application is
            key to financial literacy.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
