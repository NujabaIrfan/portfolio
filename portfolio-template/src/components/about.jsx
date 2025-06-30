import React, { useEffect, useState, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const { top } = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight * 0.65);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about"
      ref={aboutRef}
      className="relative overflow-hidden py-24 px-6 md:px-16 lg:px-24 min-h-screen flex items-center justify-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 transition-colors duration-700"></div>

        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-400 dark:bg-blue-700 rounded-full blur-[150px] opacity-15 animate-blob-one"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-400 dark:bg-purple-700 rounded-full blur-[180px] opacity-15 animate-blob-two"></div>
        <div className="absolute top-1/4 right-[-50px] w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full blur-[130px] opacity-10 animate-blob-three"></div>
      </div>

      {/* Foreground Content */}
      <div
        className={`relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-16
          p-8 md:p-12 lg:p-16 rounded-[2.5rem]
          bg-white/70 dark:bg-gray-800/70 backdrop-blur-3xl
          shadow-2xl shadow-gray-300/40 dark:shadow-black/50
          border border-gray-200/50 dark:border-gray-700/50
          transition-all duration-1000 ease-in-out transform
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}`}
      >
        {/* Avatar */}
        <div className="flex-shrink-0 relative">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-indigo-500 dark:bg-purple-600 text-white 
            flex items-center justify-center text-6xl md:text-7xl font-bold
            shadow-xl shadow-indigo-300/60 dark:shadow-purple-900/50
            transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3 transform-gpu">
            AC
          </div>
          <span className="absolute inset-0 block rounded-full ring-4 ring-indigo-300 dark:ring-purple-500 animate-pulse-slow"></span>
        </div>

        {/* Bio */}
        <div className="flex-1 text-center lg:text-left">
          <h2
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8
              text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400
              tracking-tight leading-tight"
            style={{ fontFamily: "'Pacifico', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            About Me
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light
            text-gray-700 dark:text-gray-200">
            Hi! I'm <strong className="font-semibold text-indigo-600 dark:text-indigo-400">Amelia Carter</strong>, a passionate
            <strong className="font-semibold text-purple-600 dark:text-purple-400"> UX/UI Designer</strong> with <strong className="text-xl md:text-2xl text-pink-600 dark:text-pink-400">5+ years</strong> of
            experience in crafting <strong className="text-indigo-600 dark:text-indigo-400">intuitive</strong> and <strong className="text-purple-600 dark:text-purple-400">user-friendly</strong> digital experiences.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light
            text-gray-700 dark:text-gray-200">
            I specialize in <strong className="text-indigo-600 dark:text-indigo-400">design thinking, wireframing, and prototyping</strong>. I'm deeply familiar with
            <strong className="text-purple-600 dark:text-purple-400"> Figma, Adobe XD</strong>, and collaborating closely with dev teams for pixel-perfect execution.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed font-light
            text-gray-700 dark:text-gray-200">
            When I'm not designing, I enjoy mentoring upcoming designers, experimenting with new styles, or enjoying a
            strong cup of coffee.
          </p>
          <div className="mt-12 w-24 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
        </div>
      </div>

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

        @keyframes blob-three {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -20px) scale(1.02); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.02); }
        }

        .animate-blob-one {
          animation: blob-one 12s infinite ease-in-out alternate;
        }
        .animate-blob-two {
          animation: blob-two 14s infinite ease-in-out alternate-reverse;
        }
        .animate-blob-three {
          animation: blob-three 10s infinite ease-in-out alternate;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default About;
