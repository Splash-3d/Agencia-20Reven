import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-32 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-dark-blue mb-4">404</h1>
          <p className="text-2xl text-dark-blue/70 mb-6">
            Página no encontrada
          </p>
          <p className="text-lg text-dark-blue/60 mb-8">
            Parece que la página que buscas no existe.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Volver a Inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
