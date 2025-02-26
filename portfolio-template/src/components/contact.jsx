import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Optional: For debugging or additional logic
  };

  return (
    <div className="border-4 border-orange-500 p-8">
      <section className="container mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-extrabold text-orange-600 mb-6 text-center">Contact Us</h2>
        <form
          name="contact" // Required for Netlify form handling
          method="POST" // Required for Netlify form handling
          data-netlify="true" // Required for Netlify form handling
          onSubmit={handleSubmit}
          className="space-y-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg border-2 border-orange-500"
        >
          <input type="hidden" name="form-name" value="contact" /> {/* Required for Netlify */}
          <div>
            <input
              type="text"
              name="name" // Required for Netlify
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email" // Required for Netlify
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <textarea
              name="message" // Required for Netlify
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

