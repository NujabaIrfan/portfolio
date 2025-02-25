import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Persist theme selection in localStorage
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle

