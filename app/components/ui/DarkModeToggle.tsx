"use client";

import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  // State to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to load the preferred mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark"); // Apply dark mode
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark"); // Apply light mode
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Store the preference in localStorage
      localStorage.setItem("darkMode", newMode.toString());
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full border border-gray-600 bg-gray-200 dark:bg-gray-700 dark:border-gray-500"
    >
      {isDarkMode ? (
        <span className="text-yellow-500">🌙</span> // Dark mode icon
      ) : (
        <span className="text-blue-500">🌞</span> // Light mode icon
      )}
    </button>
  );
};

export default DarkModeToggle;
