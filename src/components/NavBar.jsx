import { useState, useEffect } from "react";
import React from "react";

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);

  // Load preference from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  
  return (
    <nav className="w-full flex justify-between items-center px-4 sm:px-6 py-4 bg-white dark:bg-[#1c1c1c] border-b sticky top-0 z-10 shadow-sm">
      <h1 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-white">
        MetaTagLab
      </h1>
      <button
        onClick={toggleDarkMode}
        className="text-sm sm:text-base md:text-2xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
      >
        {isDark ? (
          <i className="ri-sun-fill"></i>
        ) : (
          <i className="ri-moon-fill"></i>
        )}
      </button>
    </nav>
  );
};

export default NavBar;
