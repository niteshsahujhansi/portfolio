"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React, Next.js, and Tailwind CSS.",
      tech: "React, Next.js, Tailwind CSS",
      link: "https://your-portfolio.com",
      github: "https://github.com/your-portfolio-repo",
      images: ["/windows.svg", "/python.svg", "/my-photo.png"],
    },
    {
      title: "E-commerce App",
      description: "An online shopping platform with payment integration.",
      tech: "React, Node.js, MongoDB",
      link: "https://your-ecommerce.com",
      github: "https://github.com/your-ecommerce-repo",
      // images: ["/image1.png", "/image2.png", "/image3.png"],
      images: [],
    },
    // Add more projects as needed...
  ];

  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#008082] dark:text-[#00b3b3]">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-[#008082] dark:border-[#00b3b3]"
            >
              <h3 className="text-xl font-semibold text-[#008082] dark:text-[#00b3b3] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                <strong>Tech Used:</strong> {project.tech}
              </p>
              {/* Swiper Carousel */}
              <div className="mb-4">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 3000 * (index + 1), // Different delay per project
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="rounded-lg"
                >
                  {project.images.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Links */}
              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008082] dark:text-[#00b3b3] hover:underline text-sm"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008082] dark:text-[#00b3b3] hover:underline text-sm"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
