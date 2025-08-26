import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-20 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg lg:hidden"
    >
      {darkMode ? <Sun size={24} className="text-white" /> : <Moon size={24} />}
    </button>
  );
}
