import React, { useEffect, useState, useRef } from "react";

// --- Inline SVG Icons (only some for demo; add more as needed) ---
const Html5Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
    <path d="M73 43.1L0 120.3V391.7L73 468.9 256 512l183-43.1 73-77.2V120.3L439 43.1 256 0 73 43.1zM399.7 151.7l-26.6-26.5L256 182.2l-117.1-57.1-26.6 26.5L256 235.4l143.7-83.7zM256 388.9l-117.1-57.1-26.6 26.5L256 478.4l143.7-83.7-26.6-26.5L256 388.9zM256 260.6l-117.1-57.1-26.6 26.5L256 333.8l143.7-83.7-26.6-26.5L256 260.6zM256 75.3l-117.1-57.1-26.6 26.5L256 148.5l143.7-83.7-26.6-26.5L256 75.3z" />
  </svg>
);

const Css3Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
    <path d="M480 32l-64 368-223.3 80L0 399.3 32 16H480zM352.5 297.7l-15.6 93.6L256 417.8l-81.9-26.9-4.8-28.8h-75.1l10.5 62.2 150.2 52.2 150.2-52.2 10.5-62.2h-75.1l-4.8 28.8-81.9 26.9L256 417.8z" />
  </svg>
);

const JsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h512v512H0zM85.3 42.7v426.6h341.4V42.7H85.3zm213.3 266.6H170.7V256h128v53.3zm0-106.6H170.7V149.3h128v53.4z" />
  </svg>
);

const ReactIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 160c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
  </svg>
);

// ... add other icons similarly as needed

const skillIconMap = {
  HTML5: Html5Icon,
  CSS3: Css3Icon,
  JavaScript: JsIcon,
  React: ReactIcon,
  "REST APIs": <span className="text-xl">🌐</span>,
  SQL: <span className="text-xl">🗄️</span>,
  "CI/CD": <span className="text-xl">⚙️</span>,
  "Agile Methodology": <span className="text-xl">🏃‍♂️</span>,
  Scrum: <span className="text-xl">📋</span>,
  DevOps: <span className="text-xl">🔁</span>,
};

const categorizedSkills = [
  {
    category: "Frontend Development",
    icon: "💻",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: ["REST APIs"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["SQL"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    skills: ["Git", "Docker", "CI/CD"],
  },
  {
    category: "Tools & Methodologies",
    icon: "🛠️",
    skills: ["Agile Methodology", "Scrum", "DevOps"],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const { top } = skillsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight * 0.65);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" 
      ref={skillsRef}
      className="relative overflow-hidden py-24 px-6 md:px-16 lg:px-24 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 transition-colors duration-700"></div>
        <div className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full blur-[160px] opacity-10 animate-blob-one"></div>
        <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-300 dark:bg-blue-700 rounded-full blur-[180px] opacity-10 animate-blob-two"></div>
      </div>

      <div
        className={`relative z-10 container mx-auto text-center transition-all duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
        }`}
      >
        <h2
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 tracking-tight leading-tight"
          style={{ fontFamily: "'Pacifico', cursive", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}
        >
          My Skillset
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed mb-16 font-light text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
          A comprehensive overview of the technologies, tools, and methodologies I leverage to bring ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {categorizedSkills.map((categoryData, catIndex) => (
            <div
              key={catIndex}
              className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-3xl shadow-xl shadow-gray-300/40 dark:shadow-black/50 border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300/50 dark:hover:shadow-purple-900/50 backdrop-blur-xl flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{categoryData.icon}</div>
              <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">{categoryData.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {categoryData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-lg font-medium whitespace-nowrap bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 transition-all duration-300 hover:scale-105 hover:bg-indigo-100 dark:hover:bg-indigo-800"
                  >
                    <span className="text-xl">{skillIconMap[skill] || "✨"}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
      </div>

      <style jsx>{`
        @keyframes blob-one {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(20px, -30px) scale(1.05);
          }
          60% {
            transform: translate(-10px, 15px) scale(0.98);
          }
        }
        @keyframes blob-two {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          40% {
            transform: translate(-25px, 20px) scale(1.03);
          }
          70% {
            transform: translate(15px, -10px) scale(0.96);
          }
        }
        .animate-blob-one {
          animation: blob-one 12s infinite ease-in-out alternate;
        }
        .animate-blob-two {
          animation: blob-two 14s infinite ease-in-out alternate-reverse;
        }
      `}</style>
    </section>
  );
};

export default Skills;
