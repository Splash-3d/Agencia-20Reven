import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { path: "/", label: "Main" },
    { path: "/explore", label: "Explore" },
    { path: "/categories", label: "Categories" },
    { path: "/servers", label: "Servers" },
    { path: "/cube-helper", label: "Cube Helper" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-light-gray-dark shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 group"
        >
          <img
            src="https://agenciareven.neocities.org/static/base_images/favicon.png"
            alt="Agencia Reven"
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-bold text-dark-blue hidden sm:inline transition-colors duration-300">
            Agencia Reven
          </span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setActiveLink(link.path)}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                activeLink === link.path
                  ? "text-primary"
                  : "text-dark-blue hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeLink === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
