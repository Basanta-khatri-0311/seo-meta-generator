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
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white/70 dark:bg-dark-surface/70 backdrop-blur-md border-b border-gray-200/50 dark:border-dark-border sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/30 group-hover:rotate-12 transition-transform duration-300">
          <i className="ri-code-s-slash-line text-white text-xl font-bold"></i>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
            META<span className="text-brand-primary italic">LAB</span>
          </h1>
          <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase">
            SEO Optimizer
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary hover:shadow-inner transition-all duration-300 active:scale-95 border border-transparent dark:border-dark-border"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? (
            <i className="ri-sun-line text-lg"></i>
          ) : (
            <i className="ri-moon-clear-line text-lg"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

