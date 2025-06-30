import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const { top } = contactRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight * 0.65);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" 
      ref={contactRef}
      className="relative overflow-hidden py-24 px-6 md:px-16 lg:px-24 min-h-screen flex items-center justify-center"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 transition-colors duration-700"></div>
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full blur-[150px] opacity-15 animate-blob-one"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-300 dark:bg-purple-700 rounded-full blur-[180px] opacity-15 animate-blob-two"></div>
        <div className="absolute top-1/4 right-[-50px] w-72 h-72 bg-pink-200 dark:bg-pink-500 rounded-full blur-[130px] opacity-10 animate-blob-three"></div>
      </div>

      {/* Contact Form Card */}
      <div
        className={`relative z-10 container mx-auto w-full max-w-3xl
          p-8 md:p-12 lg:p-16 rounded-[2.5rem]
          bg-white/70 dark:bg-gray-800/70 backdrop-blur-3xl
          shadow-2xl shadow-gray-300/40 dark:shadow-black/50
          border border-gray-200/50 dark:border-gray-700/50
          transition-all duration-1000 ease-in-out transform
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}`}
      >
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-6 text-center 
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          style={{ fontFamily: "'Pacifico', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
        >
          Contact Me
        </h2>

        {status && (
          <p className="text-center text-purple-700 dark:text-purple-300 mb-4 font-medium">{status}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 rounded-lg border-2 border-indigo-400 dark:border-purple-500 bg-white/70 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 rounded-lg border-2 border-indigo-400 dark:border-purple-500 bg-white/70 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows="5"
            className="w-full p-4 rounded-lg border-2 border-indigo-400 dark:border-purple-500 bg-white/70 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob-one {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(20px, -30px) scale(1.05); }
          60% { transform: translate(-10px, 15px) scale(0.98); }
        }

        @keyframes blob-two {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-25px, 20px) scale(1.03); }
          70% { transform: translate(15px, -10px) scale(0.96); }
        }

        @keyframes blob-three {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -20px) scale(1.02); }
        }

        .animate-blob-one {
          animation: blob-one 12s infinite ease-in-out alternate;
        }
        .animate-blob-two {
          animation: blob-two 14s infinite ease-in-out alternate-reverse;
        }
        .animate-blob-three {
          animation: blob-three 10s infinite ease-in-out alternate;
        }
      `}</style>
    </section>
  );
};

export default Contact;
