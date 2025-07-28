"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Bot, Send, X, Minimize2, Maximize2, User, Mic, MicOff, Volume2, VolumeX } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatbotProps {
  isDarkMode: boolean
}

const Chatbot: React.FC<ChatbotProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Rudra's AI assistant. I can tell you about his projects, skills, and experience. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = "en-US"

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputValue(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => {
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
  }, [])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Simple if-else logic for dummy responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! Great to meet you! I'm here to help you learn more about Rudra. What interests you most - his projects, technical skills, or background?"
    }

    if (message.includes("project") || message.includes("work")) {
      return "Rudra has worked on some amazing projects! His standout work includes an AI Code Assistant using LLMs, a Blockchain Voting System, and a Real-time Collaborative Whiteboard. He's also built e-commerce microservices and medical image segmentation models. Which project would you like to know more about?"
    }

    if (message.includes("skill") || message.includes("tech") || message.includes("technology")) {
      return "Rudra is skilled in multiple domains! His tech stack includes:\n\n🚀 Frontend: React, Next.js, TypeScript, TailwindCSS\n🔧 Backend: Node.js, Python, Django, Express.js\n🤖 AI/ML: TensorFlow, PyTorch, LangChain, Scikit-learn\n☁️ DevOps: Docker, AWS, Git, Kubernetes\n\nHe's particularly passionate about AI/ML and full-stack development!"
    }

    if (message.includes("ai") || message.includes("machine learning") || message.includes("ml")) {
      return "AI/ML is Rudra's passion! He's experienced with TensorFlow, PyTorch, and has built projects like an AI Code Assistant and Medical Image Segmentation model. He's particularly interested in Large Language Models and their practical applications. He stays updated with the latest AI research and loves implementing cutting-edge solutions!"
    }

    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("college") ||
      message.includes("university")
    ) {
      return "Rudra is currently pursuing his B.Tech in Information Technology at VIT Vellore (2023-2027). He's actively involved in tech clubs, hackathons, and has won several coding competitions. His academic journey is complemented by hands-on project experience and open-source contributions!"
    }

    if (message.includes("experience") || message.includes("internship") || message.includes("job")) {
      return "Rudra is actively seeking challenging internship opportunities in Full Stack & AI/ML Development! He has hands-on experience through personal projects, hackathons (including winning university-level competitions), and 15+ open-source contributions. He's eager to apply his skills in a professional environment!"
    }

    if (message.includes("contact") || message.includes("reach") || message.includes("email")) {
      return "You can reach Rudra through:\n📧 Email: rudra.tomar608@gmail.com\n💼 LinkedIn: linkedin.com/in/rudra-tech\n🐙 GitHub: github.com/RudraPratapDev\n🐦 Twitter: @rudra_dev\n\nHe's always open to discussing new opportunities and collaborations!"
    }

    if (message.includes("github") || message.includes("code") || message.includes("repository")) {
      return "Check out Rudra's GitHub at github.com/RudraPratapDev! He has 25+ projects showcasing his skills in AI/ML, full-stack development, and blockchain. His repositories include detailed documentation and demonstrate his coding best practices. He's also an active open-source contributor!"
    }

    if (message.includes("hackathon") || message.includes("competition") || message.includes("achievement")) {
      return "Rudra has an impressive track record in competitions! 🏆 He's won 3 hackathons including a university-level competition, secured 2nd place in a state-level coding competition, and actively contributes to 15+ open-source projects. He thrives in collaborative, fast-paced environments!"
    }

    if (message.includes("thank") || message.includes("thanks")) {
      return "You're very welcome! I'm glad I could help you learn more about Rudra. If you have any other questions about his projects, skills, or background, feel free to ask. Don't forget to check out his portfolio and connect with him! 😊"
    }

    if (message.includes("bye") || message.includes("goodbye")) {
      return "Thanks for chatting! It was great telling you about Rudra. Feel free to reach out to him directly for any opportunities or collaborations. Have a wonderful day! 👋"
    }

    // Default response
    return "That's an interesting question! I'd love to help you learn more about Rudra. You can ask me about his projects, technical skills, education, achievements, or how to contact him. What would you like to know more about?"
  }

  const speakText = (text: string) => {
    if (!voiceEnabled || !("speechSynthesis" in window)) return

    // Stop any current speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.volume = 0.8

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true)
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponseText = getBotResponse(inputValue)
        const botResponse: Message = {
          id: messages.length + 2,
          text: botResponseText,
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)

        // Speak the response if voice is enabled
        if (voiceEnabled) {
          speakText(botResponseText)
        }
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className={`relative inline-flex h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
              isDarkMode ? "focus:ring-offset-gray-900" : "focus:ring-offset-white"
            } group`}
            title="Chat with Rudra's AI Assistant"
          >
            <span
              className={`absolute inset-[-1000%] animate-[spin_3s_linear_infinite] ${
                isDarkMode
                  ? "bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#8B5CF6_50%,#3B82F6_100%)]"
                  : "bg-[conic-gradient(from_90deg_at_50%_50%,#1E40AF_0%,#7C3AED_50%,#1E40AF_100%)]"
              }`}
            />
            <span
              className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${
                isDarkMode ? "bg-slate-950 text-white hover:bg-slate-900" : "bg-white text-slate-900 hover:bg-slate-50"
              } backdrop-blur-3xl transition-colors duration-200`}
            >
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse group-hover:animate-bounce" />
            </span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${
            isDarkMode ? "bg-zinc-900 border border-zinc-700" : "bg-white border border-slate-300"
          } rounded-2xl shadow-2xl transition-all duration-300 ${
            isMinimized 
              ? "w-72 h-14 sm:w-80 sm:h-16" 
              : "w-[calc(100vw-2rem)] h-[calc(100vh-6rem)] max-w-sm max-h-[500px] sm:w-96 sm:h-[500px]"
          }`}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between p-3 sm:p-4 border-b ${
              isDarkMode ? "border-zinc-700 bg-zinc-800" : "border-slate-200 bg-slate-50"
            } rounded-t-2xl`}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="relative flex-shrink-0">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-gradient-to-r from-blue-600 to-purple-600"
                  } rounded-full flex items-center justify-center`}
                >
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-zinc-900" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className={`${isDarkMode ? "text-white" : "text-slate-900"} font-semibold text-xs sm:text-sm truncate`}>
                  Rudra's AI Assistant
                </h3>
                <p className={`${isDarkMode ? "text-zinc-400" : "text-slate-600"} text-xs hidden sm:block`}>
                  Online • Voice & Text Enabled
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className={`${
                  isDarkMode ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors duration-200 hidden sm:block`}
                title={voiceEnabled ? "Disable voice" : "Enable voice"}
              >
                {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className={`${
                  isDarkMode ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors duration-200`}
              >
                {isMinimized ? <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" /> : <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={`${
                  isDarkMode ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors duration-200`}
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 h-64 sm:h-80">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[85%] sm:max-w-[80%] ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === "user"
                            ? isDarkMode
                              ? "bg-blue-500"
                              : "bg-blue-600"
                            : isDarkMode
                              ? "bg-gradient-to-r from-blue-500 to-purple-500"
                              : "bg-gradient-to-r from-blue-600 to-purple-600"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        ) : (
                          <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        )}
                      </div>
                      <div
                        className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2 ${
                          message.sender === "user"
                            ? isDarkMode
                              ? "bg-blue-500 text-white"
                              : "bg-blue-600 text-white"
                            : isDarkMode
                              ? "bg-zinc-800 text-zinc-100"
                              : "bg-slate-100 text-slate-900"
                        }`}
                      >
                        <p className="text-xs sm:text-sm whitespace-pre-line">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "user"
                              ? "text-blue-100"
                              : isDarkMode
                                ? "text-zinc-400"
                                : "text-slate-600"
                          }`}
                        >
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${
                          isDarkMode
                            ? "bg-gradient-to-r from-blue-500 to-purple-500"
                            : "bg-gradient-to-r from-blue-600 to-purple-600"
                        } flex items-center justify-center`}
                      >
                        <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <div className={`${isDarkMode ? "bg-zinc-800" : "bg-slate-100"} rounded-2xl px-3 py-2 sm:px-4 sm:py-2`}>
                        <div className="flex space-x-1">
                          <div
                            className={`w-2 h-2 ${
                              isDarkMode ? "bg-zinc-400" : "bg-slate-600"
                            } rounded-full animate-bounce`}
                            style={{ animationDelay: "0ms" }}
                          />
                          <div
                            className={`w-2 h-2 ${
                              isDarkMode ? "bg-zinc-400" : "bg-slate-600"
                            } rounded-full animate-bounce`}
                            style={{ animationDelay: "150ms" }}
                          />
                          <div
                            className={`w-2 h-2 ${
                              isDarkMode ? "bg-zinc-400" : "bg-slate-600"
                            } rounded-full animate-bounce`}
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className={`p-3 sm:p-4 border-t ${isDarkMode ? "border-zinc-700" : "border-slate-200"}`}>
                <div className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Rudra..."
                    className={`flex-1 ${
                      isDarkMode
                        ? "bg-zinc-800 text-white placeholder-zinc-400 border-zinc-600 focus:ring-blue-500"
                        : "bg-slate-50 text-slate-900 placeholder-slate-500 border-slate-300 focus:ring-blue-500"
                    } rounded-full px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 border`}
                  />

                  {/* Voice input button */}
                  {recognitionRef.current && (
                    <button
                      onClick={isListening ? stopListening : startListening}
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${
                        isListening
                          ? "bg-red-500 hover:bg-red-600"
                          : isDarkMode
                            ? "bg-zinc-700 hover:bg-zinc-600"
                            : "bg-slate-200 hover:bg-slate-300"
                      } rounded-full flex items-center justify-center ${
                        isDarkMode ? "text-white" : "text-slate-700"
                      } transition-all duration-200`}
                      title={isListening ? "Stop listening" : "Start voice input"}
                    >
                      {isListening ? <MicOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Mic className="w-3 h-3 sm:w-4 sm:h-4" />}
                    </button>
                  )}

                  {/* Stop speaking button */}
                  {isSpeaking && (
                    <button
                      onClick={stopSpeaking}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-all duration-200"
                      title="Stop speaking"
                    >
                      <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  )}

                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className={`w-7 h-7 sm:w-8 sm:h-8 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    } rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div
                    className={`flex items-center space-x-1 text-xs ${isDarkMode ? "text-zinc-500" : "text-slate-500"}`}
                  >
                    <Bot className="w-3 h-3" />
                    <span className="hidden sm:inline">Voice & Text AI • Ask me anything about Rudra!</span>
                    <span className="sm:hidden">AI Assistant</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Chatbot
