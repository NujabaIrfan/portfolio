import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons from react-icons

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div
      className={`theme-toggle ${isDarkMode ? 'dark-mode' : ''}`}
      onClick={toggleTheme}
    >
      <FaSun className="fa-sun" />
      <FaMoon className="fa-moon" />
    </div>
  );
};

export default ThemeToggle;

