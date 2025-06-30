// src/App.js (Example structure)
import React, { useState, useEffect } from 'react';
import Header from '../src/components/header'; // We'll create this
import Banner from '../src/components/banner';
import About from '../src/components/about';
import Skills from '../src/components/skills';
import Projects from '../src/components/project';
import Contact from '../src/components/contact';
import Footer from './components/footer';
// Import other sections like Contact, Footer etc.

function App() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  useEffect(() => {
    // 1. Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // 2. If no saved theme, check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      } else {
        setTheme('light');
        document.documentElement.classList.remove('dark'); // Ensure 'dark' is removed if light is default
      }
    }
  }, []); // Run once on mount

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    // The main app container can have your global background gradient
    // This background will transition smoothly with the theme change
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 transition-colors duration-700">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        {/* Your existing sections that already match the theme */}
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;