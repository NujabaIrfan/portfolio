import React, { useState } from 'react';

const SunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-yellow-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="12" cy="12" r="5" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l1.414-1.414M6.05 6.05L4.636 4.636"
    />
  </svg>
);

const MoonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-indigo-600 dark:text-yellow-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['about', 'skills', 'project', 'contact'];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                 py-4 px-8 md:px-20 lg:px-28
                 max-w-[90vw] bg-white/90 dark:bg-gray-900/90
                 backdrop-blur-md rounded-2xl
                 shadow-lg shadow-gray-300/30 dark:shadow-black/50
                 transition-all duration-500 ease-out"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center space-x-10">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-extrabold tracking-tight
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400
                     hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-300 dark:hover:to-purple-300
                     transition-all duration-300"
          style={{ fontFamily: "'Pacifico', cursive" }}
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          Amelia.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block flex-1">
          <ul className="flex space-x-12 lg:space-x-16 justify-center">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative text-lg font-medium text-gray-700 dark:text-gray-300
                             hover:text-indigo-600 dark:hover:text-purple-400
                             group transition-all duration-300"
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-purple-400
                               group-hover:w-full transition-all duration-300 ease-out"
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-8">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex items-center justify-center w-10 h-10 rounded-full
                       bg-gray-200 dark:bg-gray-700
                       hover:bg-indigo-100 dark:hover:bg-purple-600
                       transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-400"
          >
            {theme === 'dark' ? SunIcon : MoonIcon}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-6 focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-0 w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full
                          transition-all duration-300 ${
                            isMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
                          }`}
            ></span>
            <span
              className={`absolute left-0 w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full
                          top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                          }`}
            ></span>
            <span
              className={`absolute left-0 w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full
                          transition-all duration-300 ${
                            isMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0'
                          }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40
                      transition-opacity duration-300 md:hidden
                      ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile Navigation Panel */}
        <nav
          className={`fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-white dark:bg-gray-900
                      shadow-xl z-40 transform transition-transform duration-300 ease-in-out
                      md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-full flex flex-col pt-24 px-6">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="block py-3 text-2xl font-medium text-gray-800 dark:text-gray-200
                               hover:text-indigo-600 dark:hover:text-purple-400
                               transition-colors duration-300"
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pb-12 flex justify-center">
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                <div className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className={`absolute top-1/2 w-4 h-4 rounded-full bg-indigo-500 dark:bg-purple-400
                                transform -translate-y-1/2 transition-all duration-300
                                ${theme === 'dark' ? 'left-6' : 'left-1'}`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
