import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Project Manager. All rights reserved.
        </p>

        <p className="flex items-center gap-1 text-sm text-gray-600">
          Made with
          <FaHeart className="text-red-500" />
          using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;