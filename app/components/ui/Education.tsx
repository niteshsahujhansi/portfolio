"use client";

import React from "react";

const Education: React.FC = () => {
  const educationDetails = [
    {
      degree: "Master of Computer Application (M.C.A.)",
      university: "Bundelkhand University, Jhansi (U.P.)",
      duration: "2020 - 2022",
      score: "74.05%",
    },
    {
      degree: "Post Graduate Diploma in Computer Application",
      university: "Makhanlal Chaturvedi University",
      duration: "2019 - 2020",
      score: "73.38%",
    },
    {
      degree: "Bachelor of Science <br/> (B.Sc.)",
      university: "Bundelkhand University, Jhansi (U.P.)",
      duration: "2013 - 2016",
      score: "58.59%",
    },
    {
      degree: "Artificial Intelligence - Search Method for Problem Solving",
      university: "NPTEL – Indian Institute of Technology, Madras",
      duration: "2021",
    },
    // {
    //   title: "Kaggle - Python",
    //   institution: "Kaggle",
    // },
    {
      degree: "Data Analysis with Python: Zero to Pandas",
      university: "Jovian",
      duration: "2022",
    },
    {
      degree: "Course on Computer Concepts (CCC)",
      university: "NIELIT",
      duration: "2015",
    },
  ];

  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="h2-heading">
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
              {/* <p className="text-sm text-gray-500 dark:text-gray-300">
                <strong>Score:</strong> {edu.score}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
