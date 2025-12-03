import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Main", href: "/" },
    { label: "Explore", href: "/explore" },
    { label: "Categories", href: "/categories" },
  ];

  return (
    <footer className="bg-dark-blue text-white py-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="transition-all duration-300 hover:-translate-y-1">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80">
              <img
                src="https://agenciareven.neocities.org/static/base_images/favicon.png"
                alt="Agencia Reven"
                className="h-8 w-8"
              />
              <span className="text-lg font-bold">Agencia Reven</span>
            </Link>
            <p className="text-white/70 text-sm mt-2">
              Creando experiencias web excepcionales desde 2025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a
                  href="mailto:agenciarevenweb@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  agenciarevenweb@gmail.com
                </a>
              </li>
              <li className="text-sm">
                Disponibles Lunes a Domingo
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/70 text-center sm:text-left">
              Copyright © {currentYear} Agencia Reven. Todos los derechos
              reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: "🌐", href: "#" },
                { icon: "💼", href: "#" },
                { icon: "📧", href: "mailto:agenciarevenweb@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.icon}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
