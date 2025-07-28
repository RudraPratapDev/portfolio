"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import {
  Github,
  ExternalLink,
  Star,
  Eye,
  Calendar,
  Code,
  Brain,
  Globe,
  Database,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Code Assistant",
    description:
      "Intelligent assistant for code generation, debugging, and concept explanation using LLMs. Supports natural language to code conversion and multi-language support.",
    tech: ["Python", "TensorFlow", "OpenAI API", "Flask", "React"],
    github: "https://github.com/RudraPratapDev/ai-code-assistant",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    category: "AI/ML",
    status: "In Progress",
    stars: 45,
    views: 320,
    date: "2024",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-purple-600 via-pink-600 to-red-600",
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    description:
      "Secure, transparent online voting platform with blockchain technology for immutability and verifiable audit trails. Built on Ethereum with smart contracts.",
    tech: ["Solidity", "Hardhat", "React", "Web3.js", "Ethereum"],
    github: "https://github.com/RudraPratapDev/blockchain-voting",
    demo: "#",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    category: "Blockchain",
    status: "Live",
    stars: 30,
    views: 210,
    date: "2024",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  {
    id: 3,
    title: "Real-time Collaborative Whiteboard",
    description:
      "Web-based whiteboard for real-time multi-user drawing, with infinite canvas, advanced tools, and presence indicators for seamless collaboration.",
    tech: ["Node.js", "Socket.io", "React", "TypeScript", "Canvas API"],
    github: "https://github.com/RudraPratapDev/collaborative-whiteboard",
    demo: "#",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
    category: "Web App",
    status: "Live",
    stars: 28,
    views: 180,
    date: "2023",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-green-600 via-emerald-600 to-teal-600",
  },
  {
    id: 4,
    title: "E-commerce Microservices",
    description:
      "Scalable e-commerce solution using microservices architecture for catalog, orders, and authentication. Deployed with Docker and Kubernetes.",
    tech: ["Spring Boot", "Node.js", "Kafka", "PostgreSQL", "Docker"],
    github: "https://github.com/RudraPratapDev/ecommerce-microservices",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "Backend",
    status: "Live",
    stars: 20,
    views: 105,
    date: "2023",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-orange-600 via-red-600 to-pink-600",
  },
  {
    id: 5,
    title: "Medical Image Segmentation",
    description:
      "AI model for precise segmentation of medical images using U-Net architecture, assisting in diagnostics and medical research with high accuracy.",
    tech: ["Python", "PyTorch", "U-Net", "OpenCV"],
    github: "https://github.com/RudraPratapDev/medical-segmentation",
    demo: "#",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    category: "AI/ML",
    status: "Completed",
    stars: 15,
    views: 80,
    date: "2023",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
  },
  {
    id: 6,
    title: "Mobile Weather App",
    description:
      "Cross-platform weather application with location-based forecasts, interactive maps, and push notifications for weather alerts.",
    tech: ["React Native", "TypeScript", "Weather API", "Maps SDK"],
    github: "https://github.com/RudraPratapDev/weather-app",
    demo: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    category: "Mobile",
    status: "Live",
    stars: 12,
    views: 95,
    date: "2023",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-yellow-600 via-orange-600 to-red-600",
  },
]

interface ProjectsProps {
  isDarkMode: boolean
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const totalSlides = projects.length

  useEffect(() => {
    // Auto-advance slides every 5 seconds when not animating
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  const transitionToSlide = (targetIndex: number) => {
    if (isAnimating || targetIndex === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(targetIndex)

    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  const nextSlide = () => {
    if (!isAnimating) {
      const next = (currentSlide + 1) % totalSlides
      transitionToSlide(next)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      const prev = (currentSlide - 1 + totalSlides) % totalSlides
      transitionToSlide(prev)
    }
  }

  const currentProject = projects[currentSlide]

  return (
    <section
      id="projects"
      ref={containerRef}
      className={`${
        isDarkMode ? "bg-black" : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      } py-12 sm:py-16 lg:py-20 overflow-hidden relative transition-colors duration-300`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${isDarkMode ? "bg-white/20" : "bg-blue-400/30"} rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-slate-900"
              } sm:text-4xl mb-3`}
            >
              Featured Projects
            </h2>
            <p className={`text-base ${isDarkMode ? "text-zinc-400" : "text-slate-700"} max-w-2xl mx-auto mb-6`}>
              Innovative solutions and creative implementations across various domains
            </p>
          </div>

          {/* Main Project Display */}
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Project Image */}
              <div className="relative group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-20 rounded-2xl blur-xl transition-all duration-1000`}
                />
                <div
                  className={`relative overflow-hidden rounded-2xl border ${
                    isDarkMode ? "border-zinc-800" : "border-blue-200"
                  } shadow-2xl transition-all duration-1000`}
                >
                  <img
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        currentProject.status === "Live"
                          ? "bg-green-500/20 text-green-400 border border-green-500/20"
                          : currentProject.status === "In Progress"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/20"
                      }`}
                    >
                      {currentProject.status}
                    </span>
                  </div>

                  {/* Category Icon */}
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${currentProject.gradient} text-white`}>
                      {currentProject.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-2xl lg:text-3xl font-bold ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      } transition-all duration-500`}
                    >
                      {currentProject.title}
                    </h3>
                    <div
                      className={`flex items-center space-x-2 text-xs ${
                        isDarkMode ? "text-zinc-400" : "text-slate-600"
                      }`}
                    >
                      <Calendar className="w-3 h-3" />
                      <span>{currentProject.date}</span>
                    </div>
                  </div>

                  <p className={`text-sm lg:text-base leading-relaxed ${isDarkMode ? "text-zinc-300" : "text-slate-700"}`}>
                    {currentProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isDarkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 ${
                          isDarkMode
                            ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                            : "bg-white text-slate-700 border border-blue-200"
                        } text-xs rounded-full hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-4 py-2 ${
                      isDarkMode
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    } rounded-lg text-sm font-medium transition-colors duration-200`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={currentProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-4 py-2 border ${
                      isDarkMode
                        ? "border-white/20 text-white hover:bg-white/5"
                        : "border-slate-300 text-slate-700 hover:bg-slate-50"
                    } rounded-lg text-sm font-medium transition-colors duration-200`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 pt-2">
                  <div
                    className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-zinc-400" : "text-slate-600"}`}
                  >
                    <Star className="w-3 h-3" />
                    <span>{currentProject.stars} stars</span>
                  </div>
                  <div
                    className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-zinc-400" : "text-slate-600"}`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>{currentProject.views} views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-8">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-slate-900"
                } backdrop-blur-sm transition-colors duration-200 disabled:opacity-50`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-8">
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-slate-900"
                } backdrop-blur-sm transition-colors duration-200 disabled:opacity-50`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => transitionToSlide(index)}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${currentProject.gradient}`
                    : isDarkMode
                      ? "bg-white/20 hover:bg-white/40"
                      : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className={`text-center mt-4 text-xs ${isDarkMode ? "text-zinc-400" : "text-slate-600"}`}>
            <span className="font-mono">
              {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
