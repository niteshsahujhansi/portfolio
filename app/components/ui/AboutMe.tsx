"use client";

import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <section id="aboutme" className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="h2-heading">About Me</h2>

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
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 text-center md:text-left px-4">
            <p className="text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-400">
              Hello! I'm Nitesh Sahu, a passionate Full-Stack Developer with a
              focus on building modern and scalable web applications. I
              specialize in Python, Django, Next.js, and creating intuitive
              solutions that deliver real value.
            </p>
            <p className="text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-400">
              With a strong foundation in backend development, API optimization,
              and machine learning, I’m always looking for ways to innovate and
              improve my craft. Outside of work, I enjoy exploring new
              technologies and contributing to open-source projects.
            </p>
            {/* Social Links */}
            {/* <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/nitesh-sahu-a427951b1/" target="_blank" className="text-[#008082] dark:text-[#00b3b3] hover:text-[#006c6c]">
                LinkedIn
              </a>
              <a href="https://github.com/niteshsahujhansi" target="_blank" className="text-[#008082] dark:text-[#00b3b3] hover:text-[#006c6c]">
                GitHub
              </a>
            </div> */}
            <br />
            <div className="flex space-x-8">
              <a
                href="https://www.linkedin.com/in/nitesh-sahu-a427951b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/niteshsahujhansi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/niteshsahujhs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/nitesh.sahu.1612147/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/nitesh.sahu920/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
