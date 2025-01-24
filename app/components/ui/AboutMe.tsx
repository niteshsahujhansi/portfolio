"use client";

import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#008082] dark:text-[#00b3b3] mb-8">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
              <Image
                src="/my-photo.png" // Replace with your image path
                alt="Your Photo"
                // layout="fill"
                // objectFit="cover"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 text-center md:text-left px-4">
            <p className="text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-400">
              Hello! I'm [Your Name], a passionate software engineer with a love for creating dynamic and user-friendly applications. I specialize in front-end development using React, Next.js, and Tailwind CSS, and I also enjoy building scalable backend solutions with Node.js and TypeScript.
            </p>
            <p className="text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-400">
              With a keen eye for detail and a focus on delivering high-quality, maintainable code, I strive to continuously improve my skills and learn new technologies. In my free time, I enjoy contributing to open-source projects, attending tech meetups, and exploring new frameworks.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social Links */}
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="text-[#008082] dark:text-[#00b3b3] hover:text-[#006c6c]">
                LinkedIn
              </a>
              <a href="https://github.com/your-profile" target="_blank" className="text-[#008082] dark:text-[#00b3b3] hover:text-[#006c6c]">
                GitHub
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" className="text-[#008082] dark:text-[#00b3b3] hover:text-[#006c6c]">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
