import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://agenciareven.neocities.org/static/base_images/favicon.png"
              alt="Agencia Reven"
              className="h-8 w-8"
            />
            <span className="text-sm font-semibold">Agencia Reven</span>
          </Link>

          <p className="text-sm text-white/80 text-center sm:text-right">
            Copyright © 2025-2026 Agencia Reven. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
