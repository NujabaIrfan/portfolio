import React from "react";

const Footer = () => {
  const githubUrl = "https://github.com/yourusername";
  const linkedinUrl = "https://linkedin.com/in/yourusername";
  const email = "youremail@example.com";
  const name = "Your Name";

  return (
    <footer
      className="py-6
                 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-300
                 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-950
                 border-t border-indigo-300 dark:border-indigo-700
                 transition-colors duration-700"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-4">
          {[{
            href: githubUrl,
            label: "GitHub",
            ariaLabel: "GitHub profile",
          }, {
            href: linkedinUrl,
            label: "LinkedIn",
            ariaLabel: "LinkedIn profile",
          }, {
            href: `mailto:${email}`,
            label: "Email",
            ariaLabel: "Send email",
          }].map(({ href, label, ariaLabel }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className="text-indigo-700 hover:text-indigo-900
                         dark:text-purple-300 dark:hover:text-purple-400
                         transition-colors duration-300 font-medium text-sm"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-indigo-800 dark:text-purple-300 text-xs mb-1 select-none">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        {/* Footer Subtitle */}
        <p className="text-indigo-700 dark:text-purple-400 text-xs select-none">
          Built with React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
