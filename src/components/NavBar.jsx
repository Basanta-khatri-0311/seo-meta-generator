import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-4 sm:px-6 py-4 bg-white border-b sticky top-0 z-10 shadow-sm">
      <h1 className="text-lg sm:text-xl font-bold text-blue-600">MetaTagLab</h1>
      <button className="text-sm sm:text-base text-gray-600 hover:text-black transition">
        Toggle Theme
      </button>
    </nav>
  );
};

export default NavBar;
