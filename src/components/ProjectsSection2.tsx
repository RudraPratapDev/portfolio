"use client"

import type React from "react"
import { useState } from "react"
import { Github, ExternalLink, Filter, ArrowRight, Star, GitFork } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Flight Local (B2B Travel Solution)",
    category: "Web Development",
    categoryId: "web",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RX8N1i0hc0B3lah3AfIn8aZyHvPSoJ.png",
    description:
      "Comprehensive B2B travel platform with flight booking, hotel reservations, and travel management tools.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/RudraPratapDev/flight-local",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AI Lab Granada",
    category: "Web Development",
    categoryId: "web",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RX8N1i0hc0B3lah3AfIn8aZyHvPSoJ.png",
    description: "AI research lab website with interactive demos and research publications showcase.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/RudraPratapDev/ai-lab-granada",
    demo: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Khora – Urban Thinkers Consulting",
    category: "Web Development",
    categoryId: "web",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RX8N1i0hc0B3lah3AfIn8aZyHvPSoJ.png",
    description: "Urban planning consultancy website with project showcases and interactive city planning tools.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/RudraPratapDev/khora-consulting",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Tryotel – Cross-Platform Travel App",
    category: "Mobile Development",
    categoryId: "mobile",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a1HuykEXm9pp6oZ2yKPG3accT26eoQ.png",
    description: "Cross-platform mobile application for flight booking with iOS and Android support.",
    tech: ["React Native", "TypeScript", "Firebase", "Stripe API"],
    github: "https://github.com/RudraPratapDev/tryotel-app",
    demo: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Tapy – Download. Connect. Upload",
    category: "Web Development",
    categoryId: "web",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a1HuykEXm9pp6oZ2yKPG3accT26eoQ.png",
    description: "File sharing and collaboration platform with real-time synchronization and team features.",
    tech: ["Vue.js", "Node.js", "Socket.io", "AWS S3"],
    github: "https://github.com/RudraPratapDev/tapy-platform",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Medical Image Segmentation AI",
    category: "AI/ML",
    categoryId: "ai",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RX8N1i0hc0B3lah3AfIn8aZyHvPSoJ.png",
    description: "Deep learning model for medical image segmentation using U-Net architecture.",
    tech: ["Python", "PyTorch", "OpenCV", "Flask"],
    github: "https://github.com/RudraPratapDev/medical-segmentation",
    demo: "#",
    featured: true,
  },
]

const categories = [
  { id: "all", name: "All", count: projects.length, number: "10" },
  { id: "ai", name: "AI/ML", count: projects.filter((p) => p.categoryId === "ai").length, number: "01" },
  { id: "web", name: "Web Development", count: projects.filter((p) => p.categoryId === "web").length, number: "08" },
  {
    id: "mobile",
    name: "Mobile Development",
    count: projects.filter((p) => p.categoryId === "mobile").length,
    number: "02",
  },
]

interface ProjectsSection2Props {
  isDarkMode: boolean
}

const ProjectsSection2: React.FC<ProjectsSection2Props> = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.categoryId === activeFilter)

  return (
    <section
      className={`py-20 sm:py-24 lg:py-32 ${
        isDarkMode ? "bg-zinc-950" : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      } transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"} sm:text-5xl mb-4`}
          >
            Portfolio Projects
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-zinc-400" : "text-slate-700"} max-w-2xl mx-auto`}>
            A curated collection of my work showcasing various technologies and creative solutions.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Filter className={`w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-slate-600"}`} />
              <span className={`${isDarkMode ? "text-gray-400" : "text-slate-600"} font-mono text-sm`}>Filter by</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all duration-300 font-mono text-sm ${
                  activeFilter === category.id
                    ? isDarkMode 
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                      : "border-blue-500 bg-blue-50 text-blue-600"
                    : isDarkMode
                      ? "border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white"
                      : "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 bg-white/70"
                }`}
              >
                <span className={`text-xs ${
                  activeFilter === category.id 
                    ? isDarkMode ? "text-cyan-400" : "text-blue-500"
                    : isDarkMode ? "text-gray-600" : "text-slate-400"
                }`}>
                  {category.number}
                </span>
                <span>{category.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    activeFilter === category.id 
                      ? isDarkMode ? "bg-cyan-400/20" : "bg-blue-100"
                      : isDarkMode ? "bg-gray-800" : "bg-slate-200"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
                {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                isDarkMode 
                  ? "bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50"
                  : "bg-white/80 border border-slate-200 hover:border-blue-300 shadow-lg"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-slate-100"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  isDarkMode 
                    ? "bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    : "bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                }`} />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className={`w-5 h-5 ${isDarkMode ? "text-cyan-400" : "text-blue-500"}`} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    isDarkMode 
                      ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                      : "bg-blue-100 text-blue-600 border border-blue-200"
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded font-mono ${
                          isDarkMode 
                            ? "bg-gray-700 text-gray-300"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                } group-hover:${isDarkMode ? "text-cyan-400" : "text-blue-600"} transition-colors duration-300`}>
                  {project.title}
                </h3>

                <p className={`${isDarkMode ? "text-gray-400" : "text-slate-600"} mb-4 line-clamp-3`}>
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Github className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-slate-600"}`} />
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}>
                        GitHub
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ExternalLink className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-slate-600"}`} />
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}>
                        Demo
                      </span>
                    </div>
                  </div>

                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isDarkMode 
                      ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/20"
                      : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
                  }`}>
                    <span>View</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-center mt-20">
          <div className="flex items-center space-x-2 text-gray-500 font-mono text-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>For more projects visit my GitHub</span>
            <div className="w-8 h-px bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection2
