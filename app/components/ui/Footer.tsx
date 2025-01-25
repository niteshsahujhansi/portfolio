"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} nitesh sahu. All rights reserved.
            </p>
          </div>

            {/* Social Media Links */}
          {/* <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3] dark:hover:text-[#00b3b3] transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  fillRule="evenodd"
                  d="M20.447 20.447a1 1 0 0 0 0-1.414l-18-18a1 1 0 0 0-1.414 1.414L5.757 7.757A8.953 8.953 0 0 0 2 12a9 9 0 1 0 16.447-3.757l1.414-1.414zm-8.96-5.634a6.79 6.79 0 0 0 4.872-6.303c0-3.713-3.017-6.75-6.72-6.75s-6.72 3.037-6.72 6.75a6.79 6.79 0 0 0 4.871 6.303v-2.005a4.79 4.79 0 0 1-2.98-4.298c0-2.735 2.23-4.956 4.96-4.956s4.96 2.221 4.96 4.956c0 2.737-2.23 4.956-4.96 4.956-1.638 0-3.146-.776-4.076-2.02l-1.451 1.455a7.828 7.828 0 0 0 5.527 2.56c4.546 0 8.232-3.84 8.232-8.25s-3.685-8.248-8.232-8.248z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3] dark:hover:text-[#00b3b3] transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.48.5.09.68-.22.68-.48v-1.74c-2.03.44-2.6-.98-2.6-.98-.39-.99-.94-1.25-.94-1.25-.77-.53 0-.52 0-.52 1.24 0 1.89 1.31 1.89 1.31 1.1 1.9 2.89 1.35 3.59 1.02.11-.8.42-1.35.76-1.66-2.45-.28-5.02-1.23-5.02-5.47 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.35.11-2.81 0 0 .93-.3 3.07 1.17a10.6 10.6 0 0 1 2.8-.38c.93.01 1.88.12 2.8.38 2.14-1.48 3.07-1.17 3.07-1.17.6 1.46.22 2.53.11 2.81.7.78 1.13 1.77 1.13 2.98 0 4.25-2.58 5.19-5.02 5.47.43.37.81 1.07.81 2.15v3.17c0 .26.18.57.69.48 4.39-1.32 7.52-5.02 7.52-9.15 0-5.52-4.48-10-10-10z"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
