import React from "react";

const Footer = () => {
  const githubUrl = "https://github.com/yourusername";
  const linkedinUrl = "https://linkedin.com/in/yourusername";
  const email = "youremail@example.com";
  const name = "Your Name";

  return (
    <footer className="py-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-3">
          <a
            href={githubUrl}
            className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition duration-300"
          >
            GitHub
          </a>
          <a
            href={linkedinUrl}
            className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition duration-300"
          >
            Email
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-700 dark:text-gray-300 text-xs mb-2">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        {/* Optional Footer Subtitle */}
        <p className="text-gray-500 dark:text-gray-400 text-xs">
          Built with ❤️ using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

