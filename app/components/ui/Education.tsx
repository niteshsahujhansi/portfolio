"use client";

import React from "react";

const Education: React.FC = () => {
  const educationDetails = [
    {
      degree: "Master of Computer Application (M.C.A.)",
      university: "Bundelkhand University, Jhansi (U.P.)",
      duration: "09/2020 - 09/2022",
      score: "74.05%",
    },
    {
      degree: "Post Graduate Diploma in Computer Application",
      university: "Makhanlal Chaturvedi University",
      duration: "07/2019 - 07/2020",
      score: "73.38%",
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      university: "Bundelkhand University, Jhansi (U.P.)",
      duration: "07/2013 - 07/2016",
      score: "58.59%",
    },
  ];

  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#008082] dark:text-[#00b3b3]">
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-[#008082] dark:border-[#00b3b3]"
            >
              <h3 className="text-lg font-semibold text-[#008082] dark:text-[#00b3b3] mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {edu.university}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {edu.duration}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                <strong>Score:</strong> {edu.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
