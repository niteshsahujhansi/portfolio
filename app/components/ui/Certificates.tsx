"use client";

import React from "react";

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Artificial Intelligence - Search Method for Problem Solving",
      institution: "NPTEL – Indian Institute of Technology, Madras",
      duration: "07/2021 - 10/2021",
    },
    // {
    //   title: "Kaggle - Python",
    //   institution: "Kaggle",
    // },
    {
      title: "Data Analysis with Python: Zero to Pandas",
      institution: "Jovian",
    },
    {
      title: "Course on Computer Concepts (CCC)",
      institution: "",
      duration: "04/2015 - 06/2015",
    },
  ];

  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="h2-heading">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-[#008082] dark:border-[#00b3b3]"
            >
              <h3 className="text-xl font-semibold text-[#008082] dark:text-[#00b3b3] mb-2">
                {cert.title}
              </h3>
              {cert.institution && (
                <p className="text-gray-600 dark:text-gray-400">{cert.institution}</p>
              )}
              {cert.duration && (
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  {cert.duration}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
