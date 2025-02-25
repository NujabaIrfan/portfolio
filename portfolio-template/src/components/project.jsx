import React, { useEffect, useState, useRef } from "react";

const dummyProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online shopping platform with user authentication, product management, and a secure payment system.",
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A productivity tool that helps users track tasks, set deadlines, and manage daily goals efficiently.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A sleek, responsive personal portfolio website showcasing projects, skills, and contact information.",
    link: "#",
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
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={projectsRef}
      className="p-12 bg-orange-500 dark:bg-gray-900 border-4 border-orange-600 rounded-xl shadow-lg"
    >
      <div
        className={`container mx-auto text-center transition-all duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Title (Orange in Light Mode, White in Dark Mode) */}
        <h2 className="text-4xl font-extrabold mb-6 text-orange-600 dark:text-orange border-b-4 border-orange-600 inline-block pb-2">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 p-8">
          {dummyProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-gray-300 dark:border-gray-700 
              transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Title (Now clearly visible) */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-500 font-semibold transition duration-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


