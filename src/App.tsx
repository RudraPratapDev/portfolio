"use client"

import { useState } from "react"
import RudraPortfolio from "./components/RudraPortfolios.tsx"
import AboutMe from "./components/AboutMe.tsx"
import TechStack from "./components/TechStack.tsx"
import Projects from "./components/Projects.tsx"
import ProjectsSection2 from "./components/ProjectsSection2.tsx"
import Blogs from "./components/Blogs.tsx"
import Contact from "./components/Contact.tsx"
import Chatbot from "./components/Chatbot.tsx"

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  return (
    <div className="App">
      <RudraPortfolio isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <AboutMe isDarkMode={isDarkMode} />
      <TechStack isDarkMode={isDarkMode} />
      {/* <Projects isDarkMode={isDarkMode} /> */}
      <ProjectsSection2 isDarkMode={isDarkMode} />
      <Blogs isDarkMode={isDarkMode} />
      <Contact
        email="rudra.tomar608@gmail.com"
        githubUrl="https://github.com/rudrapratapdev"
        linkedinUrl="https://linkedin.com/in/rudra-tech"
        discordId="yourDiscordId"
        isDarkMode={isDarkMode}
      />
      <Chatbot isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
