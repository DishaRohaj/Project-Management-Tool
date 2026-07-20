import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-6 rounded-full">
            <FaExclamationTriangle className="text-red-600 text-6xl" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-extrabold text-gray-800">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-700 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          <FaHome />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
