"use client"

import { useState, useEffect } from "react"
import { Github, MessageCircle, Sun, Moon, Menu, X } from "lucide-react"
import CodeEditor from "./CodeEditor.tsx"

interface RudraPortfolioProps {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
}

export default function RudraPortfolio({ isDarkMode, setIsDarkMode }: RudraPortfolioProps) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 120 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsNavOpen(false)
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-900"
      }`}
    >
      <div
        className={`absolute inset-0 opacity-20`}
        style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(59,130,246,0.08)"} 1px, transparent 1px),
            linear-gradient(90deg, ${
              isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(59,130,246,0.08)"
            } 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div
          className={`absolute top-0 left-0 w-4 h-4 border-l border-t ${
            isDarkMode ? "border-white/30" : "border-blue-400/40"
          } animate-fade-in`}
        />
        <div
          className={`absolute top-0 left-0 w-4 h-4 border-t ${
            isDarkMode ? "border-white/30" : "border-blue-400/40"
          } transform rotate-90 origin-top-left animate-fade-in`}
          style={{ animationDelay: "0.1s" }}
        />
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-4 h-4 border-r border-t ${
            isDarkMode ? "border-white/30" : "border-blue-400/40"
          } animate-fade-in`}
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className={`absolute top-0 right-0 w-4 h-4 border-t ${
            isDarkMode ? "border-white/30" : "border-blue-400/40"
          } transform rotate-[-90deg] origin-top-right animate-fade-in`}
          style={{ animationDelay: "0.3s" }}
        />
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-px ${
          isDarkMode
            ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
            : "bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-px h-full ${
          isDarkMode
            ? "bg-gradient-to-b from-transparent via-white/20 to-transparent"
            : "bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
        }`}
      />
      <div
        className={`absolute top-0 right-0 w-px h-full ${
          isDarkMode
            ? "bg-gradient-to-b from-transparent via-white/20 to-transparent"
            : "bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
        }`}
      />

      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-gradient-to-br from-transparent via-transparent to-white/5"
            : "bg-gradient-to-br from-transparent via-transparent to-blue-500/10"
        }`}
      />

      <div
        className={`relative z-20 border-b ${
          isDarkMode ? "border-white/10 bg-black/80" : "border-blue-200/50 bg-white/80"
        } backdrop-blur-sm hidden md:block`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 text-center">
          <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}>
            **Seeking challenging internship opportunities** in Full Stack & AI/ML Development
            <span className={`mx-2 ${isDarkMode ? "text-white/20" : "text-slate-400/50"}`}>|</span>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${
                isDarkMode ? "text-white hover:text-gray-300" : "text-blue-600 hover:text-blue-800"
              } transition-colors cursor-pointer`}
            >
              Let's connect →
            </button>
          </span>
        </div>
      </div>

      <nav
        className={`fixed left-0 right-0 z-50 border-b ${
          isDarkMode ? "border-white/10" : "border-blue-200/50"
        } backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? `top-0 ${
                isDarkMode ? "bg-black/95 shadow-lg shadow-black/20" : "bg-white/95 shadow-lg shadow-blue-900/10"
              }`
            : `md:top-[52px] top-0 ${isDarkMode ? "bg-black/90" : "bg-white/90"}`
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`w-6 h-6 ${
                  isDarkMode ? "bg-white text-black" : "bg-slate-800 text-white"
                } rounded-sm flex items-center justify-center font-bold text-sm`}
              >
                R
              </div>
              <span className="text-xl font-bold tracking-tight">RUDRA</span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm">
              <button
                onClick={() => scrollToSection("about")}
                className={`${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors cursor-pointer`}
              >
                about
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors cursor-pointer`}
              >
                projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors cursor-pointer`}
              >
                skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors cursor-pointer`}
              >
                contact
              </button>

              <div className={`w-px h-4 ${isDarkMode ? "bg-white/20" : "bg-slate-300"}`}></div>

              <a
                href="https://github.com/RudraPratapDev"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors`}
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors p-1 rounded-full`}
                aria-label="Toggle dark/light mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                } transition-colors p-1 rounded-full`}
                aria-label="Toggle dark/light mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className={`${isDarkMode ? "text-white" : "text-slate-800"}`}
                aria-label="Toggle navigation menu"
              >
                {isNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isNavOpen && (
          <div
            className={`md:hidden ${isDarkMode ? "bg-black/95" : "bg-white/95"} backdrop-blur-lg px-6 py-4 border-t ${
              isDarkMode ? "border-white/10" : "border-slate-200"
            } animate-slide-down`}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <button
                onClick={() => scrollToSection("about")}
                className={`${
                  isDarkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                } transition-colors py-2 border-b ${isDarkMode ? "border-white/5" : "border-slate-200"} text-left`}
              >
                about
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${
                  isDarkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                } transition-colors py-2 border-b ${isDarkMode ? "border-white/5" : "border-slate-200"} text-left`}
              >
                projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`${
                  isDarkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                } transition-colors py-2 border-b ${isDarkMode ? "border-white/5" : "border-slate-200"} text-left`}
              >
                skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${
                  isDarkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                } transition-colors py-2 border-b ${isDarkMode ? "border-white/5" : "border-slate-200"} text-left`}
              >
                contact
              </button>
              <a
                href="https://github.com/RudraPratapDev"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsNavOpen(false)}
                className={`${
                  isDarkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                } transition-colors py-2 flex items-center space-x-2`}
              >
                <Github className="w-4 h-4" /> <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-[85vh] flex items-center overflow-hidden mt-20 md:mt-[120px]"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8 lg:pr-12 relative z-10">
            <div
              className={`flex items-center space-x-2 text-sm font-mono ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>AI/ML Engineer | Full Stack Developer</span>
            </div>
            <div className="space-y-6">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                <span className={`${isDarkMode ? "text-white" : "text-slate-900"}`}>Hi, I'm </span>
                <span className={`${isDarkMode ? "text-white" : "text-slate-900"}`}>Rudra.</span>
                <br />
                <span className={`${isDarkMode ? "text-white" : "text-slate-900"}`}>I Build </span>
                <span className={`${isDarkMode ? "text-gray-500" : "text-blue-600"}`}>
                  AI Systems & Modern Web Applications.
                </span>
              </h1>

              <p className={`text-lg leading-relaxed max-w-lg ${isDarkMode ? "text-gray-400" : "text-slate-700"}`}>
                I design and build AI-driven systems and full-stack applications that solve real-world problems through
                scalable, reliable technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className={`relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${
                  isDarkMode ? "focus:ring-offset-slate-50" : "focus:ring-offset-blue-100"
                }`}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md px-8 py-1 text-sm font-medium ${
                    isDarkMode
                      ? "bg-slate-950 text-white hover:bg-slate-900"
                      : "bg-white text-slate-900 hover:bg-blue-50"
                  } backdrop-blur-3xl transition-colors duration-200`}
                >
                  VIEW PROJECTS
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`inline-flex items-center justify-center px-8 py-2 border ${
                  isDarkMode
                    ? "border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                    : "border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
                } rounded-md text-sm font-medium transition-colors duration-200`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>

          <CodeEditor isDarkMode={isDarkMode} />
        </div>

        <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
          <div
            className={`absolute bottom-0 left-0 w-4 h-4 border-l border-b ${
              isDarkMode ? "border-white/30" : "border-blue-400/40"
            } animate-fade-in`}
            style={{ animationDelay: "0.4s" }}
          />
          <div
            className={`absolute bottom-0 left-0 w-4 h-4 border-b ${
              isDarkMode ? "border-white/30" : "border-blue-400/40"
            } transform rotate-180 origin-bottom-left animate-fade-in`}
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className={`absolute bottom-0 right-0 w-4 h-4 border-r border-b ${
              isDarkMode ? "border-white/30" : "border-blue-400/40"
            } animate-fade-in`}
            style={{ animationDelay: "0.6s" }}
          />
          <div
            className={`absolute bottom-0 right-0 w-4 h-4 border-b ${
              isDarkMode ? "border-white/30" : "border-blue-400/40"
            } transform rotate-90 origin-bottom-right animate-fade-in`}
            style={{ animationDelay: "0.7s" }}
          />
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-\\[spin_2s_linear_infinite\\] {
            animation: spin 2s linear infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          .animate-pulse {
            animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes slide-down {
            0% { transform: translateY(-100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-down {
            animation: slide-down 0.3s ease-out forwards;
          }
        `
      }} />
    </div>
  )
}
