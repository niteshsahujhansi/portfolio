"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#008082] dark:text-[#00b3b3] mb-8">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Feel free to reach out to me for any inquiries or collaborations. I'm available for freelance work, consulting, or just a chat.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600 dark:text-gray-400 mr-3">📧</span>
                <a href="mailto:your-email@example.com" className="text-[#008082] dark:text-[#00b3b3]">
                  your-email@example.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 dark:text-gray-400 mr-3">📱</span>
                <p className="text-[#008082] dark:text-[#00b3b3]">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#008082] dark:focus:ring-[#00b3b3]"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#008082] dark:focus:ring-[#00b3b3]"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#008082] dark:focus:ring-[#00b3b3]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#008082] text-white font-semibold rounded-md hover:bg-[#00b3b3] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#00b3b3]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
