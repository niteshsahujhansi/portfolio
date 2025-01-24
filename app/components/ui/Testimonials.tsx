"use client";

import React from "react";

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "Senior Developer at TechCorp",
      message:
        "Working with this individual has been an absolute pleasure. Their attention to detail and commitment to delivering high-quality code is truly remarkable. They have a great understanding of modern frameworks like React and Next.js.",
    },
    {
      name: "Jane Smith",
      position: "Project Manager at Creative Solutions",
      message:
        "This developer's problem-solving skills and collaborative mindset make them an asset to any team. Their ability to grasp complex technical concepts quickly and implement them efficiently is second to none.",
    },
    {
      name: "Emily Johnson",
      position: "CTO at Innovatech",
      message:
        "A highly skilled developer who consistently goes above and beyond. Their expertise in both front-end and back-end technologies makes them a versatile asset to any development team. Highly recommend!",
    },
  ];

  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#008082] dark:text-[#00b3b3]">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col justify-between text-center border-l-4 border-[#008082] dark:border-[#00b3b3] transition-all"
            >
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400 italic">
                "{testimonial.message}"
              </p>
              <h3 className="text-xl mb-2 text-[#008082] dark:text-[#00b3b3]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
