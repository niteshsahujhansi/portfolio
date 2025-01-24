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
          Explore Our Latest Projects
        </h1>
        <p className="text-lg sm:text-xl md:text-lg text-gray-600 dark:text-gray-400">
          We build efficient, scalable, and user-friendly web applications using modern technologies.
        </p>
        <p className="text-md sm:text-lg text-gray-500 dark:text-gray-300">
          Our portfolio showcases projects we've worked on with React, Next.js, and Tailwind CSS.
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
