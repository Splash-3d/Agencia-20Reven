import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-light-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="https://agenciareven.neocities.org/static/base_images/favicon.png"
            alt="Agencia Reven"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-dark-blue hidden sm:inline">Agencia Reven</span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-dark-blue hover:text-primary transition-colors"
          >
            Main
          </Link>
          <Link
            to="/explore"
            className="text-sm font-medium text-dark-blue hover:text-primary transition-colors"
          >
            Explore
          </Link>
          <Link
            to="/categories"
            className="text-sm font-medium text-dark-blue hover:text-primary transition-colors"
          >
            Categories
          </Link>
          <Link
            to="/servers"
            className="text-sm font-medium text-dark-blue hover:text-primary transition-colors"
          >
            Servers
          </Link>
          <Link
            to="/cube-helper"
            className="text-sm font-medium text-dark-blue hover:text-primary transition-colors"
          >
            Cube Helper
          </Link>
        </nav>
      </div>
    </header>
  );
}
