import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navElements = [
    // camelCase naming convention
    "Strings",
    "Arrays",
    "Objects",
    "Numbers",
  ];

  const toggleMenu = () => setIsOpen(!isOpen); // Separate toggle function

  return (
    <nav className="relative flex flex-col p-4">
      {" "}
      {/* Added padding */}
      {/* Main navigation container */}
      <div
        className={`
          ${isOpen ? "flex flex-col" : "hidden md:flex md:flex-row"}
          w-full md:justify-around text-center
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        {navElements.map((elem) => (
          <Link
            key={elem}
            to={`/${elem.toLowerCase()}`}
            className="
              px-4
              text-violet-600 hover:text-violet-900
              transition-colors duration-200  {/* Smooth transition */}
            "
          >
            {elem}
          </Link>
        ))}
      </div>
      {/* Menu toggle button */}
      <button
        onClick={toggleMenu}
        className="
          absolute top-4 right-4  {/* More precise positioning */}
          md:hidden
          p-2
          hover:bg-violet-50 rounded-lg  {/* Added hover state */}
          transition-colors duration-200
        "
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}

export default Navbar;
