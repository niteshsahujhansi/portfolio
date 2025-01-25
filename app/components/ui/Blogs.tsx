"use client";

import React from "react";

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "Understanding React Hooks",
      date: "January 2024",
      description: "A deep dive into React Hooks and how they simplify state and side effects in functional components.",
      link: "https://your-blog.com/react-hooks",
    },
    {
      title: "Exploring Next.js 13",
      date: "December 2023",
      description: "An overview of the features introduced in Next.js 13, including the new app directory and edge functions.",
      link: "https://your-blog.com/nextjs-13",
    },
    {
      title: "Tailwind CSS for Rapid UI Development",
      date: "November 2023",
      description: "How to use Tailwind CSS to quickly build responsive, modern UIs with minimal effort.",
      link: "https://your-blog.com/tailwind-css",
    },
  ];

  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="h2-heading">
          My Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col justify-between text-center border-l-4 border-[#008082] dark:border-[#00b3b3] transition-all"
            >
              <h3 className="text-2xl mb-2 text-[#008082] dark:text-[#00b3b3]">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{post.date}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008082] dark:text-[#00b3b3] hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
