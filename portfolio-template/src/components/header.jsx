import React, { useState, useEffect } from 'react';
import ThemeToggle from './themetoggle'; // Import the ThemeToggle component
import '../index.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">
        <a href="#home">Portfolio</a>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </nav>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <button className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;