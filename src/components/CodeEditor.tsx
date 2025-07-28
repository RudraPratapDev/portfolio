"use client"

import React, { useState, useRef } from "react"
import { Copy, Play } from "lucide-react"

const CodeCard = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [currentTab, setCurrentTab] = useState<"profile.ts" | "skills.ts">("profile.ts")
  const [isEditing, setIsEditing] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [isCodeReplaced, setIsCodeReplaced] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const baseContent: Record<string, string> = {
    "profile.ts": `export const rudra = createDeveloper({
  name: "Rudra Pratap Singh Tomar",
  role: "AI/ML Developer | Full Stack Developer",
  focus: ["AI-Powered Systems", "Full Stack Applications",
         "Applied Machine Learning"],
  education: "VIT Vellore (B.Tech in Information Technology)",
  technologies: [
    "React", "Node.js", "Python", "LangChain", "PyTorch"
  ],
  interests: [
    "Machine Learning Research",
    "Large Language Models (LLMs)",
    "Web Development & UI Engineering",
    "Real-World Problem Solving"
  ]
});`,
    "skills.ts": `import { Developer } from "./types"
export const coreCompetencies = {
  webDevelopment: ["React", "Next.js", "Node.js", "TypeScript"],
  aiMl: ["Python", "LangChain", "PyTorch", "Transformers",
         "OpenCV"],
  databases: ["MongoDB", "PostgreSQL", "Firebase"],
  devOps: ["Git", "Docker", "GitHub", "Vercel", "AWS"]
};`,
  }

  const [codeContent, setCodeContent] = useState(baseContent)

  const copyToClipboard = () => {
    const textToCopy = getDisplayCode()
    navigator.clipboard.writeText(textToCopy)
  }

  const handleEditorClick = () => {
    setIsEditing(true)
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus()
        // Set cursor to the end of current content instead of selecting all
        const currentContent = isCodeReplaced ? userInput : codeContent[currentTab]
        textareaRef.current.value = currentContent
        textareaRef.current.setSelectionRange(currentContent.length, currentContent.length)
      }
    }, 100)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    
    // Check if this is a complete replacement of the original code
    if (newValue !== codeContent[currentTab] && newValue.trim() !== "") {
      setIsCodeReplaced(true)
      setUserInput(newValue)
    } else if (newValue.trim() === "") {
      // If user clears everything, reset to original state
      setIsCodeReplaced(false)
      setUserInput("")
    } else {
      setUserInput(newValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      setIsEditing(false)
      if (textareaRef.current) {
        textareaRef.current.blur()
      }
    }
    // Allow Ctrl+A to select all
    if (e.key === "a" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      if (textareaRef.current) {
        textareaRef.current.select()
      }
    }
  }

  // Determine what code to display
  const getDisplayCode = () => {
    if (isCodeReplaced && userInput) {
      return userInput
    } else {
      return codeContent[currentTab]
    }
  }

  const displayCode = getDisplayCode()

  // A robust syntax highlighter component
  const HighlightedCode = React.memo(({ code, isDarkMode }: { code: string; isDarkMode: boolean }) => {
    const colors = {
      default: isDarkMode ? "#d1d5db" : "#1f2937",
      keyword: isDarkMode ? "#c792ea" : "#7c3aed",
      function: isDarkMode ? "#82aaff" : "#1d4ed8",
      variable: isDarkMode ? "#f07178" : "#dc2626",
      string: isDarkMode ? "#c3e88d" : "#059669",
      property: isDarkMode ? "#ffcb6b" : "#d97706",
      punctuation: isDarkMode ? "#89ddff" : "#0369a1",
      comment: isDarkMode ? "#546e7a" : "#6b7280",
    }

    const tokens = [
      { type: "string", pattern: /(".*?"|'.*?'|`.*?`)/ },
      { type: "keyword", pattern: /\b(export|const|import|from|new|let|var)\b/ },
      { type: "function", pattern: /\b(createDeveloper)\b/ },
      {
        type: "property",
        pattern: /\b(name|role|focus|education|technologies|interests|webDevelopment|aiMl|databases|devOps)(?=:)/,
      },
      { type: "variable", pattern: /\b(rudra|coreCompetencies|Developer)\b/ },
      { type: "punctuation", pattern: /[{}[\]();,:]/ },
    ]

    const highlightLine = (line: string) => {
      let remainingLine = line
      const highlightedElements: React.ReactElement[] = []
      let key = 0

      while (remainingLine.length > 0) {
        let matchFound = false
        for (const token of tokens) {
          const match = remainingLine.match(new RegExp(`^${token.pattern.source}`))
          if (match) {
            highlightedElements.push(
              <span key={key++} style={{ color: colors[token.type] }}>
                {match[0]}
              </span>,
            )
            remainingLine = remainingLine.substring(match[0].length)
            matchFound = true
            break
          }
        }

        if (!matchFound) {
          const nextTokenIndex = tokens.reduce((earliestIndex, token) => {
            const match = remainingLine.match(token.pattern)
            return match && match.index !== undefined ? Math.min(earliestIndex, match.index) : earliestIndex
          }, Number.POSITIVE_INFINITY)

          const textEnd = nextTokenIndex === Number.POSITIVE_INFINITY ? remainingLine.length : nextTokenIndex
          const text = remainingLine.substring(0, textEnd)
          if (text) {
            highlightedElements.push(
              <span key={key++} style={{ color: colors.default }}>
                {text}
              </span>,
            )
          }
          remainingLine = remainingLine.substring(text.length)
        }
      }
      return highlightedElements
    }

    const lines = code.split("\n")

    return (
      <div className="flex font-mono text-sm leading-relaxed">
        {/* Line Numbers */}
        <div className={`py-4 pr-3 pl-4 text-right select-none shrink-0 ${
          isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
          {lines.map((_, i) => (
            <div key={i}>{String(i + 1).padStart(2, " ")}</div>
          ))}
        </div>
        {/* Code Content */}
        <div className="flex-1 py-4 pr-4">
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            <code>
              {lines.map((line, i) => (
                <div key={i}>{line ? highlightLine(line) : <span>&nbsp;</span>}</div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    )
  })

  return (
    <div className="hidden lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[15%] xl:translate-x-[20%] rotate-3 origin-center w-[700px] h-[520px]">
      <div className={`relative w-full h-full rounded-xl ${
        isDarkMode 
          ? 'bg-black/30 backdrop-blur-md border border-white/20 shadow-2xl shadow-black/50' 
          : 'bg-white/90 backdrop-blur-md border border-gray-300/50 shadow-2xl shadow-gray-900/20'
      } flex flex-col overflow-hidden`}>
        {/* Header */}
        <div className={`flex items-center justify-between px-4 py-2.5 border-b ${
          isDarkMode 
            ? 'border-white/10 bg-black/20' 
            : 'border-gray-200/80 bg-gray-50/80'
        } shrink-0`}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex items-center space-x-1">
            {Object.keys(codeContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab as "profile.ts" | "skills.ts")}
                className={`px-3 py-1 text-xs rounded-md transition-colors duration-200 ${
                  currentTab === tab 
                    ? isDarkMode 
                      ? "text-white bg-white/10" 
                      : "text-gray-900 bg-gray-200/60"
                    : isDarkMode 
                      ? "text-gray-400 hover:text-white" 
                      : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <Copy 
              onClick={copyToClipboard} 
              className={`w-4 h-4 cursor-pointer ${
                isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
              } transition-colors`} 
            />
          </div>
        </div>

        {/* Code Area */}
        <div className="flex-1 overflow-y-auto relative" onClick={handleEditorClick}>
          {/* Show syntax highlighted code when not editing */}
          {!isEditing && <HighlightedCode code={displayCode} isDarkMode={isDarkMode} />}

          {/* Show textarea when editing */}
          {isEditing && (
            <textarea
              ref={textareaRef}
              value={isCodeReplaced ? userInput : codeContent[currentTab]}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={() => setIsEditing(false)}
              className={`absolute inset-0 w-full h-full ${
                isDarkMode 
                  ? 'bg-black/10 text-white caret-white' 
                  : 'bg-white/50 text-gray-900 caret-gray-900'
              } font-mono text-sm resize-none outline-none leading-relaxed`}
              style={{
                padding: "16px 16px 16px 60px", // Match the padding of syntax highlighter
                border: "none",
                background: isDarkMode ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.8)",
              }}
              placeholder="// Start typing your code here..."
            />
          )}

          {/* Click to edit hint */}
          {!isEditing && (
            <div className={`absolute bottom-4 right-4 text-xs ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            } opacity-0 hover:opacity-100 transition-opacity duration-300`}>
              Click to edit code
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-between px-4 py-1.5 ${
          isDarkMode 
            ? 'bg-black/20 border-t border-white/10 text-gray-400' 
            : 'bg-gray-50/60 border-t border-gray-200/60 text-gray-600'
        } text-xs shrink-0`}>
          <div className="flex items-center space-x-4">
            <span>TypeScript React</span>
            <span>UTF-8</span>
            {isEditing && <span className="text-green-400">● Editing</span>}
          </div>
          <button className={`flex items-center space-x-2 ${
            isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
          } transition-colors duration-200`}>
            <Play className="w-3 h-3" />
            <span>Interactive Mode</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CodeCard
