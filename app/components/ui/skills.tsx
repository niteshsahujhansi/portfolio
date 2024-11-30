"use client";

import React from "react";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Python",
      type: "svg", // Use SVG for React icon
      src: "/python.svg", // Replace with the actual path to your SVG file
      level: 90,
    },
    {
      name: "Postgres",
      type: "svg", // Use SVG for TypeScript icon
      src: "/postgres.svg",
      level: 75,
    },
    {
      name: "Django",
      type: "svg", // Use SVG for TypeScript icon
      src: "/django.svg",
      level: 75,
    },
    {
      name: "Bootstrap",
      type: "svg", // Use SVG for TypeScript icon
      src: "/bootstrap.svg",
      level: 75,
    },
    {
      name: "CSS",
      type: "svg", // Use SVG for TypeScript icon
      src: "/css.svg",
      level: 75,
    },
    {
      name: "Docker",
      type: "svg", // Use SVG for TypeScript icon
      src: "/docker.svg",
      level: 75,
    },
    {
      name: "Figma",
      type: "svg", // Use SVG for TypeScript icon
      src: "/figma.svg",
      level: 75,
    },
    {
      name: "Git",
      type: "svg", // Use SVG for TypeScript icon
      src: "/git.svg",
      level: 75,
    },
    {
      name: "Javascript",
      type: "svg", // Use SVG for TypeScript icon
      src: "/javascript.svg",
      level: 75,
    },
    {
      name: "Jira",
      type: "svg", // Use SVG for TypeScript icon
      src: "/jira.svg",
      level: 75,
    },
    {
      name: "Jquery",
      type: "svg", // Use SVG for TypeScript icon
      src: "/jquery.svg",
      level: 75,
    },
    {
      name: "Jupiter",
      type: "svg", // Use SVG for TypeScript icon
      src: "/jupiter.svg",
      level: 75,
    },
    {
      name: "Linux",
      type: "svg", // Use SVG for TypeScript icon
      src: "/linux.svg",
      level: 75,
    },
    {
      name: "MySQL",
      type: "svg", // Use SVG for TypeScript icon
      src: "/mysql.svg",
      level: 75,
    },
    {
      name: "Git",
      type: "svg", // Use SVG for TypeScript icon
      src: "/git.svg",
      level: 75,
    },
    {
      name: "SQLite",
      type: "svg", // Use SVG for TypeScript icon
      src: "/sqlite.svg",
      level: 75,
    },
    {
      name: "TypeScript",
      type: "svg", // Use SVG for TypeScript icon
      src: "/typescript.svg",
      level: 75,
    },
    {
      name: "Vim",
      type: "svg", // Use SVG for TypeScript icon
      src: "/vim.svg",
      level: 75,
    },
    {
      name: "VS Code",
      type: "svg", // Use SVG for TypeScript icon
      src: "/vscode.svg",
      level: 75,
    },
    {
      name: "Windows",
      type: "svg", // Use SVG for TypeScript icon
      src: "/Windows.svg",
      level: 75,
    },
    {
      name: "Vim",
      type: "svg", // Use SVG for TypeScript icon
      src: "/vim.svg",
      level: 75,
    },
    // {
    //   name: "Git",
    //   type: "iframe",
    //   src: "https://lottie.host/embed/61699e8b-a03d-47cd-911b-f85d3f18dbc2/NWb7evQDcD.json",
    //   level: 90,
    // },
  ];

  return (
    <section className="py-10 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-8 text-center text-[#008082] dark:text-[#00b3b3]">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7   gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-transparent p-3 flex flex-col items-center text-center"
            >
              {/* SVG Icon */}
              {skill.type === "svg" ? (
                <img
                  src={skill.src}
                  alt={`${skill.name} icon`}
                  className="w-20 h-20 mb-2"
                />
              ) : (
                <iframe
                  src={skill.src}
                  title={`${skill.name} animation`}
                  className="w-20 h-20 mb-2"
                  allowFullScreen
                ></iframe>
              )}

              {/* Skill Name */}
              <h3 className="text-xs mb-2 text-[#008082] dark:text-[#00b3b3]">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full">
                <div className="relative w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1">
                  <div
                    className="absolute top-0 left-0 h-1 rounded-full bg-gradient-to-r from-[#00b3b3] to-[#008082]"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
                  Proficiency: {skill.level}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
