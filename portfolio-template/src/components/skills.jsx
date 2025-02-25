import React from "react";

const Skills = () => {
  // Define the skills array directly in the component
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GraphQL",
    "REST APIs",
    "Firebase",
    "Machine Learning",
    "Data Science",
    "UI/UX Design",
    "Figma",
    "Agile Methodology",
    "Scrum",
    "DevOps",
    "CI/CD",
    "Linux",
    "Bash Scripting",
    "Webpack",
    "Vite",
    "Next.js",
    "GraphQL",
    "Redux",
    "SASS",
    "Bootstrap",
    "Material-UI",
  ];

  return (
    <section className="p-8 bg-white dark:bg-gray-800 border-2 border-orange-500 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-orange-600 dark:text-orange-400 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;