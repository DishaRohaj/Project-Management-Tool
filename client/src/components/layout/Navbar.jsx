import React from "react";
import {
  FaBell,
  FaSearch,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  const darkMode = false;

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Project Management Tool
          </h1>
          <p className="text-sm text-gray-500">
            Welcome back! Manage your projects efficiently.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent outline-none text-sm w-48"
            />
          </div>

          {/* Dark Mode Button */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Dark Mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500 text-lg" />
            ) : (
              <FaMoon className="text-gray-600 text-lg" />
            )}
          </button>

          {/* Notifications */}
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            title="Notifications"
          >
            <FaBell className="text-xl text-gray-700" />

            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <FaUserCircle className="text-4xl text-blue-600" />

            <div className="hidden sm:block">
              <h3 className="text-sm font-semibold text-gray-800">
                John Doe
              </h3>
              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;