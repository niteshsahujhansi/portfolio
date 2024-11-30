"use client";

import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#008082] dark:text-[#00b3b3]">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-[#008082] dark:border-[#00b3b3]">
            <h3 className="text-xl text-[#008082] dark:text-[#00b3b3] font-semibold mb-2">
              Python Developer
            </h3>
            <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-2">
              Mobifly | Gurugram
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
              03/2023 - Present
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Contributing to the development of an automation solution.</li>
              <li>Creating optimized APIs with efficient data processing.</li>
              <li>Parsing and extracting useful data from various formats (Excel, JSON, TXT, PDF, etc.).</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-[#008082] dark:border-[#00b3b3]">
            <h3 className="text-xl text-[#008082] dark:text-[#00b3b3] font-semibold mb-2">
              Frontend Developer Intern
            </h3>
            <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-2">
              Tech Solutions | Remote
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
              06/2022 - 09/2022
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Developed interactive web components using React.js and Next.js.</li>
              <li>Collaborated with backend developers to integrate APIs.</li>
              <li>Created responsive layouts with Tailwind CSS.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
