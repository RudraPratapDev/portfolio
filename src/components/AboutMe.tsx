import type React from "react"

const userImageUrl =
  "https://media.licdn.com/dms/image/v2/D5603AQH5iRnAYJUssQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693575560185?e=1755734400&v=beta&t=h6UXJSgPOe18Iztm9xrz9GPO0szbA9IBBeDoPOvO5_A"

const aboutContent = {
  name: "Rudra Pratap Singh Tomar",
  title: "About Me",
  paragraphs: [
    "Hello! I'm Rudra, a passionate developer with a strong focus on the intersection of AI and full-stack development. My journey in tech began with a curiosity for how things work, which evolved into a drive to build intelligent and scalable applications that solve real-world problems.",
    "I thrive in dynamic environments where I can continuously learn and apply new technologies. Whether it's developing a complex machine learning model or architecting a seamless user experience, I am dedicated to delivering high-quality, impactful solutions.",
    "When I'm not coding, I enjoy exploring the latest research in AI, contributing to open-source projects, and collaborating with fellow developers. Let's connect and build something amazing together!",
  ],
}


interface AboutProps {
  isDarkMode: boolean
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`${isDarkMode ? "bg-black" : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"} py-20 sm:py-24 lg:py-32 overflow-hidden transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-20 lg:grid-cols-2">
          <div className="group relative mx-auto h-[350px] w-[300px] sm:h-[450px] sm:w-[400px] lg:mx-0">
            <div
              className={`absolute top-0 left-0 h-full w-full rounded-xl ${isDarkMode ? "bg-zinc-800/70" : "bg-blue-200/50"} transform -rotate-6 transition-transform duration-500 ease-in-out group-hover:rotate-[-8deg]`}
            ></div>
            <div
              className={`absolute top-0 left-0 h-full w-full rounded-xl ${isDarkMode ? "bg-zinc-900/80" : "bg-blue-300/40"} transform rotate-6 transition-transform duration-500 ease-in-out group-hover:rotate-[8deg]`}
            ></div>
            <div
              className={`relative h-full w-full overflow-hidden rounded-xl border ${isDarkMode ? "border-zinc-700" : "border-blue-300"} shadow-2xl ${isDarkMode ? "shadow-black/40" : "shadow-blue-900/20"}`}
            >
              <img
                src={userImageUrl || "/placeholder.svg"}
                alt={aboutContent.name}
                className={`h-full w-full object-cover object-center ${isDarkMode ? "grayscale" : "grayscale-0"} transition-all duration-500 ease-in-out group-hover:scale-110 ${isDarkMode ? "group-hover:grayscale-0" : "group-hover:brightness-110"}`}
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src =
                    `https://placehold.co/400x450/${isDarkMode ? "000000" : "FFFFFF"}/${isDarkMode ? "FFFFFF" : "000000"}?text=Rudra`
                }}
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:row-start-1">
            <h2
              className={`relative text-3xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"} sm:text-4xl inline-block group`}
            >
              {aboutContent.title}
              <span
                className={`absolute bottom-[-10px] left-0 h-1 w-2/3 ${isDarkMode ? "bg-blue-500" : "bg-blue-600"} transition-all duration-500 group-hover:w-full`}
              ></span>
            </h2>
            <div className={`mt-8 space-y-6 text-base leading-7 ${isDarkMode ? "text-zinc-400" : "text-slate-700"}`}>
              {aboutContent.paragraphs.map((text, index) => (
                <p key={index} className="transition-colors duration-300">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
