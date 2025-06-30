import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Amelia Carter"; 
  const typingSpeed = 100;
  const pauseBeforeErase = 2000;
  const erasingSpeed = 50;
  const loop = true;

  // Typing effect for the main text
  useEffect(() => {
    let currentText = '';
    let i = 0;
    let isDeleting = false;
    let typingTimeout;

    const type = () => {
      const current = fullText;
      
      if (!isDeleting && i < current.length) {
        // Typing forward
        currentText = current.substring(0, i + 1);
        setTypedText(currentText);
        i++;
        typingTimeout = setTimeout(type, typingSpeed);
      } else if (!isDeleting && i === current.length) {
        // Pause at end
        isDeleting = true;
        typingTimeout = setTimeout(type, pauseBeforeErase);
      } else if (isDeleting && i > 0) {
        // Deleting
        currentText = current.substring(0, i - 1);
        setTypedText(currentText);
        i--;
        typingTimeout = setTimeout(type, erasingSpeed);
      } else {
        // Restart cycle
        isDeleting = false;
        typingTimeout = setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => clearTimeout(typingTimeout);
  }, [fullText, typingSpeed, pauseBeforeErase, erasingSpeed, loop]);

  return (
    <section id="home"  className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-blue-900"></div>
      
      {/* Animated blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-20 dark:bg-purple-600"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-20 dark:bg-blue-600"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:opacity-20 dark:bg-pink-600"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          UX/UI Designer & Creative Developer
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Banner;