import React, { useEffect, useState, useRef } from "react";

const dummyProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online shopping platform with user authentication, product management, and a secure payment system.",
    link: "#",
    icon: "🛒"
  },
  {
    title: "Task Manager App",
    description: "A productivity tool that helps users track tasks, set deadlines, and manage daily goals efficiently.",
    link: "#",
    icon: "✅"
  },
  {
    title: "Portfolio Website",
    description: "A sleek, responsive personal portfolio website showcasing projects, skills, and contact information.",
    link: "#",
    icon: "✨"
  },
  {
    title: "Recipe Finder",
    description: "An application that allows users to search for recipes based on ingredients, dietary restrictions, and meal type.",
    link: "#",
    icon: "🍽️"
  },
  {
    title: "Interactive Dashboard",
    description: "A data visualization dashboard providing real-time analytics with customizable widgets and reports.",
    link: "#",
    icon: "📊"
  },
  {
    title: "Mobile Game Prototype",
    description: "A simple, engaging mobile game prototype developed with a focus on intuitive controls and fun gameplay.",
    link: "#",
    icon: "🎮"
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const { top } = projectsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight * 0.65);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="project" 
      ref={projectsRef}
      className="relative overflow-hidden py-24 px-6 md:px-16 lg:px-24 min-h-screen flex flex-col items-center justify-center"
    >
      {/* Gradient background (light and dark mode support) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 transition-colors duration-700"></div>
        <div className="absolute top-[-80px] right-[-100px] w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full blur-[140px] opacity-10 animate-blob-one"></div>
        <div className="absolute bottom-[-120px] left-[-90px] w-[450px] h-[450px] bg-indigo-300 dark:bg-indigo-700 rounded-full blur-[160px] opacity-10 animate-blob-two"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto text-center
                     transition-all duration-1000 ease-in-out transform
                     ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}`}
      >
        <h2
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-12
                     text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400
                     tracking-tight leading-tight"
          style={{ fontFamily: "'Pacifico', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
        >
          My Creations
        </h2>

        <p className="text-xl md:text-2xl leading-relaxed mb-16 max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
          Explore a selection of my latest projects, where I blend design thinking with technical execution to build impactful digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dummyProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-3xl
                         shadow-xl shadow-gray-300/40 dark:shadow-black/50
                         border border-gray-200/50 dark:border-gray-700/50
                         transform transition-all duration-500 ease-in-out
                         hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300/50 dark:hover:shadow-purple-900/50
                         backdrop-blur-xl flex flex-col justify-between items-center text-center"
            >
              {project.icon && (
                <div className="text-6xl mb-4">
                  {project.icon}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">
                {project.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full
                           bg-gradient-to-r from-indigo-500 to-purple-500 text-white
                           font-semibold text-lg shadow-md
                           hover:from-indigo-600 hover:to-purple-600
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                           transition-all duration-300 transform hover:-translate-y-1"
              >
                View Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes blob-one {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(20px, -30px) scale(1.05); }
          60% { transform: translate(-10px, 15px) scale(0.98); }
        }

        @keyframes blob-two {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-25px, 20px) scale(1.03); }
          70% { transform: translate(15px, -10px) scale(0.96); }
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

export default Projects;
