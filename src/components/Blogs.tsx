"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import {
  ExternalLink,
  Calendar,
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Pen,
  Users,
  TrendingUp,
} from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with React and TypeScript",
    description:
      "Learn how to create robust, type-safe web applications that can scale with your business needs. From project setup to deployment, this guide covers best practices and advanced patterns.",
    tags: ["React", "TypeScript", "Web Development", "Scalability"],
    mediumUrl: "https://medium.com/@your-username/building-scalable-web-applications",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    category: "Web Development",
    readTime: "8 min read",
    publishedAt: "2024-01-15",
    likes: 245,
    comments: 32,
    date: "2024",
    icon: <Pen className="w-6 h-6" />,
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  {
    id: 2,
    title: "The Art of Clean Code: Principles Every Developer Should Know",
    description:
      "Discover the fundamental principles of writing clean, maintainable code that your future self will thank you for. Learn about naming conventions, functions, comments, and more.",
    tags: ["Programming", "Best Practices", "Code Quality", "Software Engineering"],
    mediumUrl: "https://medium.com/@your-username/art-of-clean-code",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=400&fit=crop",
    category: "Programming",
    readTime: "12 min read",
    publishedAt: "2024-01-02",
    likes: 387,
    comments: 45,
    date: "2024",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "from-purple-600 via-pink-600 to-red-600",
  },
  {
    id: 3,
    title: "Understanding Machine Learning: A Beginner's Guide",
    description:
      "A comprehensive introduction to machine learning concepts, algorithms, and practical applications. Perfect for developers looking to venture into AI and data science.",
    tags: ["Machine Learning", "AI", "Data Science", "Python"],
    mediumUrl: "https://medium.com/@your-username/understanding-machine-learning",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    category: "AI/ML",
    readTime: "15 min read",
    publishedAt: "2023-12-20",
    likes: 512,
    comments: 68,
    date: "2023",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-green-600 via-emerald-600 to-teal-600",
  },
  {
    id: 4,
    title: "Microservices Architecture: Design Patterns and Best Practices",
    description:
      "Explore the world of microservices architecture with practical design patterns, communication strategies, and deployment considerations for modern applications.",
    tags: ["Microservices", "Architecture", "Docker", "Kubernetes"],
    mediumUrl: "https://medium.com/@your-username/microservices-architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    category: "Architecture",
    readTime: "10 min read",
    publishedAt: "2023-11-18",
    likes: 298,
    comments: 41,
    date: "2023",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-orange-600 via-red-600 to-pink-600",
  },
]

interface BlogsProps {
  isDarkMode: boolean
}

const Blogs: React.FC<BlogsProps> = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const totalSlides = blogPosts.length

  useEffect(() => {
    // Auto-advance slides every 6 seconds when not animating
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 6000)

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

  const currentBlog = blogPosts[currentSlide]

  return (
    <section
      id="blogs"
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
              Latest Blog Posts
            </h2>
            <p className={`text-base ${isDarkMode ? "text-zinc-400" : "text-slate-700"} max-w-2xl mx-auto mb-6`}>
              Thoughts, tutorials, and insights from my journey in tech
            </p>
          </div>

          {/* Main Blog Display */}
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Blog Image */}
              <div className="relative group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentBlog.gradient} opacity-20 rounded-2xl blur-xl transition-all duration-1000`}
                />
                <div
                  className={`relative overflow-hidden rounded-2xl border ${
                    isDarkMode ? "border-zinc-800" : "border-blue-200"
                  } shadow-2xl transition-all duration-1000`}
                >
                  <img
                    src={currentBlog.image || "/placeholder.svg"}
                    alt={currentBlog.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-3 py-1 text-xs rounded-full font-medium bg-blue-500/20 text-blue-400 border border-blue-500/20"
                    >
                      {currentBlog.readTime}
                    </span>
                  </div>

                  {/* Category Icon */}
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${currentBlog.gradient} text-white`}>
                      {currentBlog.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-2xl lg:text-3xl font-bold ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      } transition-all duration-500`}
                    >
                      {currentBlog.title}
                    </h3>
                    <div
                      className={`flex items-center space-x-2 text-xs ${
                        isDarkMode ? "text-zinc-400" : "text-slate-600"
                      }`}
                    >
                      <Calendar className="w-3 h-3" />
                      <span>{currentBlog.date}</span>
                    </div>
                  </div>

                  <p className={`text-sm lg:text-base leading-relaxed ${isDarkMode ? "text-zinc-300" : "text-slate-700"}`}>
                    {currentBlog.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <h4
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isDarkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentBlog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 ${
                          isDarkMode
                            ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                            : "bg-white text-slate-700 border border-blue-200"
                        } text-xs rounded-full hover:scale-105 transition-transform duration-200`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  <a
                    href={currentBlog.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-4 py-2 ${
                      isDarkMode
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    } rounded-lg text-sm font-medium transition-colors duration-200`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Article</span>
                  </a>
                  <a
                    href="https://medium.com/@your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-4 py-2 border ${
                      isDarkMode
                        ? "border-white/20 text-white hover:bg-white/5"
                        : "border-slate-300 text-slate-700 hover:bg-slate-50"
                    } rounded-lg text-sm font-medium transition-colors duration-200`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Profile</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 pt-2">
                  <div
                    className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-zinc-400" : "text-slate-600"}`}
                  >
                    <span>❤️</span>
                    <span>{currentBlog.likes} likes</span>
                  </div>
                  <div
                    className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-zinc-400" : "text-slate-600"}`}
                  >
                    <span>💬</span>
                    <span>{currentBlog.comments} comments</span>
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
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => transitionToSlide(index)}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${currentBlog.gradient}`
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

export default Blogs
