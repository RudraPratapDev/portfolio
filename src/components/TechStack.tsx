import type React from "react"


const techCategories = {
  "Web Development": [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  ],
  "AI/ML & Data Science": [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    {
      name: "Scikit-learn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Google Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    {
      name: "Terraform",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  ],
}


interface TechStackProps {
  isDarkMode: boolean
}

const TechStack: React.FC<TechStackProps> = ({ isDarkMode }) => {
  return (
    <section
      id="skills"
      className={`${isDarkMode ? "bg-black" : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"} py-20 sm:py-24 lg:py-32 overflow-hidden transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className={`relative text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"} sm:text-4xl inline-block group`}
          >
            My Tech Stack
            {/* Animated underline effect */}
            <span
              className={`absolute bottom-[-10px] left-0 h-1 w-2/3 ${isDarkMode ? "bg-blue-500" : "bg-blue-600"} transition-all duration-500 group-hover:w-full`}
            ></span>
          </h2>
          <p className={`mt-4 text-lg leading-8 ${isDarkMode ? "text-zinc-400" : "text-slate-700"}`}>
            Tools and technologies I enjoy working with.
          </p>
        </div>

        {/* The keyframes for the scrolling animation */}
        {/* Using style tag for custom keyframes and animation properties */}
        <style>
          {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-scroll-left {
            animation: scroll-left var(--scroll-duration) linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right var(--scroll-duration) linear infinite;
          }

          /* Pause animation on hover */
          .animate-scroll-left:hover, .animate-scroll-right:hover {
              animation-play-state: paused;
          }
          `}
        </style>

        {/* Tech Categories */}
        {Object.entries(techCategories).map(([categoryName, icons], categoryIndex) => {
          // Determine scroll direction based on category index
          const isScrollRight = categoryIndex % 2 !== 0 // Odd indices scroll right
          const animationClass = isScrollRight ? "animate-scroll-right" : "animate-scroll-left"

          return (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-slate-900"} text-center mb-6`}>
                {categoryName}
              </h3>
              {/* Tech Icons Carousel for each category */}
              <div
                className={`relative w-full max-w-full overflow-hidden ${isDarkMode ? "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]" : "[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"}`}
              >
                {/* This div contains the duplicated set of icons for continuous scrolling. */}
                <div
                  className={`flex items-center justify-start py-4 w-fit ${animationClass}`}
                  style={{ "--scroll-duration": `${icons.length * 2.5}s` } as React.CSSProperties} // Dynamic duration
                >
                  {/* Render the tech icons twice to create the infinite loop effect */}
                  {[...icons, ...icons].map((tech, iconIndex) => (
                    <div
                      key={`${categoryIndex}-${iconIndex}`} // Unique key for each icon
                      className="group flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8 flex-shrink-0 transition-all duration-300 ease-in-out cursor-pointer" // Adjusted mx for smaller width
                      style={{ width: "80px", height: "80px" }} // Fixed size for icons
                    >
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className={`w-full h-full object-contain ${isDarkMode ? "grayscale group-hover:grayscale-0" : "opacity-70 group-hover:opacity-100"} transition-all duration-300 ease-in-out transform group-hover:scale-110`}
                        // Fallback for broken images
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).src =
                            `https://placehold.co/80x80/${isDarkMode ? "000000" : "FFFFFF"}/${isDarkMode ? "FFFFFF" : "000000"}?text=${tech.name.substring(0, 3)}`
                        }}
                      />
                      <span
                        className={`mt-2 text-sm ${isDarkMode ? "text-zinc-400 group-hover:text-white" : "text-slate-600 group-hover:text-slate-900"} transition-colors duration-300`}
                      >
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack
