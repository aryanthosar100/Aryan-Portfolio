import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-5 shadow-md">

      {/* Logo / Name */}
      <h1 className="text-xl font-bold">Aryan Portfolio</h1>

      {/* Navigation Links */}
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
