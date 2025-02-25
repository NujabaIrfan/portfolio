import React, { useState, useEffect } from 'react';
import ThemeToggle from './themetoggle'; // Import the ThemeToggle component
import './styles/header.css'; // CSS for styling

const Header = () => {
  // Read theme from localStorage (handle null case properly)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme'); // Ensure only one class exists
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme'); // Ensure only one class exists
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="logo">
        <a href="/">Portfolio</a>
      </div>
      <nav>
        <ul>
          <li><a href="about.jsx">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      {/* Pass theme state to ThemeToggle */}
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
