import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p
          className="text-sm font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Download from Instagram
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          © {new Date().getFullYear()} XDL — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
