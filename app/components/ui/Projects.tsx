"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects: React.FC = () => {
  const the_flores_resort_images_path = Array.from({ length: 9 }, (_, index) => `/images/projects/the-flores-resort/${index + 1}.png`);
  const tic_tac_toe_images_path = Array.from({ length: 3 }, (_, index) => `/images/projects/tic-tac-toe/${index + 1}.png`);
  const ratcat_images_path = Array.from({ length: 10 }, (_, index) => `/images/projects/ratcat/${index + 1}.png`);
  const projects = [
    {
      title: "The Flores Resort",
      description: "A luxury resort website that highlights its exclusive suites, residences, achievements, and cultural values, fostering transparency between the resort and its guests.",
      tech: "HTML, CSS, JavaScript, VS Code",
      link: "https://your-portfolio.com",
      github: "https://github.com/niteshsahujhansi/The-Flores-Resort",
      images: the_flores_resort_images_path
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Everybody plays tic-tac-toe in their childhood. It is an amazing feeling to program this game from scratch. AI is used in the unbeatable mode.",
      tech: "Python, pygame, numpy, MinMax AI Algo",
      link: "https://your-portfolio.com",
      github: "https://github.com/niteshsahujhansi/tic-tac-toe-GUI-",
      images: tic_tac_toe_images_path
    },
    {
      title: "RatCat E-commerce",
      description: "An online user-friendly e-commerce platform featuring intuitive navigation, dynamic product catalogs, responsive design, and real-time inventory management.",
      tech: "Django, Python, SQLite, Bootstrap5, HTML/CSS, JavaScript",
      link: "https://your-ecommerce.com",
      github: "https://github.com/niteshsahujhansi/ecommerce-djangoproject-RatCat",
      images: ratcat_images_path,
    },
    // {
    //   title: "Fasion Recommender",
    //   description: "A content-based image retrieval (CBIR) system uses ResNet50 convolutional neural network (CNN) to extract image features and k-NN for finding visually similar products, ideal for e-commerce recommendations",
    //   tech: "sklearn, tensorflow, OpenCV, Matplotlib",
    //   link: "https://your-ecommerce.com",
    //   github: "https://github.com/niteshsahujhansi/fashion-recommender-system-cnn",
    //   images: []
    // }
  ];

  return (
    <section id="projects" className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="h2-heading">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-[#008082] dark:border-[#00b3b3]"
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
