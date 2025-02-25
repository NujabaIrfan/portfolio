import React, { useEffect, useState, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const { top } = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset if scrolled away
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
      ref={aboutRef} 
      className="p-12 bg-white text-black dark:bg-gray-900 dark:text-white border-4 border-orange-500 transition-all duration-1000 ease-in-out"
    >
      <div 
        className={`container mx-auto flex flex-col md:flex-row items-center gap-10 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile Image (Left) */}
        <div className="flex-shrink-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3E-Ni8Beys76oP3bDj438A-PblNEW9toRVQ&s"
            alt="Amelia Carter" 
            className="w-48 h-48 rounded-full border-4 border-orange-500 shadow-lg"
          />
        </div>

        {/* Bio Content (Right) */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-orange-500">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            Hi! I’m <span className="font-bold text-orange-500">Amelia Carter</span>, a passionate 
            <span className="font-semibold text-orange-500"> UX/UI Designer</span> with <b>5+ years</b> of experience in 
            crafting <b>intuitive</b> and <b>user-friendly</b> digital experiences.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I specialize in <strong>design thinking, wireframing, and prototyping</strong>, ensuring every interface I create 
            is both aesthetically pleasing and highly functional. My expertise in 
            <b> Figma, Adobe XD, and front-end collaboration</b> allows me to bridge the gap between design and development.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I’m not designing, you’ll find me exploring new design trends, mentoring aspiring designers, 
            or enjoying a good cup of coffee.
          </p>
          <div className="mt-6 w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default About;








