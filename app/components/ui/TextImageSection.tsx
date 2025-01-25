"use client";

import React from "react";

const TestImageSection: React.FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-0 "
      style={{ minHeight: "calc(100vh - 80px)" }} // Ensure it doesn't go under navbar
    >
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left px-4">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
        Hi, I'm Nitesh Sahu.
        </h1>
        
        <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300">
        I Build Modern, Scalable Web Applications and Enterprise Solutions.
        </p>

        <p className="text-lg sm:text-xl md:text-lg text-gray-600 dark:text-gray-400">
        Full-Stack Developer passionate about creating user-friendly applications using Python, Next.js, and modern web technologies.
        </p>
        
        <p className="text-lg sm:text-xl md:text-lg text-gray-600 dark:text-gray-400">
        Let’s build something great together.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-center px-4 mt-8 md:mt-0">
        <iframe
          src="https://lottie.host/embed/e22b389d-e993-4c4d-a983-dd0846d662ad/dkKHh9uzMI.lottie"
          title="Animation"
          className="w-full max-w-lg h-auto rounded-lg dark:shadow-gray-700"
        //   style={{ width: "100%", maxWidth: "800px", height: "auto" }}
        style={{ width: '600px', height: '300px' }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default TestImageSection;
