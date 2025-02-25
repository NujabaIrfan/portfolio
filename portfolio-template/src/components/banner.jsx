// src/Banner.jsx
import React, { useState, useEffect } from 'react';
import './styles/Banner.css'; // We'll create this CSS file next

const Banner = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Amelia Carter"; // Customize this for your portfolio
  const typingSpeed = 100; // Speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{text}</h1>
        <p>Web Developer | UX / UI Designer| Creative Thinker</p> {/* Customize this subtitle */}
      </div>
    </div>
  );
};

export default Banner;



